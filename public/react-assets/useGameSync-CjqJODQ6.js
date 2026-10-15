import { i as e, n as t, o as n } from "./jsx-runtime-tHiRxOvn.js";
import {
  B as r,
  H as i,
  V as a,
  a as o,
  i as s,
  o as c,
  s as l,
} from "./tpstudio-BPQXDLhP.js";
function u() {
  try {
    return (
      typeof window < `u` &&
      !!window.matchMedia &&
      window.matchMedia(`(prefers-reduced-motion: reduce)`).matches
    );
  } catch {
    return !1;
  }
}
function d(e) {
  let t = Number(e) || 1;
  return u() ? Math.min(t, f) : t;
}
var f,
  p = e(() => {
    f = 0.15;
  });
function m(e, { onCustomEvent: t, userId: n, smoothClock: i = !1 } = {}) {
  let o = (0, h.useRef)(t);
  o.current = t;
  let [c, u] = (0, h.useState)(null),
    [f, p] = (0, h.useState)(null),
    [m, y] = (0, h.useState)(0),
    [b, x] = (0, h.useState)(`loading`),
    [S, C] = (0, h.useState)(!0),
    [w, T] = (0, h.useState)(!1),
    E = (0, h.useRef)(null),
    D = (0, h.useRef)(null),
    O = (0, h.useRef)(null),
    k = (0, h.useRef)(null),
    A = (0, h.useRef)(!0),
    j = (0, h.useCallback)((e) => {
      if (!e || !e.status) {
        (x(`waiting`), C(!1));
        return;
      }
      (u((t) => (t && t.round_id !== e.round_id && p(t), e)),
        x(e.status),
        C(!1));
    }, []),
    M = (0, h.useRef)(!1),
    N = (0, h.useCallback)(async () => {
      if (!M.current) {
        M.current = !0;
        try {
          let { data: t } = await r.get(`/api/game/round/${e}`);
          j(t.round || t);
        } catch {
          C(!1);
        } finally {
          M.current = !1;
        }
      }
    }, [e, j]);
  ((0, h.useEffect)(() => {
    if (!e) return;
    A.current = !0;
    let t = g[e];
    if (!t)
      return (
        N(),
        (D.current = setInterval(N, _)),
        () => {
          D.current && clearInterval(D.current);
        }
      );
    let r = `game:${t}`;
    function i() {
      if (A.current)
        try {
          let e = a();
          if (!e) {
            D.current ||= setInterval(N, _);
            return;
          }
          let t = new WebSocket(s);
          ((E.current = t),
            (t.onopen = () => {
              if (!A.current) {
                t.close();
                return;
              }
              (T(!0),
                t.send(JSON.stringify({ action: `auth`, token: e })),
                (D.current &&= (clearInterval(D.current), null)));
              let i = [r];
              (n && i.push(`user:` + n),
                t.send(JSON.stringify({ action: `subscribe`, channels: i })));
            }),
            (t.onmessage = (e) => {
              if (A.current)
                try {
                  let t = JSON.parse(e.data);
                  if (t.event === `round-state` && t.channel === r)
                    j(t.payload);
                  else if (n && t.channel === `user:` + n) {
                    if (t.event === `balance_update` && t.data)
                      try {
                        l.getState().updateFromWS(t.data);
                      } catch {}
                    (!t.type && t.event === `sync` && (t.type = `sync`),
                      o.current && o.current(t));
                  } else t.channel === r && o.current && o.current(t);
                } catch {}
            }),
            (t.onclose = () => {
              A.current &&
                (T(!1),
                (E.current = null),
                N(),
                (D.current ||= setInterval(N, _)),
                (k.current = setTimeout(i, v)));
            }),
            (t.onerror = () => {
              t.close();
            }));
        } catch {
          ((D.current ||= setInterval(N, _)), (k.current = setTimeout(i, v)));
        }
    }
    (N(), i());
    function c() {
      if (
        typeof document < `u` &&
        document.visibilityState === `visible` &&
        A.current
      ) {
        N();
        var e = E.current;
        if (
          e &&
          e.readyState !== WebSocket.OPEN &&
          e.readyState !== WebSocket.CONNECTING
        )
          try {
            e.close();
          } catch {}
      }
    }
    return (
      typeof document < `u` && document.addEventListener(`visibilitychange`, c),
      () => {
        ((A.current = !1),
          typeof document < `u` &&
            document.removeEventListener(`visibilitychange`, c),
          (E.current &&= (E.current.close(), null)),
          (D.current &&= (clearInterval(D.current), null)),
          (k.current &&= (clearTimeout(k.current), null)));
      }
    );
  }, [e, N, j]),
    (0, h.useEffect)(() => {
      !n ||
        !E.current ||
        E.current.readyState !== WebSocket.OPEN ||
        E.current.send(
          JSON.stringify({ action: `subscribe`, channels: [`user:` + n] }),
        );
    }, [n]),
    (0, h.useEffect)(() => {
      if (
        (O.current && clearInterval(O.current),
        (b === `betting` || b === `tie_betting` || b === `card_betting`) &&
          c?.betting_ends_at)
      ) {
        let e = new Date(c.betting_ends_at).getTime(),
          t = () => {
            let t = Math.max(0, Math.ceil((e - Date.now()) / 1e3));
            (y(t),
              t <= 0 &&
                x(
                  b === `tie_betting`
                    ? `tie_suspended`
                    : b === `card_betting`
                      ? `card_open`
                      : `suspended`,
                ));
          };
        (t(), (O.current = setInterval(t, i ? 60 : 250)));
      } else if (
        b === `suspended` &&
        (c?.phase_ends_at || c?.betting_ends_at)
      ) {
        let e = c.phase_ends_at || c.betting_ends_at,
          t = () => {
            y(
              Math.max(
                0,
                Math.ceil((new Date(e).getTime() - Date.now()) / 1e3),
              ),
            );
          };
        (t(), (O.current = setInterval(t, 250)));
      } else if (b === `result` && c?.betting_ends_at) {
        let e = () => {
          y(
            Math.max(
              0,
              Math.ceil(
                (new Date(c.betting_ends_at).getTime() - Date.now()) / 1e3,
              ),
            ),
          );
        };
        (e(), (O.current = setInterval(e, 250)));
      } else y(0);
      return () => {
        O.current && clearInterval(O.current);
      };
    }, [b, c?.betting_ends_at, c?.phase_ends_at, c?.round_id, i]));
  let P = (0, h.useRef)(null);
  return (
    (0, h.useEffect)(() => {
      if (
        (P.current && clearTimeout(P.current),
        b === `suspended` || b === `card_open` || b === `tie_suspended`)
      )
        P.current = setTimeout(function () {
          (N(), (P.current = setInterval(N, 3e3)));
        }, 4e3);
      else if (
        (b === `betting` || b === `card_betting`) &&
        c?.betting_ends_at
      ) {
        var e = Math.max(
          0,
          new Date(c.betting_ends_at).getTime() + 5e3 - Date.now(),
        );
        P.current = setTimeout(function () {
          (N(), (P.current = setInterval(N, 3e3)));
        }, e);
      } else if ((b === `result` || b === `settled`) && c?.betting_ends_at) {
        var t = new Date(c.betting_ends_at).getTime(),
          n = Math.max(0, t + 2e3 - Date.now());
        P.current = setTimeout(function () {
          (N(), (P.current = setInterval(N, 3e3)));
        }, n);
      } else if (
        (b === `ball_result` ||
          b === `innings_break` ||
          b === `match_complete`) &&
        c?.game_data?.phaseEndsAt
      ) {
        var r = new Date(c.game_data.phaseEndsAt).getTime();
        if (Number.isFinite(r)) {
          var i = Math.max(0, r + 2e3 - Date.now());
          P.current = setTimeout(function () {
            (N(), (P.current = setInterval(N, 3e3)));
          }, i);
        }
      }
      return () => {
        P.current && clearTimeout(P.current);
      };
    }, [b, c?.round_id, c?.betting_ends_at, N]),
    {
      round: c,
      prevRound: f,
      phase: b,
      timer: m,
      isLoading: S,
      connected: w,
      gameData: c?.game_data || {},
      winners: c?.winners || [],
      roundId: c?.round_id || null,
      roundNumber: c?.round_number || 0,
      cardSpeed: d(c?.card_speed || 1),
      animSpeed: d(c?.anim_speed || 1),
      refetch: N,
    }
  );
}
var h,
  g,
  _,
  v,
  y = e(() => {
    ((h = n(t())),
      i(),
      o(),
      c(),
      p(),
      (g = {
        dt: `Dragon Tiger`,
        ab: `Andar Bahar`,
        aaa: `AAA`,
        bac: `Baccarat`,
        bje: `Blackjack Exchange`,
        p20: `Poker 20-20`,
        oh: `Omaha Hi`,
        th: `Turbo Holdem`,
        tpt: `TeenPatti T20`,
        tpo: `TeenPatti ODI`,
        mtp: `Muflis TeenPatti`,
        "32c": `32 Card Casino`,
        tb: `Turbo Baccarat`,
        tbj: `Turbo Blackjack`,
        te: `Tennis`,
        soc: `Super Over Cricket`,
        soo: `Super Over ODI`,
        "7ud": `7 Up Down`,
        hc: `High Card`,
        cwar: `Casino War`,
        l7: `Lucky 7`,
        oc20: `One Card 20-20`,
        ocm: `One Card Meter`,
        trap: `The Trap`,
        trio: `Trio`,
        ht: `Heads & Tails`,
        pkr: `Poker`,
        bc: `Bollywood Casino`,
        cc: `Center Card`,
        ar: `Auto Roulette`,
        "derby-race": `Derby Race`,
        drt: `Derby Race Turbo`,
        hilo: `Hi Lo`,
        thl: `Turbo Hi Lo`,
        dkd: `Dus Ka Dum`,
        rt17: `Race To 17`,
        r2020: `Race 20-20`,
        rodi: `Race ODI`,
        qr: `Queen Race`,
      }),
      (_ = 5e3),
      (v = 3e3));
  });
export { m as n, y as t };
