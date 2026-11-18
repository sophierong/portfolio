"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "motion/react";
import Image from "next/image";

type UnrollImageProps = {
  src: string;
  alt: string;
};

export const UnrollImage = ({ src, alt }: UnrollImageProps) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <motion.div
      initial={{ clipPath: "inset(0 0 100% 0)", opacity: 0 }}
      animate={
        isLoaded
          ? { clipPath: "inset(0 0 0% 0)", opacity: 1 }
          : { clipPath: "inset(0 0 100% 0)", opacity: 0 }
      }
      transition={{
        duration: 1.5,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="w-full max-w-100 md:max-w-80 lg:max-w-90 overflow-hidden"
    >
      <Image
        src={src}
        alt={alt}
        width={0}
        height={0}
        sizes="(max-width: 768px) 100vw, 320px"
        priority
        onLoad={() => setIsLoaded(true)}
        className="block w-full h-auto"
      />
    </motion.div>
  );
};
