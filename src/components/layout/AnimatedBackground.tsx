import { motion } from "framer-motion";

const AnimatedBackground = () => {
  // Constants for grid layout
  const COLUMNS = 40;
  const ROWS = 25;
  const TOTAL_DOTS = COLUMNS * ROWS;

  // Create array of dots with position calculations
  const dots = Array.from({ length: TOTAL_DOTS }, (_, i) => ({
    id: i,
    x: (i % COLUMNS) * (100 / COLUMNS),
    y: Math.floor(i / COLUMNS) * (100 / ROWS),
    size: 3,
    duration: Math.random() * 15 + 25,
    delay: Math.random() * 2,
  }));

  return (
    // Wrapper div with animated gradient
    <motion.div
      className="fixed inset-0 -z-10 overflow-hidden bg-gradient-to-br from-stone-800 to-stone-900"
      // Animate the background position for gradient movement
      animate={{
        backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
      }}
      // Style for gradient size and initial position
      style={{
        backgroundSize: "400% 400%",
      }}
      // Transition for smooth gradient movement
      transition={{
        duration: 40,
        repeat: Infinity,
        ease: "linear",
      }}
    >
      {/* Overlay with static gradient for depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-stone-900/50 to-transparent" />

      {/* Animated dots */}
      {dots.map((dot) => (
        <motion.div
          key={dot.id}
          className="absolute rounded-full bg-stone-400 opacity-10"
          style={{
            left: `${dot.x}%`,
            top: `${dot.y}%`,
            width: dot.size,
            height: dot.size,
          }}
          animate={{
            x: [0, 10, 0],
            y: [0, 15, 0],
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
