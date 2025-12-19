import type { Variants } from "framer-motion"

/**
 * fadeInUp
 * 自下而上淡入，适合卡片/段落初次入场
 */
export const fadeInUp: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
}

/**
 * fadeIn
 * 纯淡入动画，适合图标/按钮等元素
 */
export const fadeIn: Variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
}

/**
 * scaleIn
 * 轻微缩放淡入，突出焦点元素
 */
export const scaleIn: Variants = {
  initial: { opacity: 0, scale: 0.95 },
  animate: { opacity: 1, scale: 1 },
}

/**
 * slideInLeft
 * 从左滑入，带淡入
 */
export const slideInLeft: Variants = {
  initial: { opacity: 0, x: -24 },
  animate: { opacity: 1, x: 0 },
}

/**
 * slideInRight
 * 从右滑入，带淡入
 */
export const slideInRight: Variants = {
  initial: { opacity: 0, x: 24 },
  animate: { opacity: 1, x: 0 },
}

/**
 * slideInUp
 * 从下滑入，带淡入
 */
export const slideInUp: Variants = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
}

/**
 * slideInDown
 * 从上滑入，带淡入
 */
export const slideInDown: Variants = {
  initial: { opacity: 0, y: -24 },
  animate: { opacity: 1, y: 0 },
}

/**
 * staggerContainer
 * 生成父容器分组动画，子元素按顺序错峰入场
 */
export function staggerContainer(
  stagger = 0.08,
  delayChildren = 0
): Variants {
  return {
    initial: {},
    animate: {
      transition: {
        staggerChildren: stagger,
        delayChildren,
      },
    },
  }
}

/**
 * withTransition
 * 为指定变体补充统一过渡配置
 */
export function withTransition(
  variants: Variants,
  duration = 0.6,
  ease: "linear" | "easeIn" | "easeOut" | "easeInOut" = "easeOut"
): Variants {
  return {
    ...variants,
    animate: {
      ...(variants.animate as object),
      transition: { duration, ease },
    },
  }
}
