import { i as e, n as t, o as n, t as r } from "./jsx-runtime-tHiRxOvn.js";
import { C as i, T as a } from "./tpstudio-BPQXDLhP.js";
function o(e) {
  if (!e) return null;
  if (typeof e == `string`) {
    let t = e.match(/^(10|[2-9AJQK])([shdcSHDC])$/);
    return t
      ? {
          label: t[1],
          suitName: v[t[2].toLowerCase()],
          sym: g[v[t[2].toLowerCase()]],
        }
      : { label: e, suitName: ``, sym: `` };
  }
  let t = e.suitName || e.suit || ``,
    n = y[t] || t,
    r = e.label || e.rank || e.value || e.display || ``;
  return { label: String(r), suitName: n, sym: g[n] || e.suitSymbol || `` };
}
function s({ card: e, hidden: t }) {
  if (t)
    return (0, h.jsx)(`div`, {
      className: `open_cardTP bp-card-back`,
      "aria-label": `face-down card`,
    });
  let n = o(e);
  if (!n)
    return (0, h.jsx)(`div`, {
      className: `open_cardTP bp-card-slot`,
      "aria-hidden": `true`,
    });
  let r = _.has(n.suitName),
    i = n.sym || g[n.suitName] || ``;
  return (0, h.jsxs)(`div`, {
    className: `open_cardTP ` + (r ? `red` : `black`),
    "aria-label": n.label + ` of ` + n.suitName,
    children: [
      (0, h.jsx)(`span`, {
        className: `bp-rank` + (n.label === `10` ? ` bp-rank-10` : ``),
        children: n.label,
      }),
      (0, h.jsx)(`span`, { className: `bp-suit-mini`, children: i }),
      (0, h.jsx)(`span`, { className: `bp-suit`, children: i }),
    ],
  });
}
function c({ cards: e, slots: t, hidden: n }) {
  let r = (e && e.length ? e : []).slice();
  for (; r.length < Math.max(1, t || 1);) r.push(null);
  let i = r.length,
    a = i > 7;
  return (0, h.jsx)(`div`, {
    className: `BFBCardHandView`,
    children: (0, h.jsx)(`div`, {
      className: `BFBCardFanView` + (a ? ` bp-fan-row` : ``),
      children: r.map((e, t) =>
        (0, h.jsx)(
          `div`,
          {
            className: a
              ? `bp-fan-cell`
              : i === 1
                ? `card1`
                : `card` + (t + 1) + `in` + i,
            children: (0, h.jsx)(s, { card: e, hidden: n && n[t] }),
          },
          t,
        ),
      ),
    }),
  });
}
function l({
  name: e,
  cards: t,
  slots: n,
  total: r,
  highlight: i,
  status: a,
  hidden: o,
}) {
  return (0, h.jsx)(`div`, {
    className: `player`,
    children: (0, h.jsxs)(`div`, {
      className: `player-item` + (r == null ? `` : ` has-total`),
      children: [
        (0, h.jsx)(`span`, { className: `name`, children: e }),
        (0, h.jsxs)(`div`, {
          className:
            `player-card` +
            (i === `win` ? ` bp-win` : i === `lose` ? ` bp-lose` : ``),
          children: [
            (0, h.jsx)(`div`, {
              className: `header-title`,
              children: (0, h.jsx)(`span`, {
                className: `status`,
                children: a || ``,
              }),
            }),
            (0, h.jsx)(c, { cards: t, slots: n, hidden: o }),
          ],
        }),
        r == null
          ? null
          : (0, h.jsx)(`div`, { className: `bp-total`, children: r }),
      ],
    }),
  });
}
function u({ muted: e, onToggle: t }) {
  return (0, h.jsx)(`button`, {
    type: `button`,
    className: `sound-icon`,
    "aria-label": e ? `Unmute` : `Mute`,
    onClick: t,
    children: e
      ? (0, h.jsx)(`svg`, {
          viewBox: `0 0 24 24`,
          fill: `currentColor`,
          "aria-hidden": `true`,
          children: (0, h.jsx)(`path`, {
            d: `M16.5 12A4.5 4.5 0 0 0 14 7.97v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51A8.8 8.8 0 0 0 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3 3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06a8.99 8.99 0 0 0 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4 9.91 6.09 12 8.18V4z`,
          }),
        })
      : (0, h.jsx)(`svg`, {
          viewBox: `0 0 24 24`,
          fill: `currentColor`,
          "aria-hidden": `true`,
          children: (0, h.jsx)(`path`, {
            d: `M3 9v6h4l5 5V4L7 9H3zm13.5 3A4.5 4.5 0 0 0 14 7.97v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z`,
          }),
        }),
  });
}
function d({
  timer: e,
  isBetting: t,
  viewers: n,
  phaseLabel: r,
  players: a,
  sound: o,
  className: s,
  children: c,
}) {
  return (0, h.jsxs)(i, {
    timer: e,
    isBetting: t,
    players: n,
    className: `blackjack` + (s ? ` ` + s : ``),
    children: [
      r
        ? (0, h.jsx)(`div`, { className: `bp-stage-phase`, children: r })
        : null,
      (0, h.jsx)(`div`, {
        className: `bp-players`,
        children: (a || []).map((e, t) =>
          (0, h.jsx)(l, { ...e }, e.key || e.name || t),
        ),
      }),
      c,
      o ? (0, h.jsx)(u, { muted: o.muted, onToggle: o.onToggle }) : null,
    ],
  });
}
function f({
  timer: e,
  isBetting: t,
  viewers: n,
  phaseLabel: r,
  sound: a,
  className: o,
  children: s,
}) {
  return (0, h.jsxs)(i, {
    timer: e,
    isBetting: t,
    players: n,
    className: `blackjack bp-stage-hero` + (o ? ` ` + o : ``),
    children: [
      r
        ? (0, h.jsx)(`div`, { className: `bp-stage-phase`, children: r })
        : null,
      (0, h.jsx)(`div`, { className: `bp-stage-hero-body`, children: s }),
      a ? (0, h.jsx)(u, { muted: a.muted, onToggle: a.onToggle }) : null,
    ],
  });
}
function p(e) {
  let t = `bp-tps-mute:` + (e || `all`),
    [n, r] = (0, m.useState)(() => {
      try {
        return localStorage.getItem(t) === `1`;
      } catch {
        return !1;
      }
    });
  return (
    (0, m.useEffect)(() => {
      try {
        localStorage.setItem(t, n ? `1` : `0`);
      } catch {}
    }, [t, n]),
    { muted: n, onToggle: () => r((e) => !e) }
  );
}
var m,
  h,
  g,
  _,
  v,
  y,
  b = e(() => {
    ((m = n(t())),
      a(),
      (h = r()),
      (g = {
        spades: `♠`,
        hearts: `♥`,
        diamonds: `♦`,
        clubs: `♣`,
        s: `♠`,
        h: `♥`,
        d: `♦`,
        c: `♣`,
        S: `♠`,
        H: `♥`,
        D: `♦`,
        C: `♣`,
      }),
      (_ = new Set([`hearts`, `diamonds`, `h`, `d`, `H`, `D`])),
      (v = { s: `spades`, h: `hearts`, d: `diamonds`, c: `clubs` }),
      (y = { "♠": `spades`, "♥": `hearts`, "♦": `diamonds`, "♣": `clubs` }));
  });
export { p as a, b as i, f as n, d as r, s as t };
