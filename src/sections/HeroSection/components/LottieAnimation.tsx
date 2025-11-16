import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

export const LottieAnimation = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = 400;
    canvas.height = 400;

    const waves: Array<{
      y: number;
      amplitude: number;
      frequency: number;
      phase: number;
      speed: number;
      color: string;
      opacity: number;
    }> = [
      { y: 100, amplitude: 20, frequency: 0.02, phase: 0, speed: 0.02, color: "#0066FF", opacity: 0.12 },
      { y: 150, amplitude: 25, frequency: 0.025, phase: Math.PI / 2, speed: 0.025, color: "#00D4FF", opacity: 0.1 },
      { y: 200, amplitude: 30, frequency: 0.03, phase: Math.PI, speed: 0.03, color: "#7B61FF", opacity: 0.08 },
      { y: 250, amplitude: 22, frequency: 0.022, phase: Math.PI * 1.5, speed: 0.028, color: "#0066FF", opacity: 0.06 },
      { y: 300, amplitude: 28, frequency: 0.028, phase: Math.PI * 0.75, speed: 0.032, color: "#00D4FF", opacity: 0.05 },
    ];

    const circles: Array<{
      x: number;
      y: number;
      radius: number;
      vx: number;
      vy: number;
      color: string;
      opacity: number;
    }> = [];

    for (let i = 0; i < 8; i++) {
      circles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 30 + 20,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        color: ["#0066FF", "#00D4FF", "#7B61FF"][Math.floor(Math.random() * 3)],
        opacity: Math.random() * 0.08 + 0.02,
      });
    }

    let frame = 0;

    const animate = () => {
      ctx.fillStyle = "rgba(255, 255, 255, 0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      // Draw waves
      waves.forEach((wave) => {
        ctx.beginPath();
        ctx.moveTo(0, wave.y);

        for (let x = 0; x < canvas.width; x++) {
          const y = wave.y + Math.sin(x * wave.frequency + wave.phase + frame * wave.speed) * wave.amplitude;
          ctx.lineTo(x, y);
        }

        ctx.lineTo(canvas.width, canvas.height);
        ctx.lineTo(0, canvas.height);
        ctx.closePath();

        ctx.fillStyle = wave.color + Math.floor(wave.opacity * 255).toString(16).padStart(2, '0');
        ctx.fill();

        wave.phase += wave.speed;
      });

      // Draw floating circles
      circles.forEach((circle) => {
        circle.x += circle.vx;
        circle.y += circle.vy;

        if (circle.x < -circle.radius) circle.x = canvas.width + circle.radius;
        if (circle.x > canvas.width + circle.radius) circle.x = -circle.radius;
        if (circle.y < -circle.radius) circle.y = canvas.height + circle.radius;
        if (circle.y > canvas.height + circle.radius) circle.y = -circle.radius;

        const gradient = ctx.createRadialGradient(circle.x, circle.y, 0, circle.x, circle.y, circle.radius);
        gradient.addColorStop(0, circle.color + Math.floor(circle.opacity * 255).toString(16).padStart(2, '0'));
        gradient.addColorStop(1, circle.color + '00');

        ctx.beginPath();
        ctx.arc(circle.x, circle.y, circle.radius, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();
      });

      frame++;
      requestAnimationFrame(animate);
    };

    animate();
  }, []);

  return (
    <motion.div
      className="absolute inset-0 opacity-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.2 }}
      transition={{ duration: 1 }}
    >
      <canvas ref={canvasRef} className="w-full h-full" />
    </motion.div>
  );
};
