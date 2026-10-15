import React, { useState, useEffect, useRef } from 'react';

const FUN_FACTS = [
  'Sometimes you lose, sometimes you win. Try again!',
  'A player cashed out 4.5 lakhs from a single bet.',
  'The best day to play is.. Every day!',
  'The highest consecutive days played by a player is 12.',
  'Chances of winning are high when you play more.',
  'The average bet per round is 500.',
  'Inviting your friend doubles your combined chances of winning.'
];

const RUNWAY_TILES = ['MainN']
  .concat(Array(24).fill('RepeatN'), ['MainN'])
  .map(name => `/assets/games/aviator-ref/${name}.webp`);

export default function AviatorClassicStage({
  phase,
  multiplier,
  crashPoint,
  countdown,
  onlineCount,
  connected,
  soundOn,
  onToggleSound,
  multElRef
}) {
  const isFlying = phase === 'flying';
  const isCrashed = phase === 'crashed';
  const isIntermission = phase === 'betting' || phase === 'waiting';

  const [tileKey, setTileKey] = useState(0);
  const [showBlast, setShowBlast] = useState(false);
  const [fact, setFact] = useState(FUN_FACTS[1]);
  const prevPhaseRef = useRef(phase);

  useEffect(() => {
    const prev = prevPhaseRef.current;
    if ((phase === 'flying' && prev !== 'flying') || (phase === 'betting' && prev !== 'betting')) {
      setTileKey(k => k + 1);
    }
    if (phase === 'betting' && prev !== 'betting') {
      setFact(FUN_FACTS[Math.floor(Math.random() * FUN_FACTS.length)]);
    }
    prevPhaseRef.current = phase;

    if (phase === 'crashed') {
      setShowBlast(true);
      const timer = setTimeout(() => setShowBlast(false), 800);
      return () => clearTimeout(timer);
    }
  }, [phase]);

  const cp = Number(crashPoint) || 0;
  const planeClass =
    'avc-plane' +
    (isFlying ? ' moving' : '') +
    (isCrashed && cp > 1.06 ? ' shrink-rotate' : '');

  const launchMsg = phase === 'betting' ? `Launching in ${countdown ?? 0}` : 'Launching...';

  return (
    <div className="avtr-stagewrap avc-wrap">
      <div className="avtr-stage avc-stage">
        <div className={'avc-shake' + (isCrashed ? ' shakescreen' : '')}>
          <div
            className={'avc-scroll' + (isFlying ? '' : ' slow')}
            style={{ animationPlayState: isIntermission ? 'paused' : 'running' }}
            key={tileKey}
          >
            {RUNWAY_TILES.map((src, i) => (
              <img src={src} alt="" draggable="false" key={i} />
            ))}
          </div>

          <div className="avtr-players avc-players">
            <svg className="avtr-players-ico" viewBox="0 0 10 14" width="10" height="14" aria-hidden="true">
              <circle cx="5" cy="3.4" r="3" fill="currentColor" />
              <path d="M0 13.5c0-3.4 2.2-5.6 5-5.6s5 2.2 5 5.6z" fill="currentColor" />
            </svg>
            <b>{onlineCount}</b>
          </div>

          <div className={'avtr-signal' + (connected ? ' ok' : '')}>
            <span className="b1" />
            <span className="b2" />
            <span className="b3" />
            <span className="b4" />
          </div>
        </div>

        {isIntermission && (
          <div className="avc-launch">
            <span className="avc-launch-text">
              <b>{launchMsg}</b>
            </span>
          </div>
        )}

        {isIntermission && <h2 className="avc-funfact">FunFact: {fact}</h2>}

        <div
          className={'avtr-multbox' + (isCrashed ? ' crashed avc-animate-odds' : '')}
          style={{ display: isFlying || isCrashed ? 'flex' : 'none' }}
        >
          {isCrashed && <span className="avtr-flew">CRASHED!</span>}
          <div className={'avtr-mult' + (isFlying ? ' stroke-black' : '')}>
            {isFlying ? (
              <span ref={multElRef}>1.00 x</span>
            ) : (
              <span>{cp.toFixed(2)} x</span>
            )}
          </div>
        </div>

        <div className={planeClass}>
          <div className={'avc-plane-inner' + (isCrashed ? ' greyed' : '')}>
            <svg
              className={'avc-prop' + (isFlying || isCrashed ? ' run' : '')}
              width="55"
              height="6"
              viewBox="0 0 55 6"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M0 1.905c4.41-.334 9.29-.635 13.735-.836 1.136-.066 2.272-.133 3.442-.233 2.306-.167 4.578 0 6.851.334 1.136.167 2.272.401 3.442.735v.234c-3.375.936-6.817 1.27-10.293 1.07-1.972-.168-4.846-.301-6.851-.401-3.342-.2-6.984-.435-10.293-.669C0 2.139 0 1.905 0 1.905z"
                fill="#ED1C24"
              />
              <path
                d="M54.94 2.139c-4.412.334-9.291.635-13.736.835-1.136.067-2.272.134-3.442.234-2.306.167-4.578 0-6.851-.334-1.136-.167-2.272-.401-3.442-.735v-.234c3.375-.936 6.817-1.27 10.293-1.07 1.972.168 4.846.301 6.851.401 3.342.2 6.984.435 10.293.669.033 0 .033.234.033.234z"
                fill="#ED1C24"
              />
              <path
                d="M27.67 5.748h-.367a.9.9 0 0 1-.902-.903V.903A.9.9 0 0 1 27.303 0h.367a.9.9 0 0 1 .902.903v3.942a.9.9 0 0 1-.902.903z"
                fill="#231F20"
              />
            </svg>
            <img className="avc-plane-img" src="/assets/games/aviator-ref/newplane.png" alt="" draggable="false" />
          </div>
        </div>

        {showBlast && (
          <div className="avc-blast">
            <img src="/assets/games/aviator-ref/aviatorexplosion.gif" alt="" />
          </div>
        )}

        <button
          type="button"
          className={'avtr-sound avc-sound' + (soundOn ? ' on' : '')}
          onClick={onToggleSound}
          aria-label={soundOn ? 'Mute' : 'Unmute'}
        >
          <svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true">
            <path d="M4 9v6h4l5 4V5L8 9H4z" fill="currentColor" />
            {soundOn && (
              <path
                d="M16 8.5a4.5 4.5 0 0 1 0 7M18.5 6a8 8 0 0 1 0 12"
                stroke="currentColor"
                strokeWidth="1.8"
                fill="none"
                strokeLinecap="round"
              />
            )}
          </svg>
        </button>
      </div>
    </div>
  );
}
