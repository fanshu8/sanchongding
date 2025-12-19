import type { BlogPost as OldBlogPost } from '../data/blogPosts';

// New blog structure for Supabase
interface NewBlogPost {
  title: string;
  title_en: string;
  content: string;
  content_en: string;
  author: string;
  remark: string;
  tags: string;
  tags_en: string;
  rel_1: number | null;
  rel_2: number | null;
  rel_3: number | null;
  recommand: boolean;
  top: boolean;
}

/**
 * Migration script to convert old blog posts to new Supabase format
 *
 * Old format:
 * - title: { zh: string, en: string }
 * - content: { zh: string, en: string }
 * - tags: string[]
 * - readTime: number
 * - featured: boolean
 *
 * New format:
 * - title: string (zh)
 * - title_en: string (en)
 * - content: string (zh HTML)
 * - content_en: string (en HTML)
 * - tags: string (Chinese tags, comma separated)
 * - tags_en: string (English tags, comma separated)
 * - remark: string (reading time)
 * - recommand: boolean (featured)
 * - top: boolean
 */
export function convertBlogPost(oldPost: OldBlogPost): NewBlogPost {
  // Separate Chinese and English tags
  const chineseTags: string[] = [];
  const englishTags: string[] = [];

  oldPost.tags.forEach(tag => {
    if (/[\u4e00-\u9fa5]/.test(tag)) {
      // Has Chinese characters
      chineseTags.push(tag);
    } else {
      // English tag
      englishTags.push(tag);
    }
  });

  return {
    title: oldPost.title.zh,
    title_en: oldPost.title.en,
    content: oldPost.content.zh,
    content_en: oldPost.content.en,
    author: oldPost.author,
    remark: `${oldPost.readTime}分钟阅读`,
    tags: chineseTags.join(','),
    tags_en: englishTags.join(','),
    rel_1: null,
    rel_2: null,
    rel_3: null,
    recommand: oldPost.featured,
    top: false,
  };
}

/**
 * Upload blog posts to Supabase via API
 */
export async function migrateBlogs(blogs: OldBlogPost[]) {
  const results = [];

  for (const oldBlog of blogs) {
    try {
      const newBlog = convertBlogPost(oldBlog);

      const response = await fetch('/api/blogs', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newBlog),
      });

      if (response.ok) {
        const data = await response.json();
        results.push({ success: true, id: oldBlog.id, newId: data.id });
        console.log(`✓ Migrated blog ${oldBlog.id}: ${oldBlog.title.zh}`);
      } else {
        results.push({ success: false, id: oldBlog.id, error: await response.text() });
        console.error(`✗ Failed to migrate blog ${oldBlog.id}`);
      }
    } catch (error) {
      results.push({ success: false, id: oldBlog.id, error: String(error) });
      console.error(`✗ Error migrating blog ${oldBlog.id}:`, error);
    }
  }

  return results;
}
