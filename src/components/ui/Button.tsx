"use client";

import React from "react";
import Link from "next/link";

type Variant = "primary" | "outline" | "ghost";
type Size = "sm" | "md" | "lg";

type ButtonBaseProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: React.ReactNode;
};

type ButtonAsButton = ButtonBaseProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & { href?: never };

type ButtonAsLink = ButtonBaseProps & { href: string; target?: string };

type ButtonProps = ButtonAsButton | ButtonAsLink;

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-brand-pink text-white hover:bg-brand-pink-light active:scale-95 shadow-lg shadow-brand-pink/25",
  outline:
    "border-2 border-brand-pink text-brand-pink hover:bg-brand-pink hover:text-white active:scale-95",
  ghost: "text-white/70 hover:text-white hover:bg-white/10 active:scale-95",
};

const sizeClasses: Record<Size, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

export default function Button({
  variant = "primary",
  size = "md",
  className = "",
  children,
  ...props
}: ButtonProps) {
  const classes = `
    inline-flex items-center justify-center gap-2 rounded-full font-body font-semibold
    transition-all duration-200 cursor-pointer
    focus:outline-none focus:ring-2 focus:ring-brand-pink focus:ring-offset-2 focus:ring-offset-brand-black
    disabled:opacity-50 disabled:cursor-not-allowed
    ${variantClasses[variant]}
    ${sizeClasses[size]}
    ${className}
  `;

  if ("href" in props && props.href) {
    const { href, target } = props as ButtonAsLink;
    return (
      <Link href={href} target={target} className={classes}>
        {children}
      </Link>
    );
  }

  const { ...buttonProps } = props as ButtonAsButton;
  return (
    <button className={classes} {...buttonProps}>
      {children}
    </button>
  );
}
