import { useEffect, useRef } from "react";

const AuroraEffect = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    let time = 0;

    const drawAurora = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Create multiple aurora layers
      const layers = [
        { color: "hsl(274, 68%, 59%)", yOffset: 0.15, amplitude: 80, speed: 0.0008 },
        { color: "hsl(277, 100%, 74%)", yOffset: 0.2, amplitude: 60, speed: 0.001 },
        { color: "hsl(280, 80%, 65%)", yOffset: 0.25, amplitude: 100, speed: 0.0006 },
        { color: "hsl(260, 70%, 55%)", yOffset: 0.18, amplitude: 70, speed: 0.0012 },
      ];

      layers.forEach((layer, layerIndex) => {
        ctx.beginPath();
        
        const baseY = canvas.height * layer.yOffset;
        const points: { x: number; y: number }[] = [];

        // Generate wave points
        for (let x = 0; x <= canvas.width; x += 5) {
          const wave1 = Math.sin((x * 0.003) + (time * layer.speed * 1000)) * layer.amplitude;
          const wave2 = Math.sin((x * 0.005) + (time * layer.speed * 800) + layerIndex) * (layer.amplitude * 0.5);
          const wave3 = Math.sin((x * 0.001) + (time * layer.speed * 600)) * (layer.amplitude * 0.3);
          
          const y = baseY + wave1 + wave2 + wave3;
          points.push({ x, y });
        }

        // Draw the aurora shape
        ctx.moveTo(0, canvas.height * 0.5);
        ctx.lineTo(0, points[0].y);

        points.forEach((point, i) => {
          if (i < points.length - 1) {
            const nextPoint = points[i + 1];
            const cpX = (point.x + nextPoint.x) / 2;
            const cpY = (point.y + nextPoint.y) / 2;
            ctx.quadraticCurveTo(point.x, point.y, cpX, cpY);
          }
        });

        ctx.lineTo(canvas.width, canvas.height * 0.5);
        ctx.lineTo(canvas.width, 0);
        ctx.lineTo(0, 0);
        ctx.closePath();

        // Create gradient for this layer
        const gradient = ctx.createLinearGradient(0, 0, 0, canvas.height * 0.5);
        gradient.addColorStop(0, "transparent");
        gradient.addColorStop(0.3, layer.color.replace(")", ", 0.03)").replace("hsl", "hsla"));
        gradient.addColorStop(0.5, layer.color.replace(")", ", 0.08)").replace("hsl", "hsla"));
        gradient.addColorStop(0.7, layer.color.replace(")", ", 0.04)").replace("hsl", "hsla"));
        gradient.addColorStop(1, "transparent");

        ctx.fillStyle = gradient;
        ctx.fill();

        // Add glowing edge
        const edgeGradient = ctx.createLinearGradient(0, baseY - layer.amplitude, 0, baseY + layer.amplitude * 2);
        edgeGradient.addColorStop(0, "transparent");
        edgeGradient.addColorStop(0.4, layer.color.replace(")", ", 0.15)").replace("hsl", "hsla"));
        edgeGradient.addColorStop(0.5, layer.color.replace(")", ", 0.25)").replace("hsl", "hsla"));
        edgeGradient.addColorStop(0.6, layer.color.replace(")", ", 0.15)").replace("hsl", "hsla"));
        edgeGradient.addColorStop(1, "transparent");

        ctx.beginPath();
        points.forEach((point, i) => {
          if (i === 0) {
            ctx.moveTo(point.x, point.y);
          } else {
            const prevPoint = points[i - 1];
            const cpX = (prevPoint.x + point.x) / 2;
            const cpY = (prevPoint.y + point.y) / 2;
            ctx.quadraticCurveTo(prevPoint.x, prevPoint.y, cpX, cpY);
          }
        });

        ctx.strokeStyle = edgeGradient;
        ctx.lineWidth = 3;
        ctx.stroke();
      });

      // Add vertical light rays
      const rayCount = 8;
      for (let i = 0; i < rayCount; i++) {
        const x = (canvas.width / rayCount) * i + Math.sin(time * 0.0005 + i) * 50;
        const opacity = 0.02 + Math.sin(time * 0.001 + i * 0.5) * 0.02;
        
        const rayGradient = ctx.createLinearGradient(x, 0, x, canvas.height * 0.4);
        rayGradient.addColorStop(0, `hsla(274, 68%, 59%, ${opacity})`);
        rayGradient.addColorStop(0.5, `hsla(277, 100%, 74%, ${opacity * 1.5})`);
        rayGradient.addColorStop(1, "transparent");

        ctx.beginPath();
        ctx.fillStyle = rayGradient;
        ctx.fillRect(x - 30, 0, 60, canvas.height * 0.4);
      }

      time++;
      animationRef.current = requestAnimationFrame(drawAurora);
    };

    resizeCanvas();
    drawAurora();

    window.addEventListener("resize", resizeCanvas);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none"
      style={{ zIndex: 0 }}
    />
  );
};

export default AuroraEffect;
