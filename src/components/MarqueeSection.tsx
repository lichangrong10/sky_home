import { useState, useEffect, useCallback } from "react";
import MagicBento from "./MagicBento";

const allImages = [
  "/16.jpg", "/18.jpg", "/12.jpg",
  "/13.jpg", "/17.jpg", "/19.jpg", "/20.jpg",
  "/21.jpg", "/2.jpg", "/22.jpg", "/3.jpg", "/4.jpg",
  "/5.jpg", "/6.jpg", "/7.jpg", "/8.jpg", "/9.jpg",
  "/23.jpg",
];

const PER_PAGE = 6;
const totalPages = Math.ceil(allImages.length / PER_PAGE);

const MarqueeSection = () => {
  const [page, setPage] = useState(0);
  const [prevPage, setPrevPage] = useState(totalPages - 1);
  const [transitioning, setTransitioning] = useState(false);

  const goTo = useCallback((next: number) => {
    if (transitioning || next === page) return;
    setPrevPage(page);
    setTransitioning(true);
    setPage(((next % totalPages) + totalPages) % totalPages);
    setTimeout(() => setTransitioning(false), 700);
  }, [page, transitioning]);

  // Auto-advance every 3s
  useEffect(() => {
    const timer = setInterval(() => goTo(page + 1), 3000);
    return () => clearInterval(timer);
  }, [page, goTo]);

  const padImages = (arr: string[], count: number) => { const r = [...arr]; while (r.length < count) r.push(r[r.length - 1]); return r; };
  const currentImages = padImages(allImages.slice(page * PER_PAGE, (page + 1) * PER_PAGE), PER_PAGE);
  const prevImages = padImages(allImages.slice(prevPage * PER_PAGE, (prevPage + 1) * PER_PAGE), PER_PAGE);

  return (
    <section className="bg-night-base pt-16 xs:pt-20 sm:pt-24 md:pt-32 pb-20 xs:pb-24 sm:pb-28 overflow-hidden">
      {/* Heading */}
      <h2
        className="hero-heading font-black uppercase text-center mb-8 xs:mb-10 sm:mb-12"
        style={{ fontSize: "clamp(1.4rem, 7vw, 100px)" }}
      >
        Gallery
      </h2>

      <div className="px-4 xs:px-5 sm:px-6 md:px-8 lg:px-10 max-w-[68em] mx-auto">
        {/* ── Bento grid with cross-fade ── */}
        <div className="relative">
          {/* Current page */}
          <div
            className="transition-all duration-[700ms] ease-in-out"
            style={{
              opacity: 1,
              position: "relative",
              zIndex: 2,
            }}
          >
            <MagicBento
              bentoImages={currentImages}
              textAutoHide={false}
              enableStars={true}
              enableSpotlight={true}
              enableBorderGlow={true}
              enableTilt={true}
              enableMagnetism={true}
              clickEffect={true}
              spotlightRadius={300}
              particleCount={10}
              glowColor="208, 216, 232"
            />
          </div>

          {/* Prev page (fading out) */}
          <div
            className="absolute inset-0 transition-all duration-[700ms] ease-in-out"
            style={{
              opacity: transitioning ? 1 : 0,
              zIndex: transitioning ? 3 : 1,
              pointerEvents: "none",
            }}
          >
            <MagicBento
              bentoImages={prevImages}
              textAutoHide={false}
              enableStars={false}
              enableSpotlight={false}
              enableBorderGlow={false}
              clickEffect={false}
              enableTilt={false}
              enableMagnetism={false}
              disableAnimations={true}
              spotlightRadius={300}
              particleCount={0}
              glowColor="208, 216, 232"
            />
          </div>
        </div>

        {/* ── Water reflection ── */}
        <div className="relative mt-2 h-20 xs:h-24 sm:h-28 md:h-32 rounded-2xl sm:rounded-3xl overflow-hidden">
          <div className="absolute inset-0 z-0 rounded-2xl sm:rounded-3xl"
            style={{
              background: "linear-gradient(to bottom, rgba(8,12,26,0.2) 0%, rgba(8,12,26,0.8) 100%)",
            }}
          />
          {/* Reflection grid — simplified row layout */}
          <div className="flex gap-2 xs:gap-3 sm:gap-4 h-full p-2 xs:p-3 sm:p-4">
            {currentImages.slice(0, 4).map((src, ci) => (
              <div
                key={ci}
                className="flex-1 overflow-hidden rounded-lg xs:rounded-xl sm:rounded-2xl"
                style={{
                  transform: "scaleY(-1)",
                  maskImage: "linear-gradient(to bottom, black 35%, transparent 100%)",
                  WebkitMaskImage: "linear-gradient(to bottom, black 35%, transparent 100%)",
                }}
              >
                <div className="w-full h-full relative">
                  <img
                    src={src}
                    alt=""
                    className="w-full h-full object-cover blur-[2px]"
                    loading="lazy"
                  />
                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      background: `
                        repeating-linear-gradient(
                          90deg,
                          transparent 0px,
                          rgba(255,255,255,0.018) 2px,
                          transparent 4px,
                          rgba(255,255,255,0.01) 8px,
                          transparent 12px
                        )
                      `,
                      animation: "ripple 6s ease-in-out infinite alternate",
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
          {/* Shimmer line */}
          <div className="absolute top-0 left-0 right-0 h-px z-10"
            style={{
              background: "linear-gradient(to right, transparent 10%, rgba(208,216,232,0.35) 30%, rgba(208,216,232,0.6) 50%, rgba(208,216,232,0.35) 70%, transparent 90%)",
            }}
          />
        </div>

        {/* ── Navigation controls ── */}
        <div className="flex items-center justify-center gap-4 xs:gap-6 mt-6 xs:mt-7 sm:mt-8">
          {/* Prev button */}
          <button
            onClick={() => goTo(page - 1)}
            className="w-10 h-10 xs:w-11 xs:h-11 sm:w-12 sm:h-12 rounded-full border border-[#D0D8E8]/30 flex items-center justify-center text-[#D0D8E8] hover:bg-[#D0D8E8]/10 hover:border-[#D0D8E8]/60 transition-all duration-300"
            aria-label="Previous"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>

          {/* Dots */}
          <div className="flex gap-2 sm:gap-3">
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className={`w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full transition-all duration-500 ${i === page
                    ? "bg-[#D0D8E8] scale-125 shadow-[0_0_10px_rgba(208,216,232,0.6)]"
                    : "bg-[#D0D8E8]/20 hover:bg-[#D0D8E8]/40"
                  }`}
                aria-label={`Page ${i + 1}`}
              />
            ))}
          </div>

          {/* Next button */}
          <button
            onClick={() => goTo(page + 1)}
            className="w-10 h-10 xs:w-11 xs:h-11 sm:w-12 sm:h-12 rounded-full border border-[#D0D8E8]/30 flex items-center justify-center text-[#D0D8E8] hover:bg-[#D0D8E8]/10 hover:border-[#D0D8E8]/60 transition-all duration-300"
            aria-label="Next"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default MarqueeSection;
