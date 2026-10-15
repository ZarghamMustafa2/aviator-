import { i as e, n as t, o as n, t as r } from "./jsx-runtime-tHiRxOvn.js";
import {
  B as i,
  H as a,
  I as o,
  L as s,
  N as c,
  P as l,
  T as u,
  V as d,
  _ as f,
  a as p,
  i as m,
  o as h,
  s as g,
} from "./tpstudio-BPQXDLhP.js";
import { i as _, r as v } from "./useBetPresets-D3FQLB7x.js";
import { c as y, n as b, r as x } from "./ExchangeTheme-BwD1APu6.js";
function ee({ phase: e, multiplier: t, crashPoint: n, onPlanePos: r }) {
  var i = (0, S.useRef)(null),
    a = (0, S.useRef)(null),
    o = (0, S.useRef)(0),
    s = (0, S.useRef)(0),
    c = (0, S.useRef)(0),
    l = (0, S.useRef)(0),
    u = (0, S.useRef)(!1),
    d = (0, S.useRef)(null),
    f = (0, S.useRef)(r);
  return (
    (f.current = r),
    (0, S.useEffect)(
      function () {
        (e === `flying` &&
          ((o.current = Date.now()), (u.current = !1), (d.current = null)),
          (e === `betting` || e === `waiting`) &&
            ((o.current = 0), (u.current = !1), (d.current = null)),
          e === `crashed` && (d.current = null));
      },
      [e],
    ),
    (0, S.useEffect)(
      function () {
        var t = i.current;
        if (!t) return;
        function n() {
          var r = t.getContext(`2d`),
            i = window.devicePixelRatio || 1,
            p = t.offsetWidth,
            m = t.offsetHeight;
          ((t.width !== p * i || t.height !== m * i) &&
            ((t.width = p * i), (t.height = m * i)),
            r.setTransform(i, 0, 0, i, 0, 0),
            (r.imageSmoothingEnabled = !0),
            r.clearRect(0, 0, p, m));
          var h = p < 768,
            g = m * 0.14,
            _ = 0.1 * p + (h ? 20 : 0),
            v = p * (h ? 0.7 : 0.8),
            y = h ? m * 0.4 : m / 3,
            b = m - g + (h ? 16 : 15),
            x = e === `crashed`,
            ee = e === `flying`,
            S = e === `betting` || e === `waiting`;
          if (!S) {
            (r.save(), r.translate(0, m), r.rotate(s.current));
            for (
              var C = 30, te = Math.hypot(p, m), ne = h ? 40 : 60, T = 0;
              T < C;
              T++
            )
              (r.beginPath(),
                (r.strokeStyle =
                  `rgba(255, 255, 255, ` + (T % 2 ? 0.01 : 0.05) + `)`),
                r.moveTo(0, 0),
                r.lineTo(te, 0),
                (r.lineWidth = ne),
                r.stroke(),
                r.rotate((Math.PI * 2) / C));
            (r.restore(), x || (s.current += 0.002));
          }
          if (!x && !S) {
            var E = p / 2,
              re = m / 2,
              D = r.createRadialGradient(E, re, 0, E, re, p / 2);
            (D.addColorStop(0, `rgba(128, 0, 128, 0.7)`),
              D.addColorStop(0.3, `rgba(128, 0, 128, 0.3)`),
              D.addColorStop(0.6, `rgba(128, 0, 128, 0.1)`),
              D.addColorStop(1, `rgba(128, 0, 128, 0)`),
              (r.fillStyle = D),
              r.fillRect(0, 0, p, m));
          }
          if (ee) {
            var O = o.current > 0 ? Date.now() - o.current : 0,
              k = Math.min(O / w, 1);
            k >= 1 && (u.current = !0);
            var A = 0,
              j = 0;
            u.current &&
              ((A =
                m *
                0.1 *
                Math.min(Math.max(O - w, 0) / 2e3, 1) *
                Math.sin(0.001 * O)),
              (j = (A < 0 ? -1 : 1) * Math.abs(A * 1.5)));
            var M = p * 0.1,
              N = m * 0.1,
              P = _ + (v - _) * k - M / 2 + j,
              ie = b - (b - y) * k ** 2 + A + N / 2,
              ae = (_ + P) / 2,
              oe = b + N / 2 + 2,
              se = b + N / 2,
              ce = _ - M / 2;
            (r.save(),
              r.beginPath(),
              r.rect(0, 0, p, m - 10),
              r.clip(),
              r.beginPath(),
              r.moveTo(ce, se),
              r.quadraticCurveTo(ae, oe, P, ie),
              r.lineTo(P, se),
              r.lineTo(ce, se),
              r.closePath(),
              (r.fillStyle = `rgba(255, 0, 0, 0.3)`),
              r.fill(),
              r.beginPath(),
              r.moveTo(ce, se),
              r.quadraticCurveTo(ae, oe, P, ie),
              (r.lineWidth = 3),
              (r.strokeStyle = `red`),
              r.stroke(),
              r.restore());
            var F = h ? p * 0.22 : p * 0.11,
              le = h ? F * 0.583 : m * 0.14,
              ue = _ + (v - _) * k + j,
              I = b - (b - y) * k ** 2 + A;
            f.current &&
              f.current({ x: ue, y: I, w: F, h: le, tilt: 0, visible: !0 });
          }
          if (x) {
            d.current ||= { x: _ + (v - _), y };
            var L = d.current;
            ((L.x += p * 0.01), (L.y -= m * 0.01));
            var R = h ? p * 0.22 : p * 0.11,
              de = h ? R * 0.583 : m * 0.14,
              z = L.x > p + R || L.y < -de;
            f.current &&
              f.current(
                z
                  ? { visible: !1 }
                  : { x: L.x, y: L.y, w: R, h: de, tilt: 0, visible: !0 },
              );
          }
          if (S) {
            var B = h ? p * 0.22 : p * 0.11,
              V = h ? B * 0.583 : m * 0.14;
            f.current &&
              f.current({ x: _, y: b, w: B, h: V, tilt: 0, visible: !0 });
          }
          var fe = h ? 2 : 3,
            pe = h ? 100 : 150,
            H = m - 10;
          r.beginPath();
          for (var U = p + c.current; U > -p; U -= pe)
            r.arc(U, H, fe, 0, Math.PI * 2);
          ((r.fillStyle = `white`),
            r.fill(),
            ee &&
              u.current &&
              !x &&
              ((c.current -= 2), c.current <= -pe && (c.current = 0)));
          var me = 80,
            he = 10;
          r.beginPath();
          for (var W = -m + l.current; W < m; W += me)
            r.arc(he, W, fe, 0, Math.PI * 2);
          ((r.fillStyle = `white`),
            r.fill(),
            ee &&
              u.current &&
              !x &&
              ((l.current += 2), l.current >= me && (l.current = 0)),
            r.beginPath(),
            r.moveTo(0, m - 20),
            r.lineTo(p, m - 20),
            (r.lineWidth = 1),
            (r.strokeStyle = `#888`),
            r.stroke(),
            r.beginPath(),
            r.moveTo(20, 0),
            r.lineTo(20, m),
            (r.lineWidth = 1),
            (r.strokeStyle = `#888`),
            r.stroke(),
            (a.current = requestAnimationFrame(n)));
        }
        a.current = requestAnimationFrame(n);
        function r() {
          document.visibilityState === `visible` &&
            (cancelAnimationFrame(a.current),
            (a.current = requestAnimationFrame(n)));
        }
        return (
          document.addEventListener(`visibilitychange`, r),
          function () {
            (cancelAnimationFrame(a.current),
              document.removeEventListener(`visibilitychange`, r));
          }
        );
      },
      [e],
    ),
    (0, C.jsx)(`canvas`, { ref: i, className: `avtr-canvas` })
  );
}
var S,
  C,
  w,
  te = e(() => {
    ((S = n(t())), (C = r()), (w = 5e3));
  }),
  ne = e(() => {}),
  T,
  E,
  re,
  D = e(() => {
    ((T = n(t())),
      ne(),
      (E = r()),
      (re = (0, T.forwardRef)(function (e, t) {
        let n = (0, T.useRef)(null),
          r = (0, T.useRef)(null);
        (0, T.useRef)(null);
        let [i, a] = (0, T.useState)(!0);
        return (
          (0, T.useEffect)(function () {}, []),
          (0, T.useImperativeHandle)(
            t,
            function () {
              return {
                setPos: function (e) {
                  let t = n.current;
                  if (t) {
                    if (!e || !e.visible) {
                      t.style.display = `none`;
                      return;
                    }
                    ((t.style.display = `block`),
                      (t.style.width = e.w + `px`),
                      (t.style.height = e.h + `px`),
                      (t.style.left = e.x - e.w / 2 + `px`),
                      (t.style.top = e.y - e.h / 2 + `px`),
                      t.style.setProperty(
                        `--jet-tilt`,
                        ((e.tilt || 0) * 180) / Math.PI + `deg`,
                      ));
                  }
                },
              };
            },
            [],
          ),
          (0, E.jsxs)(`div`, {
            ref: n,
            className: `avtr-jet-wrap`,
            style: { display: `none` },
            children: [
              (0, E.jsx)(`div`, {
                ref: r,
                className: `avtr-jet-lottie`,
                style: { display: i ? `none` : `block` },
              }),
              i &&
                (0, E.jsx)(`div`, {
                  className: `avtr-jet-inner avtr-ref-plane`,
                  children: (0, E.jsx)(`img`, {
                    src: `/assets/games/aviatorx-ref/plane.gif`,
                    alt: ``,
                    className: `avtr-jet-img`,
                    draggable: `false`,
                  }),
                }),
            ],
          })
        );
      })));
  }),
  O = e(() => {});
