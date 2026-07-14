import FadeIn from "./FadeIn";

const services = [
  {
    num: "01",
    name: "3D Modeling",
    desc: "Creation of detailed objects, characters, or environments tailored to specific client needs, ideal for games, products, and visualizations.",
  },
  {
    num: "02",
    name: "Rendering",
    desc: "High-quality, photorealistic renders that showcase designs with custom lighting, textures, and materials to bring concepts to life.",
  },
  {
    num: "03",
    name: "Motion Design",
    desc: "Dynamic animations and motion graphics that add energy and storytelling to brands, products, and digital experiences.",
  },
  {
    num: "04",
    name: "Branding",
    desc: "Crafting cohesive visual identities -- from logos to full brand systems -- that communicate a clear and memorable presence.",
  },
  {
    num: "05",
    name: "Web Design",
    desc: "Designing clean, modern, and conversion-focused websites with attention to layout, typography, and user experience.",
  },
];

const ServicesSection = () => {
  return (
    <section className="bg-[#F5F0EB] rounded-t-[20px] xs:rounded-t-[28px] sm:rounded-t-[40px] md:rounded-t-[50px] lg:rounded-t-[60px] px-4 xs:px-5 sm:px-6 md:px-8 lg:px-10 py-12 xs:py-16 sm:py-20 md:py-24 lg:py-32 relative">
      {/* Grain overlay on light section for matte feel */}
      <div
        className="absolute inset-0 rounded-t-[20px] xs:rounded-t-[28px] sm:rounded-t-[40px] md:rounded-t-[50px] lg:rounded-t-[60px] pointer-events-none z-0"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox=''0 0 256 256'' xmlns=''http://www.w3.org/2000/svg''%3E%3Cfilter id=''n''%3E%3CfeTurbulence type=''fractalNoise'' baseFrequency=''0.75'' numOctaves=''4'' stitchTiles=''stitch''/%3E%3C/filter%3E%3Crect width=''100%25'' height=''100%25'' filter=''url(%23n)''/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "256px 256px",
          opacity: 0.02,
        }}
      />

      <FadeIn delay={0} y={40}>
        <h2
          className="text-[#0F162E] font-black uppercase text-center mb-10 xs:mb-12 sm:mb-16 md:mb-20 lg:mb-28 relative z-10"
          style={{ fontSize: "clamp(2rem, 12vw, 160px)" }}
        >
          Services
        </h2>
      </FadeIn>

      <div className="max-w-5xl mx-auto relative z-10">
        {services.map((service, i) => (
          <FadeIn key={i} delay={i * 0.1} y={30}>
            <div
              className="flex items-start gap-3 xs:gap-4 sm:gap-6 md:gap-8 lg:gap-10 border-b py-5 xs:py-6 sm:py-8 md:py-10 lg:py-12"
              style={{ borderColor: "rgba(15, 22, 46, 0.12)" }}
            >
              <span
                className="font-black text-[#0F162E] leading-none flex-shrink-0"
                style={{ fontSize: "clamp(2rem, 10vw, 140px)" }}
              >
                {service.num}
              </span>
              <div className="flex flex-col gap-0.5 xs:gap-1 sm:gap-2 pt-1 xs:pt-1.5 sm:pt-2">
                <h3
                  className="font-medium uppercase text-[#0F162E]"
                  style={{ fontSize: "clamp(0.85rem, 2.2vw, 2.1rem)" }}
                >
                  {service.name}
                </h3>
                <p
                  className="font-light leading-relaxed max-w-2xl opacity-55 text-[#0F162E]"
                  style={{ fontSize: "clamp(0.75rem, 1.6vw, 1.25rem)" }}
                >
                  {service.desc}
                </p>
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
