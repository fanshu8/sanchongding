import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * cn
 * 合并 Tailwind 类名并做冲突去重，保证样式优先级正确
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
