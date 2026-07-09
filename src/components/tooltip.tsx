import { useRef, useState, type ReactNode } from "react";
import { createPortal } from "react-dom";

interface TooltipProps {
  children: ReactNode;
  content: string;
  className?: string;
}

export function Tooltip({ children, content, className = "" }: TooltipProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [coords, setCoords] = useState<{ top: number; left: number } | null>(
    null,
  );
  const [visible, setVisible] = useState(false);

  const updatePosition = () => {
    if (!wrapperRef.current) return;
    const rect = wrapperRef.current.getBoundingClientRect();
    setCoords({
      top: rect.top,
      left: rect.left + rect.width / 2,
    });
  };

  return (
    <div
      ref={wrapperRef}
      className={`relative inline-flex ${className}`}
      onMouseEnter={() => {
        updatePosition();
        setVisible(true);
      }}
      onMouseLeave={() => setVisible(false)}
    >
      {children}

      {coords &&
        createPortal(
          <span
            style={{
              position: "fixed",
              top: coords.top,
              left: coords.left,
              transform: `translate(-50%, calc(-100% - 8px)) scale(${visible ? 1 : 0.95})`,
              opacity: visible ? 1 : 0,
            }}
            className="whitespace-nowrap rounded-md bg-stone-800 px-2 py-1 text-xs font-medium text-white transition-all duration-200 pointer-events-none z-9999"
          >
            {content}
          </span>,
          document.body,
        )}
    </div>
  );
}
