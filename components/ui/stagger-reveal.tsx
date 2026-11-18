"use client";

import React, { useEffect, useRef, useCallback } from "react";
import { motion, useAnimationControls } from "motion/react";

interface StaggerRevealProps {
  children: React.ReactNode;
  staggerMs?: number;
  duration?: number;
  yOffset?: number;
  className?: string;
}

export const StaggerReveal = ({
  children,
  staggerMs = 120,
  duration = 0.35,
  yOffset = 12,
  className,
}: StaggerRevealProps) => {
  const revealCallbacksRef = useRef<Map<number, () => void>>(new Map());
  const unlockedMaxIndexRef = useRef<number>(-1);
  const nextToRevealRef = useRef<number>(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const stopQueue = useCallback(() => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  }, []);

  const processNext = useCallback(() => {
    const currentIdx = nextToRevealRef.current;

    if (currentIdx > unlockedMaxIndexRef.current) {
      stopQueue();
      return;
    }

    const reveal = revealCallbacksRef.current.get(currentIdx);
    if (reveal) {
      reveal();
      revealCallbacksRef.current.delete(currentIdx);
      nextToRevealRef.current = currentIdx + 1;
    } else {
      stopQueue();
    }
  }, [stopQueue]);

  const registerItem = useCallback((id: number, reveal: () => void) => {
    revealCallbacksRef.current.set(id, reveal);
  }, []);

  const handleItemEnter = useCallback(
    (id: number) => {
      if (id > unlockedMaxIndexRef.current) {
        unlockedMaxIndexRef.current = id;
      }

      if (
        !timerRef.current &&
        nextToRevealRef.current <= unlockedMaxIndexRef.current
      ) {
        processNext();
        timerRef.current = setInterval(processNext, staggerMs);
      }
    },
    [processNext, staggerMs],
  );

  useEffect(() => {
    return () => stopQueue();
  }, [stopQueue]);

  const validChildren = React.Children.toArray(children);

  return (
    <div className={className}>
      {validChildren.map((child, index) => (
        <StaggerItem
          key={index}
          id={index}
          duration={duration}
          yOffset={yOffset}
          registerItem={registerItem}
          onEnter={handleItemEnter}
        >
          {child}
        </StaggerItem>
      ))}
    </div>
  );
};

interface StaggerItemProps {
  id: number;
  children: React.ReactNode;
  duration: number;
  yOffset: number;
  registerItem: (id: number, reveal: () => void) => void;
  onEnter: (id: number) => void;
}

const StaggerItem = ({
  id,
  children,
  duration,
  yOffset,
  registerItem,
  onEnter,
}: StaggerItemProps) => {
  const controls = useAnimationControls();

  useEffect(() => {
    registerItem(id, () => {
      controls.start({
        opacity: 1,
        y: 0,
        transition: { duration, ease: "easeOut" },
      });
    });
  }, [id, duration, registerItem, controls]);

  return (
    <motion.div
      initial={{ opacity: 0, y: yOffset }}
      animate={controls}
      onViewportEnter={() => onEnter(id)}
      viewport={{ once: true, amount: "some" }}
    >
      {children}
    </motion.div>
  );
};
