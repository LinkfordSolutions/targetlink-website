import { useEffect, useState } from "react";
import { useInView } from "framer-motion";
import { useRef } from "react";

export const useCounter = (
  end: number,
  duration: number = 2000,
  start: number = 0
) => {
  const [count, setCount] = useState(start);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (!isInView || hasAnimated) return;

    setHasAnimated(true);
    const startTime = Date.now();
    const endTime = startTime + duration;

    const updateCount = () => {
      const now = Date.now();
      const progress = Math.min((now - startTime) / duration, 1);

      // Easing function (easeOutExpo)
      const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);

      const currentCount = Math.floor(start + (end - start) * easeProgress);
      setCount(currentCount);

      if (now < endTime) {
        requestAnimationFrame(updateCount);
      } else {
        setCount(end);
      }
    };

    requestAnimationFrame(updateCount);
  }, [isInView, end, duration, start, hasAnimated]);

  return { count, ref };
};
