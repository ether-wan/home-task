import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-[#27292B] h-full w-full text-[#686D73] border-2 border-transparent text-base",
        connect: "bg-[#27292B] text-white w-40 text-base",
        trading: "bg-[#27292B] h-full w-full text-[#686D73] border-2 border-[#686D73] text-base",
        market: "bg-[#1B1C1D] h-full w-full text-[#686D73] border-2 border-transparent text-xl",
        dropdown : "bg-[#3D4043] h-full w-full text-[#686D73] border-2 border-transparent text-xl flex justify-between",
      },
      size: {
        medium: "px-3 py-2",
      },
      borderRadius: {
        square: "",
        soft: "rounded-lg",
        left: "rounded-l-lg",
        right: "rounded-r-lg",
        rounded: "rounded-full",
      },
      action: {
        none: "",
        long: "bg-[#06EA1D1F] text-[#29E03B] border-2 border-[#29E03B]",
        short: "bg-[#3E0F04] text-[#FA5C38] border-2 border-[#FA5C38]",
        select: "bg-[#3D4043] text-white",
      },
    },
    compoundVariants: [

    ],
    defaultVariants: {
      variant: "default",
      size: "medium",
      borderRadius: "soft",
      action: "none"
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
  VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, borderRadius, size, action, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, borderRadius, action, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
