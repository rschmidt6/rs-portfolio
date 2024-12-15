import { motion } from "framer-motion";

const CursorBlinker = () => {
  const cursorVariants = {
    blinking: {
      opacity: [0, 0, 1, 1],
      transition: {
        duration: 1.5,
        repeat: Infinity,
        repeatDelay: 0,
        ease: "linear",
        times: [0, 0.5, 0.5, 1],
      },
    },
  };

  return (
    <motion.div
      variants={cursorVariants}
      animate="blinking"
      className="inline-block h-4 w-[1px] translate-x-1 bg-[#FF9262]"
    />
  );
};

const TypingText = () => {
  const text = "OPEN FOR WORK";

  const textVariants = {
    hidden: { opacity: 0, width: 0 },
    visible: {
      opacity: 1,
      width: "auto",
      transition: {
        duration: 2.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="flex items-center text-sm font-medium tracking-wider">
      <motion.span
        variants={textVariants}
        initial="hidden"
        animate="visible"
        className="text-[#FF9262] whitespace-nowrap overflow-hidden"
      >
        {text}
      </motion.span>
      <CursorBlinker />
    </div>
  );
};

export default TypingText;
