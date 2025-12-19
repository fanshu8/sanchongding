import { NextResponse } from 'next/server';
import { supabase, LiveStream } from '@/lib/supabase';

export const dynamic = 'force-dynamic';

// GET: 获取所有直播流
export async function GET() {
  try {
    const { data, error } = await supabase
      .from('LiveStream')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Supabase error:', error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json(data || []);
  } catch (error) {
    console.error('API error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

// POST: 创建新的直播流
export async function POST(request: Request) {
  try {
    const body: LiveStream = await request.json();

    const { data, error } = await supabase
      .from('LiveStream')
      .insert([body])
      .select();

    if (error) {
      console.error('Supabase error:', error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json(data[0]);
  } catch (error) {
    console.error('API error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

// PUT: 更新直播流
export async function PUT(request: Request) {
  try {
    const body: LiveStream & { id: number } = await request.json();

    if (!body.id) {
      return NextResponse.json({ error: 'ID is required' }, { status: 400 });
    }

    const { data, error } = await supabase
      .from('LiveStream')
      .update({
        nickname: body.nickname,
        description: body.description,
        live_url: body.live_url,
        remark: body.remark,
      })
      .eq('id', body.id)
      .select();

    if (error) {
      console.error('Supabase error:', error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json(data[0]);
  } catch (error) {
    console.error('API error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

// DELETE: 删除直播流
export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json({ error: 'ID is required' }, { status: 400 });
    }

    const { error } = await supabase
      .from('LiveStream')
      .delete()
      .eq('id', parseInt(id));

    if (error) {
      console.error('Supabase error:', error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('API error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
