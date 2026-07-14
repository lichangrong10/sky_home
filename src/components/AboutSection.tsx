import FadeIn from "./FadeIn";
import AnimatedText from "./AnimatedText";

const aboutText =
  "";

const AboutSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-5 sm:px-8 md:px-10 py-20 overflow-hidden">
      {/* Decorative corner images */}
      {/* Top-left: Moon */}
      <FadeIn delay={0.1} x={-80} y={0} duration={0.9} className="absolute top-[4%] left-[1%] sm:left-[2%] md:left-[4%] z-0 pointer-events-none">
        <img
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/moon_icon.11395d36.png"
          alt=""
          className="w-[70px] xs:w-[100px] sm:w-[140px] md:w-[180px] lg:w-[210px]"
        />
      </FadeIn>

      {/* Bottom-left: 3D object */}
      <FadeIn delay={0.25} x={-80} y={0} duration={0.9} className="absolute bottom-[8%] left-[3%] sm:left-[6%] md:left-[10%] z-0 pointer-events-none">
        <img
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/p59_1.4659672e.png"
          alt=""
          className="w-[55px] xs:w-[80px] sm:w-[110px] md:w-[150px] lg:w-[180px]"
        />
      </FadeIn>

      {/* Top-right: Lego */}
      <FadeIn delay={0.15} x={80} y={0} duration={0.9} className="absolute top-[4%] right-[1%] sm:right-[2%] md:right-[4%] z-0 pointer-events-none">
        <img
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/lego_icon-1.703bb594.png"
          alt=""
          className="w-[70px] xs:w-[100px] sm:w-[140px] md:w-[180px] lg:w-[210px]"
        />
      </FadeIn>

      {/* Bottom-right: 3D group */}
      <FadeIn delay={0.3} x={80} y={0} duration={0.9} className="absolute bottom-[8%] right-[3%] sm:right-[6%] md:right-[10%] z-0 pointer-events-none">
        <img
          src="https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/Group_134-1.2e04f3ce.png"
          alt=""
          className="w-[70px] xs:w-[100px] sm:w-[130px] md:w-[180px] lg:w-[220px]"
        />
      </FadeIn>

      {/* Content */}
      <div className="flex flex-col items-center gap-6 xs:gap-8 sm:gap-10 md:gap-14 z-10">
        <FadeIn delay={0} y={40}>
          <h2
            className="hero-heading font-black uppercase leading-none tracking-tight text-center"
            style={{ fontSize: "clamp(3rem, 12vw, 160px)" }}
          >
            Long live friendship!
          </h2>
        </FadeIn>

        <AnimatedText
          text={aboutText}
          className="text-[#D0D8E8] font-medium text-center leading-relaxed max-w-[560px]"
          style={{ fontSize: "clamp(1rem, 2vw, 1.35rem)" }}
        />
      </div>
    </section>
  );
};

export default AboutSection;
