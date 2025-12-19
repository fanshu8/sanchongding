"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface TextAnimationProps {
  text: string;
  type: "typewriter" | "gradient" | "glitch" | "neon" | "scale" | "split";
  className?: string;
}

export default function ModernTextAnimation({ text, type, className = "" }: TextAnimationProps) {
  const [isDark, setIsDark] = useState(false);
  const [displayText, setDisplayText] = useState("");
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const checkDarkMode = () => {
      setIsDark(document.documentElement.classList.contains('dark'));
    };
    checkDarkMode();
    const observer = new MutationObserver(checkDarkMode);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });
    return () => observer.disconnect();
  }, []);

  // 打字机效果
  useEffect(() => {
    if (type === "typewriter") {
      let index = 0;
      setDisplayText("");
      const interval = setInterval(() => {
        if (index <= text.length) {
          setDisplayText(text.slice(0, index));
          index++;
        } else {
          clearInterval(interval);
        }
      }, 150);

      // 光标闪烁
      const cursorInterval = setInterval(() => {
        setShowCursor(prev => !prev);
      }, 500);

      return () => {
        clearInterval(interval);
        clearInterval(cursorInterval);
      };
    }
  }, [text, type]);

  const textColor = isDark ? "#ffffff" : "#000000";

  // 方案A：打字机效果
  if (type === "typewriter") {
    return (
      <div className={`text-7xl font-bold ${className}`}>
        <span style={{ color: textColor, fontFamily: "'Noto Sans SC', 'Inter', sans-serif" }}>
          {displayText}
          {showCursor && <span className="border-r-4 border-current ml-1 animate-pulse">|</span>}
        </span>
      </div>
    );
  }

  // 方案B：渐变色流动
  if (type === "gradient") {
    return (
      <motion.div
        className={`text-7xl font-bold ${className}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <motion.span
          className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 dark:from-blue-400 dark:via-purple-400 dark:to-pink-400 bg-clip-text text-transparent"
          style={{
            backgroundSize: "200% 100%",
            fontFamily: "'Noto Sans SC', 'Inter', sans-serif"
          }}
          animate={{
            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          {text}
        </motion.span>
      </motion.div>
    );
  }

  // 方案C：故障效果
  if (type === "glitch") {
    return (
      <div className={`relative text-7xl font-bold ${className}`}>
        {/* 主文字 */}
        <motion.span
          className="relative z-10"
          style={{ color: textColor, fontFamily: "'Noto Sans SC', 'Inter', sans-serif" }}
          animate={{
            x: [0, -2, 2, -1, 1, 0],
            y: [0, 1, -1, 2, -2, 0],
          }}
          transition={{
            duration: 0.5,
            repeat: Infinity,
            repeatDelay: 2,
          }}
        >
          {text}
        </motion.span>

        {/* 红色故障层 */}
        <motion.span
          className="absolute top-0 left-0 opacity-70"
          style={{
            color: "#ff0000",
            fontFamily: "'Noto Sans SC', 'Inter', sans-serif",
            mixBlendMode: "screen"
          }}
          animate={{
            x: [-2, 2, -2],
            opacity: [0.7, 0, 0.7],
          }}
          transition={{
            duration: 0.3,
            repeat: Infinity,
            repeatDelay: 2,
          }}
        >
          {text}
        </motion.span>

        {/* 蓝色故障层 */}
        <motion.span
          className="absolute top-0 left-0 opacity-70"
          style={{
            color: "#00ffff",
            fontFamily: "'Noto Sans SC', 'Inter', sans-serif",
            mixBlendMode: "screen"
          }}
          animate={{
            x: [2, -2, 2],
            opacity: [0.7, 0, 0.7],
          }}
          transition={{
            duration: 0.3,
            repeat: Infinity,
            repeatDelay: 2,
            delay: 0.1,
          }}
        >
          {text}
        </motion.span>
      </div>
    );
  }

  // 方案D：霓虹灯效果
  if (type === "neon") {
    return (
      <motion.div
        className={`text-7xl font-bold ${className}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <motion.span
          style={{
            color: isDark ? "#fff" : "#000",
            fontFamily: "'Noto Sans SC', 'Inter', sans-serif",
            textShadow: isDark
              ? "0 0 10px #fff, 0 0 20px #fff, 0 0 30px #0ff, 0 0 40px #0ff, 0 0 50px #0ff, 0 0 60px #0ff, 0 0 70px #0ff"
              : "0 0 10px #000, 0 0 20px #000, 0 0 30px #666, 0 0 40px #666",
          }}
          animate={{
            textShadow: isDark
              ? [
                  "0 0 10px #fff, 0 0 20px #fff, 0 0 30px #0ff, 0 0 40px #0ff",
                  "0 0 20px #fff, 0 0 30px #fff, 0 0 40px #0ff, 0 0 50px #0ff, 0 0 60px #0ff",
                  "0 0 10px #fff, 0 0 20px #fff, 0 0 30px #0ff, 0 0 40px #0ff",
                ]
              : [
                  "0 0 10px #000, 0 0 20px #000, 0 0 30px #666",
                  "0 0 20px #000, 0 0 30px #000, 0 0 40px #666, 0 0 50px #666",
                  "0 0 10px #000, 0 0 20px #000, 0 0 30px #666",
                ]
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          {text}
        </motion.span>
      </motion.div>
    );
  }

  // 方案E：简单缩放淡入
  if (type === "scale") {
    return (
      <motion.div
        className={`text-7xl font-bold ${className}`}
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 15,
        }}
      >
        <span style={{ color: textColor, fontFamily: "'Noto Sans SC', 'Inter', sans-serif" }}>
          {text}
        </span>
      </motion.div>
    );
  }

  // 方案F：文字分裂重组
  if (type === "split") {
    const chars = text.split("");
    return (
      <div className={`text-7xl font-bold flex ${className}`}>
        {chars.map((char, index) => (
          <motion.span
            key={index}
            style={{ color: textColor, fontFamily: "'Noto Sans SC', 'Inter', sans-serif" }}
            initial={{
              x: (index % 2 === 0 ? -1 : 1) * 100,
              y: (index % 3 === 0 ? -1 : 1) * 50,
              opacity: 0,
              rotate: (index % 2 === 0 ? -1 : 1) * 45,
            }}
            animate={{
              x: 0,
              y: 0,
              opacity: 1,
              rotate: 0,
            }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 15,
              delay: index * 0.05,
            }}
          >
            {char}
          </motion.span>
        ))}
      </div>
    );
  }

  return null;
}
