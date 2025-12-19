# GitHub Actions 自动新闻发布完整方案

## 📰 新闻来源

### 主要RSS源（完全免费）

1. **FXStreet** ✅ (已测试可用)
   - URL: `https://www.fxstreet.com/rss/news/latest`
   - 内容：外汇、商品新闻
   - 更新频率：实时
   - 语言：英文

2. **Investing.com**
   - URL: `https://www.investing.com/rss/news.rss`
   - 内容：全球财经新闻
   - 更新频率：实时

3. **DailyFX**
   - URL: `https://www.dailyfx.com/feeds/market-news`
   - 内容：外汇市场分析

4. **ForexFactory**
   - URL: `https://www.forexfactory.com/news.xml`
   - 内容：外汇新闻和事件

## 🤖 GitHub Actions 工作流程

### 文件结构
```
.github/
  workflows/
    auto-news.yml          # 主工作流
scripts/
  fetch-news.js            # 获取RSS新闻
  generate-post.js         # 生成Markdown文章
src/
  app/[locale]/(portal)/news/
    page.tsx               # 新闻列表页面
  content/
    news/                  # 新闻Markdown文件
      2025-01-08-news-1.md
      2025-01-08-news-2.md
```

### 1. GitHub Actions 配置文件

创建 `.github/workflows/auto-news.yml`:

```yaml
name: Auto Fetch Forex News

on:
  schedule:
    # 每2小时运行一次（北京时间：0:00, 2:00, 4:00...）
    - cron: '0 */2 * * *'
  workflow_dispatch: # 允许手动触发

jobs:
  fetch-and-publish-news:
    runs-on: ubuntu-latest

    steps:
      - name: Checkout repository
        uses: actions/checkout@v4
        with:
          fetch-depth: 0

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'

      - name: Install dependencies
        run: |
          npm install rss-parser axios dayjs

      - name: Fetch and generate news
        run: |
          node scripts/fetch-news.js
        env:
          NODE_ENV: production

      - name: Commit and push if changes
        run: |
          git config --global user.name 'GitHub Actions Bot'
          git config --global user.email 'actions@github.com'
          git add src/content/news/
          git diff --quiet && git diff --staged --quiet || (
            git commit -m "chore: Auto-fetch forex news $(date +'%Y-%m-%d %H:%M')" &&
            git push
          )
```

### 2. RSS解析脚本

创建 `scripts/fetch-news.js`:

```javascript
const Parser = require('rss-parser');
const fs = require('fs');
const path = require('path');
const dayjs = require('dayjs');

const RSS_SOURCES = [
  {
    name: 'FXStreet',
    url: 'https://www.fxstreet.com/rss/news/latest',
    category: 'forex'
  },
  {
    name: 'Investing.com',
    url: 'https://www.investing.com/rss/news.rss',
    category: 'finance'
  }
];

const parser = new Parser();
const NEWS_DIR = path.join(__dirname, '../src/content/news');

async function fetchNews() {
  // 确保目录存在
  if (!fs.existsSync(NEWS_DIR)) {
    fs.mkdirSync(NEWS_DIR, { recursive: true });
  }

  const today = dayjs().format('YYYY-MM-DD');
  const existingFiles = fs.readdirSync(NEWS_DIR)
    .filter(file => file.startsWith(today));

  for (const source of RSS_SOURCES) {
    try {
      console.log(`Fetching from ${source.name}...`);
      const feed = await parser.parseURL(source.url);

      // 只获取最新的5条新闻
      const latestNews = feed.items.slice(0, 5);

      for (const item of latestNews) {
        const newsDate = dayjs(item.pubDate);
        const fileName = `${newsDate.format('YYYY-MM-DD-HHmm')}-${slugify(item.title)}.md`;
        const filePath = path.join(NEWS_DIR, fileName);

        // 避免重复
        if (fs.existsSync(filePath)) {
          continue;
        }

        // 生成Markdown内容
        const markdown = generateMarkdown(item, source);
        fs.writeFileSync(filePath, markdown, 'utf8');
        console.log(`✓ Created: ${fileName}`);
      }
    } catch (error) {
      console.error(`✗ Error fetching from ${source.name}:`, error.message);
    }
  }
}

function generateMarkdown(item, source) {
  const title = item.title;
  const description = item.contentSnippet || item.description || '';
  const link = item.link;
  const pubDate = dayjs(item.pubDate).format('YYYY-MM-DD HH:mm:ss');

  return `---
