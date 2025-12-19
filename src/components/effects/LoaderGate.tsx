/** 
 * LoaderGate
 * 在应用加载阶段只显示加载界面，结束后再渲染实际内容
 * @param props.children 需要在加载结束后展示的内容
 * @returns 加载中显示 PageLoader，完成后显示 children
 */
"use client";

import { useEffect, useState } from "react";
import PageLoader from "./PageLoader";

export default function LoaderGate({ children }: { children: React.ReactNode }) {
  /** 
   * 是否允许渲染实际内容
   * true：渲染 children；false：仅显示加载界面
   */
  const [ready, setReady] = useState(false);

  /** 
   * 启动 2.5s 计时器，结束后允许渲染内容
   */
  useEffect(() => {
    const timer = setTimeout(() => setReady(true), 2500);
    return () => clearTimeout(timer);
  }, []);

  /** 
   * 加载阶段阻止滚动，避免看到底层内容
   */
  useEffect(() => {
    if (!ready) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [ready]);

  /** 
   * 条件渲染：加载时仅显示 PageLoader，完成后渲染 children
   */
  if (!ready) return <PageLoader />;
  return <>{children}</>;
}

