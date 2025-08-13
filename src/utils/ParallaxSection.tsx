import React, { useRef } from "react";
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";

const IMG_PADDING = 12;

interface TextParallaxContentProps {
  imgUrl: string;
  subheading: string;
  heading: string;
  children: React.ReactNode;
}

export const TextParallaxContent: React.FC<TextParallaxContentProps> = ({
  imgUrl,
  subheading,
  heading,
  children,
}) => {
  return (
    <div style={{ paddingLeft: IMG_PADDING, paddingRight: IMG_PADDING }}>
      <div className="relative h-[150vh]">
        <StickyImage imgUrl={imgUrl} />
        <OverlayCopy heading={heading} subheading={subheading} />
      </div>
      {children}
    </div>
  );
};

interface StickyImageProps {
  imgUrl: string;
}

const StickyImage: React.FC<StickyImageProps> = ({ imgUrl }) => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  });

  const scale: MotionValue<number> = useTransform(
    scrollYProgress,
    [0, 1],
    [1, 0.85]
  );
  const opacity: MotionValue<number> = useTransform(
    scrollYProgress,
    [0, 1],
    [1, 0]
  );

  return (
    <motion.div
      style={{
        backgroundImage: `url(${imgUrl})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: `calc(100vh - ${IMG_PADDING * 2}px)`,
        top: IMG_PADDING,
        scale,
      }}
      ref={targetRef}
      className="sticky z-0 overflow-hidden rounded-3xl"
    >
      <motion.div
        className="absolute inset-0 bg-[#001400]/70"
        style={{ opacity }}
      />
    </motion.div>
  );
};

interface OverlayCopyProps {
  subheading: string;
  heading: string;
}

const OverlayCopy: React.FC<OverlayCopyProps> = ({ subheading, heading }) => {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const y: MotionValue<number> = useTransform(
    scrollYProgress,
    [0, 1],
    [250, -250]
  );
  const opacity: MotionValue<number> = useTransform(
    scrollYProgress,
    [0.25, 0.5, 0.75],
    [0, 1, 0]
  );

  return (
    <motion.div
      style={{ y, opacity }}
      ref={targetRef}
      className="absolute left-0 top-0 flex h-screen w-full flex-col items-center justify-center text-white"
    >
      <p className="mb-2 text-center text-xl font-bold md:mb-4 md:text-4xl text-[#00CC4B]">
        {subheading}
      </p>
      <p className="text-center text-4xl font-bold md:text-6xl md:max-w-[60%] max-w-[80%]">
        {heading}
      </p>
    </motion.div>
  );
};
