"use client";

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import BrandName from '@/components/custom/BrandName';

// 页面加载动画
export default function PageLoader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // 页面加载完成后隐藏加载动画
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500); // 2.5秒后消失

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="fixed inset-0 z-[100] flex items-center justify-center"
          style={{ backgroundColor: 'hsla(var(--primary), 0.02)' }}
        >
          {/* Logo 和加载动画 */}
          <div className="flex flex-col items-center gap-8">
            {/* Logo */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="text-center"
            >
              <div className="text-5xl font-bold mb-2">
                <span className="text-accent">
                  <BrandName />
                </span>
              </div>
              <div className="text-3xl font-bold">
                <span className="text-black dark:text-white">Suncheer</span>
                <span className="text-gray-400 dark:text-gray-600"> Forex</span>
              </div>
            </motion.div>

            {/* 加载条 */}
            <div className="w-48 h-1 bg-primary/20 overflow-hidden">
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{
                  duration: 1.2,
                  repeat: Infinity,
                  ease: "linear"
                }}
                className="h-full w-1/2 bg-primary"
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
