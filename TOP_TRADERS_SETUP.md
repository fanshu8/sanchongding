# Top Traders Backend Management System

## 概述 / Overview

完整的交易员排行榜后台管理系统，包括：
- Supabase 数据库表
- API 路由（带缓存）
- 后台管理界面
- 前台数据展示
- 数据迁移功能

Complete backend management system for trader leaderboard including:
- Supabase database table
- API routes (with caching)
- Dashboard management interface
- Frontend data display
- Data migration functionality

## 设置步骤 / Setup Steps

### 1. 创建 Supabase 表 / Create Supabase Table

在 Supabase SQL Editor 中运行 `supabase-toptraders-schema.sql` 文件中的 SQL 语句。

Run the SQL statements in `supabase-toptraders-schema.sql` file in Supabase SQL Editor.

这将创建：
- `TopTraders` 表
- 必要的索引
- Row Level Security (RLS) 策略
- 自动更新 `updated_at` 的触发器

This will create:
- `TopTraders` table
- Necessary indexes
- Row Level Security (RLS) policies
- Trigger to auto-update `updated_at`

### 2. 配置环境变量 / Configure Environment Variables

在 Vercel 或本地 `.env.local` 文件中添加：

Add to Vercel or local `.env.local` file:

```bash
SUPABASE_URL=your_supabase_url
SUPABASE_KEY=your_supabase_anon_key
```

注意：代码已更新为从环境变量读取 Supabase URL。

Note: Code has been updated to read Supabase URL from environment variables.

### 3. 迁移现有数据 / Migrate Existing Data

1. 访问后台管理 / Visit dashboard:
   ```
   /dashboard
   ```

2. 登录后，点击侧边栏的 "🏆 交易员排行榜" / "🏆 Top Traders"

3. 点击 "迁移历史数据 (20)" 按钮

4. 确认迁移，系统将自动迁移所有 20 位交易员的数据

### 4. 管理功能 / Management Features

后台管理界面提供：

Dashboard interface provides:

- ✅ **添加交易员** / Add Trader
- ✅ **编辑交易员** / Edit Trader
- ✅ **删除交易员** / Delete Trader
- ✅ **清除缓存** / Clear Cache
- ✅ **数据迁移** / Data Migration

### 5. 前台展示 / Frontend Display

访问 `/top-traders` 页面将：
- 从数据库加载数据（带缓存）
- 显示 loading 状态
- 显示错误状态
- 动态展示排行榜

Visit `/top-traders` page will:
- Load data from database (with caching)
- Show loading state
- Show error state
- Dynamically display leaderboard

## 文件结构 / File Structure

### API 路由 / API Routes
```
/src/app/api/top-traders/route.ts
```
- GET: 获取所有交易员（带缓存，5分钟）
- POST: 创建新交易员
- PUT: 更新交易员
- DELETE: 删除交易员

### 后台管理 / Dashboard
```
/src/app/[locale]/(portal)/dashboard/components/TopTradersManager.tsx
```
- 完整的 CRUD 界面
- 数据迁移功能
- 缓存清除功能

### 前台展示 / Frontend
```
/src/app/[locale]/(portal)/top-traders/page.tsx
```
- 从 API 获取数据
- Loading 状态
- Error 处理
- 响应式设计

### 工具函数 / Utility Functions
```
/src/lib/topTradersMigration.ts
```
- `convertTopTrader()` - 转换 mock 数据为数据库格式
- `migrateTopTraders()` - 批量迁移交易员数据
- `convertDbTraderToDisplay()` - 转换数据库数据为展示格式

### 类型定义 / Type Definitions
```
/src/lib/supabase.ts
```
- 添加 `TopTrader` 接口（数据库格式）

```
/src/types/top-traders.ts
```
- `TopTrader` 接口（展示格式）

## 数据库字段映射 / Database Field Mapping

| Mock Data Field   | Database Field    | Type      |
|-------------------|-------------------|-----------|
| traderId          | trader_id         | VARCHAR   |
| countryCode       | country_code      | VARCHAR   |
| monthlyReturn     | monthly_return    | DECIMAL   |
| totalReturn       | total_return      | DECIMAL   |
| winRate           | win_rate          | DECIMAL   |
| totalTrades       | total_trades      | INTEGER   |
| profitFactor      | profit_factor     | DECIMAL   |
| maxDrawdown       | max_drawdown      | DECIMAL   |
| sharpeRatio       | sharpe_ratio      | DECIMAL   |
| tradingDays       | trading_days      | INTEGER   |
| accountSize       | account_size      | INTEGER   |
| currentPosition   | current_position  | INTEGER   |
| inMatrix          | in_matrix         | BOOLEAN   |
| updateTime        | update_time       | TIMESTAMP |

## 缓存策略 / Caching Strategy

- **API 缓存时间**: 5 分钟
- **缓存位置**: API 路由内存缓存
- **清除方式**:
  1. 手动清除（后台管理界面）
  2. 数据修改后自动清除（POST/PUT/DELETE）
  3. URL 参数 `?refresh=true` 强制刷新

## 安全性 / Security

- ✅ Row Level Security (RLS) 已启用
- ✅ 公开读取权限
- ✅ 认证用户写入权限
- ⚠️ 建议：为管理操作创建特定的管理员策略

## 性能优化 / Performance Optimization

- ✅ 数据库索引（rank, trader_id, in_matrix）
- ✅ API 响应缓存（5分钟）
- ✅ 前端加载状态
- ✅ 错误边界处理

## 维护建议 / Maintenance Recommendations

1. **定期更新数据** - 建议每周或每月更新交易员数据
2. **监控缓存** - 确保缓存正常工作，避免频繁数据库查询
3. **备份数据** - 定期备份 TopTraders 表
4. **权限审查** - 定期审查 RLS 策略，确保安全

## 常见问题 / FAQ

### Q: 如何更新交易员数据？
A: 在后台管理界面点击 "编辑" 按钮，修改数据后点击 "更新"。

### Q: 缓存多久刷新一次？
A: 默认 5 分钟，可以在 `/api/top-traders/route.ts` 中的 `CACHE_DURATION` 修改。

### Q: 如何手动清除缓存？
A: 在后台管理界面点击 "清除缓存" 按钮。

### Q: 前台显示的数据来自哪里？
A: `/top-traders` 页面从 `/api/top-traders` API 获取数据，API 从 Supabase 数据库查询。

### Q: 迁移会覆盖现有数据吗？
A: 不会。迁移会尝试创建新记录。如果 `trader_id` 已存在，会报错。

## 技术栈 / Tech Stack

- **数据库**: Supabase (PostgreSQL)
- **后端**: Next.js 15 App Router API Routes
- **前端**: React 19, Framer Motion, Tailwind CSS
- **类型安全**: TypeScript
- **缓存**: In-memory caching

## 完成状态 / Completion Status

✅ Supabase 表创建
✅ API 路由实现
✅ 后台管理界面
✅ 前台数据展示
✅ 数据迁移功能
✅ 缓存机制
✅ 环境变量配置
✅ 类型定义
✅ 文档

---

**作者**: AI Assistant
**日期**: 2025-11-13
**版本**: 1.0
