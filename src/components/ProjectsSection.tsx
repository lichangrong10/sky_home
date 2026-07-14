import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import LiveProjectButton from "./LiveProjectButton";

const projects = [
  {
    num: "01",
    name: "Moments",
    category: "Client",
    col1Img1: "/2.jpg",
    col1Img2: "/4.jpg",
    col2Img: "/7.jpg",
  },
  {
    num: "02",
    name: "Instant",
    category: "Personal",
    col1Img1: "/微信图片_20260705033421_239_584.jpg",
    col1Img2: "/22.jpg",
    col2Img: "/23.jpg",
  },
  {
    num: "03",
    name: "Characters",
    category: "Client",
    col1Img1: "/微信图片_20260708235823_2119_584.jpg",
    col1Img2: "/微信图片_20260708231039_2102_584.jpg",
    col2Img: "/微信图片_20260710054153_2515_584.jpg",
  },
];

const totalCards = projects.length;

interface ProjectCardProps {
  project: (typeof projects)[0];
  index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "start start"],
  });

  const targetScale = 1 - (totalCards - 1 - index) * 0.03;
  const scale = useTransform(scrollYProgress, [0, 1], [targetScale, 1]);

  return (
    <div ref={ref} className="h-[70vh] xs:h-[75vh] sm:h-[80vh] md:h-[85vh] sticky top-16 xs:top-20 sm:top-24 md:top-32" style={{ top: `${index * 12 + (index > 0 ? 8 : 0)}px` }}>
      <motion.div
        style={{ scale }}
        className="rounded-[20px] xs:rounded-[28px] sm:rounded-[40px] md:rounded-[50px] lg:rounded-[60px] border-2 border-[#D0D8E8] bg-night-base p-3 xs:p-4 sm:p-5 md:p-6 lg:p-8 h-full flex flex-col overflow-hidden"
      >
        <div className="flex items-start sm:items-center justify-between flex-wrap gap-2 sm:gap-4 mb-3 sm:mb-4 md:mb-6 lg:mb-8 flex-shrink-0">
          <div className="flex items-center gap-2 xs:gap-3 sm:gap-4 md:gap-6">
            <span
              className="hero-heading font-black leading-none"
              style={{ fontSize: "clamp(2.2rem, 10vw, 140px)" }}
            >
              {project.num}
            </span>
            <div className="flex flex-col">
              <span className="text-[#D0D8E8] font-light uppercase tracking-wide text-[10px] xs:text-xs sm:text-sm md:text-base opacity-60">
                {project.category}
              </span>
              <span
                className="text-[#D0D8E8] font-medium uppercase"
                style={{ fontSize: "clamp(0.8rem, 2.2vw, 2.1rem)" }}
              >
                {project.name}
              </span>
            </div>
          </div>
          <div className="hidden xs:block">
            <LiveProjectButton />
          </div>
        </div>

        {/* Mobile layout — top col2Img full width, bottom col1Img2 + col1Img1 side by side */}
        <div className="flex flex-col gap-2 flex-1 min-h-0 sm:hidden">
          {/* Top: col2Img full width ~45% */}
          <div className="rounded-[16px] overflow-hidden flex-[45]">
            <img src={project.col2Img} alt="" className="w-full h-full object-cover" loading="lazy" />
          </div>
          {/* Bottom: col1Img2 (square) + col1Img1 (1.8x) */}
          <div className="flex gap-2 flex-[55]">
            <div className="w-[36%] rounded-[16px] overflow-hidden">
              <img src={project.col1Img2} alt="" className="w-full h-full object-cover" loading="lazy" />
            </div>
            <div className="flex-1 rounded-[16px] overflow-hidden">
              <img src={project.col1Img1} alt="" className="w-full h-full object-cover" loading="lazy" />
            </div>
          </div>
        </div>

        {/* Desktop/tablet layout — original 40/60 split */}
        <div className="hidden sm:flex gap-2 xs:gap-3 sm:gap-4 flex-1 min-h-0">
          <div className="w-[40%] flex flex-col gap-2 xs:gap-3 sm:gap-4">
            <div
              className="rounded-[16px] xs:rounded-[24px] sm:rounded-[32px] md:rounded-[48px] lg:rounded-[60px] overflow-hidden"
              style={{ height: "clamp(80px, 16vw, 230px)" }}
            >
              <img src={project.col1Img1} alt="" className="w-full h-full object-cover" loading="lazy" />
            </div>
            <div
              className="rounded-[16px] xs:rounded-[24px] sm:rounded-[32px] md:rounded-[48px] lg:rounded-[60px] overflow-hidden flex-1"
              style={{ minHeight: "clamp(100px, 22vw, 340px)" }}
            >
              <img src={project.col1Img2} alt="" className="w-full h-full object-cover" loading="lazy" />
            </div>
          </div>
          <div className="w-[60%] rounded-[16px] xs:rounded-[24px] sm:rounded-[32px] md:rounded-[48px] lg:rounded-[60px] overflow-hidden">
            <img src={project.col2Img} alt="" className="w-full h-full object-cover" loading="lazy" />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const ProjectsSection = () => {
  return (
    <>
      <section className="bg-night-base rounded-t-[20px] xs:rounded-t-[28px] sm:rounded-t-[40px] md:rounded-t-[50px] lg:rounded-t-[60px] -mt-8 xs:-mt-10 sm:-mt-12 md:-mt-14 relative z-10 px-4 xs:px-5 sm:px-6 md:px-8 lg:px-10 pt-12 xs:pt-14 sm:pt-16 md:pt-20 lg:pt-24 pb-16 xs:pb-20">
        {projects.map((project, i) => (
          <ProjectCard key={i} project={project} index={i} />
        ))}
      </section>

      <h2
        className="hero-heading font-black uppercase text-center bg-night-base pb-16 xs:pb-20 pt-12 xs:pt-16 sm:pt-20 md:pt-28"
        style={{ fontSize: "clamp(2rem, 12vw, 160px)" }}
      >
        Long live good times
      </h2>
    </>
  );
};

export default ProjectsSection;
