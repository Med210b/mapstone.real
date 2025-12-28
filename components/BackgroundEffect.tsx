import React from 'react';
import { motion } from "framer-motion";

interface BackgroundEffectProps {
  color?: string;    // You can pass a hex code (e.g., "#D4AF37")
  opacity?: number;  // Control how transparent it is (default 0.1)
}

function FloatingPaths({ position, color, opacity }: { position: number, color: string, opacity: number }) {
  const paths = Array.from({ length: 36 }, (_, i) => ({
    id: i,
    d: `M-${380 - i * 5 * position} -${189 + i * 6}C-${
      380 - i * 5 * position
    } -${189 + i * 6} -${312 - i * 5 * position} ${216 - i * 6} ${
      152 - i * 5 * position
    } ${343 - i * 6}C${616 - i * 5 * position} ${470 - i * 6} ${
      684 - i * 5 * position
    } ${875 - i * 6} ${684 - i * 5 * position} ${875 - i * 6}`,
    width: 0.5 + i * 0.03,
  }));

  return (
    <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 696 316" fill="none">
      {paths.map((path) => (
        <motion.path
          key={path.id}
          d={path.d}
          stroke={color} 
          strokeWidth={path.width}
          strokeOpacity={opacity + path.id * 0.003} // Slight variation per line
          initial={{ pathLength: 0.3, opacity: 0.6 }}
          animate={{
            pathLength: 1,
            opacity: [0.3, 0.6, 0.3],
            pathOffset: [0, 1, 0],
          }}
          transition={{
            duration: 20 + Math.random() * 10,
            repeat: Number.POSITIVE_INFINITY,
            ease: "linear",
          }}
        />
      ))}
    </svg>
  );
}

const BackgroundEffect: React.FC<BackgroundEffectProps> = ({ color = "#D4AF37", opacity = 0.1 }) => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* We render two sets of paths for a full crossing effect */}
      <FloatingPaths position={1} color={color} opacity={opacity} />
      <FloatingPaths position={-1} color={color} opacity={opacity} />
    </div>
  );
};

export default BackgroundEffect;