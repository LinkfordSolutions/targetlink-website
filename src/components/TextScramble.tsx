import { useEffect, useState, useRef } from "react";

interface TextScrambleProps {
  text: string;
  className?: string;
  delay?: number;
}

export const TextScramble = ({ text, className = "", delay = 0 }: TextScrambleProps) => {
  const [displayText, setDisplayText] = useState("");
  const [isScrambling, setIsScrambling] = useState(false);
  const frameRequest = useRef<number>();
  const frame = useRef(0);
  const queue = useRef<Array<{ from: string; to: string; start: number; end: number; char?: string }>>([]);

  const chars = "!<>-_\\/[]{}—=+*^?#________";

  const randomChar = () => chars[Math.floor(Math.random() * chars.length)];

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsScrambling(true);
      const length = Math.max(text.length, displayText.length);
      queue.current = [];

      for (let i = 0; i < length; i++) {
        const from = displayText[i] || "";
        const to = text[i] || "";
        const start = Math.floor(Math.random() * 40);
        const end = start + Math.floor(Math.random() * 40);
        queue.current.push({ from, to, start, end });
      }

      frame.current = 0;
      update();
    }, delay);

    return () => {
      clearTimeout(timer);
      if (frameRequest.current) {
        cancelAnimationFrame(frameRequest.current);
      }
    };
  }, [text]);

  const update = () => {
    let output = "";
    let complete = 0;

    for (let i = 0; i < queue.current.length; i++) {
      const { from, to, start, end, char } = queue.current[i];

      if (frame.current >= end) {
        complete++;
        output += to;
      } else if (frame.current >= start) {
        if (!char || Math.random() < 0.28) {
          queue.current[i].char = randomChar();
        }
        output += queue.current[i].char;
      } else {
        output += from;
      }
    }

    setDisplayText(output);

    if (complete === queue.current.length) {
      setIsScrambling(false);
    } else {
      frame.current++;
      frameRequest.current = requestAnimationFrame(update);
    }
  };

  return <span className={className}>{displayText || text}</span>;
};
