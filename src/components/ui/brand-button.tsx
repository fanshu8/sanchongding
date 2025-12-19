import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { motion, type HTMLMotionProps } from "framer-motion"

import { cn } from "@/lib/utils"

const brandButtonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        accent: "bg-accent text-accent-foreground shadow-xs hover:bg-accent/90",
        secondary:
          "bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80",
        outline:
          "border-2 border-primary bg-background text-primary shadow-xs hover:bg-primary/5 dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        icon: "size-9",
      },
    },
    defaultVariants: {
      variant: "accent",
      size: "default",
    },
  }
)

/** 
 * BrandButton
 * 基于通用 Button 的品牌按钮，提供 accent/secondary/outline 三种预设变体并注入轻微点击动效
 * @param variant 视觉变体：accent | secondary | outline
 * @param size 尺寸：default | sm | lg | icon
 * @param asChild 是否以 Slot 包裹以复用外层元素
 * @param className 自定义样式类
 * @description 去除原生 onDrag 以避免与 framer-motion 的 onDrag 类型冲突
 */
/** 
 * ButtonBaseProps
 * 去除原生拖拽相关事件以兼容 framer-motion 的事件签名
 */
type ButtonBaseProps = Omit<HTMLMotionProps<"button">, "ref">;
function BrandButton({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: ButtonBaseProps &
  VariantProps<typeof brandButtonVariants> & {
    asChild?: boolean
  }) {
  const classes = cn(brandButtonVariants({ variant, size, className }))

  if (asChild) {
    const { /* omit all to avoid Slot prop type conflicts */ } = props
    return (
      <motion.div whileTap={{ scale: 0.98 }}>
        <Slot data-slot="brand-button" className={classes} />
      </motion.div>
    )
  }

  return (
    <motion.button
      whileTap={{ scale: 0.98 }}
      data-slot="brand-button"
      className={classes}
      {...props}
    />
  )
}

export { BrandButton, brandButtonVariants }
