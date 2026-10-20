import React, { useRef, useEffect } from 'react';

// Exact reference inverse multiplier timing from Aviator-_8Beb6PJ.js
function calcInverseTimeMs(m) {
  const num = Math.max(1.00, Number(m) || 1.00);
  if (num <= 1.2) return ((num - 1) / 0.05) * 1000;
  if (num <= 3) return (4 + (num - 1.2) / 0.1) * 1000;
  if (num <= 8) return (22 + (num - 3) / 0.4) * 1000;
  return (34.5 + (num - 8)) * 1000;
}

export default function AviatorCanvas({ phase, multiplier, crashPoint, onPlanePos }) {
  const canvasRef = useRef(null);
  const animRef = useRef(null);
  const flyStartRef = useRef(0);
  const sunburstRotRef = useRef(0);
  const gridDotsHorizRef = useRef(0);
  const gridDotsVertRef = useRef(0);
  const waveActiveRef = useRef(false);
  const crashPosRef = useRef(null);
  const lastPlanePosRef = useRef(null);
  const onPlanePosRef = useRef(onPlanePos);

  onPlanePosRef.current = onPlanePos;

  // Exact reference ascent time from Aviator-_8Beb6PJ.js (w = 5e3 = 5000ms)
  const FLY_IN_DURATION = 5000;

  useEffect(() => {
    if (phase === 'flying') {
      const estimatedElapsed = calcInverseTimeMs(multiplier);
      flyStartRef.current = Date.now() - estimatedElapsed;
      waveActiveRef.current = estimatedElapsed >= FLY_IN_DURATION;
      crashPosRef.current = null;
    } else if (phase === 'betting' || phase === 'waiting') {
      flyStartRef.current = 0;
      waveActiveRef.current = false;
      crashPosRef.current = null;
    } else if (phase === 'crashed') {
      if (lastPlanePosRef.current) {
        crashPosRef.current = { ...lastPlanePosRef.current };
      }
    }
  }, [phase, multiplier]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    function renderFrame() {
      const ctx = canvas.getContext('2d');
      const dpr = window.devicePixelRatio || 1;
      const width = canvas.offsetWidth;
      const height = canvas.offsetHeight;

      if (canvas.width !== width * dpr || canvas.height !== height * dpr) {
        canvas.width = width * dpr;
        canvas.height = height * dpr;
      }

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.imageSmoothingEnabled = true;
      ctx.clearRect(0, 0, width, height);

      const isMobile = width < 768;
      const bottomMargin = height * 0.14;
      const startX = 0.1 * width + (isMobile ? 20 : 0);
      const targetX = width * (isMobile ? 0.7 : 0.8);
      const targetY = isMobile ? height * 0.4 : height / 3;
      const startY = height - bottomMargin + (isMobile ? 16 : 15);

      const isCrashed = phase === 'crashed';
      const isFlying = phase === 'flying';
      const isBettingOrWaiting = phase === 'betting' || phase === 'waiting';

      // 1. Rotating Sunburst Rays (visible when not waiting/betting)
      if (!isBettingOrWaiting) {
        ctx.save();
        ctx.translate(0, height);
        ctx.rotate(sunburstRotRef.current);
        const rayCount = 30;
        const rayLength = Math.hypot(width, height);
        const rayWidth = isMobile ? 40 : 60;
        for (let i = 0; i < rayCount; i++) {
          ctx.beginPath();
          ctx.strokeStyle = `rgba(255, 255, 255, ${i % 2 ? 0.01 : 0.05})`;
          ctx.moveTo(0, 0);
          ctx.lineTo(rayLength, 0);
          ctx.lineWidth = rayWidth;
          ctx.stroke();
          ctx.rotate((Math.PI * 2) / rayCount);
        }
        ctx.restore();
        if (!isCrashed) {
          sunburstRotRef.current += 0.002;
        }
      }

      // 2. Center Purple Radial Gradient
      if (!isCrashed && !isBettingOrWaiting) {
        const cx = width / 2;
        const cy = height / 2;
        const grad = ctx.createRadialGradient(cx, cy, 0, cx, cy, width / 2);
        grad.addColorStop(0, 'rgba(128, 0, 128, 0.7)');
        grad.addColorStop(0.3, 'rgba(128, 0, 128, 0.3)');
        grad.addColorStop(0.6, 'rgba(128, 0, 128, 0.1)');
        grad.addColorStop(1, 'rgba(128, 0, 128, 0)');
        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, width, height);
      }

      // 3. Flight Curve & Plane Position
      if (isFlying) {
        if (flyStartRef.current === 0) {
          const estimatedElapsed = calcInverseTimeMs(multiplier);
          flyStartRef.current = Date.now() - estimatedElapsed;
        }
        const elapsed = flyStartRef.current > 0 ? Date.now() - flyStartRef.current : 0;
        const k = Math.min(Math.max(elapsed / FLY_IN_DURATION, 0), 1.0);
        if (k >= 1.0) {
          waveActiveRef.current = true;
        }

        let waveY = 0;
        let waveX = 0;
        if (waveActiveRef.current) {
          waveY = height * 0.1 * Math.min(Math.max(elapsed - FLY_IN_DURATION, 0) / 2000, 1.0) * Math.sin(0.001 * elapsed);
          waveX = (waveY < 0 ? -1 : 1) * Math.abs(waveY * 1.5);
        }

        const marginX = width * 0.1;
        const marginY = height * 0.1;
        const currentX = startX + (targetX - startX) * k - marginX / 2 + waveX;
        const currentY = startY - (startY - targetY) * Math.pow(k, 2) + waveY + marginY / 2;
        const ctrlX = (startX + currentX) / 2;
        const ctrlY = startY + marginY / 2 + 2;
        const baseY = startY + marginY / 2;
        const baseX = startX - marginX / 2;

        // Draw red trail fill and red curve line
        ctx.save();
        ctx.beginPath();
        ctx.rect(0, 0, width, height - 10);
        ctx.clip();

        ctx.beginPath();
        ctx.moveTo(baseX, baseY);
        ctx.quadraticCurveTo(ctrlX, ctrlY, currentX, currentY);
        ctx.lineTo(currentX, baseY);
        ctx.lineTo(baseX, baseY);
        ctx.closePath();
        ctx.fillStyle = 'rgba(255, 0, 0, 0.3)';
        ctx.fill();

        ctx.beginPath();
        ctx.moveTo(baseX, baseY);
        ctx.quadraticCurveTo(ctrlX, ctrlY, currentX, currentY);
        ctx.lineWidth = 3;
        ctx.strokeStyle = 'red';
        ctx.stroke();
        ctx.restore();

        const planeW = isMobile ? width * 0.22 : width * 0.11;
        const planeH = isMobile ? planeW * 0.583 : height * 0.14;
        const px = startX + (targetX - startX) * k + waveX;
        const py = startY - (startY - targetY) * Math.pow(k, 2) + waveY;

        lastPlanePosRef.current = { x: px, y: py, w: planeW, h: planeH };

        if (onPlanePosRef.current) {
          onPlanePosRef.current({ x: px, y: py, w: planeW, h: planeH, tilt: 0, visible: true });
        }
      }

      // 4. Crashed State (Fly off screen smoothly, red curve vanishes immediately)
      if (isCrashed) {
        if (!crashPosRef.current) {
          crashPosRef.current = lastPlanePosRef.current
            ? { ...lastPlanePosRef.current }
            : { x: startX + (targetX - startX), y: targetY };
        }

        const pos = crashPosRef.current;
        const planeW = isMobile ? width * 0.22 : width * 0.11;
        const planeH = isMobile ? planeW * 0.583 : height * 0.14;
        const isOffscreen = pos.x > width + planeW || pos.y < -planeH;

        if (!isOffscreen) {
          pos.x += width * 0.012;
          pos.y -= height * 0.01;
        }

        if (onPlanePosRef.current) {
          onPlanePosRef.current(
            isOffscreen
              ? { visible: false }
              : { x: pos.x, y: pos.y, w: planeW, h: planeH, tilt: 0, visible: true }
          );
        }
      }

      // 5. Betting or Waiting State (Plane parked at origin)
      if (isBettingOrWaiting) {
        const planeW = isMobile ? width * 0.22 : width * 0.11;
        const planeH = isMobile ? planeW * 0.583 : height * 0.14;
        if (onPlanePosRef.current) {
          onPlanePosRef.current({ x: startX, y: startY, w: planeW, h: planeH, tilt: 0, visible: true });
        }
      }

      // 6. Coordinate Grid Dots and Axes
      const dotRadius = isMobile ? 2 : 3;
      const horizSpacing = isMobile ? 100 : 150;
      const horizY = height - 10;

      ctx.beginPath();
      for (let u = width + gridDotsHorizRef.current; u > -width; u -= horizSpacing) {
        ctx.arc(u, horizY, dotRadius, 0, Math.PI * 2);
      }
      ctx.fillStyle = 'white';
      ctx.fill();

      if (isFlying && !isCrashed) {
        gridDotsHorizRef.current -= 1.7;
        if (gridDotsHorizRef.current <= -horizSpacing) {
          gridDotsHorizRef.current = 0;
        }
      }

      const vertSpacing = 80;
      const vertX = 10;

      ctx.beginPath();
      for (let w = -height + gridDotsVertRef.current; w < height; w += vertSpacing) {
        ctx.arc(vertX, w, dotRadius, 0, Math.PI * 2);
      }
      ctx.fillStyle = 'white';
      ctx.fill();

      if (isFlying && !isCrashed) {
        gridDotsVertRef.current += 1.7;
        if (gridDotsVertRef.current >= vertSpacing) {
          gridDotsVertRef.current = 0;
        }
      }

      // Grey Axis lines
      ctx.beginPath();
      ctx.moveTo(0, height - 20);
      ctx.lineTo(width, height - 20);
      ctx.lineWidth = 1;
      ctx.strokeStyle = '#888888';
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(20, 0);
      ctx.lineTo(20, height);
      ctx.lineWidth = 1;
      ctx.strokeStyle = '#888888';
      ctx.stroke();

      animRef.current = requestAnimationFrame(renderFrame);
    }

    animRef.current = requestAnimationFrame(renderFrame);

    function onVisibilityChange() {
      if (document.visibilityState === 'visible') {
        cancelAnimationFrame(animRef.current);
        animRef.current = requestAnimationFrame(renderFrame);
      }
    }

    document.addEventListener('visibilitychange', onVisibilityChange);
    return () => {
      cancelAnimationFrame(animRef.current);
      document.removeEventListener('visibilitychange', onVisibilityChange);
    };
  }, [phase]);

  return <canvas ref={canvasRef} className="avtr-canvas" />;
}
