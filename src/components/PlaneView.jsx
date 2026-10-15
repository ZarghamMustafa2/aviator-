import React, { useRef, useImperativeHandle, forwardRef } from 'react';

const PlaneView = forwardRef(function PlaneView(props, ref) {
  const wrapRef = useRef(null);

  useImperativeHandle(ref, () => ({
    setPos(pos) {
      const el = wrapRef.current;
      if (!el) return;
      if (!pos || !pos.visible) {
        el.style.display = 'none';
        return;
      }
      el.style.display = 'block';
      el.style.width = `${pos.w}px`;
      el.style.height = `${pos.h}px`;
      el.style.left = `${pos.x - pos.w / 2}px`;
      el.style.top = `${pos.y - pos.h / 2}px`;
      el.style.setProperty('--jet-tilt', `${((pos.tilt || 0) * 180) / Math.PI}deg`);
    }
  }), []);

  return (
    <div ref={wrapRef} className="avtr-jet-wrap" style={{ display: 'none' }}>
      <div className="avtr-jet-inner avtr-ref-plane">
        <img
          src="/assets/games/aviatorx-ref/plane.gif"
          alt="Aviator Jet"
          className="avtr-jet-img"
          draggable="false"
        />
      </div>
    </div>
  );
});

export default PlaneView;
