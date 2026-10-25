"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface FlipTextProps {
  children: string;
  className?: string;
  yOffset?: number | string;
  duration?: number;
}

export function FlipText({
  children,
  className,
  yOffset = -8,
  duration = 0.4,
}: FlipTextProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <span
      className={cn("inline-flex [perspective:1000px]", className)}
      style={{ perspective: 1000 }}
    >
      {children.split("").map((char, index) => (
        <motion.span
          key={index}
          className="inline-block cursor-pointer select-none"
          style={{ transformStyle: "preserve-3d" }}
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
          animate={{
            rotateX: hoveredIndex === index ? 360 : 0,
            y: hoveredIndex === index ? yOffset : 0,
          }}
          transition={{ duration, ease: "easeOut" }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </span>
  );
}

export default FlipText;
