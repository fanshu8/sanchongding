"use client";

import React, { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import type { Config } from '@/lib/supabase';

export default function ConfigManager() {
  const { language } = useLanguage();
  const [configs, setConfigs] = useState<Config[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingConfig, setEditingConfig] = useState<Config | null>(null);
  const [showForm, setShowForm] = useState(false);

  const [formData, setFormData] = useState<Config>({
    key_name: '',
    key_content: '',
    key_remark: '',
  });

  // Fetch configs
  const fetchConfigs = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/config');
      if (response.ok) {
        const data = await response.json();
        setConfigs(data);
      }
    } catch (error) {
      console.error('Failed to fetch configs:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchConfigs();
  }, []);

  // Handle create/update
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const url = '/api/config';
      const method = editingConfig ? 'PUT' : 'POST';
      const body = editingConfig ? { ...formData, id: editingConfig.id } : formData;

      const response = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });

      if (response.ok) {
        await fetchConfigs();
        resetForm();
      }
    } catch (error) {
      console.error('Failed to save config:', error);
    }
  };

  // Handle delete
  const handleDelete = async (id: number) => {
    if (!confirm(language === 'zh' ? '确定要删除吗？' : 'Are you sure to delete?')) {
      return;
    }

    try {
      const response = await fetch(`/api/config?id=${id}`, {
        method: 'DELETE',
      });

      if (response.ok) {
        await fetchConfigs();
      }
    } catch (error) {
      console.error('Failed to delete config:', error);
    }
  };

  const resetForm = () => {
    setFormData({
      key_name: '',
      key_content: '',
      key_remark: '',
    });
    setEditingConfig(null);
    setShowForm(false);
  };

  const startEdit = (config: Config) => {
    setFormData(config);
    setEditingConfig(config);
    setShowForm(true);
  };

  return (
    <div className="p-8">
      <div className="mb-6 flex justify-between items-center">
        <h1 className="text-3xl font-black text-black dark:text-white">
          {language === 'zh' ? '配置管理' : 'Configuration Management'}
        </h1>
        <button
          onClick={() => setShowForm(!showForm)}
          className="px-6 py-3 bg-black dark:bg-white text-white dark:text-black font-bold hover:opacity-80 transition-opacity"
        >
          {showForm ? (language === 'zh' ? '取消' : 'Cancel') : (language === 'zh' ? '添加配置' : 'Add Config')}
        </button>
      </div>

      {showForm && (
        <div className="bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 p-6 mb-6">
          <h2 className="text-xl font-bold text-black dark:text-white mb-4">
            {editingConfig ? (language === 'zh' ? '编辑配置' : 'Edit Config') : (language === 'zh' ? '添加配置' : 'Add Config')}
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                {language === 'zh' ? '配置键名 (Key Name)' : 'Key Name'}
              </label>
              <input
                type="text"
                value={formData.key_name}
                onChange={(e) => setFormData({ ...formData, key_name: e.target.value })}
                className="w-full px-4 py-2 border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-black dark:text-white"
                required
                placeholder="OPENAI_URL, OPENAI_KEY, etc."
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                {language === 'zh' ? '配置值 (Key Content)' : 'Key Content'}
              </label>
              <textarea
                value={formData.key_content}
                onChange={(e) => setFormData({ ...formData, key_content: e.target.value })}
                className="w-full px-4 py-2 border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-black dark:text-white"
                rows={4}
                required
                placeholder={language === 'zh' ? '配置的具体内容...' : 'Configuration value...'}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                {language === 'zh' ? '备注 (Remark)' : 'Remark'}
              </label>
              <input
                type="text"
                value={formData.key_remark}
                onChange={(e) => setFormData({ ...formData, key_remark: e.target.value })}
                className="w-full px-4 py-2 border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 text-black dark:text-white"
                placeholder={language === 'zh' ? '配置说明...' : 'Description...'}
              />
            </div>

            <div className="flex gap-4">
              <button
                type="submit"
                className="px-6 py-2 bg-black dark:bg-white text-white dark:text-black font-bold hover:opacity-80"
              >
                {editingConfig ? (language === 'zh' ? '更新' : 'Update') : (language === 'zh' ? '创建' : 'Create')}
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
                  {language === 'zh' ? '键名' : 'Key Name'}
                </th>
                <th className="px-6 py-4 text-left text-sm font-bold text-black dark:text-white">
                  {language === 'zh' ? '配置值' : 'Content'}
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
              {configs.length === 0 ? (
                <tr>
                  <td colSpan={4} className="px-6 py-12 text-center text-gray-500">
                    {language === 'zh' ? '暂无配置' : 'No configurations'}
                  </td>
                </tr>
              ) : (
                configs.map((config) => (
                  <tr key={config.id} className="border-b border-gray-200 dark:border-gray-700">
                    <td className="px-6 py-4 text-sm font-mono text-gray-900 dark:text-gray-100">
                      {config.key_name}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-900 dark:text-gray-100 max-w-xs truncate">
                      {config.key_content.length > 50
                        ? config.key_content.substring(0, 50) + '...'
                        : config.key_content}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600 dark:text-gray-400">
                      {config.key_remark}
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button
                        onClick={() => startEdit(config)}
                        className="text-blue-600 dark:text-blue-400 hover:underline mr-4"
                      >
                        {language === 'zh' ? '编辑' : 'Edit'}
                      </button>
                      <button
                        onClick={() => config.id && handleDelete(config.id)}
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
