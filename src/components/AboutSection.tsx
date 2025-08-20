import { TextParallaxContent } from "../utils/ParallaxSection";
import about1 from "../assets/about1.png";
import about2 from "../assets/about2.png";
import about3 from "../assets/about3.png";

function AboutSection() {
  const aboutBlock = [
    {
      imgUrl: about1,
      subheading: "Collaborate",
      heading:
        "Creative breakout spaces designed for team brainstorming and innovation",
      headingText: "GENERATE IDEAS TOGETHER",
      description:
        "A collaborative hub designed to inspire creativity, encourage open discussions, and transform concepts into impactful solutions, empowering teams to innovate and achieve goals with collective brilliance.",
    },
    {
      imgUrl: about2,
      subheading: "Starlink High-Speed Internet",
      heading:
        "Lightning-fast, reliable connectivity that never slows down your workflow",
      headingText: "BLAZING-FAST CONNECTIVITY",
      description:
        "Power through tasks with ultra-speed connections that eliminate delays, accelerate performance, and keep workflows running smoothly, ensuring maximum efficiency and uninterrupted progress from start to finish.",
    },
    {
      imgUrl: about3,
      subheading: "24/7 Power Supply",
      heading:
        "Uninterrupted productivity with enterprise-grade power infrastructure",
      headingText: "UNINTERRUPTED PRODUCTIVITY",
      description:
        "With enterprise-grade power infrastructure, your workstation stays active around the clock, ensuring seamless operations, zero downtime, and the confidence to focus fully on achieving your goals.",
    },
  ];
  return (
    <div className="bg-black">
      <div className="container mx-auto py-20 text-white flex flex-col items-center">
        <div className="bg-[#003213] px-4 py rounded-2xl mb-4 text-[#00CC4B] border border-[#00CC4B]">
          <p>Powered by Starlink</p>
        </div>
        <h1 className="md:text-5xl text-3xl font-bold max-w-[800px] text-center">
          Where <span className="text-[#00CC4B]">Innovation</span> Meets{" "}
          <span className="text-[#00CC4B]">Infrastructure</span>
        </h1>
      </div>
      {aboutBlock.map((block, index) => (
        <TextParallaxContent
          key={index}
          imgUrl={block.imgUrl}
          subheading={block.subheading}
          heading={block.heading}
        >
          <div className="container py-12 mx-auto flex flex-col items-center md:items-start text-center md:text-start md:flex-row  text-white">
            <div className="flex-2 flex flex-col items-end p-8 text-[#00CC4B] font-bold text-5xl">
              <p className="max-w-[400px] text-center md:text-end">
                {block.headingText}
              </p>
            </div>
            <div className="flex-3 p-8 text-2xl">
              <p className="max-w-[600px]">{block.description}</p>
            </div>
          </div>
        </TextParallaxContent>
      ))}
    </div>
  );
}

export default AboutSection;
