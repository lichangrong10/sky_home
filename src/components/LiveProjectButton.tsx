import { motion } from "framer-motion";

const LiveProjectButton = () => {
  return (
    <motion.button
      whileHover={{ backgroundColor: "rgba(208, 216, 232, 0.1)" }}
      whileTap={{ scale: 0.95 }}
      className="rounded-full border-2 border-[#D0D8E8] px-8 py-3 sm:px-10 sm:py-3.5 text-sm sm:text-base text-[#D0D8E8] font-medium uppercase tracking-widest bg-transparent cursor-pointer"
    >
      Live Project
    </motion.button>
  );
};

export default LiveProjectButton;
