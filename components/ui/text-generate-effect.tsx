"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "motion/react";
import { cn } from "@/lib/utils";

export const TextGenerateEffect = ({
  words,
  className,
  filter = true,
  duration = 0.5,
}: {
  words: string;
  className?: string;
  filter?: boolean;
  duration?: number;
}) => {
  const [scope, animate] = useAnimate();
  const wordsArray = words.split(" ");
  useEffect(() => {
    animate(
      "span",
      {
        opacity: 1,
        filter: filter ? "blur(0px)" : "none",
      },
      {
        duration: duration ? duration : 1,
        delay: stagger(0.2),
      }
    );
  }, [animate, duration, filter]);

  const renderWords = () => {
    return (
      <motion.div ref={scope}>
        {wordsArray.map((word, idx) => {
          if (idx < 2) {
            return (
              <motion.span
                key={word + idx}
                className="dark:text-zinc-200 text-zinc-800 opacity-0 font-sans"
                style={{
                  filter: filter ? "blur(10px)" : "none",
                }}
              >
                {word}{" "}
              </motion.span>
            );
          } else if ([4, 13].includes(idx)) {
            return (
              <motion.span
                key={word + idx}
                className="dark:text-zinc-400 text-zinc-500 opacity-0 font-serif font-[350] italic pr-1"
                style={{
                  filter: filter ? "blur(10px)" : "none",
                }}
              >
                {word}{" "}
              </motion.span>
            );
          } else {
            return (
              <motion.span
                key={word + idx}
                className="dark:text-zinc-400 text-zinc-500 opacity-0 font-sans"
                style={{
                  filter: filter ? "blur(10px)" : "none",
                }}
              >
                {word}{" "}
              </motion.span>
            );
          }
        })}
      </motion.div>
    );
  };

  return (
    <div className={cn("font-bold", className)}>
      <div className="mt-4">
        <div className="dark:text-white text-black text-3xl lg:text-4xl xl:text-5xl leading-tight">
          {renderWords()}
        </div>
      </div>
    </div>
  );
};
