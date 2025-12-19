import { NextResponse } from 'next/server';
import { supabase, BlogPost } from '@/lib/supabase';

// Enable caching for GET requests
export const revalidate = 3600; // Revalidate every hour

// In-memory cache for blog posts with daily update strategy
let blogCache: { data: any[], timestamp: number, date: string } | null = null;
const CACHE_DURATION = 24 * 60 * 60 * 1000; // 24 hours (daily update)

// Helper function to get current date string
function getCurrentDateString(): string {
  const now = new Date();
  return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`;
}

// GET: 获取所有博客文章（带缓存）
export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const forceRefresh = searchParams.get('refresh') === 'true';
    const currentDate = getCurrentDateString();

    // Check cache - refresh if forced, date changed, or cache expired
    if (
      !forceRefresh &&
      blogCache &&
      blogCache.date === currentDate &&
      Date.now() - blogCache.timestamp < CACHE_DURATION
    ) {
      return NextResponse.json(blogCache.data);
    }

    // Fetch from Supabase
    const { data, error } = await supabase
      .from('Blog')
      .select('*')
      .order('top', { ascending: false })
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Supabase error:', error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    // Update cache with current date
    blogCache = {
      data: data || [],
      timestamp: Date.now(),
      date: currentDate,
    };

    return NextResponse.json(data || []);
  } catch (error) {
    console.error('API error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

// POST: 创建新的博客文章
export async function POST(request: Request) {
  try {
    const body: BlogPost = await request.json();

    const { data, error } = await supabase
      .from('Blog')
      .insert([body])
      .select();

    if (error) {
      console.error('Supabase error:', error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    // Clear cache
    blogCache = null;

    return NextResponse.json(data[0]);
  } catch (error) {
    console.error('API error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

// PUT: 更新博客文章
export async function PUT(request: Request) {
  try {
    const body: BlogPost & { id: number } = await request.json();

    if (!body.id) {
      return NextResponse.json({ error: 'ID is required' }, { status: 400 });
    }

    const { data, error } = await supabase
      .from('Blog')
      .update({
        title: body.title,
        title_en: body.title_en,
        content: body.content,
        content_en: body.content_en,
        author: body.author,
        remark: body.remark,
        remark_en: body.remark_en,
        tags: body.tags,
        tags_en: body.tags_en,
        rel_1: body.rel_1,
        rel_2: body.rel_2,
        rel_3: body.rel_3,
        recommand: body.recommand,
        top: body.top,
        updated_at: new Date().toISOString(),
      })
      .eq('id', body.id)
      .select();

    if (error) {
      console.error('Supabase error:', error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    // Clear cache
    blogCache = null;

    return NextResponse.json(data[0]);
  } catch (error) {
    console.error('API error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

// DELETE: 删除博客文章
export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json({ error: 'ID is required' }, { status: 400 });
    }

    const { error } = await supabase
      .from('Blog')
      .delete()
      .eq('id', parseInt(id));

    if (error) {
      console.error('Supabase error:', error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    // Clear cache
    blogCache = null;

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('API error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
