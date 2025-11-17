import { useEffect, useRef, ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface GSAPRevealProps {
  children: ReactNode;
  direction?: "left" | "right" | "top" | "bottom";
  delay?: number;
  duration?: number;
  className?: string;
}

export const GSAPReveal = ({
  children,
  direction = "bottom",
  delay = 0,
  duration = 1,
  className = "",
}: GSAPRevealProps) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const directions = {
      left: { x: -100, y: 0 },
      right: { x: 100, y: 0 },
      top: { x: 0, y: -100 },
      bottom: { x: 0, y: 100 },
    };

    const { x, y } = directions[direction];

    gsap.fromTo(
      ref.current,
      {
        opacity: 0,
        x,
        y,
        scale: 0.95,
      },
      {
        opacity: 1,
        x: 0,
        y: 0,
        scale: 1,
        duration,
        delay,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ref.current,
          start: "top 85%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, [direction, delay, duration]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
};