function k(e) {
  var t = e.phase,
    n = t === `flying`,
    r = t === `crashed`,
    i = t === `betting` || t === `waiting`,
    [a, o] = (0, A.useState)(0),
    [s, c] = (0, A.useState)(!1),
    [l, u] = (0, A.useState)(M[1]),
    d = (0, A.useRef)(t);
  (0, A.useEffect)(
    function () {
      var e = d.current;
      if (
        (((t === `flying` && e !== `flying`) ||
          (t === `betting` && e !== `betting`)) &&
          o(function (e) {
            return e + 1;
          }),
        t === `betting` &&
          e !== `betting` &&
          u(M[Math.floor(Math.random() * M.length)]),
        (d.current = t),
        t === `crashed`)
      ) {
        c(!0);
        var n = setTimeout(function () {
          c(!1);
        }, 800);
        return function () {
          clearTimeout(n);
        };
      }
    },
    [t],
  );
  var f = Number(e.crashPoint) || 0,
    p =
      `avc-plane` +
      (n ? ` moving` : ``) +
      (r && f > 1.06 ? ` shrink-rotate` : ``),
    m =
      t === `betting`
        ? `Launching in ` + (e.countdown == null ? 0 : e.countdown)
        : `Launching...`;
  return (0, j.jsx)(`div`, {
    className: `avtr-stagewrap avc-wrap`,
    children: (0, j.jsxs)(`div`, {
      className: `avtr-stage avc-stage`,
      children: [
        (0, j.jsxs)(`div`, {
          className: `avc-shake` + (r ? ` shakescreen` : ``),
          children: [
            (0, j.jsx)(
              `div`,
              {
                className: `avc-scroll` + (n ? `` : ` slow`),
                style: { animationPlayState: i ? `paused` : `running` },
                children: N.map(function (e, t) {
                  return (0, j.jsx)(
                    `img`,
                    { src: e, alt: ``, draggable: `false` },
                    t,
                  );
                }),
              },
              a,
            ),
            (0, j.jsxs)(`div`, {
              className: `avtr-players avc-players`,
              children: [
                (0, j.jsxs)(`svg`, {
                  className: `avtr-players-ico`,
                  viewBox: `0 0 10 14`,
                  width: `10`,
                  height: `14`,
                  "aria-hidden": `true`,
                  children: [
                    (0, j.jsx)(`circle`, {
                      cx: `5`,
                      cy: `3.4`,
                      r: `3`,
                      fill: `currentColor`,
                    }),
                    (0, j.jsx)(`path`, {
                      d: `M0 13.5c0-3.4 2.2-5.6 5-5.6s5 2.2 5 5.6z`,
                      fill: `currentColor`,
                    }),
                  ],
                }),
                (0, j.jsx)(`b`, { children: e.onlineCount }),
              ],
            }),
            (0, j.jsxs)(`div`, {
              className: `avtr-signal` + (e.connected ? ` ok` : ``),
              children: [
                (0, j.jsx)(`span`, { className: `b1` }),
                (0, j.jsx)(`span`, { className: `b2` }),
                (0, j.jsx)(`span`, { className: `b3` }),
                (0, j.jsx)(`span`, { className: `b4` }),
              ],
            }),
          ],
        }),
        i &&
          (0, j.jsx)(`div`, {
            className: `avc-launch`,
            children: (0, j.jsx)(`span`, {
              className: `avc-launch-text`,
              children: (0, j.jsx)(`b`, { children: m }),
            }),
          }),
        i &&
          (0, j.jsxs)(`h2`, {
            className: `avc-funfact`,
            children: [`FunFact: `, l],
          }),
        (0, j.jsxs)(`div`, {
          className: `avtr-multbox` + (r ? ` crashed avc-animate-odds` : ``),
          style: { display: n || r ? `flex` : `none` },
          children: [
            r &&
              (0, j.jsx)(`span`, {
                className: `avtr-flew`,
                children: `CRASHED!`,
              }),
            (0, j.jsx)(`div`, {
              className: `avtr-mult` + (n ? ` stroke-black` : ``),
              children: n
                ? (0, j.jsx)(`span`, { ref: e.multElRef, children: `1.00 x` })
                : (0, j.jsxs)(`span`, { children: [f.toFixed(2), ` x`] }),
            }),
          ],
        }),
        (0, j.jsx)(`div`, {
          className: p,
          children: (0, j.jsxs)(`div`, {
            className: `avc-plane-inner` + (r ? ` greyed` : ``),
            children: [
              (0, j.jsxs)(`svg`, {
                className: `avc-prop` + (n || r ? ` run` : ``),
                width: `55`,
                height: `6`,
                viewBox: `0 0 55 6`,
                fill: `none`,
                "aria-hidden": `true`,
                children: [
                  (0, j.jsx)(`path`, {
                    d: `M0 1.905c4.41-.334 9.29-.635 13.735-.836 1.136-.066 2.272-.133 3.442-.233 2.306-.167 4.578 0 6.851.334 1.136.167 2.272.401 3.442.735v.234c-3.375.936-6.817 1.27-10.293 1.07-1.972-.168-4.846-.301-6.851-.401-3.342-.2-6.984-.435-10.293-.669C0 2.139 0 1.905 0 1.905z`,
                    fill: `#ED1C24`,
                  }),
                  (0, j.jsx)(`path`, {
                    d: `M54.94 2.139c-4.412.334-9.291.635-13.736.835-1.136.067-2.272.134-3.442.234-2.306.167-4.578 0-6.851-.334-1.136-.167-2.272-.401-3.442-.735v-.234c3.375-.936 6.817-1.27 10.293-1.07 1.972.168 4.846.301 6.851.401 3.342.2 6.984.435 10.293.669.033 0 .033.234.033.234z`,
                    fill: `#ED1C24`,
                  }),
                  (0, j.jsx)(`path`, {
                    d: `M27.67 5.748h-.367a.9.9 0 0 1-.902-.903V.903A.9.9 0 0 1 27.303 0h.367a.9.9 0 0 1 .902.903v3.942a.9.9 0 0 1-.902.903z`,
                    fill: `#231F20`,
                  }),
                ],
              }),
              (0, j.jsx)(`img`, {
                className: `avc-plane-img`,
                src: `/assets/games/aviator-ref/newplane.png`,
                alt: ``,
                draggable: `false`,
              }),
            ],
          }),
        }),
        s &&
          (0, j.jsx)(`div`, {
            className: `avc-blast`,
            children: (0, j.jsx)(`img`, {
              src: `/assets/games/aviator-ref/aviatorexplosion.gif`,
              alt: ``,
            }),
          }),
        (0, j.jsx)(`button`, {
          type: `button`,
          className: `avtr-sound avc-sound` + (e.soundOn ? ` on` : ``),
          onClick: e.onToggleSound,
          "aria-label": e.soundOn ? `Mute` : `Unmute`,
          children: (0, j.jsxs)(`svg`, {
            viewBox: `0 0 24 24`,
            width: `24`,
            height: `24`,
            "aria-hidden": `true`,
            children: [
              (0, j.jsx)(`path`, {
                d: `M4 9v6h4l5 4V5L8 9H4z`,
                fill: `currentColor`,
              }),
              e.soundOn
                ? (0, j.jsx)(`path`, {
                    d: `M16 8.5a4.5 4.5 0 0 1 0 7M18.5 6a8 8 0 0 1 0 12`,
                    stroke: `currentColor`,
                    strokeWidth: `1.8`,
                    fill: `none`,
                    strokeLinecap: `round`,
                  })
                : null,
            ],
          }),
        }),
      ],
    }),
  });
}
var A,
  j,
  M,
  N,
  P = e(() => {
    ((A = n(t())),
      O(),
      (j = r()),
      (M = [
        `Sometimes you lose, sometimes you win. Try again!`,
        `A player cashed out 4.5 lakhs from a single bet.`,
        `The best day to play is.. Every day!`,
        `The highest consecutive days played by a player is 12.`,
        `Chances of winning are high when you play more.`,
        `The average bet per round is 500.`,
        `Inviting your friend doubles your combined chances of winning.`,
      ]),
      (N = [`MainN`]
        .concat(Array(24).fill(`RepeatN`), [`MainN`])
        .map(function (e) {
          return `/assets/games/aviator-ref/` + e + `.webp`;
        })));
  }),
  ie = e(() => {});