title: "${title.replace(/"/g, '\\"')}"
date: "${pubDate}"
source: "${source.name}"
category: "${source.category}"
link: "${link}"
---

${description}

[阅读原文](${link})
`;
}

function slugify(text) {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .substring(0, 50);
}

fetchNews().then(() => {
  console.log('✓ News fetch completed!');
}).catch((error) => {
  console.error('✗ Fatal error:', error);
  process.exit(1);
});
```

### 3. 新闻展示页面

创建 `src/app/[locale]/(portal)/news/page.tsx`:

```tsx
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import Link from 'next/link';

interface NewsItem {
  slug: string;
  title: string;
  date: string;
  source: string;
  category: string;
  link: string;
  content: string;
}

async function getNews(): Promise<NewsItem[]> {
  const newsDir = path.join(process.cwd(), 'src/content/news');

  if (!fs.existsSync(newsDir)) {
    return [];
  }

  const files = fs.readdirSync(newsDir);

  const news = files
    .filter(file => file.endsWith('.md'))
    .map(file => {
      const filePath = path.join(newsDir, file);
      const fileContent = fs.readFileSync(filePath, 'utf8');
      const { data, content } = matter(fileContent);

      return {
        slug: file.replace('.md', ''),
        title: data.title,
        date: data.date,
        source: data.source,
        category: data.category,
        link: data.link,
        content: content
      };
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return news;
}

export default async function NewsPage() {
  const news = await getNews();

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <h1 className="text-4xl font-bold mb-8">财经新闻</h1>

      <div className="grid gap-6">
        {news.map((item) => (
          <div key={item.slug} className="border-2 border-gray-200 dark:border-gray-800 p-6">
            <div className="flex items-center gap-4 mb-3">
              <span className="px-3 py-1 bg-black text-white text-xs font-bold">
                {item.source}
              </span>
              <span className="text-sm text-gray-500">
                {new Date(item.date).toLocaleString('zh-CN')}
              </span>
            </div>

            <h2 className="text-2xl font-bold mb-3">
              <a href={item.link} target="_blank" rel="noopener noreferrer"
                 className="hover:underline">
                {item.title}
              </a>
            </h2>

            <p className="text-gray-700 dark:text-gray-300 mb-4">
              {item.content}
            </p>

            <a href={item.link} target="_blank" rel="noopener noreferrer"
               className="text-sm font-bold hover:underline">
              阅读原文 →
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
```

## 📋 实施步骤

### 1. 准备工作
```bash
# 1. 创建必要的目录
mkdir -p .github/workflows
mkdir -p scripts
mkdir -p src/content/news

# 2. 安装依赖（开发环境）
pnpm add rss-parser gray-matter dayjs
```

### 2. 部署GitHub Actions

1. 创建上述三个文件
2. 提交到GitHub
3. GitHub Actions会自动运行

### 3. 手动触发测试

在GitHub仓库页面：
- 进入 Actions 标签
- 选择 "Auto Fetch Forex News"
- 点击 "Run workflow"

## ⚙️ 配置说明

### 定时任务调整

```yaml
schedule:
  # 每小时运行
  - cron: '0 * * * *'

  # 每天早上8点运行
  - cron: '0 0 * * *'  # UTC 0点 = 北京时间8点

  # 每2小时运行
  - cron: '0 */2 * * *'
```

### 新闻数量控制

在 `fetch-news.js` 中修改：
```javascript
const latestNews = feed.items.slice(0, 5); // 改为需要的数量
```

## 🎯 优势

✅ **完全免费** - 使用GitHub Actions免费额度
✅ **自动化** - 无需人工干预
✅ **可靠** - GitHub基础设施保证
✅ **可扩展** - 轻松添加更多RSS源
✅ **版本控制** - 所有新闻都有Git历史

## ⚠️ 注意事项

1. **GitHub Actions限制**
   - 公开仓库：无限制
   - 私有仓库：每月2000分钟

2. **避免重复**
   - 脚本会检查文件是否已存在
   - 使用文件名包含时间戳

3. **RSS源稳定性**
   - 某些RSS源可能会变更URL
   - 建议定期检查

## 🔧 后续优化

1. **AI摘要** - 使用OpenAI API生成中文摘要
2. **分类标签** - 自动识别新闻类别（外汇、股票、加密货币）
3. **邮件通知** - 重要新闻发送邮件提醒
4. **双语支持** - 自动翻译为中英双语
