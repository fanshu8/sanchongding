"use client";

import React, { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import type { LiveStream } from '@/lib/supabase';

export default function LivestreamManager() {
  const { language } = useLanguage();
  const [streams, setStreams] = useState<LiveStream[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingStream, setEditingStream] = useState<LiveStream | null>(null);
  const [showForm, setShowForm] = useState(false);

  const [formData, setFormData] = useState<LiveStream>({
    nickname: '',
    description: '',
    live_url: '',
    remark: '',
  });

  // Fetch livestreams
  const fetchStreams = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/livestreams');
      if (response.ok) {
        const data = await response.json();
        setStreams(data);
      }
    } catch (error) {
      console.error('Failed to fetch livestreams:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStreams();
  }, []);

  // Handle create/update
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const url = '/api/livestreams';
      const method = editingStream ? 'PUT' : 'POST';
      const body = editingStream ? { ...formData, id: editingStream.id } : formData;

      const response = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });

      if (response.ok) {
        await fetchStreams();
        resetForm();
      }
    } catch (error) {
      console.error('Failed to save livestream:', error);
    }
  };

  // Handle delete
  const handleDelete = async (id: number) => {
    if (!confirm(language === 'zh' ? '确定要删除吗？' : 'Are you sure to delete?')) {
      return;
    }

    try {
      const response = await fetch(`/api/livestreams?id=${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        await fetchStreams();
      }
    } catch (error) {
      console.error('Failed to delete livestream:', error);
    }
  };

  const resetForm = () => {
    setFormData({ nickname: '', description: '', live_url: '', remark: '' });
    setEditingStream(null);
    setShowForm(false);
  };

  const startEdit = (stream: LiveStream) => {
    setFormData(stream);
    setEditingStream(stream);
    setShowForm(true);
  };

  return (
    <div className="p-8">
      <div className="mb-6 flex justify-between items-center">
        <h1 className="text-3xl font-black text-black dark:text-white">
          {language === 'zh' ? '实时直播管理' : 'Livestream Management'}
        </h1>
        <button
          onClick={() => setShowForm(!showForm)}
          className="px-6 py-3 bg-black dark:bg-white text-white dark:text-black font-bold hover:opacity-80 transition-opacity"
        >
          {showForm ? (language === 'zh' ? '取消' : 'Cancel') : (language === 'zh' ? '添加新直播' : 'Add New Stream')}
        </button>
      </div>

      {showForm && (
        <div className="bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 p-6 mb-6">
          <h2 className="text-xl font-bold text-black dark:text-white mb-4">
            {editingStream ? (language === 'zh' ? '编辑直播' : 'Edit Stream') : (language === 'zh' ? '添加新直播' : 'Add New Stream')}
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                {language === 'zh' ? '昵称' : 'Nickname'}
              </label>
              <input
                type="text"
                value={formData.nickname}
                onChange={(e) => setFormData({ ...formData, nickname: e.target.value })}
                className="w-full px-4 py-2 border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-black dark:text-white"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                {language === 'zh' ? '简述/交易类型' : 'Description/Trading Type'}
              </label>
              <input
                type="text"
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                className="w-full px-4 py-2 border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-black dark:text-white"
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                {language === 'zh' ? '直播链接 (YouTube URL)' : 'Live URL (YouTube URL)'}
              </label>
              <input
                type="text"
                value={formData.live_url}
                onChange={(e) => setFormData({ ...formData, live_url: e.target.value })}
                className="w-full px-4 py-2 border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-black dark:text-white"
                placeholder="https://youtube.com/watch?v=..."
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                {language === 'zh' ? '备注 (上次直播时间等)' : 'Remark (Last Live Time, etc.)'}
              </label>
              <input
                type="text"
                value={formData.remark}
                onChange={(e) => setFormData({ ...formData, remark: e.target.value })}
                className="w-full px-4 py-2 border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-black dark:text-white"
              />
            </div>

            <div className="flex gap-4">
              <button
                type="submit"
                className="px-6 py-2 bg-black dark:bg-white text-white dark:text-black font-bold hover:opacity-80"
              >
                {editingStream ? (language === 'zh' ? '更新' : 'Update') : (language === 'zh' ? '创建' : 'Create')}
              </button>
              <button
                type="button"
                onClick={resetForm}
                className="px-6 py-2 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                {language === 'zh' ? '取消' : 'Cancel'}
              </button>
            </div>
          </form>
        </div>
      )}

      {loading ? (
        <div className="text-center py-12 text-gray-500">{language === 'zh' ? '加载中...' : 'Loading...'}</div>
      ) : (
        <div className="bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700">
          <table className="w-full">
            <thead>
              <tr className="border-b-2 border-gray-200 dark:border-gray-700">
                <th className="px-6 py-4 text-left text-sm font-bold text-black dark:text-white">
                  {language === 'zh' ? '昵称' : 'Nickname'}
                </th>
                <th className="px-6 py-4 text-left text-sm font-bold text-black dark:text-white">
                  {language === 'zh' ? '简述' : 'Description'}
                </th>
                <th className="px-6 py-4 text-left text-sm font-bold text-black dark:text-white">
                  {language === 'zh' ? '直播链接' : 'Live URL'}
                </th>
                <th className="px-6 py-4 text-left text-sm font-bold text-black dark:text-white">
                  {language === 'zh' ? '备注' : 'Remark'}
                </th>
                <th className="px-6 py-4 text-right text-sm font-bold text-black dark:text-white">
                  {language === 'zh' ? '操作' : 'Actions'}
                </th>
              </tr>
            </thead>
            <tbody>
              {streams.length === 0 ? (
                <tr>
                  <td colSpan={5} className="px-6 py-12 text-center text-gray-500">
                    {language === 'zh' ? '暂无数据' : 'No data'}
                  </td>
                </tr>
              ) : (
                streams.map((stream) => (
                  <tr key={stream.id} className="border-b border-gray-200 dark:border-gray-700">
                    <td className="px-6 py-4 text-sm text-gray-900 dark:text-gray-100">{stream.nickname}</td>
                    <td className="px-6 py-4 text-sm text-gray-900 dark:text-gray-100">{stream.description}</td>
                    <td className="px-6 py-4 text-sm text-gray-900 dark:text-gray-100">
                      <a href={stream.live_url} target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">
                        {stream.live_url.substring(0, 40)}...
                      </a>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900 dark:text-gray-100">{stream.remark}</td>
                    <td className="px-6 py-4 text-right">
                      <button
                        onClick={() => startEdit(stream)}
                        className="text-blue-600 dark:text-blue-400 hover:underline mr-4"
                      >
                        {language === 'zh' ? '编辑' : 'Edit'}
                      </button>
                      <button
                        onClick={() => stream.id && handleDelete(stream.id)}
                        className="text-red-600 dark:text-red-400 hover:underline"
                      >
                        {language === 'zh' ? '删除' : 'Delete'}
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
