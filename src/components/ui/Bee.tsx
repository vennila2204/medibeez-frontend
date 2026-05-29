import { useRef, useState } from "react";
import { motion, useAnimationControls } from "motion/react";
import beeImg from "@/assets/bee-animated.png";

interface BeeProps {
  className?: string;
  size?: number;
}

/**
 * Animated honeybee mascot with idle float + premium hover flutter.
 */
export function Bee({ className = "", size = 400 }: BeeProps) {
  return (
    <div
      className={`${className} inline-block bee-mascot`}
      style={{ width: size, height: size }}
    >
      <img
        src={beeImg}
        alt="MediBeez mascot"
        width={size}
        height={size}
        draggable={false}
        className="w-full h-full object-contain drop-shadow-lg select-none bee-mascot__img"
      />
    </div>
  );
}

export function FlyingBee(_: { delay?: number }) {
  return null;
}

/**
 * RoamingBee — when tapped/clicked it flies to random points
 * inside its parent container, then settles back at its origin.
 */
interface RoamingBeeProps {
  className?: string;
  size?: number;
  hops?: number;
}

export function RoamingBee({ className = "", size = 64, hops = 6 }: RoamingBeeProps) {
  const ref = useRef<HTMLDivElement>(null);
  const controls = useAnimationControls();
  const [flying, setFlying] = useState(false);

  const startRoam = async () => {
    if (flying) return;
    const parent = ref.current?.parentElement;
    if (!parent) return;
    const pr = parent.getBoundingClientRect();
    const br = ref.current!.getBoundingClientRect();
    const originX = br.left - pr.left;
    const originY = br.top - pr.top;
    const maxX = pr.width - br.width;
    const maxY = pr.height - br.height;

    setFlying(true);
    for (let i = 0; i < hops; i++) {
      const tx = Math.random() * maxX - originX;
      const ty = Math.random() * maxY - originY;
      await controls.start({
        x: tx,
        y: ty,
        rotate: tx > 0 ? 12 : -12,
        scale: 1.05,
        transition: { duration: 0.9, ease: [0.4, 0, 0.2, 1] },
      });
    }
    await controls.start({
      x: 0,
      y: 0,
      rotate: 0,
      scale: 1,
      transition: { duration: 0.8, ease: "easeOut" },
    });
    setFlying(false);
  };

  return (
    <motion.div
      ref={ref}
      animate={controls}
      onClick={startRoam}
      onTouchStart={startRoam}
      className={`${className} inline-block cursor-pointer select-none`}
      style={{ width: size, height: size, willChange: "transform" }}
      whileHover={{ scale: 1.08 }}
    >
      <img
        src={beeImg}
        alt="MediBeez mascot"
        draggable={false}
        className={`w-full h-full object-contain drop-shadow-lg pointer-events-none ${flying ? "" : "bee-mascot__img"}`}
      />
    </motion.div>
  );
}