function ae(e) {
  var t = String(e || ``).trim();
  return t ? t.slice(0, 4) + `****` : `****`;
}
function oe(e) {
  return Math.round(Number(e) || 0).toLocaleString(`en-US`);
}
function se(e) {
  var t = e / 1e3;
  return t <= 4
    ? 1 + 0.05 * t
    : t <= 22
      ? 1.2 + 0.1 * (t - 4)
      : t <= 34.5
        ? 3 + 0.4 * (t - 22)
        : 8 + 1 * (t - 34.5);
}
function ce(e) {
  return e <= 1.2
    ? ((e - 1) / 0.05) * 1e3
    : e <= 3
      ? (4 + (e - 1.2) / 0.1) * 1e3
      : e <= 8
        ? (22 + (e - 3) / 0.4) * 1e3
        : (34.5 + (e - 8)) * 1e3;
}
function F() {
  z &&= (clearInterval(z), null);
}
function le(e) {
  function t(t) {
    (t && t.preventDefault && t.preventDefault(),
      F(),
      e(),
      (z = setInterval(e, 100)));
  }
  return {
    onMouseDown: t,
    onTouchStart: t,
    onMouseUp: F,
    onMouseLeave: F,
    onTouchEnd: F,
    onTouchCancel: F,
    onBlur: F,
  };
}
function ue(e, t) {
  if (e) {
    var n = e.clientWidth || 0;
    if (n) {
      var r = Math.max(String(t ?? ``).length, 6),
        i = Math.floor((n - 8) / (r * 0.62));
      ((i = Math.max(12, Math.min(24, i))),
        e.style.fontSize !== i + `px` && (e.style.fontSize = i + `px`));
    }
  }
}
function I(e) {
  var t = e && e.variant === `classic` ? `classic` : `x`,
    n =
      t === `classic`
        ? {
            api: `/api/aviator-classic`,
            ws: `game:aviator-classic`,
            title: `Aviator`,
          }
        : { api: `/api/aviator`, ws: `game:aviator`, title: `AviatorX` },
    { total_available: r, fetchWallet: a } = g();
  l(function (e) {
    return e.user;
  });
  var [s, c] = (0, L.useState)(`game`),
    [u, p] = (0, L.useState)(`waiting`),
    [h, v] = (0, L.useState)(1),
    [y, S] = (0, L.useState)(0),
    [C, w] = (0, L.useState)(0),
    [te, ne] = (0, L.useState)([]),
    [T, E] = (0, L.useState)([]),
    [D, O] = (0, L.useState)(``),
    [A, j] = (0, L.useState)(``),
    [M, N] = (0, L.useState)(``),
    [P, ie] = (0, L.useState)(!0),
    [F, I] = (0, L.useState)(!1),
    [z, fe] = (0, L.useState)(247),
    [pe, H] = (0, L.useState)([]),
    [U, me] = (0, L.useState)(!1),
    he = (0, L.useRef)(null),
    W = (0, L.useRef)(null),
    ge = (0, L.useRef)(!1);
  ge.current = U;
  var _e = (0, L.useRef)(null),
    ve = (0, L.useRef)({ start: null, lastTickAt: 0, lastMult: 1 }),
    [ye, G] = (0, L.useState)(V),
    [be, K] = (0, L.useState)(V),
    xe = (0, L.useRef)({ 1: V, 2: V });
  xe.current = { 1: ye, 2: be };
  var Se = (0, L.useRef)(null),
    Ce = (0, L.useRef)(null),
    [we, Te] = (0, L.useState)(0),
    [q, Ee] = (0, L.useState)(``),
    [, De] = (0, L.useState)(0);
  (0, L.useEffect)(function () {
    var e = function () {
      De(function (e) {
        return e + 1;
      });
    };
    return (
      window.addEventListener(`resize`, e),
      window.addEventListener(`orientationchange`, e),
      function () {
        (window.removeEventListener(`resize`, e),
          window.removeEventListener(`orientationchange`, e));
      }
    );
  }, []);
  var [J, Oe] = (0, L.useState)(``),
    [ke, Ae] = (0, L.useState)(B),
    [je, Me] = (0, L.useState)(B),
    [Ne, Pe] = (0, L.useState)(!1),
    [Fe, Ie] = (0, L.useState)(!1),
    [Le, Re] = (0, L.useState)(!1),
    [ze, Be] = (0, L.useState)(!1),
    [Ve, He] = (0, L.useState)(B.toFixed(2)),
    [Ue, We] = (0, L.useState)(B.toFixed(2));
  ((0, L.useEffect)(
    function () {
      He(Number(ke).toFixed(2));
    },
    [ke],
  ),
    (0, L.useEffect)(
      function () {
        We(Number(je).toFixed(2));
      },
      [je],
    ));
  var [Ge, Ke] = (0, L.useState)(null),
    Y = (0, L.useRef)(null),
    X = (0, L.useRef)(null),
    Z = (0, L.useRef)(!1),
    qe = (0, L.useRef)(null),
    Je = (0, L.useCallback)(function (e) {
      qe.current && qe.current.setPos(e);
    }, []),
    Q = (0, L.useRef)(null),
    $ = (0, L.useRef)(null),
    Ye = (0, L.useRef)(0),
    Xe = 25e3,
    Ze = 6e3;
  function Qe() {
    i.get(n.api + `/live-bets`)
      .then(function (e) {
        Array.isArray(e.data) && H(e.data.slice(0, 200));
      })
      .catch(function () {});
  }
  ((0, L.useEffect)(function () {
    var e = d();
    if (!e) return;
    function t() {
      (i
        .get(n.api + `/state`)
        .then(function (e) {
          var t = e.data;
          (t.onlineNow && Te(Number(t.onlineNow) || 0),
            t.phase && p(t.phase),
            typeof t.multiplier == `number` && v(t.multiplier),
            typeof t.countdown == `number` && S(t.countdown),
            t.roundId && N(String(t.roundId)),
            t.phase === `crashed` &&
              typeof t.multiplier == `number` &&
              w(t.multiplier),
            t.hash ? O(t.hash) : t.commitHash && O(t.commitHash),
            t.history && ne(t.history),
            t.seed && j(t.seed));
        })
        .catch(function () {}),
        Qe());
    }
    function r() {
      if (((X.current &&= (clearTimeout(X.current), null)), Y.current)) {
        try {
          ((Y.current.onclose = null), Y.current.close(1e3));
        } catch {}
        Y.current = null;
      }
      (I(!1), t(), o());
    }
    function a() {
      ($.current && clearInterval($.current),
        ($.current = setInterval(function () {
          if (!Z.current && document.visibilityState === `visible`) {
            var e = Date.now();
            Ye.current && e - Ye.current > Ze && r();
          }
        }, 2e3)));
    }
    function o() {
      if (
        !Z.current &&
        !(Y.current && Y.current.readyState === WebSocket.OPEN)
      ) {
        var t = new WebSocket(m);
        ((Y.current = t),
          (t.onopen = function () {
            (I(!0),
              (Ye.current = Date.now()),
              t.send(JSON.stringify({ action: `auth`, token: e })),
              t.send(JSON.stringify({ action: `subscribe`, channels: [n.ws] })),
              Q.current && clearInterval(Q.current),
              (Q.current = setInterval(function () {
                if (t.readyState === WebSocket.OPEN)
                  try {
                    t.send(JSON.stringify({ action: `ping` }));
                  } catch {}
              }, Xe)),
              a());
          }),
          (t.onmessage = function (e) {
            Ye.current = Date.now();
            try {
              var t = JSON.parse(e.data);
              if (t.channel !== n.ws) return;
              var r = t.event || t.type,
                i = t.payload || t.data || t;
              if (r === `state`)
                (p(i.phase),
                  i.countdown !== void 0 && S(i.countdown),
                  i.roundId && N(String(i.roundId)),
                  i.hash ? O(i.hash) : i.commitHash && O(i.commitHash),
                  i.history && ne(i.history),
                  (i.phase === `betting` || i.phase === `flying`) &&
                    (ve.current = { start: null, lastTickAt: 0, lastMult: 1 }),
                  i.onlineNow && Te(Number(i.onlineNow) || 0),
                  i.phase === `betting` &&
                    (H([]),
                    v(1),
                    w(0),
                    j(``),
                    G(function (e) {
                      return e.cashedOut || !e.placed ? V : e;
                    }),
                    K(function (e) {
                      return e.cashedOut || !e.placed ? V : e;
                    })),
                  i.phase === `waiting` && (G(V), K(V)));
              else if (r === `countdown`) S(i.countdown);
              else if (r === `tick`) {
                var a = ve.current,
                  o = performance.now(),
                  s = o - ce(Number(i.multiplier) || 1);
                ((a.start =
                  a.start == null ? s : a.start + 0.25 * (s - a.start)),
                  (a.lastTickAt = o),
                  (a.lastMult = Number(i.multiplier) || 1));
              } else if (r === `bet`)
                H(function (e) {
                  var t = [
                    {
                      id:
                        i.fid ||
                        `ws-` +
                          Date.now() +
                          `-` +
                          Math.random().toString(36).slice(2, 6),
                      fid: i.fid || null,
                      user: ae(i.username),
                      panel: i.panel,
                      stake: Number(i.stake) || 0,
                      status: `active`,
                      cashoutAt: null,
                      profit: null,
                    },
                  ].concat(e || []);
                  return (t.length > 200 && (t.length = 200), t);
                });
              else if (r === `cashout`) {
                if (
                  (H(function (e) {
                    for (
                      var t = ae(i.username), n = e || [], r = -1, a = 0;
                      a < n.length;
                      a++
                    ) {
                      var o = n[a];
                      if (
                        o.status === `active` &&
                        (i.fid
                          ? o.fid === i.fid
                          : !o.fid &&
                            o.user === t &&
                            !(
                              i.panel &&
                              o.panel &&
                              Number(o.panel) !== Number(i.panel)
                            ))
                      ) {
                        r = a;
                        break;
                      }
                    }
                    return r < 0
                      ? n
                      : [
                          Object.assign({}, n[r], {
                            status: `cashed`,
                            cashoutAt: Number(i.multiplier) || 0,
                            profit: Number(i.profit) || 0,
                          }),
                        ].concat(n.slice(0, r), n.slice(r + 1));
                  }),
                  !i.fake)
                ) {
                  var c = l.getState().user,
                    u = c && c.username ? c.username.toLowerCase() : ``,
                    d = i.username ? String(i.username).toLowerCase() : ``;
                  u &&
                    u === d &&
                    ((i.panel === 1 ? G : K)(function (e) {
                      return !e.placed || e.cashedOut
                        ? e
                        : Object.assign({}, e, {
                            cashedOut: !0,
                            cashoutAt: i.multiplier,
                            profit: i.profit,
                          });
                    }),
                    g.getState().fetchWallet(),
                    Ke({
                      amount: (i.profit || 0) + (i.stake || 0),
                      multiplier: i.multiplier,
                    }),
                    setTimeout(function () {
                      Ke(null);
                    }, 2e3));
                }
              } else if (r === `crashed`) {
                if (
                  (p(`crashed`),
                  w(i.crashPoint),
                  v(i.crashPoint),
                  j(i.seed || ``),
                  ie(i.fair !== !1),
                  G(function (e) {
                    return e.placed && !e.cashedOut ? { ...e, placed: !1 } : e;
                  }),
                  K(function (e) {
                    return e.placed && !e.cashedOut ? { ...e, placed: !1 } : e;
                  }),
                  H(function (e) {
                    return (e || []).map(function (e) {
                      return e.status === `active`
                        ? Object.assign({}, e, { status: `lost` })
                        : e;
                    });
                  }),
                  ge.current && W.current)
                )
                  try {
                    ((W.current.currentTime = 0),
                      W.current.play().catch(function () {}));
                  } catch {}
                E(function (e) {
                  var t = [
                    {
                      crash_point: i.crashPoint,
                      hash: i.hash,
                      server_seed: i.seed,
                      mode: i.mode || `auto`,
                      crashed_at: new Date().toISOString(),
                    },
                  ].concat(e || []);
                  return (t.length > 50 && (t.length = 50), t);
                });
              }
            } catch {}
          }),
          (t.onclose = function (e) {
            (I(!1),
              (Q.current &&= (clearInterval(Q.current), null)),
              !(Z.current || e.code === 1e3) &&
                (X.current && clearTimeout(X.current),
                (X.current = setTimeout(o, 2e3))));
          }),
          (t.onerror = function () {
            try {
              t.close();
            } catch {}
          }));
      }
    }
    function s() {
      if (
        ((Z.current = !0),
        (X.current &&= (clearTimeout(X.current), null)),
        (Q.current &&= (clearInterval(Q.current), null)),
        ($.current &&= (clearInterval($.current), null)),
        Y.current)
      ) {
        try {
          ((Y.current.onclose = null), Y.current.close(1e3));
        } catch {}
        Y.current = null;
      }
    }
    function c() {
      ((Z.current = !1), r());
    }
    function u() {
      document.visibilityState === `visible` ? c() : s();
    }
    return (
      document.visibilityState === `visible` && (o(), t()),
      document.addEventListener(`visibilitychange`, u),
      window.addEventListener(`pageshow`, u),
      function () {
        if (
          ((Z.current = !0),
          document.removeEventListener(`visibilitychange`, u),
          window.removeEventListener(`pageshow`, u),
          (X.current &&= (clearTimeout(X.current), null)),
          (Q.current &&= (clearInterval(Q.current), null)),
          ($.current &&= (clearInterval($.current), null)),
          Y.current)
        ) {
          try {
            ((Y.current.onclose = null), Y.current.close(1e3));
          } catch {}
          Y.current = null;
        }
      }
    );
  }, []),
    (0, L.useEffect)(function () {
      var e = setInterval(function () {
        fe(function (e) {
          var t = e + (Math.floor(Math.random() * 15) - 7);
          return (
            t < 200 && (t = 200 + Math.floor(Math.random() * 20)),
            t > 340 && (t = 340 - Math.floor(Math.random() * 20)),
            t
          );
        });
      }, 4e3);
      return function () {
        clearInterval(e);
      };
    }, []),
    (0, L.useEffect)(
      function () {
        s === `results` &&
          i
            .get(n.api + `/history`)
            .then(function (e) {
              E(e.data);
            })
            .catch(function () {});
      },
      [s],
    ));
  var $e = (0, L.useRef)(``);
  ((0, L.useEffect)(
    function () {
      (u === `betting` &&
        $e.current !== `betting` &&
        (Le && !ye.placed && Number(q) > 0 && et.current(1),
        ze && !be.placed && Number(J) > 0 && et.current(2)),
        ($e.current = u));
    },
    [u, Le, ze],
  ),
    (0, L.useEffect)(
      function () {
        if (u !== `flying`) return;
        var e = 0;
        function t() {
          var n = _e.current,
            r = ve.current,
            i = r.lastMult;
          if (r.start != null) {
            var a = performance.now(),
              o = Math.min(a, r.lastTickAt + de) - r.start,
              s = Math.floor(se(Math.max(0, o)) * 100 + 1e-9) / 100;
            s > i && (i = s);
          }
          if (n) {
            var c = i.toFixed(2) + ` x`;
            n.textContent !== c && (n.textContent = c);
          }
          for (var l = 1; l <= 2; l++) {
            var u = (l === 1 ? Se : Ce).current,
              d = xe.current[l];
            if (u && d && d.placed && !d.cashedOut) {
              var f = Math.floor(d.amount * i).toLocaleString();
              u.textContent !== f && (u.textContent = f);
            }
          }
          e = requestAnimationFrame(t);
        }
        return (
          (e = requestAnimationFrame(t)),
          function () {
            cancelAnimationFrame(e);
          }
        );
      },
      [u],
    ),
    (0, L.useEffect)(
      function () {
        var e = he.current;
        if (e) {
          if (U)
            try {
              ((e.volume = 0.5), e.play().catch(function () {}));
            } catch {}
          else
            try {
              e.pause();
            } catch {}
          return function () {
            try {
              e.pause();
            } catch {}
          };
        }
      },
      [U],
    ));
  var et = (0, L.useRef)(function () {}),
    tt = (0, L.useCallback)(
      function (e) {
        var t = Number(e === 1 ? q : J) || 0;
        if (!(t > 0)) {
          alert(`Enter bet amount`);
          return;
        }
        var r = e === 1 ? ke : je,
          o = (e === 1 ? Ne : Fe) ? Math.max(B, r > 1 ? r : 2) : 0;
        i.post(n.api + `/bet`, { amount: t, panel: e, auto_cashout: o })
          .then(function (n) {
            ((e === 1 ? G : K)({
              placed: !0,
              id: n.data.betId,
              amount: t,
              cashedOut: !1,
              cashoutAt: 0,
              profit: 0,
            }),
              a());
          })
          .catch(function (e) {
            alert(e.response?.data?.error || `Bet failed`);
          });
      },
      [q, J, ke, je, Ne, Fe, a],
    );
  et.current = tt;
  var nt = (0, L.useCallback)(
      function (e) {
        i.post(n.api + `/cashout`, { panel: e })
          .then(function (t) {
            ((e === 1 ? G : K)(function (e) {
              return {
                ...e,
                cashedOut: !0,
                cashoutAt: t.data.multiplier,
                profit: t.data.profit,
              };
            }),
              a(),
              Ke({
                amount: t.data.profit + (Number(e === 1 ? q : J) || 0),
                multiplier: t.data.multiplier,
              }),
              setTimeout(function () {
                Ke(null);
              }, 2e3));
          })
          .catch(function (e) {
            alert(e.response?.data?.error || `Cashout failed`);
          });
      },
      [q, J, a],
    ),
    rt = (0, L.useCallback)(
      function (e) {
        i.post(n.api + `/cancel`, { panel: e })
          .then(function () {
            ((e === 1 ? G : K)(V), a());
          })
          .catch(function (e) {
            alert(e.response?.data?.error || `Cancel failed`);
          });
      },
      [a],
    ),
    it = _().plus.map(function (e) {
      return { label: `+` + Number(e).toLocaleString(), inc: Number(e) };
    });
  function at(e) {
    var t = e === 1 ? ye : be,
      n = e === 1 ? q : J,
      r = e === 1 ? Ee : Oe,
      i = e === 1 ? Ne : Fe,
      a = e === 1 ? Pe : Ie,
      o = e === 1 ? Ae : Me,
      s = e === 1 ? Le : ze,
      c = e === 1 ? Re : Be,
      l = e === 1 ? Ve : Ue,
      d = e === 1 ? He : We,
      f = !!(t.placed && !t.cashedOut && (u === `betting` || u === `flying`)),
      p = `Place`,
      m = `avtr-action`,
      h = function () {
        tt(e);
      },
      g = !1,
      _ = null;
    return (
      u === `betting` && t.placed
        ? ((p = `Cancel`),
          (m = `avtr-action waiting`),
          (h = function () {
            rt(e);
          }))
        : u === `flying` && t.placed && !t.cashedOut
          ? ((p = `Cashout  (`),
            (_ = e === 1 ? Se : Ce),
            (m = `avtr-action active`),
            (h = function () {
              nt(e);
            }))
          : u === `flying` && t.cashedOut
            ? ((p = `WON @ ` + t.cashoutAt.toFixed(2) + `x`),
              (m = `avtr-action won`),
              (g = !0))
            : (u === `flying` || u === `crashed` || u === `waiting`) &&
              ((p = `Next`), (m = `avtr-action next`), (g = u !== `betting`)),
      (0, R.jsx)(
        `div`,
        {
          className: `avtr-col`,
          children: (0, R.jsxs)(`div`, {
            className: `avtr-runners`,
            children: [
              (0, R.jsx)(`div`, {
                className: `avtr-ig`,
                children: (0, R.jsxs)(`div`, {
                  className: `avtr-avedi`,
                  children: [
                    (0, R.jsx)(`button`, {
                      type: `button`,
                      className: `avtr-avedi-btn`,
                      "aria-label": `Decrease`,
                      onClick: function () {
                        r(Math.max(10, (Number(n) || 0) - 10));
                      },
                      children: (0, R.jsx)(`svg`, {
                        viewBox: `0 0 28 40`,
                        width: `28`,
                        height: `40`,
                        "aria-hidden": `true`,
                        children: (0, R.jsx)(`rect`, {
                          x: `6`,
                          y: `18.5`,
                          width: `17`,
                          height: `3`,
                          rx: `1`,
                          fill: `currentColor`,
                        }),
                      }),
                    }),
                    (0, R.jsx)(`input`, {
                      className: `avtr-avedi-input`,
                      type: `number`,
                      value: n,
                      ref: function (e) {
                        ue(e, n);
                      },
                      onChange: function (e) {
                        var t = String(e.target.value || ``).trim();
                        if (t === ``) {
                          r(``);
                          return;
                        }
                        var n = parseInt(t, 10);
                        r(Number.isFinite(n) && n >= 0 ? n : ``);
                      },
                      placeholder: ``,
                    }),
                    (0, R.jsx)(`button`, {
                      type: `button`,
                      className: `avtr-avedi-btn`,
                      "aria-label": `Increase`,
                      onClick: function () {
                        r((Number(n) || 0) + 10);
                      },
                      children: (0, R.jsxs)(`svg`, {
                        viewBox: `0 0 28 40`,
                        width: `28`,
                        height: `40`,
                        "aria-hidden": `true`,
                        children: [
                          (0, R.jsx)(`rect`, {
                            x: `6`,
                            y: `18.5`,
                            width: `17`,
                            height: `3`,
                            rx: `1`,
                            fill: `currentColor`,
                          }),
                          (0, R.jsx)(`rect`, {
                            x: `13`,
                            y: `11.5`,
                            width: `3`,
                            height: `17`,
                            rx: `1`,
                            fill: `currentColor`,
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
              }),
              (0, R.jsx)(`div`, {
                className: `avtr-presets`,
                children: it.map(function (e) {
                  return (0, R.jsx)(
                    `div`,
                    {
                      className: `avtr-preset-col`,
                      children: (0, R.jsx)(`button`, {
                        type: `button`,
                        className: `avtr-preset`,
                        onClick: function () {
                          e.set == null
                            ? r((Number(n) || 0) + e.inc)
                            : r(e.set);
                        },
                        children: e.label,
                      }),
                    },
                    e.label,
                  );
                }),
              }),
              (0, R.jsx)(`div`, {
                className: `avtr-actrow`,
                children: (0, R.jsxs)(`button`, {
                  type: `button`,
                  className: m,
                  onClick: h,
                  disabled: g,
                  children: [
                    (0, R.jsx)(`span`, {
                      className: `avtr-shimmer-container`,
                      "aria-hidden": `true`,
                      children: (0, R.jsx)(`span`, {
                        className: `avtr-shimmer`,
                      }),
                    }),
                    (0, R.jsxs)(`span`, {
                      className: `avtr-action-text`,
                      children: [
                        p,
                        _
                          ? (0, R.jsxs)(R.Fragment, {
                              children: [
                                (0, R.jsx)(`span`, {
                                  ref: function (e) {
                                    ((_.current = e),
                                      e &&
                                        !e.textContent &&
                                        (e.textContent = Math.floor(
                                          t.amount * (ve.current.lastMult || 1),
                                        ).toLocaleString()));
                                  },
                                }),
                                `)`,
                              ],
                            })
                          : null,
                      ],
                    }),
                  ],
                }),
              }),
              (0, R.jsxs)(`div`, {
                className: `avtr-autos` + (f ? ` avtr-locked-block` : ``),
                children: [
                  (0, R.jsxs)(`div`, {
                    className: `avtr-auto-line`,
                    children: [
                      (0, R.jsxs)(`label`, {
                        className: `avtr-switch`,
                        children: [
                          (0, R.jsx)(`input`, {
                            type: `checkbox`,
                            checked: s,
                            onChange: function () {
                              c(!s);
                            },
                          }),
                          (0, R.jsx)(`span`, { className: `avtr-slider` }),
                        ],
                      }),
                      (0, R.jsx)(`label`, {
                        className: `avtr-auto-label`,
                        onClick: function () {
                          c(!s);
                        },
                        children: `Auto Bet`,
                      }),
                    ],
                  }),
                  (0, R.jsxs)(`div`, {
                    className:
                      `avtr-auto-line avtr-auto-line2` +
                      (f ? ` avtr-locked` : ``),
                    children: [
                      (0, R.jsxs)(`label`, {
                        className: `avtr-switch avtr-mr2`,
                        children: [
                          (0, R.jsx)(`input`, {
                            type: `checkbox`,
                            checked: i,
                            disabled: f,
                            onChange: function () {
                              f || a(!i);
                            },
                          }),
                          (0, R.jsx)(`span`, { className: `avtr-slider` }),
                        ],
                      }),
                      (0, R.jsx)(`label`, {
                        className: `avtr-auto-label`,
                        onClick: function () {
                          f || a(!i);
                        },
                        children: `Auto Cashout`,
                      }),
                    ],
                  }),
                  i &&
                    (0, R.jsxs)(`div`, {
                      className: `avtr-coat` + (f ? ` avtr-locked` : ``),
                      children: [
                        (0, R.jsx)(`div`, {
                          className: `avtr-coat-label`,
                          children: `Cashout at`,
                        }),
                        (0, R.jsxs)(`div`, {
                          className: `avtr-avedi avtr-coat-group`,
                          children: [
                            (0, R.jsx)(`button`, {
                              type: `button`,
                              className: `avtr-avedi-btn`,
                              "aria-label": `Decrease cashout`,
                              disabled: f,
                              ...(f
                                ? {}
                                : le(function () {
                                    o(function (e) {
                                      return Math.max(
                                        B,
                                        +((Number(e) || B) - 0.01).toFixed(2),
                                      );
                                    });
                                  })),
                              children: (0, R.jsx)(`svg`, {
                                viewBox: `0 0 28 40`,
                                width: `28`,
                                height: `40`,
                                "aria-hidden": `true`,
                                children: (0, R.jsx)(`rect`, {
                                  x: `6`,
                                  y: `18.5`,
                                  width: `17`,
                                  height: `3`,
                                  rx: `1`,
                                  fill: `currentColor`,
                                }),
                              }),
                            }),
                            (0, R.jsx)(`input`, {
                              className: `avtr-avedi-input`,
                              type: `text`,
                              inputMode: `decimal`,
                              value: l,
                              disabled: f,
                              onChange: function (e) {
                                d(e.target.value);
                                var t = parseFloat(e.target.value);
                                t >= B && o(+t.toFixed(2));
                              },
                              onBlur: function () {
                                var e = parseFloat(l);
                                (e >= B || (e = B),
                                  o(+e.toFixed(2)),
                                  d(e.toFixed(2)));
                              },
                            }),
                            (0, R.jsx)(`button`, {
                              type: `button`,
                              className: `avtr-avedi-btn`,
                              "aria-label": `Increase cashout`,
                              disabled: f,
                              ...(f
                                ? {}
                                : le(function () {
                                    o(function (e) {
                                      return +((Number(e) || B) + 0.01).toFixed(
                                        2,
                                      );
                                    });
                                  })),
                              children: (0, R.jsxs)(`svg`, {
                                viewBox: `0 0 28 40`,
                                width: `28`,
                                height: `40`,
                                "aria-hidden": `true`,
                                children: [
                                  (0, R.jsx)(`rect`, {
                                    x: `6`,
                                    y: `18.5`,
                                    width: `17`,
                                    height: `3`,
                                    rx: `1`,
                                    fill: `currentColor`,
                                  }),
                                  (0, R.jsx)(`rect`, {
                                    x: `13`,
                                    y: `11.5`,
                                    width: `3`,
                                    height: `17`,
                                    rx: `1`,
                                    fill: `currentColor`,
                                  }),
                                ],
                              }),
                            }),
                          ],
                        }),
                      ],
                    }),
                ],
              }),
            ],
          }),
        },
        e,
      )
    );
  }
  function ot(e) {
    return e < 1.5 ? `#e74c3c` : e < 3 ? `#f39c12` : `#2ecc71`;
  }
  function st(e) {
    return e < 1.5 ? `#c0392b` : e < 3 ? `#e67e22` : `#27ae60`;
  }
  function ct() {
    var e =
      T.length > 0
        ? T.slice(0, 50)
        : te.slice(0, 50).map(function (e) {
            return { crash_point: e, mode: null };
          });
    return (0, R.jsxs)(`div`, {
      className: `avtr-results-tab`,
      children: [
        (0, R.jsx)(`div`, {
          className: `avtr-results-header`,
          children: `Results for Last 50 Rounds`,
        }),
        (0, R.jsxs)(`div`, {
          style: {
            fontSize: 10,
            color: `rgba(255,255,255,0.5)`,
            padding: `2px 8px 6px`,
            display: `flex`,
            gap: 12,
            flexWrap: `wrap`,
          },
          children: [
            (0, R.jsx)(`span`, {
              children: `🛡 provably fair — crash from the sealed hash`,
            }),
            (0, R.jsx)(`span`, {
              children: `⚙ house-edge round — crash set by the house edge`,
            }),
          ],
        }),
        (0, R.jsxs)(`div`, {
          className: `avtr-results-grid`,
          children: [
            e.map(function (e, t) {
              var n = parseFloat(e.crash_point),
                r = e.mode == null ? null : e.mode === `auto`;
              return (0, R.jsxs)(
                `div`,
                {
                  className: `avtr-result-cell`,
                  style: { borderColor: st(n), position: `relative` },
                  children: [
                    (0, R.jsx)(`span`, {
                      style: { color: ot(n) },
                      children: n.toFixed(2),
                    }),
                    r === !0 &&
                      (0, R.jsx)(`span`, {
                        title: `Provably fair`,
                        style: {
                          position: `absolute`,
                          top: 1,
                          right: 3,
                          fontSize: 8,
                          opacity: 0.65,
                        },
                        children: `🛡`,
                      }),
                    r === !1 &&
                      (0, R.jsx)(`span`, {
                        title: `House-edge round — crash set by the house edge, not hash-verifiable`,
                        style: {
                          position: `absolute`,
                          top: 1,
                          right: 3,
                          fontSize: 8,
                          color: `#f59e0b`,
                        },
                        children: `⚙`,
                      }),
                  ],
                },
                t,
              );
            }),
            e.length === 0 &&
              (0, R.jsx)(`div`, {
                style: {
                  color: `#666`,
                  padding: 20,
                  textAlign: `center`,
                  gridColumn: `1 / -1`,
                },
                children: `No rounds yet`,
              }),
          ],
        }),
      ],
    });
  }
  function lt() {
    return (0, R.jsxs)(`div`, {
      className: `avtr-rules-inline`,
      children: [
        (0, R.jsx)(`div`, {
          className: `avtr-rules-header`,
          children: (0, R.jsx)(`span`, { children: `Market Rules` }),
        }),
        (0, R.jsxs)(`div`, {
          className: `avtr-rules-body`,
          children: [
            (0, R.jsx)(`h2`, { children: n.title }),
            (0, R.jsx)(`h3`, { children: `GAME RULES` }),
            (0, R.jsxs)(`div`, {
              className: `avtr-rule`,
              children: [
                (0, R.jsx)(`b`, { children: `1.` }),
                ` Place your bets before takeoff.`,
              ],
            }),
            (0, R.jsxs)(`div`, {
              className: `avtr-rule`,
              children: [
                (0, R.jsx)(`b`, { children: `2.` }),
                ` Users can not cancel their bets after takeoff.`,
              ],
            }),
            (0, R.jsxs)(`div`, {
              className: `avtr-rule`,
              children: [
                (0, R.jsx)(`b`, { children: `3.` }),
                ` Any bets placed after takeoff will be placed in the next round.`,
              ],
            }),
            (0, R.jsxs)(`div`, {
              className: `avtr-rule`,
              children: [
                (0, R.jsx)(`b`, { children: `4.` }),
                ` Cashouts can only be done for active bets while the flight is still in air.`,
              ],
            }),
            (0, R.jsxs)(`div`, {
              className: `avtr-rule`,
              children: [
                (0, R.jsx)(`b`, { children: `5.` }),
                ` If the plane crashes before you cash out, your bet is lost.`,
              ],
            }),
            (0, R.jsxs)(`div`, {
              className: `avtr-rule`,
              children: [
                (0, R.jsx)(`b`, { children: `6.` }),
                ` Your winnings = Bet Amount x Cashout Multiplier.`,
              ],
            }),
            (0, R.jsxs)(`div`, {
              className: `avtr-rule`,
              children: [
                (0, R.jsx)(`b`, { children: `7.` }),
                ` You can set an Auto Cashout — you'll be cashed out automatically the instant the multiplier reaches your chosen value (minimum 1.20x).`,
              ],
            }),
            (0, R.jsx)(`h3`, { children: `LIMITS` }),
            (0, R.jsx)(`div`, {
              className: `avtr-rule`,
              children: `• Minimum bet is 10.`,
            }),
            (0, R.jsx)(`div`, {
              className: `avtr-rule`,
              children: `• Maximum bet and winnings are subject to your account's limits.`,
            }),
            (0, R.jsx)(`div`, {
              className: `avtr-rule`,
              children: `• The maximum multiplier is 30× — a round never goes higher, and an auto-cashout set above 30× will not trigger.`,
            }),
            (0, R.jsx)(`div`, {
              className: `avtr-rules-warning`,
              children: `A good internet connection is required to play Aviator. If players are unable to cashout due to a poor internet connection, the bet will be settled as lost.`,
            }),
          ],
        }),
      ],
    });
  }
  function ut() {
    return (0, R.jsxs)(`div`, {
      className: `bets avtr-lucky`,
      children: [
        (0, R.jsxs)(`strong`, { children: [`Online now `, we || pe.length] }),
        (0, R.jsx)(`div`, {
          className: `betting-table`,
          children: (0, R.jsxs)(`table`, {
            className: `table`,
            children: [
              (0, R.jsx)(`thead`, {
                children: (0, R.jsxs)(`tr`, {
                  children: [
                    (0, R.jsx)(`th`, { children: `User` }),
                    (0, R.jsx)(`th`, { children: `Size` }),
                    (0, R.jsx)(`th`, { children: `Price` }),
                    (0, R.jsx)(`th`, { children: `Profit` }),
                  ],
                }),
              }),
              (0, R.jsx)(`tbody`, {
                children: pe.map(function (e) {
                  var t = e.status === `cashed` && e.cashoutAt;
                  return (0, R.jsxs)(
                    `tr`,
                    {
                      children: [
                        (0, R.jsx)(`td`, { children: e.user }),
                        (0, R.jsx)(`td`, { children: oe(e.stake) }),
                        (0, R.jsx)(`td`, {
                          children: t
                            ? Number(e.cashoutAt)
                                .toFixed(2)
                                .replace(/\.?0+$/, ``)
                            : `--`,
                        }),
                        (0, R.jsx)(`td`, { children: t ? oe(e.profit) : `` }),
                      ],
                    },
                    e.id,
                  );
                }),
              }),
            ],
          }),
        }),
      ],
    });
  }
  var dt = u === `flying` || u === `crashed`,
    ft = u === `betting` || u === `waiting`,
    pt =
      u === `betting`
        ? `STARTING NEXT ROUND IN ` + y
        : `WAITING FOR NEXT ROUND`;
  return (0, R.jsxs)(x, {
    children: [
      (0, R.jsxs)(`div`, {
        className: `avtr-page`,
        children: [
          Ge &&
            (0, R.jsxs)(`div`, {
              className: `avtr-win-popup`,
              children: [
                `+`,
                o() ? o() + ` ` : ``,
                Ge.amount.toLocaleString(),
                ` @ `,
                Ge.multiplier.toFixed(2),
                `x!`,
              ],
            }),
          (0, R.jsx)(b, {
            title: n.title,
            tabs: [`Game`, `Results`, `Rules`],
            activeTab: s,
            onTabChange: c,
          }),
          s === `game` &&
            (0, R.jsxs)(`div`, {
              className: `left-content avtr-left`,
              children: [
                t === `classic`
                  ? (0, R.jsx)(k, {
                      phase: u,
                      multiplier: h,
                      crashPoint: C,
                      countdown: y,
                      onlineCount: z,
                      connected: F,
                      soundOn: U,
                      onToggleSound: function () {
                        me(!U);
                      },
                      multElRef: _e,
                    })
                  : (0, R.jsx)(`div`, {
                      className: `avtr-stagewrap`,
                      children: (0, R.jsx)(`div`, {
                        className: `avtr-stage`,
                        children: (0, R.jsxs)(`div`, {
                          className: `avtr-stage-inner`,
                          children: [
                            (0, R.jsx)(ee, {
                              phase: u,
                              multiplier: h,
                              crashPoint: C,
                              onPlanePos: Je,
                            }),
                            (0, R.jsx)(re, { ref: qe }),
                            (0, R.jsxs)(`div`, {
                              className: `avtr-players`,
                              children: [
                                (0, R.jsxs)(`svg`, {
                                  className: `avtr-players-ico`,
                                  viewBox: `0 0 10 14`,
                                  width: `10`,
                                  height: `14`,
                                  "aria-hidden": `true`,
                                  children: [
                                    (0, R.jsx)(`circle`, {
                                      cx: `5`,
                                      cy: `3.4`,
                                      r: `3`,
                                      fill: `currentColor`,
                                    }),
                                    (0, R.jsx)(`path`, {
                                      d: `M0 13.5c0-3.4 2.2-5.6 5-5.6s5 2.2 5 5.6z`,
                                      fill: `currentColor`,
                                    }),
                                  ],
                                }),
                                (0, R.jsx)(`b`, { children: z }),
                              ],
                            }),
                            (0, R.jsxs)(`div`, {
                              className: `avtr-signal` + (F ? ` ok` : ``),
                              children: [
                                (0, R.jsx)(`span`, { className: `b1` }),
                                (0, R.jsx)(`span`, { className: `b2` }),
                                (0, R.jsx)(`span`, { className: `b3` }),
                                (0, R.jsx)(`span`, { className: `b4` }),
                              ],
                            }),
                            (0, R.jsx)(`button`, {
                              type: `button`,
                              className: `avtr-sound` + (U ? ` on` : ``),
                              onClick: function () {
                                me(!U);
                              },
                              "aria-label": U ? `Mute` : `Unmute`,
                              children: (0, R.jsxs)(`svg`, {
                                viewBox: `0 0 24 24`,
                                width: `24`,
                                height: `24`,
                                "aria-hidden": `true`,
                                children: [
                                  (0, R.jsx)(`path`, {
                                    d: `M4 9v6h4l5 4V5L8 9H4z`,
                                    fill: `currentColor`,
                                  }),
                                  U
                                    ? (0, R.jsx)(`path`, {
                                        d: `M16 8.5a4.5 4.5 0 0 1 0 7M18.5 6a8 8 0 0 1 0 12`,
                                        stroke: `currentColor`,
                                        strokeWidth: `1.8`,
                                        fill: `none`,
                                        strokeLinecap: `round`,
                                      })
                                    : null,
                                ],
                              }),
                            }),
                            (0, R.jsxs)(`div`, {
                              className:
                                `avtr-multbox` +
                                (u === `crashed` ? ` crashed` : ``),
                              style: { display: dt ? `flex` : `none` },
                              children: [
                                u === `crashed` &&
                                  (0, R.jsx)(`span`, {
                                    className: `avtr-flew`,
                                    children: `FLEW AWAY!`,
                                  }),
                                (0, R.jsx)(`div`, {
                                  className:
                                    `avtr-mult` +
                                    (u === `flying` ? ` stroke-black` : ``),
                                  children:
                                    u === `flying`
                                      ? (0, R.jsx)(`span`, {
                                          ref: _e,
                                          children: `1.00 x`,
                                        })
                                      : (0, R.jsxs)(`span`, {
                                          children: [C.toFixed(2), ` x`],
                                        }),
                                }),
                              ],
                            }),
                            ft &&
                              (0, R.jsx)(`div`, {
                                className: `avtr-overlay`,
                                children: (0, R.jsxs)(`div`, {
                                  className: `avtr-overlay-content`,
                                  children: [
                                    (0, R.jsx)(`img`, {
                                      className: `avtr-propeller`,
                                      src: `/assets/games/aviatorx-ref/loading-fan.svg`,
                                      alt: ``,
                                      draggable: `false`,
                                    }),
                                    (0, R.jsx)(`span`, {
                                      className: `avtr-overlay-text`,
                                      children: (0, R.jsx)(`b`, {
                                        children: pt,
                                      }),
                                    }),
                                  ],
                                }),
                              }),
                          ],
                        }),
                      }),
                    }),
                (0, R.jsx)(`audio`, {
                  ref: he,
                  src: `/assets/games/aviator-ref/aviatorbg.mp3`,
                  loop: !0,
                  preload: `none`,
                }),
                (0, R.jsx)(`audio`, {
                  ref: W,
                  src: `/assets/games/aviatorx-ref/crashedmusic.mp3`,
                  preload: `none`,
                }),
                (0, R.jsxs)(`div`, {
                  className: `footer-divbpg border-gradient-footer border-gradient-purple-footer bp-resultsbar avtr-histbar`,
                  children: [
                    (0, R.jsx)(`div`, {
                      className: `buttons-div`,
                      children: te.slice(0, 10).map(function (e, t) {
                        return (0, R.jsx)(
                          `button`,
                          {
                            type: `button`,
                            className: `video-button border-gradient-btn`,
                            children: Number(e).toFixed(2),
                          },
                          t,
                        );
                      }),
                    }),
                    (0, R.jsxs)(`div`, {
                      className: `round-div`,
                      children: [
                        (0, R.jsx)(`div`, {
                          className: `label`,
                          children: `Round ID:`,
                        }),
                        (0, R.jsx)(`div`, {
                          className: `id`,
                          children: M || `--`,
                        }),
                      ],
                    }),
                  ],
                }),
                (0, R.jsx)(`div`, {
                  className: `avtr-main`,
                  children: (0, R.jsxs)(`div`, {
                    className: `avtr-row`,
                    children: [at(1), at(2)],
                  }),
                }),
              ],
            }),
          s === `results` && ct(),
          s === `rules` && lt(),
          !F &&
            (0, R.jsx)(`div`, {
              className: `avtr-disconnected`,
              children: `Reconnecting...`,
            }),
        ],
      }),
      (0, R.jsx)(f, { slot: `bets`, children: ut() }),
    ],
  });
}
var L,
  R,
  de,
  z,
  B,
  V,
  fe = e(() => {
    ((L = n(t())),
      a(),
      s(),
      h(),
      c(),
      p(),
      y(),
      u(),
      v(),
      te(),
      D(),
      P(),
      ie(),
      (R = r()),
      (de = 1e3),
      (z = null),
      (B = 1.2),
      (V = {
        placed: !1,
        id: null,
        amount: 0,
        cashedOut: !1,
        cashoutAt: 0,
        profit: 0,
      }));
  });
fe();
export { I as default, fe as t };
