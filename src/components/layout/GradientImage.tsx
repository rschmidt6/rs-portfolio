import { motion } from "framer-motion";

const GradientImage = ({ src = "", alt = "", className = "" }) => {
  return (
    // Wrapper div maintains aspect ratio and clips any overflow
    <div className={`relative overflow-hidden ${className}`}>
      {/* Base image - object-cover ensures proper scaling */}
      <img src={src} alt={alt} className="w-full h-full object-cover" />

      {/* Primary animated gradient overlay
            This creates the main opacity wave moving up and down */}
      <motion.div
        className="absolute inset-0"
        // Animate from slightly above to slightly below the container
        // The 50% horizontal keeps it centered while moving vertically
        animate={{
          backgroundPosition: ["50% -50%", "50% 150%", "50% -50%"],
        }}
        transition={{
          duration: 20, // Complete cycle takes 18 seconds
          ease: "easeInOut", // Smooth acceleration and deceleration
          repeat: Infinity, // Never stop animating
        }}
        style={{
          background: `linear-gradient(
              180deg,
              rgba(0,0,0,0) 0%,        /* Fully transparent at edges */
              rgba(0,0,0,0.08) 20%,    /* Slight darkening */
              rgba(0,0,0,0.2) 50%,     /* Peak opacity in middle */
              rgba(0,0,0,0.08) 80%,    /* Fade back out */
              rgba(0,0,0,0) 100%       /* Return to transparent */
            )`,
          backgroundSize: "100% 200%", // Double height enables smooth infinite scroll
        }}
      />

      {/* Secondary gradient moving in opposite direction
            This adds depth and complexity to the animation */}
      <motion.div
        className="absolute inset-0"
        // Opposite direction to primary gradient
        animate={{
          backgroundPosition: ["50% 150%", "50% -50%", "50% 150%"],
        }}
        transition={{
          duration: 28, // Slower than primary gradient
          ease: "easeInOut",
          repeat: Infinity,
        }}
        style={{
          background: `linear-gradient(
              180deg,
              rgba(0,0,0,0) 0%,
              rgba(0,0,0,0.1) 30%,
              rgba(0,0,0,0.15) 50%,
              rgba(0,0,0,0.1) 70%,
              rgba(0,0,0,0) 100%
            )`,
          backgroundSize: "100% 200%",
        }}
      />

      {/* Static top fade for consistent readability
            This ensures the top area always maintains some darkness */}
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(
              to bottom,
              rgba(0,0,0,0.2) 0%,      /* Darker at very top */
              rgba(0,0,0,0.08) 15%,    /* Quick fade to subtle */
              transparent 30%           /* Completely fade out */
            )`,
        }}
      />
    </div>
  );
};

export default GradientImage;
