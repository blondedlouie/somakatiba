import React from "react";
import Link from "next/link";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "link";
  href?: string;
  external?: boolean;
  children: React.ReactNode;
  className?: string;
}

export default function Button({
  variant = "primary",
  href,
  external,
  children,
  className = "",
  ...props
}: ButtonProps) {
  const baseStyles = "inline-flex items-center justify-center font-sans font-bold text-sm transition-colors cursor-pointer select-none";

  const variantStyles = {
    primary:
      "bg-flag-green hover:bg-flag-green-hover text-white rounded-control px-[22px] py-[14px] leading-tight border-0",
    secondary:
      "bg-white hover:bg-ink hover:text-white border-2 border-ink text-ink rounded-control px-[20px] py-[12px] leading-tight",
    link:
      "text-flag-green underline decoration-flag-green hover:decoration-flag-red underline-offset-4 p-0 bg-transparent border-0",
  }[variant];

  const combinedClasses = `${baseStyles} ${variantStyles} ${className}`.trim();

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={combinedClasses}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={combinedClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {children}
    </button>
  );
}
