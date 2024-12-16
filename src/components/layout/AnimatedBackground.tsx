import { motion } from "framer-motion";

const AnimatedBackground = () => {
  // Mid-range number of columns and rows
  const COLUMNS = 30;
  const ROWS = 16;
  const TOTAL_DOTS = COLUMNS * ROWS;

  // Create dots with balanced parameters
  const dots = Array.from({ length: TOTAL_DOTS }, (_, i) => ({
    id: i,
    x: (i % COLUMNS) * (100 / COLUMNS),
    y: Math.floor(i / COLUMNS) * (100 / ROWS),
    size: 3.5,
    // Semi-random durations but more optimized
    duration: 20 + (i % 10) * 2,
    delay: i % 4,
  }));

  return (
    <motion.div
      className="fixed inset-0 -z-10 overflow-hidden bg-gradient-to-br from-stone-800 to-stone-900"
      animate={{
        backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
      }}
      style={{
        backgroundSize: "400% 400%",
      }}
      transition={{
        duration: 40,
        repeat: Infinity,
        ease: "linear",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-stone-900/50 to-transparent" />

      {dots.map((dot) => (
        <motion.div
          key={dot.id}
          className="absolute rounded-full bg-stone-400 opacity-[0.12]"
          style={{
            left: `${dot.x}%`,
            top: `${dot.y}%`,
            width: dot.size,
            height: dot.size,
          }}
          animate={{
            x: [0, 5, 0],
            y: [0, 10, 0],
          }}
          transition={{
            duration: dot.duration,
            repeat: Infinity,
            delay: dot.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </motion.div>
  );
};

export default AnimatedBackground;
