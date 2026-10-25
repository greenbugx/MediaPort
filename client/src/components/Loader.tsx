"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FlipText } from "@/components/block/flip-text";
import { cn } from "@/lib/utils";

export interface LoaderProps {
  /**
   * Text to display in the 3D flip animation.
   * Defaults to "MediaPort".
   */
  text?: string;
  className?: string;
  /**
   * Duration of each full 3D flip cycle in seconds.
   * Defaults to 2.0s.
   */
  duration?: number;
  /**
   * When true, automatically calls onFinish and unmounts after minDisplayTime.
   */
  autoHide?: boolean;
  /**
   * Minimum time in milliseconds to display the loader before auto-hiding.
   * Defaults to 3000ms.
   */
  minDisplayTime?: number;
  /**
   * Callback fired when the loader finishes or is dismissed.
   */
  onFinish?: () => void;
}

export function Loader({
  text = "MediaPort",
  className,
  duration = 2.0,
  autoHide = false,
  minDisplayTime = 3000,
  onFinish,
}: LoaderProps) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (!autoHide) return;
    const timer = setTimeout(() => {
      setVisible(false);
      onFinish?.();
    }, minDisplayTime);
    return () => clearTimeout(timer);
  }, [autoHide, minDisplayTime, onFinish]);

  if (!visible) return null;

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className={cn(
        "fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-background text-foreground select-none",
        className
      )}
      role="status"
      aria-live="polite"
      aria-label="Loading"
    >
      <div className="relative flex flex-col items-center justify-center gap-3">
        <FlipText
          duration={duration}
          className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-foreground"
        >
          {text}
        </FlipText>
      </div>
    </motion.div>
  );
}

export default Loader;
