const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "react-assets/BetResultDetail--P-6YJMd.js",
      "react-assets/jsx-runtime-tHiRxOvn.js",
      "react-assets/tpstudio-BPQXDLhP.js",
      "react-assets/client-CBMQk18y.js",
      "react-assets/client-2CkvQoHD.css",
      "react-assets/lucide-react-DAUqNF6I.js",
      "react-assets/tpstudio-C4IiNa1K.css",
      "react-assets/BetResultDetail-MnAxSGAw.css",
    ]),
) => i.map((i) => d[i]);
import { i as e, n as t, o as n, t as r } from "./jsx-runtime-tHiRxOvn.js";
import {
  B as i,
  E as a,
  H as o,
  N as s,
  P as c,
  S as l,
  T as u,
  X as d,
  Z as f,
  _ as p,
  o as m,
  p as h,
  x as g,
} from "./tpstudio-BPQXDLhP.js";
import { n as _, r as v, t as y } from "./useBetPresets-D3FQLB7x.js";
import { t as b } from "./haptics-BxKo09sP.js";
function x({
  title: e,
  titleAccent: t,
  balance: n,
  roundInfo: r,
  tabs: i,
  activeTab: a,
  onTabChange: o,
  onBack: s,
  theme: c = `dark`,
}) {
  return (0, N.jsxs)(`div`, {
    className: `footer-divbpg border-gradient-footer border-gradient-purple-footer bp-titlebar`,
    children: [
      (0, N.jsx)(`div`, {
        className: `col-6 col-md-6 titlebarname`,
        children: (0, N.jsx)(`p`, { children: e }),
      }),
      (0, N.jsx)(`div`, {
        className: `col-6 col-md-6 inline-block Gameidcol`,
        children: i
          ? (0, N.jsx)(`div`, {
              role: `group`,
              "aria-label": `Game tabs`,
              className: `btn-group btn-group-sm mr-2`,
              children: i.map((e) =>
                (0, N.jsx)(
                  `button`,
                  {
                    type: `button`,
                    onClick: () => o(e.toLowerCase()),
                    className:
                      `tablink btn btn-primary bbactive` +
                      (a === e.toLowerCase() ? ` is-active` : ``),
                    children: e,
                  },
                  e,
                ),
              ),
            })
          : r
            ? (0, N.jsx)(`span`, {
                style: { fontSize: 12, alignSelf: `center` },
                children: r,
              })
            : null,
      }),
    ],
  });
}
function S({
  runners: e,
  odds: t,
  activeBets: n,
  selectedBet: r,
  onOddsClick: i,
  isBetting: a,
  winner: o,
  darkGrid: s,
  phase: c,
  resultTimer: u,
  betSlipProps: d,
  flush: f = !1,
  gridCols: p,
  headerBg: m,
  title: h,
  resultRevealed: _,
  winBandText: v,
  loseBandText: y,
}) {
  let b = T(e, n),
    x = _ === !1,
    S = !a && (c === `result` || c === `settled`) && !x,
    C =
      !a &&
      (c === `suspended` ||
        c === `dealing` ||
        c === `tie_suspended` ||
        c === `card_open` ||
        (x && (c === `result` || c === `settled`)));
  return (
    x && (o = void 0),
    (0, N.jsxs)(N.Fragment, {
      children: [
        (0, N.jsxs)(l, {
          title: h,
          children: [
            e.map((e) => {
              let s = o && (Array.isArray(o) ? o.includes(e.key) : o === e.key),
                c = t[e.key]?.back || ``,
                l = t[e.key]?.lay || ``,
                u = t[e.key]?.hideBack || !1,
                d = t[e.key]?.hideLay || !1,
                f = r?.runner === e.key && r?.side === `back`,
                p = r?.runner === e.key && r?.side === `lay`,
                m = b[e.key] || 0,
                h = n?.some((t) => t.selection === e.label) && m === 0,
                _ = null;
              if (S) {
                let e = s ? v || `WINNER` : y || `ROUND OVER !`;
                _ = {
                  text: e,
                  kind:
                    s && !v ? `win` : e === `SUSPENDED !` ? `suspended` : ``,
                };
              } else C && (_ = { text: `SUSPENDED !`, kind: `suspended` });
              return (0, N.jsx)(
                g,
                {
                  label: e.label,
                  pnl: m,
                  sub: h ? `●` : null,
                  isWin: !!s,
                  isBetting: a,
                  band: _,
                  back: {
                    price: c,
                    vol: 5e5,
                    sel: f,
                    hidden: u,
                    onClick: () => i(e, `back`),
                  },
                  lay: {
                    price: l,
                    vol: 5e5,
                    sel: p,
                    hidden: d,
                    onClick: () => i(e, `lay`),
                  },
                },
                e.key,
              );
            }),
            (c === `result` || c === `settled`) &&
              !x &&
              u > 0 &&
              (0, N.jsxs)(`div`, {
                className: `bp-next-round`,
                children: [`NEXT ROUND IN `, u, `s`],
              }),
          ],
        }),
        d && r && e.some((e) => e.key === r.runner) && (0, N.jsx)(E, { ...d }),
      ],
    })
  );
}
function C(e) {
  return (e || ``).toLowerCase().replace(/[-_\s]/g, ``);
}
function w(e, t) {
  if (!e || !t) return !1;
  if (e === t) return !0;
  let n = C(e),
    r = C(t);
  return (
    n === r ||
    n.replace(/^p(\d+)/, `$1`) === r ||
    n === r.replace(/^p(\d+)/, `$1`)
  );
}
function T(e, t) {
  if (!t || t.length === 0) return {};
  let n = new Set(e.map((e) => C(e.key))),
    r = new Set(e.map((e) => C(e.label)));
  for (let e of [...n]) {
    let t = e.replace(/^p(\d+)/, `$1`);
    t !== e && n.add(t);
  }
  let i = t.filter((e) => {
    let t = C(e.market_id || e.selection || ``);
    return n.has(t) || r.has(t);
  });
  if (i.length === 0) return {};
  let a = {};
  for (let t of e) {
    let e = 0;
    for (let n of i) {
      let r = n.market_id || n.selection || ``,
        i = (n.side || ``).toLowerCase(),
        a = parseFloat(n.stake || n.amount || 0),
        o = parseFloat(n.odds || 0);
      if (!a || !o) continue;
      let s = w(r, t.key) || w(r, t.label);
      i === `back`
        ? (e += s ? a * (o - 1) : -a)
        : (e += s ? -(a * (o - 1)) : a);
    }
    a[t.key] = Math.round(e);
  }
  return a;
}
function E({
  selectedBet: e,
  stake: t,
  setStake: n,
  onPlace: r,
  onClose: a,
  isPlacing: o,
  potentialWin: s,
  currencySymbol: l,
  onOddsChange: u,
  theme: d = `dark`,
  flush: f = !1,
}) {
  let m = (0, M.useRef)(null),
    h = (0, M.useRef)(null),
    [g, v] = (0, M.useState)(!1),
    [b, x] = (0, M.useState)(null),
    [S, C] = (0, M.useState)(``),
    [w, T] = (0, M.useState)(!1);
  if (
    ((0, M.useEffect)(() => {
      if (!(typeof window < `u` && window.innerWidth < 900) && e && m.current) {
        m.current.scrollIntoView({ behavior: `smooth`, block: `nearest` });
        try {
          h.current && h.current.focus();
        } catch {}
      }
    }, [e?.runner, e?.side]),
    !e)
  )
    return null;
  let E = e.side === `back`,
    D = Number(t) || 0,
    O = E ? D : Math.floor(D * (parseFloat(e.odds) - 1)),
    k = typeof window < `u` && window.innerWidth < 900,
    A = _(),
    j = () => {
      try {
        document.activeElement &&
          document.activeElement.blur &&
          document.activeElement.blur();
      } catch {}
      r && r();
    },
    P = () => {
      (C(``),
        x({ stakes: A.stakes.map(String), plus: A.plus.map(String) }),
        v((e) => !e));
    },
    F = async () => {
      let e = (e) => e.map((e) => Math.round(Number(e))),
        t = e(b.stakes),
        n = e(b.plus);
      if ([...t, ...n].some((e) => !isFinite(e) || e <= 0)) {
        C(`Each box must be a positive number`);
        return;
      }
      (T(!0), C(``));
      try {
        (await i.post(`/api/me/bet-stakes`, { stakes: t, plus: n }),
          await c.getState().refreshUser(),
          v(!1));
      } catch (e) {
        C(
          (e && e.response && e.response.data && e.response.data.error) ||
            `Could not save — try again`,
        );
      } finally {
        T(!1);
      }
    },
    I = (e, t, n) => {
      x((r) => {
        let i = { stakes: r.stakes.slice(), plus: r.plus.slice() };
        return ((i[e][t] = n), i);
      });
    },
    L = (0, N.jsxs)(`div`, {
      className: `bets`,
      id: `betSlip`,
      "data-betslip": `true`,
      ref: m,
      children: [
        (0, N.jsxs)(`strong`, {
          children: [
            `Bet Slip`,
            (0, N.jsx)(`button`, {
              type: `button`,
              className: `bp-editsizes-link`,
              onClick: P,
              children: g ? `Back to Slip` : `Edit Bet Sizes`,
            }),
          ],
        }),
        g && b
          ? (0, N.jsxs)(`div`, {
              className: `bp-editsizes-panel`,
              children: [
                (0, N.jsxs)(`div`, {
                  className: `bp-es-row`,
                  children: [
                    (0, N.jsx)(`span`, {
                      className: `bp-es-label`,
                      children: `Stake`,
                    }),
                    b.stakes.map((e, t) =>
                      (0, N.jsx)(
                        `input`,
                        {
                          type: `number`,
                          min: `1`,
                          value: e,
                          onChange: (e) => I(`stakes`, t, e.target.value),
                        },
                        t,
                      ),
                    ),
                  ],
                }),
                (0, N.jsxs)(`div`, {
                  className: `bp-es-row`,
                  children: [
                    (0, N.jsx)(`span`, {
                      className: `bp-es-label`,
                      children: `Add (+)`,
                    }),
                    b.plus.map((e, t) =>
                      (0, N.jsx)(
                        `input`,
                        {
                          type: `number`,
                          min: `1`,
                          value: e,
                          onChange: (e) => I(`plus`, t, e.target.value),
                        },
                        t,
                      ),
                    ),
                  ],
                }),
                S
                  ? (0, N.jsx)(`div`, { className: `bp-es-err`, children: S })
                  : null,
                (0, N.jsxs)(`div`, {
                  className: `bp-es-actions`,
                  children: [
                    (0, N.jsx)(`button`, {
                      type: `button`,
                      className: `btn btn-danger`,
                      disabled: w,
                      onClick: P,
                      children: (0, N.jsx)(`b`, { children: `Cancel` }),
                    }),
                    (0, N.jsx)(`button`, {
                      type: `button`,
                      className: `btn btn-primary`,
                      disabled: w,
                      onClick: F,
                      children: (0, N.jsx)(`b`, {
                        children: w ? `Saving...` : `Save`,
                      }),
                    }),
                  ],
                }),
              ],
            })
          : (0, N.jsx)(`div`, {
              className: `betting-table`,
              children: (0, N.jsxs)(`table`, {
                className: `table`,
                children: [
                  (0, N.jsx)(`thead`, {
                    children: (0, N.jsxs)(`tr`, {
                      children: [
                        (0, N.jsx)(`th`, { children: `Bet for` }),
                        (0, N.jsx)(`th`, { children: `Odds` }),
                        (0, N.jsx)(`th`, { children: `Stake` }),
                        (0, N.jsx)(`th`, { children: `Profit` }),
                      ],
                    }),
                  }),
                  (0, N.jsxs)(`tbody`, {
                    children: [
                      (0, N.jsxs)(`tr`, {
                        className: E ? `back` : `lay`,
                        children: [
                          (0, N.jsx)(`td`, { children: e.runnerLabel }),
                          (0, N.jsx)(`td`, {
                            children: (0, N.jsxs)(`div`, {
                              className: `quantity`,
                              title: u ? void 0 : `Odds are set by the game`,
                              children: [
                                (0, N.jsx)(`input`, {
                                  type: `number`,
                                  id: `bet-price`,
                                  value: e.odds,
                                  readOnly: !u,
                                  step: `0.01`,
                                  onChange: u
                                    ? (t) =>
                                        u(parseFloat(t.target.value) || e.odds)
                                    : void 0,
                                }),
                                (0, N.jsxs)(`span`, {
                                  className: `bp-odds-step`,
                                  children: [
                                    (0, N.jsx)(`button`, {
                                      type: `button`,
                                      tabIndex: -1,
                                      disabled: !u,
                                      "aria-label": `Increase odds`,
                                      onClick: u
                                        ? () =>
                                            u(
                                              Math.round(
                                                ((parseFloat(e.odds) || 0) +
                                                  0.01) *
                                                  100,
                                              ) / 100,
                                            )
                                        : void 0,
                                      children: `▴`,
                                    }),
                                    (0, N.jsx)(`button`, {
                                      type: `button`,
                                      tabIndex: -1,
                                      disabled: !u,
                                      "aria-label": `Decrease odds`,
                                      onClick: u
                                        ? () =>
                                            u(
                                              Math.round(
                                                ((parseFloat(e.odds) || 0) -
                                                  0.01) *
                                                  100,
                                              ) / 100,
                                            )
                                        : void 0,
                                      children: `▾`,
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          }),
                          (0, N.jsx)(`td`, {
                            children: (0, N.jsx)(`div`, {
                              className: `stake`,
                              children: (0, N.jsx)(`input`, {
                                type: `number`,
                                id: `bet-size`,
                                ref: h,
                                value: t,
                                placeholder: `0`,
                                onChange: (e) => n(e.target.value),
                                onKeyDown: (e) => {
                                  e.key === `Enter` &&
                                    !o &&
                                    D > 0 &&
                                    r &&
                                    (e.preventDefault(), r());
                                },
                              }),
                            }),
                          }),
                          (0, N.jsxs)(`td`, {
                            style: { textAlign: `right` },
                            children: [
                              (
                                s ??
                                (E
                                  ? Math.floor(D * (parseFloat(e.odds) - 1))
                                  : D)
                              ).toLocaleString(),
                              ` / `,
                              `-`,
                              O.toLocaleString(),
                            ],
                          }),
                        ],
                      }),
                      (0, N.jsx)(`tr`, {
                        className: E ? `back` : `lay`,
                        children: (0, N.jsx)(`td`, {
                          colSpan: `4`,
                          children: (0, N.jsx)(`table`, {
                            className: `table`,
                            children: (0, N.jsxs)(`tbody`, {
                              children: [
                                (0, N.jsx)(`tr`, {
                                  className: `checknow`,
                                  children: A.stakes
                                    .slice(0, 4)
                                    .map((e) =>
                                      (0, N.jsx)(
                                        `td`,
                                        {
                                          children: (0, N.jsx)(`span`, {
                                            className: `points`,
                                            "data-amount": e,
                                            onClick: () => n(String(e)),
                                            children: y(e),
                                          }),
                                        },
                                        e,
                                      ),
                                    ),
                                }),
                                (0, N.jsx)(`tr`, {
                                  className: `checknow`,
                                  children: A.plus
                                    .slice(0, 4)
                                    .map((e) =>
                                      (0, N.jsx)(
                                        `td`,
                                        {
                                          children: (0, N.jsxs)(`span`, {
                                            className: `points`,
                                            onClick: () =>
                                              n((t) =>
                                                String((Number(t) || 0) + e),
                                              ),
                                            children: [`+ `, y(e)],
                                          }),
                                        },
                                        `add-` + e,
                                      ),
                                    ),
                                }),
                                (0, N.jsxs)(`tr`, {
                                  children: [
                                    (0, N.jsx)(`td`, {
                                      children: (0, N.jsx)(`button`, {
                                        type: `reset`,
                                        className: `align-left btn btn-danger`,
                                        onClick: a,
                                        children: (0, N.jsx)(`b`, {
                                          children: `Close`,
                                        }),
                                      }),
                                    }),
                                    (0, N.jsx)(`td`, {
                                      children: (0, N.jsx)(`button`, {
                                        type: `reset`,
                                        className: `align-left btn btn-warning`,
                                        disabled: o,
                                        onClick: () => n(``),
                                        children: (0, N.jsx)(`b`, {
                                          children: `Clear`,
                                        }),
                                      }),
                                    }),
                                    (0, N.jsx)(`td`, { colSpan: `1` }),
                                    (0, N.jsx)(`td`, {
                                      children: (0, N.jsx)(`button`, {
                                        type: `button`,
                                        className:
                                          `btn btn-primary ld-over` +
                                          (o ? ` lz-place-sweep` : ``),
                                        disabled: o || !D,
                                        onClick: j,
                                        children: (0, N.jsx)(`b`, {
                                          children: o ? `Placing...` : `Submit`,
                                        }),
                                      }),
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          }),
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            }),
      ],
    });
  return k
    ? (0, N.jsxs)(N.Fragment, {
        children: [
          (0, N.jsx)(`div`, { onClick: a, className: `bp-slip-backdrop` }),
          (0, N.jsx)(`div`, { className: `bp-slip-mobile`, children: L }),
        ],
      })
    : (0, N.jsx)(p, { slot: `slip`, children: L });
}
function D({
  bets: e,
  formatMoney: t,
  marketLabels: n,
  roundId: r,
  phase: i,
  cashoutEnabled: a,
  onCashout: o,
  cashoutLoading: s,
  liveOdds: l,
}) {
  let [u, d] = (0, M.useState)(!1),
    [f, m] = (0, M.useState)(!1),
    [h, g] = (0, M.useState)(100),
    _ = i === `result` || i === `settled`,
    v = i === `betting`,
    y = c((e) => (e.user?.role || ``).toLowerCase()),
    b = P.includes(y),
    x = e.filter((e) => e.status === `active`),
    S = x.length > 0 && a && v && b,
    C = (() => {
      let e = 0,
        t = 0;
      for (let n of x) {
        let r = parseFloat(n.stake) || 0,
          i = parseFloat(n.odds) || 0,
          a = (n.side || ``).toLowerCase() === `back`,
          o = a ? Math.floor(r * (i - 1)) : r,
          s = a ? r : Math.floor(r * (i - 1)),
          c = n.market_id;
        c === `teamA`
          ? a
            ? ((e += o), (t -= s))
            : ((e -= s), (t += o))
          : c === `teamB` && (a ? ((t += o), (e -= s)) : ((t -= s), (e += o)));
      }
      return { pnlIfA: Math.round(e), pnlIfB: Math.round(t) };
    })(),
    w = (() => {
      if (!S || !l) return null;
      let { pnlIfA: e, pnlIfB: t } = C,
        n = e - t;
      if (Math.abs(n) < 2) return null;
      let r = n > 0 ? `teamB` : `teamA`,
        i = `back`,
        a = parseFloat(l?.[r]?.[i]);
      if (!a || a <= 1) return null;
      let o = h / 100,
        s = Math.round((Math.abs(n) * o) / a);
      if (s < 1) return null;
      let c, u;
      return (
        n > 0
          ? ((c = e - s), (u = t + Math.floor(s * (a - 1))))
          : ((c = e + Math.floor(s * (a - 1))), (u = t - s)),
        {
          targetMarket: r,
          targetSide: i,
          currentOdds: a,
          cashStake: s,
          newPnlIfA: c,
          newPnlIfB: u,
          bothGreen: c >= 0 && u >= 0,
        }
      );
    })(),
    T = (e) => (n && n[e.market_id]) || e.selection || e.market_id;
  return (0, N.jsxs)(N.Fragment, {
    children: [
      (0, N.jsx)(p, {
        slot: `bets`,
        children: (0, N.jsxs)(`div`, {
          className: `bets`,
          "data-mybets": `true`,
          children: [
            (0, N.jsxs)(`strong`, {
              children: [`Matched Bets (`, e.length, `)`],
            }),
            (0, N.jsx)(`div`, {
              className: `betting-table`,
              children: (0, N.jsxs)(`table`, {
                className: `table`,
                children: [
                  (0, N.jsx)(`thead`, {
                    children: (0, N.jsxs)(`tr`, {
                      children: [
                        (0, N.jsx)(`th`, { children: `Runner` }),
                        (0, N.jsx)(`th`, { children: `Price` }),
                        (0, N.jsx)(`th`, { children: `Size` }),
                        (0, N.jsx)(`th`, {}),
                      ],
                    }),
                  }),
                  (0, N.jsx)(`tbody`, {
                    children: e.map((e, n) => {
                      let r = (e.side || ``).toLowerCase(),
                        i = e.status && e.status !== `active`,
                        a = null;
                      if (i && e.pnl !== void 0 && e.pnl !== null) {
                        let n = parseFloat(e.pnl);
                        a = (0, N.jsxs)(`span`, {
                          style: {
                            fontWeight: 700,
                            color: n >= 0 ? `#0b6121` : `#d0021b`,
                          },
                          children: [n >= 0 ? `+` : ``, t(Math.round(n))],
                        });
                      } else if (!i && e.odds && e.stake) {
                        let n = parseFloat(e.stake) || 0,
                          i = parseFloat(e.odds) || 0,
                          o = r === `back`,
                          s = o ? Math.floor(n * (i - 1)) : n,
                          c = o ? n : Math.floor(n * (i - 1));
                        a = (0, N.jsxs)(`span`, {
                          style: { fontSize: 12, whiteSpace: `nowrap` },
                          children: [
                            (0, N.jsxs)(`span`, {
                              style: { color: `#0b6121` },
                              children: [`+`, t(s)],
                            }),
                            ` / `,
                            (0, N.jsxs)(`span`, {
                              style: { color: `#d0021b` },
                              children: [`-`, t(c)],
                            }),
                          ],
                        });
                      }
                      return (0, N.jsxs)(
                        `tr`,
                        {
                          className: r === `back` ? `back` : `lay`,
                          children: [
                            (0, N.jsxs)(`td`, {
                              children: [
                                e.username
                                  ? (0, N.jsx)(`span`, {
                                      style: {
                                        color: `#254465`,
                                        fontWeight: 700,
                                        marginRight: 4,
                                      },
                                      children: e.username,
                                    })
                                  : null,
                                T(e),
                                e.is_cashout
                                  ? (0, N.jsx)(`span`, {
                                      className: `runner-tag win`,
                                      style: { marginLeft: 4 },
                                      children: `CASHOUT`,
                                    })
                                  : null,
                              ],
                            }),
                            (0, N.jsx)(`td`, { children: e.odds }),
                            (0, N.jsx)(`td`, {
                              children: t(e.stake || e.amount || 0),
                            }),
                            (0, N.jsx)(`td`, { children: a }),
                          ],
                        },
                        e.id || e.bet_id || n,
                      );
                    }),
                  }),
                ],
              }),
            }),
            S &&
              (0, N.jsxs)(`div`, {
                className: `bp-extra`,
                children: [
                  (0, N.jsx)(`div`, {
                    style: {
                      fontSize: 12,
                      fontWeight: 700,
                      color: `#2b2f35`,
                      marginBottom: 2,
                    },
                    children: `CURRENT POSITION`,
                  }),
                  (0, N.jsxs)(`div`, {
                    className: `bp-pos`,
                    children: [
                      (0, N.jsxs)(`span`, {
                        children: [
                          n?.teamA || `Team A`,
                          ` wins: `,
                          (0, N.jsxs)(`b`, {
                            style: {
                              color: C.pnlIfA >= 0 ? `#0b6121` : `#d0021b`,
                            },
                            children: [C.pnlIfA >= 0 ? `+` : ``, t(C.pnlIfA)],
                          }),
                        ],
                      }),
                      (0, N.jsxs)(`span`, {
                        children: [
                          n?.teamB || `Team B`,
                          ` wins: `,
                          (0, N.jsxs)(`b`, {
                            style: {
                              color: C.pnlIfB >= 0 ? `#0b6121` : `#d0021b`,
                            },
                            children: [C.pnlIfB >= 0 ? `+` : ``, t(C.pnlIfB)],
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
            S &&
              w &&
              !f &&
              (0, N.jsx)(`div`, {
                className: `bp-extra`,
                children: (0, N.jsx)(`button`, {
                  className: `bp-btn-wide bp-btn-gold`,
                  onClick: () => {
                    (m(!0), g(100));
                  },
                  children: `CASHOUT`,
                }),
              }),
            S &&
              f &&
              w &&
              (0, N.jsxs)(`div`, {
                className: `bp-extra`,
                children: [
                  (0, N.jsxs)(`div`, {
                    style: {
                      display: `flex`,
                      justifyContent: `space-between`,
                      alignItems: `center`,
                      marginBottom: 6,
                    },
                    children: [
                      (0, N.jsxs)(`span`, {
                        style: {
                          fontSize: 13,
                          fontWeight: 700,
                          color: `#254465`,
                        },
                        children: [`CASHOUT `, h, `%`],
                      }),
                      (0, N.jsx)(`button`, {
                        onClick: () => m(!1),
                        style: {
                          background: `none`,
                          border: `none`,
                          color: `#2b2f35`,
                          cursor: `pointer`,
                          fontSize: 14,
                          padding: 0,
                        },
                        children: `✕`,
                      }),
                    ],
                  }),
                  (0, N.jsxs)(`div`, {
                    style: {
                      padding: `6px 8px`,
                      marginBottom: 6,
                      borderRadius: 4,
                      background: w.bothGreen
                        ? `rgba(0,177,129,0.12)`
                        : `#e6f2fc`,
                    },
                    children: [
                      (0, N.jsx)(`div`, {
                        style: {
                          fontSize: 11,
                          color: `#2b2f35`,
                          marginBottom: 4,
                          fontWeight: 700,
                        },
                        children: `P/L AFTER CASHOUT`,
                      }),
                      (0, N.jsxs)(`div`, {
                        className: `bp-pos`,
                        children: [
                          (0, N.jsxs)(`span`, {
                            children: [
                              n?.teamA || `Team A`,
                              ` wins `,
                              (0, N.jsxs)(`b`, {
                                style: {
                                  color:
                                    w.newPnlIfA >= 0 ? `#0b6121` : `#d0021b`,
                                },
                                children: [
                                  w.newPnlIfA >= 0 ? `+` : ``,
                                  t(w.newPnlIfA),
                                ],
                              }),
                            ],
                          }),
                          (0, N.jsxs)(`span`, {
                            children: [
                              n?.teamB || `Team B`,
                              ` wins `,
                              (0, N.jsxs)(`b`, {
                                style: {
                                  color:
                                    w.newPnlIfB >= 0 ? `#0b6121` : `#d0021b`,
                                },
                                children: [
                                  w.newPnlIfB >= 0 ? `+` : ``,
                                  t(w.newPnlIfB),
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, N.jsxs)(`div`, {
                        style: {
                          fontSize: 11,
                          color: `#607083`,
                          marginTop: 4,
                          textAlign: `center`,
                        },
                        children: [
                          `BACK `,
                          n?.[w.targetMarket] || w.targetMarket,
                          ` @ `,
                          w.currentOdds,
                          ` for `,
                          t(w.cashStake),
                        ],
                      }),
                    ],
                  }),
                  (0, N.jsx)(`div`, {
                    style: { display: `flex`, gap: 4, marginBottom: 6 },
                    children: [25, 50, 75, 100].map((e) =>
                      (0, N.jsxs)(
                        `button`,
                        {
                          onClick: () => g(e),
                          className:
                            `bp-btn-wide ` +
                            (h === e ? `bp-btn-gold` : `bp-btn-grey`),
                          style: { marginTop: 0 },
                          children: [e, `%`],
                        },
                        e,
                      ),
                    ),
                  }),
                  (0, N.jsx)(`button`, {
                    disabled: s,
                    className: `bp-btn-wide bp-btn-green`,
                    onClick: () => {
                      (o &&
                        o(
                          w.targetMarket,
                          w.targetSide,
                          w.currentOdds,
                          w.cashStake,
                        ),
                        m(!1));
                    },
                    children: s ? `PROCESSING...` : `CONFIRM CASHOUT ${h}%`,
                  }),
                ],
              }),
            e.length > 0 &&
              _ &&
              r &&
              (0, N.jsx)(`div`, {
                className: `bp-extra`,
                children: (0, N.jsx)(`button`, {
                  className: `bp-btn-wide bp-btn-grey`,
                  onClick: () => d(!0),
                  children: `VIEW RESULT`,
                }),
              }),
          ],
        }),
      }),
      u && r && (0, N.jsx)(O, { roundId: r, onClose: () => d(!1) }),
    ],
  });
}
function O({ roundId: e, onClose: t }) {
  let [n, r] = (0, M.useState)(null);
  return (
    (0, M.useEffect)(() => {
      d(
        () =>
          import(`./BetResultDetail--P-6YJMd.js`).then((e) => {
            r(() => e.default);
          }),
        __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7]),
      );
    }, []),
    (0, N.jsx)(`div`, {
      style: {
        position: `fixed`,
        inset: 0,
        zIndex: 9999,
        background: `#080c16`,
        overflowY: `auto`,
      },
      children: n
        ? (0, N.jsx)(n, { roundId: e, onBack: t })
        : (0, N.jsx)(`div`, {
            style: { padding: `60px 0`, textAlign: `center` },
            children: (0, N.jsx)(`div`, {
              style: {
                width: 28,
                height: 28,
                border: `3px solid #D4AF37`,
                borderTopColor: `transparent`,
                borderRadius: `50%`,
                animation: `spin 0.8s linear infinite`,
                display: `inline-block`,
              },
            }),
          }),
    })
  );
}
function k({
  card: e,
  placeholder: t,
  width: n = 110,
  height: r,
  animDuration: i = 0.5,
}) {
  if (((r ||= Math.round(n * 1.4)), !e))
    return (0, N.jsx)(`div`, {
      style: {
        width: n,
        height: r,
        borderRadius: 10,
        background: `rgba(255,255,255,0.04)`,
        border: `1px dashed rgba(255,255,255,0.1)`,
        display: `flex`,
        alignItems: `center`,
        justifyContent: `center`,
        color: F.textDim,
        fontSize: Math.round(n * 0.25),
        fontFamily: `var(--font-display)`,
        fontWeight: 700,
        boxShadow: `inset 0 2px 8px rgba(0,0,0,0.2)`,
      },
      children: t,
    });
  let a = I[e.suitName] || I.spades,
    o = e.suitName === `hearts` || e.suitName === `diamonds`,
    s = e.label || e.value,
    c = o ? `#d32f2f` : `#1a1a2e`,
    l = Math.round(n < 70 ? n * 0.35 : n * 0.42),
    u = Math.round(n < 70 ? n * 0.22 : n * 0.28),
    d = Math.min(8, Math.round(n * 0.1));
  return (0, N.jsxs)(`div`, {
    style: {
      width: n,
      height: r,
      borderRadius: d,
      background: `linear-gradient(160deg, #ffffff 0%, #f5f5f0 100%)`,
      border: `1px solid #d0d0c8`,
      boxShadow: `0 2px 8px rgba(0,0,0,0.25), inset 0 1px 0 rgba(255,255,255,0.8)`,
      display: `flex`,
      flexDirection: `column`,
      alignItems: `center`,
      justifyContent: `center`,
      gap: 2,
      animation: `dtDeal ${i}s ease-out`,
    },
    children: [
      (0, N.jsx)(`span`, {
        style: {
          fontSize: l,
          fontWeight: 800,
          color: c,
          fontFamily: `var(--font-display)`,
          lineHeight: 1,
        },
        children: s,
      }),
      (0, N.jsx)(`span`, {
        style: { fontSize: u, color: c, lineHeight: 1 },
        children: a.sym,
      }),
    ],
  });
}
function A({ children: e, pageBg: t, topStrip: n }) {
  let r = a();
  return (0, N.jsxs)(`div`, {
    "data-dark-surface": `true`,
    className: `bp-tps bp-game-wrap`,
    children: [
      (0, N.jsx)(`div`, {
        className: `card ExMainCardbundle BPGmaindiv`,
        id: `ExgamesDiv`,
        children: (0, N.jsxs)(`div`, {
          id: `Excardbody`,
          className: `card-body mainexcard`,
          children: [
            n || null,
            (0, N.jsxs)(`div`, {
              className: `row`,
              children: [
                (0, N.jsx)(`div`, {
                  className: `col-lg-8 Exgamesbg`,
                  children: (0, N.jsx)(h, {
                    slipNode: r.slipNode,
                    betsNode: r.betsNode,
                    children: e,
                  }),
                }),
                (0, N.jsx)(`div`, {
                  className: `col-lg-4 bp-right-col`,
                  children: (0, N.jsx)(`div`, {
                    className: `right-content`,
                    children: (0, N.jsxs)(`div`, {
                      className: `table-box-body`,
                      children: [
                        (0, N.jsx)(`div`, { ref: r.setSlipNode }),
                        (0, N.jsx)(`div`, { ref: r.setBetsNode }),
                      ],
                    }),
                  }),
                }),
              ],
            }),
          ],
        }),
      }),
      (0, N.jsx)(j, {}),
    ],
  });
}
function j() {
  return (0, N.jsx)(`style`, {
    children: `
      @keyframes dtDeal {
        from { transform: scale(0.3) translateY(-30px) rotateY(90deg); opacity: 0; }
        to { transform: scale(1) translateY(0) rotateY(0deg); opacity: 1; }
      }
      @keyframes dtScaleIn {
        from { transform: scale(0.5); opacity: 0; }
        to { transform: scale(1); opacity: 1; }
      }
      @keyframes dtPulse {
        from { opacity: 1; }
        to { opacity: 0.4; }
      }
      @keyframes dtGlow { /* Phase 5 D-4: opacity pulse on a static shadow (compositor) instead of animating box-shadow */
        0%, 100% { opacity: 1; }
        50% { opacity: .82; }
      }
      @keyframes spin { to { transform: rotate(360deg); } }
      @keyframes betSlipPopIn {
        from { transform: translateY(-30px) scale(0.95); opacity: 0; }
        to { transform: translateY(0) scale(1); opacity: 1; }
      }
      .hide-scrollbar::-webkit-scrollbar { display: none; }
      .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }

      /* Desktop responsive — exchange grid wider */
      @media (min-width: 640px) {
        .ex-odds-grid { grid-template-columns: 1.5fr 1fr 1fr !important; }
        .ex-card-area { gap: 60px !important; }
        .ex-card { width: 130px !important; height: 180px !important; }
      }
      @media (min-width: 900px) {
        .ex-card-area { gap: 80px !important; }
        .ex-card { width: 140px !important; height: 195px !important; }
      }
    `,
  });
}
var M,
  N,
  P,
  F,
  I,
  L = e(() => {
    ((M = n(t())),
      m(),
      s(),
      o(),
      (N = r()),
      v(),
      b(),
      u(),
      f(),
      (P = [`bettor`, `customer`, `user`]),
      (F = {
        pageBg: `#080c16`,
        panelBg: `#0d1520`,
        cardBg: `#111827`,
        feltGreen: `linear-gradient(135deg, #0a1a0a 0%, #0d2818 50%, #0a1a0a 100%)`,
        gold: `#D4AF37`,
        goldGlow: `0 0 20px rgba(212,175,55,0.15), 0 0 40px rgba(212,175,55,0.05)`,
        goldBorder: `rgba(212,175,55,0.15)`,
        goldBorderHi: `rgba(212,175,55,0.3)`,
        backBg: `rgba(114,187,239,0.35)`,
        backHover: `rgba(114,187,239,0.5)`,
        backActive: `rgba(114,187,239,0.6)`,
        backText: `#72bbef`,
        layBg: `rgba(245,169,184,0.25)`,
        layHover: `rgba(245,169,184,0.4)`,
        layActive: `rgba(245,169,184,0.55)`,
        layText: `#f5a9b8`,
        green: `#22c55e`,
        greenGlow: `0 0 12px rgba(34,197,94,0.3)`,
        red: `#ef4444`,
        redGlow: `0 0 12px rgba(239,68,68,0.3)`,
        blue: `#3b82f6`,
        amber: `#D4AF37`,
        gridHeader: `#3b5998`,
        gridBg: `#ffffff`,
        gridBorder: `#e0e0e0`,
        gridText: `#1a252f`,
        textPrimary: `#ffffff`,
        textMuted: `rgba(255,255,255,0.4)`,
        textDim: `rgba(255,255,255,0.15)`,
        borderSubtle: `rgba(255,255,255,0.04)`,
        borderLight: `rgba(255,255,255,0.08)`,
        glassBg: `rgba(13,21,32,0.85)`,
        glassBlur: `blur(16px)`,
        glassBorder: `rgba(255,255,255,0.06)`,
      }),
      (I = {
        spades: { sym: `♠`, color: `#1a1a2e` },
        hearts: { sym: `♥`, color: `#e74c3c` },
        diamonds: { sym: `♦`, color: `#e74c3c` },
        clubs: { sym: `♣`, color: `#1a1a2e` },
      }));
  });
export { D as a, L as c, S as i, x as n, k as o, A as r, F as s, E as t };
