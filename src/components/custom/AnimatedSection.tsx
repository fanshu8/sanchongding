"use client";

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  duration?: number;
}

// 淡入 + 滑动动画
export function FadeInSlide({
  children,
  className = "",
  delay = 0,
  direction = 'up',
  duration = 0.6
}: AnimatedSectionProps) {
  const directions = {
    up: { y: 40, x: 0 },
    down: { y: -40, x: 0 },
    left: { y: 0, x: 40 },
    right: { y: 0, x: -40 }
  };

  return (
    <motion.div
      initial={{ opacity: 0, ...directions[direction] }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// 放大淡入动画
export function ScaleFadeIn({
  children,
  className = "",
  delay = 0,
  duration = 0.5
}: Omit<AnimatedSectionProps, 'direction'>) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Hover卡片动画
interface HoverCardProps {
  children: ReactNode;
  className?: string;
  hoverScale?: number;
}

export function HoverCard({
  children,
  className = "",
  hoverScale = 1.02
}: HoverCardProps) {
  return (
    <motion.div
      whileHover={{
        scale: hoverScale,
        y: -5,
        transition: { duration: 0.3, ease: "easeOut" }
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// 连续淡入动画（用于列表）
interface StaggeredFadeInProps {
  children: ReactNode[];
  className?: string;
  staggerDelay?: number;
}

export function StaggeredFadeIn({
  children,
  className = "",
  staggerDelay = 0.1
}: StaggeredFadeInProps) {
  return (
    <div className={className}>
      {children.map((child, index) => (
        <FadeInSlide key={index} delay={index * staggerDelay} direction="up">
          {child}
        </FadeInSlide>
      ))}
    </div>
  );
}

// 脉冲动画（用于CTA按钮）
export function PulseButton({
  children,
  className = ""
}: { children: ReactNode; className?: string }) {
  return (
    <motion.div
      animate={{
        scale: [1, 1.05, 1],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// 悬浮动画（用于图标或徽章）
export function FloatingBadge({
  children,
  className = ""
}: { children: ReactNode; className?: string }) {
  return (
    <motion.div
      animate={{
        y: [-5, 5, -5],
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// 旋转淡入动画
export function RotateFadeIn({
  children,
  className = "",
  delay = 0
}: Omit<AnimatedSectionProps, 'direction' | 'duration'>) {
  return (
    <motion.div
      initial={{ opacity: 0, rotate: -10, scale: 0.9 }}
      whileInView={{ opacity: 1, rotate: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
