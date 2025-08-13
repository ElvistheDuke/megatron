import { useScroll, motion, useTransform } from "framer-motion";
import bgImage from "../assets/hero-bg.jpg";
import { useRef, useState } from "react";
import heroChair from "../assets/hero-chair.png";
import Typewrite from "../utils/Typewrite";

function HeroSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    // offset: ["start end", "end start"],
  });

  const bgOpacity = useTransform(scrollYProgress, [0, 1], [0.3, 1]);
  const chairY = useTransform(scrollYProgress, [0, 1], ["50%", "120%"]);
  const chairScale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
  // const chairTranslateY = useSpring(chairY, {
  //   // stiffness: 150,
  //   damping: 20,
  //   // mass: 0.5,
  // });
  // const firstTextOpacity = useTransform(scrollYProgress, [0, 0.7], [0, 1]);
  const firstTextMotion = useTransform(
    scrollYProgress,
    [0.3, 1],
    ["50%", "60%"]
  );
  // const secondTextOpacity = useTransform(scrollYProgress, [0.7, 1], [0, 1]);
  // const thirdTextOpacity = useTransform(scrollYProgress, [0.7, 0.8], [0, 1]);

  const [startFlag, setStartFlag] = useState(false);
  const [secondStartFlag, setSecondStartFlag] = useState(false);

  return (
    <motion.div
      ref={ref}
      className="min-h-[200vh] flex items-center flex-col justify-center  relative overflow-hidden"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        // opacity: bgOpacity,
        backgroundRepeat: "no-repeat",
      }}
    >
      <motion.div
        className="absolute h-[200vh] bg-black  inset-0 z-0"
        style={{ opacity: bgOpacity }}
      ></motion.div>
      <motion.div
        className="absolute h-screen inset-0 z-40 hidden  md:flex items-center justify-center"
        style={{ y: chairY, scale: chairScale }}
      >
        <img
          style={{ width: "30%", maxWidth: "400px" }}
          src={heroChair}
          alt=""
        />
      </motion.div>
      <div className="absolute h-[85vh] container mx-auto inset-0 z-20 flex flex-col items-center justify-center text-white">
        <div className="bg-[#003213] px-4 py rounded-2xl mb-4 text-[#00CC4B] border border-[#00CC4B]">
          <p>Powered by Starlink</p>
        </div>
        <h1 className="md:text-8xl text-5xl font-bold">MEGATRON</h1>
        <h1 className="md:text-8xl text-5xl font-bold text-[#00CC4B]">
          WORKSTATION
        </h1>
        <p className="md:text-4xl text-2xl mt-2 font-bold">
          One Space. <span className="text-[#00CC4B]">Infinite Ideas.</span>
        </p>
        {/* <img
          className="mt-8 md:hidden absolute top-[60%]"
          style={{ width: "50%", maxWidth: "400px" }}
          src={heroChair}
          alt=""
        /> */}
      </div>
      <div className="min-w-[50%] flex items-center justify-center absolute top-[55%] md:left-0 z-30">
        <motion.div
          className="text-center md:mr-[10%] z-30 flex items-center justify-center text-white text-2xl  w-[370px] border border-[#00CC4B] rounded-lg p-4"
          style={{
            top: firstTextMotion,
          }}
          viewport={{ once: true }}
          onViewportEnter={() => setStartFlag(true)}
        >
          {startFlag && (
            <Typewrite
              text="A bold, tech-driven environment designed for creators, developers, entrepreneurs, and collaborators."
              fontSize={20}
              fontWeight={600}
            />
          )}
        </motion.div>
      </div>
      <div className="min-w-[50%] flex items-center justify-center absolute top-[80%] md:right-0 z-30">
        <motion.div
          className="text-center md:ml-[10%] z-30 flex items-center justify-center text-white text-3xl w-[280px] border border-[#00CC4B] rounded-lg p-4"
          viewport={{ once: true }}
          onViewportEnter={() => setSecondStartFlag(true)}
        >
          {/* <p className="max-w-[600px] font-extrabold">
          Where innovation finds momentum.
        </p> */}
          {secondStartFlag && (
            <Typewrite
              text="Where innovation finds momentum."
              fontSize={24}
              fontWeight={600}
            />
          )}
        </motion.div>
      </div>
    </motion.div>
  );
}

export default HeroSection;
