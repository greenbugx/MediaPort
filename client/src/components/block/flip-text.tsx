"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface FlipTextProps {
  children: string;
  className?: string;
  duration?: number;
  stagger?: number;
  repeatDelay?: number;
  initialDelay?: number;
}

export function FlipText({
  children,
  className,
  duration = 0.75,
  stagger = 0.08,
  repeatDelay = 2.5,
  initialDelay = 0.3,
}: FlipTextProps) {
  const chars = children.split("");

  return (
    <span
      className={cn("inline-flex leading-none select-none [perspective:1000px]", className)}
      style={{ perspective: 1000 }}
    >
      {chars.map((char, index) => (
        <motion.span
          key={index}
          className="inline-block relative"
          style={{
            transformStyle: "preserve-3d",
            backfaceVisibility: "visible",
          }}
          animate={{
            rotateX: [0, 360],
            opacity: [1, 0.45, 1],
            y: [0, -6, 0],
          }}
          transition={{
            duration,
            ease: [0.45, 0.05, 0.55, 0.95],
            delay: initialDelay + index * stagger,
            repeat: Infinity,
            repeatDelay,
          }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </span>
  );
}

export default FlipText;
