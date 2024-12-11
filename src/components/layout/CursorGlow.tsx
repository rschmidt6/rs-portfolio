import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const CursorGlow = () => {
  // State to track mouse cursor position
  // Initialize at 0,0 but will update as soon as mouse moves
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Function to update the stored mouse position
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX, // Horizontal position from left edge of viewport
        y: e.clientY, // Vertical position from top edge of viewport
      });
    };

    // Add event listener when component mounts
    window.addEventListener("mousemove", updateMousePosition);

    // Cleanup function to remove event listener when component unmounts
    // This prevents memory leaks
    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, []); // Empty dependency array means this effect runs once on mount

  return (
    <motion.div
      // Basic styling:
      // - pointer-events-none ensures the div doesn't interfere with clicks
      // - fixed positioning covers the entire viewport
      // - z-30 keeps it above background but below content
      className="pointer-events-none fixed inset-0 z-30"
      // Animate the background gradient to follow mouse position
      animate={{
        background: `radial-gradient(
          800px circle at ${mousePosition.x}px ${mousePosition.y}px, 
          rgba(255,176,102,0.02),  /* Warmer orange color with slightly increased opacity */
          transparent 60%           /* Fade to transparent at 60% of the radius */
        )`,
      }}
      // Animation configuration:
      transition={{
        duration: 3.5, // How long the animation takes (in seconds)
        // Custom ease curve:
        // [0.16, 1, 0.3, 1] represents a cubic bezier curve where:
        // - 0.16 gives a slow start
        // - 1 exaggerates the ease
        // - 0.3, 1 creates a smooth landing
        ease: [0.16, 0.8, 0.3, 0.8],
      }}
    />
  );
};

export default CursorGlow;
