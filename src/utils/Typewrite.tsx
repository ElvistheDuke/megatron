import { motion } from "framer-motion";

interface TypewriteProps {
  text: string;
  delay?: number;
  duration?: number;
  fontSize?: number;
  fontWeight?: number;
  //   startFlag?: boolean;
}

function Typewrite({
  text,
  delay = 0,
  duration = 0.015,
  fontSize = 16,
  fontWeight = 400,
}: //   startFlag = false,
TypewriteProps) {
  const letters = text.split("");
  return (
    <div
      className="font-light uppercase flex justify-center items-center"
      style={{
        fontSize: `${fontSize}px`,
        fontWeight: fontWeight,
        // display: startFlag ? "flex" : "none",
      }}
    >
      {/* <span className="inline-block size-2 bg-neutral-950" /> */}
      <span className="">
        {letters.map((letter, index) => (
          <motion.span className="relative" key={index}>
            <motion.span
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{
                delay: 0.2 + delay + index * duration,
                duration: duration,
                ease: "easeInOut",
              }}
            >
              {letter}
            </motion.span>
            <motion.span
              className="absolute top-0 left-0 right-0 bottom-0 w-full h-full bg-green-500"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0] }}
              transition={{
                delay: delay + index * duration,
                times: [0, 0.1, 1],
                duration: 0.3,
                ease: "easeInOut",
              }}
            ></motion.span>
          </motion.span>
        ))}
      </span>
    </div>
  );
}

export default Typewrite;
