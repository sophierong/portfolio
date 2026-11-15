"use client";

import Image from "next/image";
import { motion } from "motion/react";

type UnrollImageProps = {
  src: string;
  alt: string;
};

export const UnrollImage = ({ src, alt }: UnrollImageProps) => {
  return (
    <motion.img
      src={src}
      alt={alt}
      initial={{ clipPath: "inset(0 0 100% 0)", opacity: 0 }}
      animate={{ clipPath: "inset(0 0 0% 0)", opacity: 1 }}
      transition={{
        duration: 1.5,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="w-80"
    />
  );
};
