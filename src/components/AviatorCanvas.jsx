import React, { useRef, useEffect } from 'react';

function calcInverseTimeMs(m) {
  const num = Number(m) || 1;
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
  const crashPosRef = useRef(null);
  const lastPlanePosRef = useRef(null);
  const onPlanePosRef = useRef(onPlanePos);

  onPlanePosRef.current = onPlanePos;

  // Verified Phase 1 ascent duration from reference video measurements (5.0 seconds)
  const TAKEOFF_ASCENT_DURATION = 5000;

  useEffect(() => {
    if (phase === 'flying') {
      const estimatedElapsed = calcInverseTimeMs(multiplier);
      flyStartRef.current = Date.now() - estimatedElapsed;
      crashPosRef.current = null;
    } else if (phase === 'betting' || phase === 'waiting') {
      flyStartRef.current = 0;
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
      const planeW = isMobile ? width * 0.22 : width * 0.11;
      const planeH = isMobile ? planeW * 0.583 : height * 0.14;

      // Coordinate axes definition
      const originX = 20;
      const groundY = height - 20;

      // Runway resting coordinates (measured normX = 0.1534, normY_bottom = 0.0533)
      const startX = Math.max(originX + 15, width * 0.1534);
      const startY = groundY - planeH * 0.35;

      // Bounded cruising wave center coordinates (normX = 0.70, normY_top = 0.44)
      const targetX = width * 0.70;
      const targetY = height * 0.44;

      const isCrashed = phase === 'crashed';
      const isFlying = phase === 'flying';
      const isBettingOrWaiting = phase === 'betting' || phase === 'waiting';

      // 1. Rotating Sunburst Rays (visible ONLY during active flight)
      if (isFlying) {
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
        sunburstRotRef.current += 0.0017;
      }

      // 2. Center Purple Radial Glow (active ONLY during active flight)
      if (isFlying) {
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

      // 3. Active Flight Trajectory & Red Graph Curve
      if (isFlying) {
        if (flyStartRef.current === 0) {
          const estimatedElapsed = calcInverseTimeMs(multiplier);
          flyStartRef.current = Date.now() - estimatedElapsed;
        }
        const elapsed = flyStartRef.current > 0 ? Date.now() - flyStartRef.current : 0;

        let px = startX;
        let py = startY;
        let tilt = 0;

        if (elapsed <= TAKEOFF_ASCENT_DURATION) {
          // Phase 1: Runway acceleration and parabolic climb (0.0s to 5.0s)
          const u = Math.min(Math.max(elapsed / TAKEOFF_ASCENT_DURATION, 0), 1.0);
          px = startX + (targetX - startX) * u;
          py = startY - (startY - targetY) * Math.pow(u, 2);
          tilt = (u > 0.05 && u < 0.95) ? Math.sin(u * Math.PI) * 0.16 : 0;
        } else {
          // Phase 2: Bounded harmonic wave oscillation (omega = 1.0 rad/s, T = 6.28s)
          const cruiseTime = elapsed - TAKEOFF_ASCENT_DURATION;
          const waveBlend = Math.min(cruiseTime / 1000, 1.0);
          const waveX = (width * 0.1485 * Math.sin(0.0010 * cruiseTime)) * waveBlend;
          const waveY = (height * 0.1100 * Math.sin(0.0010 * cruiseTime)) * waveBlend;

          px = targetX + waveX;
          py = targetY + waveY;
          tilt = (-Math.cos(0.0010 * cruiseTime) * 0.08) * waveBlend;
        }

        // Anchor red graph curve directly to bottom-left tail of airplane
        const tipX = px - planeW * 0.16;
        const tipY = py + planeH * 0.22;
        const ctrlX = originX + (tipX - originX) * 0.42;
        const ctrlY = groundY;

        ctx.save();
        ctx.beginPath();
        ctx.rect(0, 0, width, groundY);
        ctx.clip();

        // Red fill under curve
        ctx.beginPath();
        ctx.moveTo(originX, groundY);
        ctx.quadraticCurveTo(ctrlX, ctrlY, tipX, tipY);
        ctx.lineTo(tipX, groundY);
        ctx.lineTo(originX, groundY);
        ctx.closePath();
        ctx.fillStyle = 'rgba(255, 0, 0, 0.3)';
        ctx.fill();

        // 3px solid red stroke curve
        ctx.beginPath();
        ctx.moveTo(originX, groundY);
        ctx.quadraticCurveTo(ctrlX, ctrlY, tipX, tipY);
        ctx.lineWidth = 3;
        ctx.strokeStyle = '#ff0000';
        ctx.stroke();
        ctx.restore();

        lastPlanePosRef.current = { x: px, y: py, w: planeW, h: planeH, tilt };

        if (onPlanePosRef.current) {
          onPlanePosRef.current({ x: px, y: py, w: planeW, h: planeH, tilt, visible: true });
        }
      }

      // 4. Crashed State: Red fill is wiped IMMEDIATELY. Plane flies smoothly off-screen.
      if (isCrashed) {
        if (!crashPosRef.current) {
          crashPosRef.current = lastPlanePosRef.current
            ? { ...lastPlanePosRef.current }
            : { x: targetX, y: targetY, w: planeW, h: planeH, tilt: 0.18 };
        }

        const pos = crashPosRef.current;
        const isOffscreen = pos.x > width + pos.w || pos.y < -pos.h;

        if (!isOffscreen) {
          // Fly-off velocity: exits stage in approx 0.65s (39 frames at 60fps)
          pos.x += width * 0.024;
          pos.y -= height * 0.013;
          pos.tilt = 0.22;
        }

        if (onPlanePosRef.current) {
          onPlanePosRef.current(
            isOffscreen
              ? { visible: false }
              : { x: pos.x, y: pos.y, w: pos.w, h: pos.h, tilt: pos.tilt, visible: true }
          );
        }
      }

      // 5. Betting or Waiting State: Plane rests stationary on runway origin
      if (isBettingOrWaiting) {
        if (onPlanePosRef.current) {
          onPlanePosRef.current({ x: startX, y: startY, w: planeW, h: planeH, tilt: 0, visible: true });
        }
      }

      // 6. Coordinate Grid Dots and Axes
      const dotRadius = isMobile ? 2 : 3;
      const horizSpacing = isMobile ? 100 : 150;
      const horizY = groundY + 10;

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

      // Grey Axis lines (x-axis and y-axis)
      ctx.beginPath();
      ctx.moveTo(0, groundY);
      ctx.lineTo(width, groundY);
      ctx.lineWidth = 1;
      ctx.strokeStyle = '#888888';
      ctx.stroke();

      ctx.beginPath();
      ctx.moveTo(originX, 0);
      ctx.lineTo(originX, height);
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
