import { i as e, n as t, o as n, t as r } from "./jsx-runtime-tHiRxOvn.js";
import {
  B as i,
  F as a,
  H as o,
  I as s,
  J as c,
  K as l,
  L as u,
  N as d,
  P as f,
  T as p,
  c as m,
  h as ee,
  l as h,
  m as te,
  o as ne,
  s as re,
  w as ie,
} from "./tpstudio-BPQXDLhP.js";
import { n as ae, t as g } from "./useGameSync-CjqJODQ6.js";
import { a as oe, c as _, n as se, r as ce } from "./ExchangeTheme-BwD1APu6.js";
import { i as le, n as ue, r as de, t as v } from "./result-strip-BSu_HO2h.js";
function y(e) {
  var t = e.config,
    n = e.GameBody,
    r = e.ResultsTab,
    o = e.RulesTab,
    l = e.LoadingGate,
    u = c(),
    d = f(function (e) {
      return e.user;
    }),
    [p, m] = (0, b.useState)(0),
    ne = (0, b.useCallback)(function (e) {
      e &&
        (e.type === `bet_placed` || e.type === `sync`) &&
        m(function (e) {
          return e + 1;
        });
    }, []),
    g = null;
  (t.sync.customEvents && (g = { onCustomEvent: ne, userId: d && d.id }),
    t.sync.smoothClock && ((g ||= {}), (g.smoothClock = !0)));
  var _ = ae(t.sync.channel, g || void 0),
    v = _.round,
    y = _.phase || ``,
    S = _.timer || 0,
    fe = _.gameData,
    C = (0, b.useMemo)(
      function () {
        return fe || {};
      },
      [fe],
    ),
    pe = re(),
    w = pe.total_available,
    T = pe.fetchWallet,
    E = s(),
    [D, O] = (0, b.useState)(null),
    [k, A] = (0, b.useState)(``),
    [j, me] = (0, b.useState)(!1),
    [M, N] = (0, b.useState)([]),
    [P, F] = (0, b.useState)([]),
    [he, I] = (0, b.useState)([]),
    [L, R] = (0, b.useState)(`game`),
    z = v && v.round_id,
    B = C.odds || (v && v.odds) || t.fallbackOdds,
    V = (0, b.useMemo)(
      function () {
        return B || {};
      },
      [B],
    ),
    ge = C.winner || (v && v.winners && v.winners[0]) || null,
    H = t.phases.betting.indexOf(y) !== -1,
    U = t.phases.result.indexOf(y) !== -1,
    _e = re(function (e) {
      return e.applyOptimistic;
    }),
    [W, ve] = (0, b.useState)(null),
    G = (0, b.useRef)({ roundId: null, t: 0 }),
    K = ((v && v.winners) || []).join(`,`);
  ((0, b.useEffect)(
    function () {
      if (
        !(!U || !z || !K) &&
        !(W && W.roundId === z) &&
        G.current.roundId !== z
      ) {
        var e = K.split(`,`).filter(Boolean),
          n = (M || []).filter(function (e) {
            return (
              String(e.round_id || e.roundId) === String(z) &&
              String(e.status) === `active`
            );
          });
        if (n.length) {
          var r = 0,
            i = 0,
            a = 0,
            o = 0,
            s = 0,
            c = 0,
            l = {};
          n.forEach(function (t) {
            var n = e.indexOf(String(t.market_id)) !== -1,
              u = String(t.side).toLowerCase() === `back` ? n : !n,
              d = Number(t.deducted) || 0,
              f = Number(t.potential) || 0;
            (n && (l[String(t.market_id)] = 1),
              u ? ((r += f), i++, (c += f), (s += f + d)) : ((r -= d), a++),
              (o += d));
          });
          var u = Number(
              t.casinoCommissionPct == null ? 1 : t.casinoCommissionPct,
            ),
            d = c > 0 ? Math.floor((c * u) / 100) : 0,
            f = Math.round((t.revealMs || 1600) * (Number(_.animSpeed) || 1));
          G.current = {
            roundId: z,
            t: setTimeout(function () {
              (ve({
                roundId: z,
                pnl: r - d,
                wins: i,
                losses: a,
                commission: d,
              }),
                _e({
                  roundId: z,
                  game: t.gameName,
                  pnl: r - d,
                  availableDelta: s - d,
                  exposureRelease: o,
                }),
                console.debug &&
                  console.debug(
                    `[WIN-MOMENT] shown`,
                    JSON.stringify({
                      round: z,
                      pnl: r - d,
                      wins: i,
                      losses: a,
                    }),
                  ));
            }, f),
          };
        }
      }
    },
    [U, z, K, M, W, _e, t, _.animSpeed],
  ),
    (0, b.useEffect)(
      function () {
        H && W && W.roundId !== z && ve(null);
      },
      [H, z, W],
    ),
    (0, b.useEffect)(function () {
      return function () {
        clearTimeout(G.current.t);
      };
    }, []),
    W && !W.none && W.roundId,
    (0, b.useEffect)(
      function () {
        i.get(
          `/api/game/history/` +
            t.historySlug +
            `?limit=` +
            (t.historyLimit || 10),
        )
          .then(function (e) {
            var n = e.data.rounds || e.data.history || [];
            I(
              n.map(function (e) {
                var t =
                    typeof e.game_data == `string`
                      ? JSON.parse(e.game_data)
                      : e.game_data || {},
                  n = e.created_at
                    ? new Date(e.created_at).toLocaleString(`en-US`, {
                        timeZone: `Asia/Karachi`,
                        month: `2-digit`,
                        day: `2-digit`,
                        hour: `2-digit`,
                        minute: `2-digit`,
                        hour12: !0,
                      })
                    : ``;
                return { roundId: e.round_id, time: n, gameData: t };
              }),
            );
            var r = n
              .map(function (e) {
                var n =
                  typeof e.game_data == `string`
                    ? JSON.parse(e.game_data)
                    : e.game_data || {};
                return { roundId: e.round_id, key: t.historyKeyFor(n) || `` };
              })
              .filter(function (e) {
                return e.key;
              });
            F(function (e) {
              return de(e, r);
            });
          })
          .catch(function () {});
      },
      [t],
    ));
  var q = t.historyKeyFor(C) || ge || ``;
  (0, b.useEffect)(
    function () {
      U &&
        q &&
        z &&
        (F(function (e) {
          return le(e, z, q, 30);
        }),
        I(function (e) {
          return e[0] && e[0].roundId === z
            ? e
            : [
                {
                  roundId: z,
                  time: new Date().toLocaleString(`en-US`, {
                    timeZone: `Asia/Karachi`,
                    month: `2-digit`,
                    day: `2-digit`,
                    hour: `2-digit`,
                    minute: `2-digit`,
                    hour12: !0,
                  }),
                  gameData: C,
                },
              ]
                .concat(e)
                .slice(0, t.historyLimit || 10);
        }));
    },
    [y, z, q, U, C, t],
  );
  var ye = (0, b.useMemo)(
      function () {
        return ue(P, t.historyAfterRound ? z : null);
      },
      [P, z, t],
    ),
    J = !!(d && (d.role === `company` || d.is_admin)),
    Y = t.fetch || {},
    X = (0, b.useCallback)(
      function () {
        if (z) {
          if (Y.ownerExposureBets && J) {
            i.get(`/api/admin/exposure/` + z + `/bets`)
              .then(function (e) {
                N(e.data.bets || []);
              })
              .catch(function () {
                N([]);
              });
            return;
          }
          i.get(`/api/game/bets/` + encodeURIComponent(t.gameName) + `/` + z)
            .then(function (e) {
              N(e.data.bets || []);
            })
            .catch(function () {});
        }
      },
      [z, t, Y.ownerExposureBets, J],
    );
  ((0, b.useEffect)(
    function () {
      X();
    },
    [X],
  ),
    (0, b.useEffect)(
      function () {
        !H && z && X();
      },
      [H, z, X],
    ),
    (0, b.useEffect)(
      function () {
        p > 0 && z && (X(), T());
      },
      [p, z, X, T],
    ),
    (0, b.useEffect)(
      function () {
        if (!(!Y.pollMs || !z)) {
          var e = setInterval(X, Y.pollMs);
          return function () {
            clearInterval(e);
          };
        }
      },
      [Y.pollMs, z, X],
    ),
    (0, b.useEffect)(
      function () {
        Y.walletPerRound && z && T();
      },
      [Y.walletPerRound, z, T],
    ));
  var be = (0, b.useCallback)(
      function (e, t, n) {
        if (H) {
          var r = n || (V[e.key] && V[e.key][t]);
          r &&
            (O({ runner: e.key, runnerLabel: e.label, side: t, odds: r }),
            A(``));
        }
      },
      [H, V],
    ),
    Z = t.betting || {},
    Q = `minStake` in Z ? Z.minStake : t.minStake || 100,
    xe = (0, b.useCallback)(
      function () {
        if (!(!D || !k || !z || j)) {
          var e = Z.clientBalanceCheck ? Number(k) : parseInt(k);
          if (!e) {
            h.error(Z.emptyStakeMsg || `Minimum bet: ` + E + Q);
            return;
          }
          if (Q != null && e < Q) {
            h.error(`Minimum bet: ` + E + Q);
            return;
          }
          if (Z.clientBalanceCheck) {
            var n =
                Z.layLiability && String(D.side).toLowerCase() === `lay`
                  ? Math.floor(e * (parseFloat(D.odds) - 1))
                  : e,
              r = !1;
            if (Z.hedgeAware && Z.hedgeAware[D.runner]) {
              var a = Z.hedgeAware[D.runner];
              r = M.some(function (e) {
                return e.market_id === a && e.status === `active`;
              });
            }
            if (
              !(
                r ||
                (Z.skipBalanceIfAnyActive &&
                  M.some(function (e) {
                    return e.status === `active`;
                  }))
              ) &&
              n > w
            ) {
              h.error(`Insufficient balance`);
              return;
            }
          }
          me(!0);
          var o = function (n, r) {
            return i
              .post(`/api/game/bet`, {
                game_name: t.gameName,
                round_id: z,
                market_id: D.runner,
                side: D.side,
                odds: parseFloat(n),
                stake: e,
              })
              .catch(function (e) {
                var t = e.response && e.response.data,
                  i = t && Number(t.newOdds);
                if (!r && Number.isFinite(i) && i > 1) {
                  var a =
                    String(D.side).toLowerCase() === `lay`
                      ? i <= parseFloat(n)
                      : i >= parseFloat(n);
                  if (
                    (O(function (e) {
                      return e && Object.assign({}, e, { odds: String(i) });
                    }),
                    a)
                  )
                    return o(i, !0);
                  h.error(`Odds changed to ` + i + ` — Submit again`);
                  var s = Error(`odds-updated`);
                  throw ((s.quiet = !0), s);
                }
                throw e;
              });
          };
          o(D.odds, !1)
            .then(function () {
              (O(null), A(``), X(), T());
            })
            .catch(function (e) {
              (e && e.quiet) ||
                h.error(
                  (e.response && e.response.data && e.response.data.error) ||
                    `Bet failed`,
                );
            })
            .finally(function () {
              me(!1);
            });
        }
      },
      [
        D,
        k,
        z,
        j,
        X,
        T,
        E,
        t,
        Q,
        Z.clientBalanceCheck,
        Z.emptyStakeMsg,
        Z.successToast,
        Z.layLiability,
        Z.hedgeAware,
        Z.skipBalanceIfAnyActive,
        M,
        w,
      ],
    ),
    $ = t.slip,
    Se = D
      ? (function () {
          var e = {
            selectedBet: D,
            stake: k,
            setStake: A,
            onPlace: xe,
            onClose: function () {
              O(null);
            },
            currencySymbol: E,
            isPlacing: j,
          };
          return (
            (!$ || $.balance !== !1) && (e.balance = w),
            $ &&
              $.potentialWin &&
              (e.potentialWin = k
                ? String(D.side).toLowerCase() === `lay`
                  ? Number(k)
                  : Math.floor(Number(k) * (parseFloat(D.odds) - 1))
                : 0),
            $ && $.theme && (e.theme = $.theme),
            e
          );
        })()
      : null;
  if (t.loadingGate && _.isLoading && l) return (0, x.jsx)(l, {});
  var Ce = String(z || ``).match(/(\d+)$/),
    we = Ce ? parseInt(Ce[1], 10) : null;
  return (0, x.jsxs)(ce, {
    pageBg: t.theme.pageBg,
    topStrip: t.embedHeader ? (0, x.jsx)(ee, {}) : null,
    children: [
      t.embedHeader
        ? (0, x.jsx)(x.Fragment, {
            children: (0, x.jsx)(te, {
              roundSeq: we,
              timer: S,
              isBetting: H,
              gameId: ie(z),
              tabs: [`Game`, `Results`, `Rules`],
              activeTab: L,
              onTabChange: R,
              dots: t.embedDots ? t.embedDots(C, y) : void 0,
            }),
          })
        : (0, x.jsx)(se, {
            title: t.displayName || t.gameName || t.header.title,
            titleAccent: t.header.titleAccent,
            roundInfo: `Round #` + ((v && v.round_number) || `—`),
            tabs: [`Game`, `Results`, `Rules`],
            activeTab: L,
            onTabChange: R,
            onBack: function () {
              u(t.header.backTo || `/casino`);
            },
            theme: t.header.theme || `dark`,
          }),
      (0, x.jsxs)(`div`, {
        className:
          `left-content bp-game-body` + (L === `game` ? `` : ` cgs-tabhide`),
        children: [
          (0, x.jsx)(n, {
            phase: y,
            timer: S,
            round: v,
            roundId: z,
            gameData: C,
            cardSpeed: _.cardSpeed || 1,
            animSpeed: _.animSpeed || 1,
            isBetting: H,
            isResult: U,
            odds: V,
            activeBets: M,
            history: ye,
            onOddsClick: be,
            betSlipProps: Se,
          }),
          (t.myBetsAlways || M.length > 0) &&
            (0, x.jsx)(oe, { bets: M, formatMoney: a, roundId: z, phase: y }),
        ],
      }),
      L === `results` &&
        (0, x.jsx)(`div`, {
          className: `bp-tab-results`,
          children: (0, x.jsx)(r, { resultHistory: he, roundId: z }),
        }),
      L === `rules` &&
        (0, x.jsx)(`div`, {
          className: `bp-tab-rules`,
          children: (0, x.jsx)(o, {}),
        }),
    ],
  });
}
var b,
  x,
  S = e(() => {
    ((b = n(t())),
      l(),
      m(),
      g(),
      ne(),
      d(),
      o(),
      u(),
      _(),
      p(),
      v(),
      (x = r()));
  });
export { S as n, y as t };
