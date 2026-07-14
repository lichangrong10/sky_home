import { useState, useRef, type ReactNode, type MouseEvent } from "react";
import { motion } from "framer-motion";

interface MagnetProps {
  children: ReactNode;
  padding?: number;
  strength?: number;
  className?: string;
}

const Magnet = ({
  children,
  padding = 150,
  strength = 3,
  className = "",
}: MagnetProps) => {
  const [isActive, setIsActive] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const ref = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const distX = e.clientX - centerX;
    const distY = e.clientY - centerY;

    const extendedBounds = {
      left: rect.left - padding,
      right: rect.right + padding,
      top: rect.top - padding,
      bottom: rect.bottom + padding,
    };

    const isInside =
      e.clientX >= extendedBounds.left &&
      e.clientX <= extendedBounds.right &&
      e.clientY >= extendedBounds.top &&
      e.clientY <= extendedBounds.bottom;

    if (isInside) {
      setIsActive(true);
      setPosition({ x: distX / strength, y: distY / strength });
    } else {
      setIsActive(false);
      setPosition({ x: 0, y: 0 });
    }
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => {
        setIsActive(false);
        setPosition({ x: 0, y: 0 });
      }}
      animate={{ x: position.x, y: position.y }}
      transition={{
        duration: isActive ? 0.3 : 0.6,
        ease: isActive ? "easeOut" : "easeInOut",
      }}
      style={{ willChange: "transform" }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default Magnet;
