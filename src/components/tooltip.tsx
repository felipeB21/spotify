import type { ReactNode } from "react";

interface TooltipProps {
  children: ReactNode;
  content: string;
  className?: string;
}

export function Tooltip({ children, content, className = "" }: TooltipProps) {
  return (
    <div className={`relative group inline-flex ${className}`}>
      {children}
      <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 whitespace-nowrap rounded-md bg-stone-800 px-2 py-1 text-xs font-medium text-white opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500 pointer-events-none z-99">
        {content}
      </span>
    </div>
  );
}
