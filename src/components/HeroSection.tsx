import FadeIn from "./FadeIn";
import Magnet from "./Magnet";
import { useState, useRef, useCallback } from "react";

const mobileImages = [
  "/1.jpg",
  "/jllll.png",
  "/16.jpg",
];

const HeroSection = () => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  }, []);

  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  }, []);

  const handleTouchEnd = useCallback(() => {
    const diff = touchStartX.current - touchEndX.current;
    if (Math.abs(diff) > 50) {
      if (diff > 0) setCurrentIdx((p) => (p + 1) % mobileImages.length);
      else setCurrentIdx((p) => (p - 1 + mobileImages.length) % mobileImages.length);
    }
  }, []);

  const prevIdx = (currentIdx - 1 + mobileImages.length) % mobileImages.length;
  const nextIdx = (currentIdx + 1) % mobileImages.length;

  return (
    <section className="relative h-screen flex flex-col overflow-x-clip">
      {/* Hero Heading */}
      <FadeIn delay={0.15} y={40} className="overflow-hidden w-full">
        <h1 className="hero-heading font-black uppercase tracking-tight leading-none text-center sm:text-left w-full text-[14vw] sm:text-[15vw] md:text-[16vw] lg:text-[17.5vw] mt-10 sm:mt-12 md:mt-6">
          SKY HOME
        </h1>
      </FadeIn>

      {/* Image area — fills remaining space */}
      <div className="flex-1 relative sm:pt-8 md:pt-12 lg:pt-16">
        {/* Desktop absolute images */}
        <div className="hidden sm:block">
          <FadeIn delay={0.3} y={40}>
            <Magnet padding={100} strength={2.5} className="absolute left-[4%] md:left-[5%] bottom-[40%] md:bottom-[36%] z-10 w-[180px] md:w-[270px] lg:w-[350px]">
              <img src="/jllll.png" alt="" className="w-full h-auto pointer-events-none select-none rounded-[20px] shadow-lg shadow-black/30" draggable={false} loading="lazy" />
            </Magnet>
          </FadeIn>
          <FadeIn delay={0.45} y={40}>
            <Magnet padding={80} strength={2} className="absolute left-[24%] md:left-[26%] lg:left-[28%] bottom-[22%] md:bottom-[18%] z-10 w-[120px] md:w-[170px] lg:w-[220px]">
              <img src="/16.jpg" alt="" className="w-full h-auto pointer-events-none select-none rounded-[20px] shadow-lg shadow-black/30" draggable={false} loading="lazy" />
            </Magnet>
          </FadeIn>
          <FadeIn delay={0.6} y={30}>
            <Magnet padding={150} strength={3} className="absolute left-1/2 -translate-x-1/2 bottom-[10%] md:bottom-[8%] z-10 w-[360px] md:w-[440px] lg:w-[520px]">
              <img src="/1.jpg" alt="Jack Portrait" className="w-full h-auto pointer-events-none select-none rounded-[20px] shadow-lg shadow-black/30" draggable={false} />
            </Magnet>
          </FadeIn>
        </div>

        {/* Mobile swipeable gallery */}
        <div className="flex-1 flex flex-col justify-center sm:hidden px-4 overflow-hidden h-full"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div className="flex items-center justify-center gap-3">
            <div className="w-[80px] xs:w-[100px] flex-shrink-0 opacity-40 blur-[1px] scale-90 transition-all duration-300 rounded-[20px] overflow-hidden shadow-lg shadow-black/30" style={{ aspectRatio: "3/4" }}>
              <img src={mobileImages[prevIdx]} alt="" className="w-full h-full object-cover pointer-events-none select-none" loading="lazy" />
            </div>
            <div className="w-[180px] xs:w-[210px] flex-shrink-0 transition-all duration-300 rounded-[20px] overflow-hidden shadow-2xl shadow-black/40 z-10" style={{ aspectRatio: "3/4" }}>
              <img src={mobileImages[currentIdx]} alt="" className="w-full h-full object-cover pointer-events-none select-none" loading="lazy" />
            </div>
            <div className="w-[80px] xs:w-[100px] flex-shrink-0 opacity-40 blur-[1px] scale-90 transition-all duration-300 rounded-[20px] overflow-hidden shadow-lg shadow-black/30" style={{ aspectRatio: "3/4" }}>
              <img src={mobileImages[nextIdx]} alt="" className="w-full h-full object-cover pointer-events-none select-none" loading="lazy" />
            </div>
          </div>
          <div className="flex justify-center gap-2 mt-6">
            {mobileImages.map((_, i) => (
              <button key={i} onClick={() => setCurrentIdx(i)} className={`w-2 h-2 rounded-full transition-all duration-300 ${i === currentIdx ? "bg-[#D0D8E8] scale-125 shadow-[0_0_6px_rgba(208,216,232,0.5)]" : "bg-[#D0D8E8]/25"}`} />
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar — gradient names (below images) */}
      <div className="pb-5 sm:pb-6 md:pb-8 px-6 md:px-10 z-20">
        <FadeIn delay={0.5} y={20}>
          <div className="flex flex-wrap gap-x-4 gap-y-1 max-w-[380px] xs:max-w-[480px] sm:max-w-[580px] md:max-w-[680px]">
            {["YUYU","XUJieJie","ZHUYUN","YILEN","JIANGLIN","CHENG","YUFENG","HELIE","QIUQIU","ROU"].map((name,i)=>{
              const g=[["#F0B866","#E8A070"],["#E8A0A0","#D4A0A0"],["#C0B8D8","#A8C8E0"],["#A8C8E0","#D0D8E8"],["#D0D8E8","#F0B866"],["#F0B866","#E8A0A0"],["#E8A0A0","#C0B8D8"],["#C0B8D8","#A8C8E0"],["#A8C8E0","#D0D8E8"],["#D0D8E8","#F0B866"]];
              const c=g[i%g.length];
              return <span key={i} className="font-black uppercase tracking-wider" style={{fontSize:"clamp(0.85rem,1.6vw,1.6rem)",background:`linear-gradient(135deg,${c[0]},${c[1]})`,WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text"}}>{name}{i<9?<span className="text-[#D0D8E8]/30 mx-1.5" style={{WebkitTextFillColor:"rgba(208,216,232,0.3)"}}>&#10022;</span>:<span className="text-[#D0D8E8]/50 ml-1" style={{WebkitTextFillColor:"rgba(208,216,232,0.5)"}}>!</span>}</span>;
            })}
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default HeroSection;
