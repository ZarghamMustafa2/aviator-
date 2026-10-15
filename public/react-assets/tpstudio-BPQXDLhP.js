const __vite__mapDeps = (
  i,
  m = __vite__mapDeps,
  d = m.f ||
    (m.f = [
      "react-assets/HomePage-BCwT3j9A.js",
      "react-assets/jsx-runtime-tHiRxOvn.js",
      "react-assets/lucide-react-DAUqNF6I.js",
      "react-assets/applyBrand-BdbxrhKm.js",
      "react-assets/HomePage-SXQXpfIe.css",
      "react-assets/ExchangeGamePage-BTgOhSWj.js",
      "react-assets/useBetPresets-D3FQLB7x.js",
      "react-assets/DragonTigerPage-BucVk96z.js",
      "react-assets/BpStageLayout-BZ76c_Vy.js",
      "react-assets/ExchangeTheme-BwD1APu6.js",
      "react-assets/haptics-BxKo09sP.js",
      "react-assets/CasinoGameShell-3bO_oJD-.js",
      "react-assets/result-strip-BSu_HO2h.js",
      "react-assets/useGameSync-CjqJODQ6.js",
      "react-assets/BaccaratPage-hHVGfOcG.js",
      "react-assets/synthDepth-BO-hYE04.js",
      "react-assets/ExchangeOddsGrid-Beqg19at.js",
      "react-assets/BaccaratIcons-Nsa3yHD_.js",
      "react-assets/TurboBaccaratPage-Ct97rpsd.js",
      "react-assets/AndarBaharPage-_DvesuCR.js",
      "react-assets/fakeViewers-B0irVvJk.js",
      "react-assets/TeenPattiT20Page-BUGvuZHn.js",
      "react-assets/TeenPattiODIPage-Bi07ASQ6.js",
      "react-assets/MuflisTeenPattiPage-CUIPFQaW.js",
      "react-assets/ThirtyTwoCardPage-B1BHixht.js",
      "react-assets/BlackjackPage-KnNWBtkK.js",
      "react-assets/BjOddsGrid-ClrhCxbz.js",
      "react-assets/TurboBlackjackPage-Bc8rJfVX.js",
      "react-assets/Poker2020Page-D2sI0_gD.js",
      "react-assets/OmahaHiPage-96N3ybh1.js",
      "react-assets/TurboHoldemPage-HR-9RL_0.js",
      "react-assets/AAAPage-CW3VEd3U.js",
      "react-assets/SuperOverPage-B3TdBbNA.js",
      "react-assets/SuperOverODIPage-Bv1TnZL6.js",
      "react-assets/SevenUpDownPage-DI5KbKN1.js",
      "react-assets/RockPaperScissorPage-BiIpGgMI.js",
      "react-assets/SicBoPage-DmAfYivW.js",
      "react-assets/HiloTpsPage-CnpCa1Wp.js",
      "react-assets/FortuneGemsPage-DRbSul6H.js",
      "react-assets/HeadsTailsPage-BhscNSkb.js",
      "react-assets/LotteryPage-COVOGAOh.js",
      "react-assets/HighCardPage-Vjc0j2jk.js",
      "react-assets/CasinoWarPage-BnDKA6Xt.js",
      "react-assets/Lucky7Page-BI9ErvLt.js",
      "react-assets/OneCard2020Page-hAhBJTbK.js",
      "react-assets/OneCardMeterPage-Cd2M3mQA.js",
      "react-assets/TrapPage-BR6njyt_.js",
      "react-assets/TrioPage-r8HXkGPt.js",
      "react-assets/PokerPage-CpPd6exv.js",
      "react-assets/BollywoodCasinoPage-C2Fath_H.js",
      "react-assets/CenterCardPage-DW3E4__3.js",
      "react-assets/AutoRoulettePage-Cp6ry67k.js",
      "react-assets/Aviator-_8Beb6PJ.js",
      "react-assets/Aviator-GL8K1n5f.css",
      "react-assets/AviatorClassic-CxfxYpOF.js",
      "react-assets/ChickenRoad2-BC3pX1Gz.js",
      "react-assets/ChickenRoad2-DlEjwvcp.css",
      "react-assets/DerbyRacePage-9HaUa6jL.js",
      "react-assets/DerbyRaceTurboPage-Dh7CLT8g.js",
      "react-assets/HiLoPage-DaYywIv9.js",
      "react-assets/TurboHiLoPage-Cgq_JU7M.js",
      "react-assets/DusKaDumPage-Dph1PATs.js",
      "react-assets/RaceTo17Page-D3DIdeMX.js",
      "react-assets/Race2020Page-Do_3ymlp.js",
      "react-assets/QueenRacePage-CO_mvWBi.js",
    ]),
) => i.map((i) => d[i]);
import {
  a as e,
  i as t,
  n,
  o as r,
  r as i,
  t as a,
} from "./jsx-runtime-tHiRxOvn.js";
import { n as o, t as s } from "./client-CBMQk18y.js";
import {
  B as c,
  H as l,
  R as u,
  U as d,
  V as f,
  f as p,
  t as m,
  u as h,
  w as g,
} from "./lucide-react-DAUqNF6I.js";
var _ = t(() => {}),
  v = t(() => {}),
  ee = t(() => {}),
  y = t(() => {}),
  b = t(() => {}),
  x = t(() => {}),
  S,
  C,
  te,
  w,
  ne = t(() => {
    ((S = `modulepreload`),
      (C = function (e) {
        return `/` + e;
      }),
      (te = {}),
      (w = function (e, t, n) {
        let r = Promise.resolve();
        if (t && t.length > 0) {
          let e = document.getElementsByTagName(`link`),
            i = document.querySelector(`meta[property=csp-nonce]`),
            a = i?.nonce || i?.getAttribute(`nonce`);
          function o(e) {
            return Promise.all(
              e.map((e) =>
                Promise.resolve(e).then(
                  (e) => ({ status: `fulfilled`, value: e }),
                  (e) => ({ status: `rejected`, reason: e }),
                ),
              ),
            );
          }
          r = o(
            t.map((t) => {
              if (((t = C(t, n)), t in te)) return;
              te[t] = !0;
              let r = t.endsWith(`.css`),
                i = r ? `[rel="stylesheet"]` : ``;
              if (n)
                for (let n = e.length - 1; n >= 0; n--) {
                  let i = e[n];
                  if (i.href === t && (!r || i.rel === `stylesheet`)) return;
                }
              else if (document.querySelector(`link[href="${t}"]${i}`)) return;
              let o = document.createElement(`link`);
              if (
                ((o.rel = r ? `stylesheet` : S),
                r || (o.as = `script`),
                (o.crossOrigin = ``),
                (o.href = t),
                a && o.setAttribute(`nonce`, a),
                document.head.appendChild(o),
                r)
              )
                return new Promise((e, n) => {
                  (o.addEventListener(`load`, e),
                    o.addEventListener(`error`, () =>
                      n(Error(`Unable to preload CSS for ${t}`)),
                    ));
                });
            }),
          );
        }
        function i(e) {
          let t = new Event(`vite:preloadError`, { cancelable: !0 });
          if (((t.payload = e), window.dispatchEvent(t), !t.defaultPrevented))
            throw e;
        }
        return r.then((t) => {
          for (let e of t || []) e.status === `rejected` && i(e.reason);
          return e().catch(i);
        });
      }));
  });
function re(e, t) {
  return t + e.replace(/\\/g, `/`);
}
function T(e) {
  return (
    typeof e == `object` &&
    !!e &&
    `pathname` in e &&
    `search` in e &&
    `hash` in e &&
    `state` in e &&
    `key` in e
  );
}
function E(e = {}) {
  function t(e, t) {
    let n = t.state?.masked,
      { pathname: r, search: i, hash: a } = n || e.location;
    return ae(
      ``,
      { pathname: r, search: i, hash: a },
      (t.state && t.state.usr) || null,
      (t.state && t.state.key) || `default`,
      n
        ? {
            pathname: e.location.pathname,
            search: e.location.search,
            hash: e.location.hash,
          }
        : void 0,
    );
  }
  function n(e, t) {
    return typeof t == `string` ? t : A(t);
  }
  return oe(t, n, null, e);
}
function D(e, t) {
  if (e === !1 || e == null) throw Error(t);
}
function O(e, t) {
  if (!e) {
    typeof console < `u` && console.warn(t);
    try {
      throw Error(t);
    } catch {}
  }
}
function ie() {
  return Math.random().toString(36).substring(2, 10);
}
function k(e, t) {
  return {
    usr: e.state,
    key: e.key,
    idx: t,
    masked: e.mask
      ? { pathname: e.pathname, search: e.search, hash: e.hash }
      : void 0,
  };
}
function ae(e, t, n = null, r, i) {
  return {
    pathname: typeof e == `string` ? e : e.pathname,
    search: ``,
    hash: ``,
    ...(typeof t == `string` ? j(t) : t),
    state: n,
    key: (t && t.key) || r || ie(),
    mask: i,
  };
}
function A({ pathname: e = `/`, search: t = ``, hash: n = `` }) {
  return (
    t && t !== `?` && (e += t.charAt(0) === `?` ? t : `?` + t),
    n && n !== `#` && (e += n.charAt(0) === `#` ? n : `#` + n),
    e
  );
}
function j(e) {
  let t = {};
  if (e) {
    let n = e.indexOf(`#`);
    n >= 0 && ((t.hash = e.substring(n)), (e = e.substring(0, n)));
    let r = e.indexOf(`?`);
    (r >= 0 && ((t.search = e.substring(r)), (e = e.substring(0, r))),
      e && (t.pathname = e));
  }
  return t;
}
function oe(e, t, n, r = {}) {
  let { window: i = document.defaultView, v5Compat: a = !1 } = r,
    o = i.history,
    s = `POP`,
    c = null,
    l = u();
  l ?? ((l = 0), o.replaceState({ ...o.state, idx: l }, ``));
  function u() {
    return (o.state || { idx: null }).idx;
  }
  function d() {
    s = `POP`;
    let e = u(),
      t = e == null ? null : e - l;
    ((l = e), c && c({ action: s, location: h.location, delta: t }));
  }
  function f(e, t) {
    s = `PUSH`;
    let r = T(e) ? e : ae(h.location, e, t);
    (n && n(r, e), (l = u() + 1));
    let d = k(r, l),
      f = h.createHref(r.mask || r);
    try {
      o.pushState(d, ``, f);
    } catch (e) {
      if (e instanceof DOMException && e.name === `DataCloneError`) throw e;
      i.location.assign(f);
    }
    a && c && c({ action: s, location: h.location, delta: 1 });
  }
  function p(e, t) {
    s = `REPLACE`;
    let r = T(e) ? e : ae(h.location, e, t);
    (n && n(r, e), (l = u()));
    let i = k(r, l),
      d = h.createHref(r.mask || r);
    (o.replaceState(i, ``, d),
      a && c && c({ action: s, location: h.location, delta: 0 }));
  }
  function m(e) {
    return se(i, e);
  }
  let h = {
    get action() {
      return s;
    },
    get location() {
      return e(i, o);
    },
    listen(e) {
      if (c) throw Error(`A history only accepts one active listener`);
      return (
        i.addEventListener(on, d),
        (c = e),
        () => {
          (i.removeEventListener(on, d), (c = null));
        }
      );
    },
    createHref(e) {
      return t(i, e);
    },
    createURL: m,
    encodeLocation(e) {
      let t = m(e);
      return { pathname: t.pathname, search: t.search, hash: t.hash };
    },
    push: f,
    replace: p,
    go(e) {
      return o.go(e);
    },
  };
  return h;
}
function se(e, t, n = !1) {
  let r = `http://localhost`;
  (e &&
    (r = e.location.origin === `null` ? e.location.href : e.location.origin),
    D(r, `No window.location.(origin|href) available to create URL`));
  let i = typeof t == `string` ? t : A(t);
  return (
    (i = i.replace(/ $/, `%20`)),
    !n && an.test(i) && (i = r + i),
    new URL(i, r)
  );
}
function ce(e, t, n = `/`) {
  return M(e, t, n, !1);
}
function M(e, t, n, r, i) {
  let a = P((typeof t == `string` ? j(t) : t).pathname || `/`, n);
  if (a == null) return null;
  let o = i ?? ue(e),
    s = null,
    c = ye(a);
  for (let e = 0; s == null && e < o.length; ++e) s = N(o[e], c, r);
  return s;
}
function le(e, t) {
  let { route: n, pathname: r, params: i } = e;
  return {
    id: n.id,
    pathname: r,
    params: i,
    data: t[n.id],
    loaderData: t[n.id],
    handle: n.handle,
  };
}
function ue(e) {
  let t = de(e);
  return (pe(t), t);
}
function de(e, t = [], n = [], r = ``, i = !1) {
  let a = (e, a, o = i, s) => {
    let c = {
      relativePath: s === void 0 ? e.path || `` : s,
      caseSensitive: e.caseSensitive === !0,
      childrenIndex: a,
      route: e,
    };
    if (c.relativePath.startsWith(`/`)) {
      if (!c.relativePath.startsWith(r) && o) return;
      (D(
        c.relativePath.startsWith(r),
        `Absolute route path "${c.relativePath}" nested under path "${r}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`,
      ),
        (c.relativePath = c.relativePath.slice(r.length)));
    }
    let l = hn([r, c.relativePath]),
      u = n.concat(c);
    (e.children &&
      e.children.length > 0 &&
      (D(
        e.index !== !0,
        `Index routes must not have child routes. Please remove all child routes from route path "${l}".`,
      ),
      de(e.children, t, u, l, o)),
      !(e.path == null && !e.index) &&
        t.push({
          path: l,
          score: me(l, e.index),
          routesMeta: u.map((e, t) => {
            let [n, r] = ve(
              e.relativePath,
              e.caseSensitive,
              t === u.length - 1,
            );
            return { ...e, matcher: n, compiledParams: r };
          }),
        }));
  };
  return (
    e.forEach((e, t) => {
      if (e.path === `` || !e.path?.includes(`?`)) a(e, t);
      else for (let n of fe(e.path)) a(e, t, !0, n);
    }),
    t
  );
}
function fe(e) {
  let t = e.split(`/`);
  if (t.length === 0) return [];
  let [n, ...r] = t,
    i = n.endsWith(`?`),
    a = n.replace(/\?$/, ``);
  if (r.length === 0) return i ? [a, ``] : [a];
  let o = fe(r.join(`/`)),
    s = [];
  return (
    s.push(...o.map((e) => (e === `` ? a : [a, e].join(`/`)))),
    i && s.push(...o),
    s.map((t) => (e.startsWith(`/`) && t === `` ? `/` : t))
  );
}
function pe(e) {
  e.sort((e, t) =>
    e.score === t.score
      ? he(
          e.routesMeta.map((e) => e.childrenIndex),
          t.routesMeta.map((e) => e.childrenIndex),
        )
      : t.score - e.score,
  );
}
function me(e, t) {
  let n = e.split(`/`),
    r = n.length;
  return (
    n.some(pn) && (r += fn),
    t && (r += ln),
    n
      .filter((e) => !pn(e))
      .reduce((e, t) => e + (sn.test(t) ? cn : t === `` ? un : dn), r)
  );
}
function he(e, t) {
  return e.length === t.length && e.slice(0, -1).every((e, n) => e === t[n])
    ? e[e.length - 1] - t[t.length - 1]
    : 0;
}
function N(e, t, n = !1) {
  let { routesMeta: r } = e,
    i = {},
    a = `/`,
    o = [];
  for (let e = 0; e < r.length; ++e) {
    let s = r[e],
      c = e === r.length - 1,
      l = a === `/` ? t : t.slice(a.length) || `/`,
      u = { path: s.relativePath, caseSensitive: s.caseSensitive, end: c },
      d =
        s.matcher && s.compiledParams
          ? _e(u, l, s.matcher, s.compiledParams)
          : ge(u, l),
      f = s.route;
    if (
      (!d &&
        c &&
        n &&
        !r[r.length - 1].route.index &&
        (d = ge(
          { path: s.relativePath, caseSensitive: s.caseSensitive, end: !1 },
          l,
        )),
      !d)
    )
      return null;
    (Object.assign(i, d.params),
      o.push({
        params: i,
        pathname: hn([a, d.pathname]),
        pathnameBase: _n(hn([a, d.pathnameBase])),
        route: f,
      }),
      d.pathnameBase !== `/` && (a = hn([a, d.pathnameBase])));
  }
  return o;
}
function ge(e, t) {
  typeof e == `string` && (e = { path: e, caseSensitive: !1, end: !0 });
  let [n, r] = ve(e.path, e.caseSensitive, e.end);
  return _e(e, t, n, r);
}
function _e(e, t, n, r) {
  let i = t.match(n);
  if (!i) return null;
  let a = i[0],
    o = a.replace(/(.)\/+$/, `$1`),
    s = i.slice(1);
  return {
    params: r.reduce((e, { paramName: t, isOptional: n }, r) => {
      if (t === `*`) {
        let e = s[r] || ``;
        o = a.slice(0, a.length - e.length).replace(/(.)\/+$/, `$1`);
      }
      let i = s[r];
      return (
        n && !i ? (e[t] = void 0) : (e[t] = (i || ``).replace(/%2F/g, `/`)),
        e
      );
    }, {}),
    pathname: a,
    pathnameBase: o,
    pattern: e,
  };
}
function ve(e, t = !1, n = !0) {
  O(
    e === `*` || !e.endsWith(`*`) || e.endsWith(`/*`),
    `Route path "${e}" will be treated as if it were "${e.replace(/\*$/, `/*`)}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/, `/*`)}".`,
  );
  let r = [],
    i =
      `^` +
      e
        .replace(/\/*\*?$/, ``)
        .replace(/^\/*/, `/`)
        .replace(/[\\.*+^${}|()[\]]/g, `\\$&`)
        .replace(/\/:([\w-]+)(\?)?/g, (e, t, n, i, a) => {
          if ((r.push({ paramName: t, isOptional: n != null }), n)) {
            let t = a.charAt(i + e.length);
            return t && t !== `/` ? `/([^\\/]*)` : `(?:/([^\\/]*))?`;
          }
          return `/([^\\/]+)`;
        })
        .replace(/\/([\w-]+)\?(\/|$)/g, `(/$1)?$2`);
  return (
    e.endsWith(`*`)
      ? (r.push({ paramName: `*` }),
        (i += e === `*` || e === `/*` ? `(.*)$` : `(?:\\/(.+)|\\/*)$`))
      : n
        ? (i += `\\/*$`)
        : e !== `` && e !== `/` && (i += `(?:(?=\\/|$))`),
    [new RegExp(i, t ? void 0 : `i`), r]
  );
}
function ye(e) {
  try {
    return e
      .split(`/`)
      .map((e) => decodeURIComponent(e).replace(/\//g, `%2F`))
      .join(`/`);
  } catch (t) {
    return (
      O(
        !1,
        `The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`,
      ),
      e
    );
  }
}
function P(e, t) {
  if (t === `/`) return e;
  if (!e.toLowerCase().startsWith(t.toLowerCase())) return null;
  let n = t.endsWith(`/`) ? t.length - 1 : t.length,
    r = e.charAt(n);
  return r && r !== `/` ? null : e.slice(n) || `/`;
}
function be(e, t = `/`) {
  let {
      pathname: n,
      search: r = ``,
      hash: i = ``,
    } = typeof e == `string` ? j(e) : e,
    a;
  return (
    n
      ? ((n = mn(n)),
        (a = n.startsWith(`/`) ? xe(n.substring(1), `/`) : xe(n, t)))
      : (a = t),
    { pathname: a, search: vn(r), hash: yn(i) }
  );
}
function xe(e, t) {
  let n = gn(t).split(`/`);
  return (
    e.split(`/`).forEach((e) => {
      e === `..` ? n.length > 1 && n.pop() : e !== `.` && n.push(e);
    }),
    n.length > 1 ? n.join(`/`) : `/`
  );
}
function Se(e, t, n, r) {
  return `Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(r)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
}
function Ce(e) {
  return e.filter(
    (e, t) => t === 0 || (e.route.path && e.route.path.length > 0),
  );
}
function we(e) {
  let t = Ce(e);
  return t.map((e, n) => (n === t.length - 1 ? e.pathname : e.pathnameBase));
}
function Te(e, t, n, r = !1) {
  let i;
  typeof e == `string`
    ? (i = j(e))
    : ((i = { ...e }),
      D(
        !i.pathname || !i.pathname.includes(`?`),
        Se(`?`, `pathname`, `search`, i),
      ),
      D(
        !i.pathname || !i.pathname.includes(`#`),
        Se(`#`, `pathname`, `hash`, i),
      ),
      D(!i.search || !i.search.includes(`#`), Se(`#`, `search`, `hash`, i)));
  let a = e === `` || i.pathname === ``,
    o = a ? `/` : i.pathname,
    s;
  if (o == null) s = n;
  else {
    let e = t.length - 1;
    if (!r && o.startsWith(`..`)) {
      let t = o.split(`/`);
      for (; t[0] === `..`;) (t.shift(), --e);
      i.pathname = t.join(`/`);
    }
    s = e >= 0 ? t[e] : `/`;
  }
  let c = be(i, s),
    l = o && o !== `/` && o.endsWith(`/`),
    u = (a || o === `.`) && n.endsWith(`/`);
  return (!c.pathname.endsWith(`/`) && (l || u) && (c.pathname += `/`), c);
}
function Ee(e) {
  return (
    e != null &&
    typeof e.status == `number` &&
    typeof e.statusText == `string` &&
    typeof e.internal == `boolean` &&
    `data` in e
  );
}
function De(e) {
  return hn(e.map((e) => e.route.path).filter(Boolean)) || `/`;
}
function Oe(e, t) {
  let n = e;
  if (typeof n != `string` || !rn.test(n))
    return { absoluteURL: void 0, isExternal: !1, to: n };
  let r = n,
    i = !1;
  if (xn)
    try {
      let e = new URL(window.location.href),
        r = an.test(n) ? new URL(re(n, e.protocol)) : new URL(n),
        a = P(r.pathname, t);
      r.origin === e.origin && a != null
        ? (n = a + r.search + r.hash)
        : (i = !0);
    } catch {
      O(
        !1,
        `<Link to="${n}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`,
      );
    }
  return { absoluteURL: r, isExternal: i, to: n };
}
function ke(e) {
  try {
    return wn.includes(new URL(e).protocol);
  } catch {
    return !1;
  }
}
function Ae() {
  return en.useContext(Dn);
}
function je(e) {
  if (e.startsWith(`${Pn}:${Fn}:{`))
    try {
      let t = JSON.parse(e.slice(28));
      if (
        typeof t == `object` &&
        t &&
        typeof t.status == `number` &&
        typeof t.statusText == `string` &&
        typeof t.location == `string` &&
        typeof t.reloadDocument == `boolean` &&
        typeof t.replace == `boolean`
      )
        return t;
    } catch {}
}
function Me(e) {
  if (e.startsWith(`${Pn}:${In}:{`))
    try {
      let t = JSON.parse(e.slice(40));
      if (
        typeof t == `object` &&
        t &&
        typeof t.status == `number` &&
        typeof t.statusText == `string`
      )
        return new bn(t.status, t.statusText, t.data);
    } catch {}
}
function Ne(e, { relative: t } = {}) {
  D(Pe(), `useHref() may be used only in the context of a <Router> component.`);
  let { basename: n, navigator: r } = F.useContext(R),
    { hash: i, pathname: a, search: o } = Be(e, { relative: t }),
    s = a;
  return (
    n !== `/` && (s = a === `/` ? n : hn([n, a])),
    r.createHref({ pathname: s, search: o, hash: i })
  );
}
function Pe() {
  return F.useContext(jn) != null;
}
function Fe() {
  return (
    D(
      Pe(),
      `useLocation() may be used only in the context of a <Router> component.`,
    ),
    F.useContext(jn).location
  );
}
function Ie(e) {
  F.useContext(R).static || F.useLayoutEffect(e);
}
function Le() {
  let { isDataRoute: e } = F.useContext(Mn);
  return e ? nt() : Re();
}
function Re() {
  D(
    Pe(),
    `useNavigate() may be used only in the context of a <Router> component.`,
  );
  let e = F.useContext(Tn),
    { basename: t, navigator: n } = F.useContext(R),
    { matches: r } = F.useContext(Mn),
    { pathname: i } = Fe(),
    a = JSON.stringify(we(r)),
    o = F.useRef(!1);
  return (
    Ie(() => {
      o.current = !0;
    }),
    F.useCallback(
      (r, s = {}) => {
        if ((O(o.current, Ln), !o.current)) return;
        if (typeof r == `number`) {
          n.go(r);
          return;
        }
        let c = Te(r, JSON.parse(a), i, s.relative === `path`);
        (e == null &&
          t !== `/` &&
          (c.pathname = c.pathname === `/` ? t : hn([t, c.pathname])),
          (s.replace ? n.replace : n.push)(c, s.state, s));
      },
      [t, n, a, i, e],
    )
  );
}
function ze() {
  let { matches: e } = F.useContext(Mn);
  return e[e.length - 1]?.params ?? {};
}
function Be(e, { relative: t } = {}) {
  let { matches: n } = F.useContext(Mn),
    { pathname: r } = Fe(),
    i = JSON.stringify(we(n));
  return F.useMemo(() => Te(e, JSON.parse(i), r, t === `path`), [e, i, r, t]);
}
function Ve(e, t) {
  return He(e, t);
}
function He(e, t, n) {
  D(
    Pe(),
    `useRoutes() may be used only in the context of a <Router> component.`,
  );
  let { navigator: r } = F.useContext(R),
    { matches: i } = F.useContext(Mn),
    a = i[i.length - 1],
    o = a ? a.params : {},
    s = a ? a.pathname : `/`,
    c = a ? a.pathnameBase : `/`,
    l = a && a.route;
  {
    let e = (l && l.path) || ``;
    rt(
      s,
      !l || e.endsWith(`*`) || e.endsWith(`*?`),
      `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${s}" (under <Route path="${e}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${e}"> to <Route path="${e === `/` ? `*` : `${e}/*`}">.`,
    );
  }
  let u = Fe(),
    d;
  if (t) {
    let e = typeof t == `string` ? j(t) : t;
    (D(
      c === `/` || e.pathname?.startsWith(c),
      `When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${c}" but pathname "${e.pathname}" was given in the \`location\` prop.`,
    ),
      (d = e));
  } else d = u;
  let f = d.pathname || `/`,
    p = f;
  if (c !== `/`) {
    let e = c.replace(/^\//, ``).split(`/`);
    p = `/` + f.replace(/^\//, ``).split(`/`).slice(e.length).join(`/`);
  }
  let m =
    n && n.state.matches.length
      ? n.state.matches.map((e) =>
          Object.assign(e, { route: n.manifest[e.route.id] || e.route }),
        )
      : ce(e, { pathname: p });
  (O(
    l || m != null,
    `No routes matched location "${d.pathname}${d.search}${d.hash}" `,
  ),
    O(
      m == null ||
        m[m.length - 1].route.element !== void 0 ||
        m[m.length - 1].route.Component !== void 0 ||
        m[m.length - 1].route.lazy !== void 0,
      `Matched leaf route at location "${d.pathname}${d.search}${d.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`,
    ));
  let h = Ke(
    m &&
      m.map((e) =>
        Object.assign({}, e, {
          params: Object.assign({}, o, e.params),
          pathname: hn([
            c,
            r.encodeLocation
              ? r.encodeLocation(
                  e.pathname
                    .replace(/%/g, `%25`)
                    .replace(/\?/g, `%3F`)
                    .replace(/#/g, `%23`),
                ).pathname
              : e.pathname,
          ]),
          pathnameBase:
            e.pathnameBase === `/`
              ? c
              : hn([
                  c,
                  r.encodeLocation
                    ? r.encodeLocation(
                        e.pathnameBase
                          .replace(/%/g, `%25`)
                          .replace(/\?/g, `%3F`)
                          .replace(/#/g, `%23`),
                      ).pathname
                    : e.pathnameBase,
                ]),
        }),
      ),
    i,
    n,
  );
  return t && h
    ? F.createElement(
        jn.Provider,
        {
          value: {
            location: {
              pathname: `/`,
              search: ``,
              hash: ``,
              state: null,
              key: `default`,
              mask: void 0,
              ...d,
            },
            navigationType: `POP`,
          },
        },
        h,
      )
    : h;
}
function Ue() {
  let e = tt(),
    t = Ee(e)
      ? `${e.status} ${e.statusText}`
      : e instanceof Error
        ? e.message
        : JSON.stringify(e),
    n = e instanceof Error ? e.stack : null,
    r = `rgba(200,200,200, 0.5)`,
    i = { padding: `0.5rem`, backgroundColor: r },
    a = { padding: `2px 4px`, backgroundColor: r },
    o = null;
  return (
    console.error(`Error handled by React Router default ErrorBoundary:`, e),
    (o = F.createElement(
      F.Fragment,
      null,
      F.createElement(`p`, null, `💿 Hey developer 👋`),
      F.createElement(
        `p`,
        null,
        `You can provide a way better UX than this when your app throws errors by providing your own `,
        F.createElement(`code`, { style: a }, `ErrorBoundary`),
        ` or`,
        ` `,
        F.createElement(`code`, { style: a }, `errorElement`),
        ` prop on your route.`,
      ),
    )),
    F.createElement(
      F.Fragment,
      null,
      F.createElement(`h2`, null, `Unexpected Application Error!`),
      F.createElement(`h3`, { style: { fontStyle: `italic` } }, t),
      n ? F.createElement(`pre`, { style: i }, n) : null,
      o,
    )
  );
}
function We({ children: e, error: t }) {
  let { basename: n } = F.useContext(R);
  if (
    typeof t == `object` &&
    t &&
    `digest` in t &&
    typeof t.digest == `string`
  ) {
    let e = je(t.digest);
    if (e) {
      let r = Bn.get(t);
      if (r) throw r;
      let i = Oe(e.location, n),
        a = i.absoluteURL || i.to;
      if (ke(a)) throw Error(`Invalid redirect location`);
      if (xn && !Bn.get(t))
        if (i.isExternal || e.reloadDocument) window.location.href = a;
        else {
          let n = Promise.resolve().then(() =>
            window.__reactRouterDataRouter.navigate(i.to, {
              replace: e.replace,
            }),
          );
          throw (Bn.set(t, n), n);
        }
      return F.createElement(`meta`, {
        httpEquiv: `refresh`,
        content: `0;url=${a}`,
      });
    }
  }
  return e;
}
function Ge({ routeContext: e, match: t, children: n }) {
  let r = F.useContext(Tn);
  return (
    r &&
      r.static &&
      r.staticContext &&
      (t.route.errorElement || t.route.ErrorBoundary) &&
      (r.staticContext._deepestRenderedBoundaryId = t.route.id),
    F.createElement(Mn.Provider, { value: e }, n)
  );
}
function Ke(e, t = [], n) {
  let r = n?.state;
  if (e == null) {
    if (!r) return null;
    if (r.errors) e = r.matches;
    else if (t.length === 0 && !r.initialized && r.matches.length > 0)
      e = r.matches;
    else return null;
  }
  let i = e,
    a = r?.errors;
  if (a != null) {
    let e = i.findIndex((e) => e.route.id && a?.[e.route.id] !== void 0);
    (D(
      e >= 0,
      `Could not find a matching route for errors on route IDs: ${Object.keys(a).join(`,`)}`,
    ),
      (i = i.slice(0, Math.min(i.length, e + 1))));
  }
  let o = !1,
    s = -1;
  if (n && r) {
    o = r.renderFallback;
    for (let e = 0; e < i.length; e++) {
      let t = i[e];
      if (
        ((t.route.HydrateFallback || t.route.hydrateFallbackElement) && (s = e),
        t.route.id)
      ) {
        let { loaderData: e, errors: a } = r,
          c =
            t.route.loader &&
            !e.hasOwnProperty(t.route.id) &&
            (!a || a[t.route.id] === void 0);
        if (t.route.lazy || c) {
          (n.isStatic && (o = !0), (i = s >= 0 ? i.slice(0, s + 1) : [i[0]]));
          break;
        }
      }
    }
  }
  let c = n?.onError,
    l =
      r && c
        ? (e, t) => {
            c(e, {
              location: r.location,
              params: r.matches?.[0]?.params ?? {},
              pattern: De(r.matches),
              errorInfo: t,
            });
          }
        : void 0;
  return i.reduceRight((e, n, c) => {
    let u,
      d = !1,
      f = null,
      p = null;
    r &&
      ((u = a && n.route.id ? a[n.route.id] : void 0),
      (f = n.route.errorElement || Rn),
      o &&
        (s < 0 && c === 0
          ? (rt(
              `route-fallback`,
              !1,
              "No `HydrateFallback` element provided to render during initial hydration",
            ),
            (d = !0),
            (p = null))
          : s === c &&
            ((d = !0), (p = n.route.hydrateFallbackElement || null))));
    let m = t.concat(i.slice(0, c + 1)),
      h = () => {
        let t;
        return (
          (t = u
            ? f
            : d
              ? p
              : n.route.Component
                ? F.createElement(n.route.Component, null)
                : n.route.element
                  ? n.route.element
                  : e),
          F.createElement(Ge, {
            match: n,
            routeContext: { outlet: e, matches: m, isDataRoute: r != null },
            children: t,
          })
        );
      };
    return r && (n.route.ErrorBoundary || n.route.errorElement || c === 0)
      ? F.createElement(zn, {
          location: r.location,
          revalidation: r.revalidation,
          component: f,
          error: u,
          children: h(),
          routeContext: { outlet: null, matches: m, isDataRoute: !0 },
          onError: l,
        })
      : h();
  }, null);
}
function qe(e) {
  return `${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function Je(e) {
  let t = F.useContext(Tn);
  return (D(t, qe(e)), t);
}
function Ye(e) {
  let t = F.useContext(En);
  return (D(t, qe(e)), t);
}
function Xe(e) {
  let t = F.useContext(Mn);
  return (D(t, qe(e)), t);
}
function Ze(e) {
  let t = Xe(e),
    n = t.matches[t.matches.length - 1];
  return (
    D(n.route.id, `${e} can only be used on routes that contain a unique "id"`),
    n.route.id
  );
}
function Qe() {
  return Ze(`useRouteId`);
}
function $e() {
  let e = Ye(`useNavigation`);
  return F.useMemo(() => {
    let { matches: t, historyAction: n, ...r } = e.navigation;
    return r;
  }, [e.navigation]);
}
function et() {
  let { matches: e, loaderData: t } = Ye(`useMatches`);
  return F.useMemo(() => e.map((e) => le(e, t)), [e, t]);
}
function tt() {
  let e = F.useContext(Nn),
    t = Ye(`useRouteError`),
    n = Ze(`useRouteError`);
  return e === void 0 ? t.errors?.[n] : e;
}
function nt() {
  let { router: e } = Je(`useNavigate`),
    t = Ze(`useNavigate`),
    n = F.useRef(!1);
  return (
    Ie(() => {
      n.current = !0;
    }),
    F.useCallback(
      async (r, i = {}) => {
        (O(n.current, Ln),
          n.current &&
            (typeof r == `number`
              ? await e.navigate(r)
              : await e.navigate(r, { fromRouteId: t, ...i })));
      },
      [e, t],
    )
  );
}
function rt(e, t, n) {
  !t && !Vn[e] && ((Vn[e] = !0), O(!1, n));
}
function it({
  routes: e,
  manifest: t,
  future: n,
  state: r,
  isStatic: i,
  onError: a,
}) {
  return He(e, void 0, {
    manifest: t,
    state: r,
    isStatic: i,
    onError: a,
    future: n,
  });
}
function at({ to: e, replace: t, state: n, relative: r }) {
  D(
    Pe(),
    `<Navigate> may be used only in the context of a <Router> component.`,
  );
  let { static: i } = tn.useContext(R);
  O(
    !i,
    `<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change.`,
  );
  let { matches: a } = tn.useContext(Mn),
    { pathname: o } = Fe(),
    s = Le(),
    c = Te(e, we(a), o, r === `path`),
    l = JSON.stringify(c);
  return (
    tn.useEffect(() => {
      s(JSON.parse(l), { replace: t, state: n, relative: r });
    }, [s, l, r, t, n]),
    null
  );
}
function ot(e) {
  D(
    !1,
    `A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.`,
  );
}
function st({
  basename: e = `/`,
  children: t = null,
  location: n,
  navigationType: r = `POP`,
  navigator: i,
  static: a = !1,
  useTransitions: o,
}) {
  D(
    !Pe(),
    `You cannot render a <Router> inside another <Router>. You should never have more than one in your app.`,
  );
  let s = e.replace(/^\/*/, `/`),
    c = tn.useMemo(
      () => ({
        basename: s,
        navigator: i,
        static: a,
        useTransitions: o,
        future: {},
      }),
      [s, i, a, o],
    );
  typeof n == `string` && (n = j(n));
  let {
      pathname: l = `/`,
      search: u = ``,
      hash: d = ``,
      state: f = null,
      key: p = `default`,
      mask: m,
    } = n,
    h = tn.useMemo(() => {
      let e = P(l, s);
      return e == null
        ? null
        : {
            location: {
              pathname: e,
              search: u,
              hash: d,
              state: f,
              key: p,
              mask: m,
            },
            navigationType: r,
          };
    }, [s, l, u, d, f, p, r, m]);
  return (
    O(
      h != null,
      `<Router basename="${s}"> is not able to match the URL "${l}${u}${d}" because it does not start with the basename, so the <Router> won't render anything.`,
    ),
    h == null
      ? null
      : tn.createElement(
          R.Provider,
          { value: c },
          tn.createElement(jn.Provider, { children: t, value: h }),
        )
  );
}
function ct({ children: e, location: t }) {
  return Ve(lt(e), t);
}
function lt(e, t = []) {
  let n = [];
  return (
    tn.Children.forEach(e, (e, r) => {
      if (!tn.isValidElement(e)) return;
      let i = [...t, r];
      if (e.type === tn.Fragment) {
        n.push.apply(n, lt(e.props.children, i));
        return;
      }
      (D(
        e.type === ot,
        `[${typeof e.type == `string` ? e.type : e.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`,
      ),
        D(
          !e.props.index || !e.props.children,
          `An index route cannot have child routes.`,
        ));
      let a = {
        id: e.props.id || i.join(`-`),
        caseSensitive: e.props.caseSensitive,
        element: e.props.element,
        Component: e.props.Component,
        index: e.props.index,
        path: e.props.path,
        middleware: e.props.middleware,
        loader: e.props.loader,
        action: e.props.action,
        hydrateFallbackElement: e.props.hydrateFallbackElement,
        HydrateFallback: e.props.HydrateFallback,
        errorElement: e.props.errorElement,
        ErrorBoundary: e.props.ErrorBoundary,
        hasErrorBoundary:
          e.props.hasErrorBoundary === !0 ||
          e.props.ErrorBoundary != null ||
          e.props.errorElement != null,
        shouldRevalidate: e.props.shouldRevalidate,
        handle: e.props.handle,
        lazy: e.props.lazy,
      };
      (e.props.children && (a.children = lt(e.props.children, i)), n.push(a));
    }),
    n
  );
}
function ut(e) {
  return typeof HTMLElement < `u` && e instanceof HTMLElement;
}
function dt(e) {
  return ut(e) && e.tagName.toLowerCase() === `button`;
}
function ft(e) {
  return ut(e) && e.tagName.toLowerCase() === `form`;
}
function pt(e) {
  return ut(e) && e.tagName.toLowerCase() === `input`;
}
function mt(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
function ht(e, t) {
  return e.button === 0 && (!t || t === `_self`) && !mt(e);
}
function gt() {
  if (Wn === null)
    try {
      (new FormData(document.createElement(`form`), 0), (Wn = !1));
    } catch {
      Wn = !0;
    }
  return Wn;
}
function _t(e) {
  return e != null && !Gn.has(e)
    ? (O(
        !1,
        `"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Un}"`,
      ),
      null)
    : e;
}
function vt(e, t) {
  let n, r, i, a, o;
  if (ft(e)) {
    let o = e.getAttribute(`action`);
    ((r = o ? P(o, t) : null),
      (n = e.getAttribute(`method`) || Hn),
      (i = _t(e.getAttribute(`enctype`)) || Un),
      (a = new FormData(e)));
  } else if (dt(e) || (pt(e) && (e.type === `submit` || e.type === `image`))) {
    let o = e.form;
    if (o == null)
      throw Error(
        `Cannot submit a <button> or <input type="submit"> without a <form>`,
      );
    let s = e.getAttribute(`formaction`) || o.getAttribute(`action`);
    if (
      ((r = s ? P(s, t) : null),
      (n = e.getAttribute(`formmethod`) || o.getAttribute(`method`) || Hn),
      (i =
        _t(e.getAttribute(`formenctype`)) ||
        _t(o.getAttribute(`enctype`)) ||
        Un),
      (a = new FormData(o, e)),
      !gt())
    ) {
      let { name: t, type: n, value: r } = e;
      if (n === `image`) {
        let e = t ? `${t}.` : ``;
        (a.append(`${e}x`, `0`), a.append(`${e}y`, `0`));
      } else t && a.append(t, r);
    }
  } else if (ut(e))
    throw Error(
      `Cannot submit element that is not <form>, <button>, or <input type="submit|image">`,
    );
  else ((n = Hn), (r = null), (i = Un), (o = e));
  return (
    a && i === `text/plain` && ((o = a), (a = void 0)),
    { action: r, method: n.toLowerCase(), encType: i, formData: a, body: o }
  );
}
function yt(e) {
  return e.replace(qn, (e) => Kn[e]);
}
function bt(e, t) {
  if (e === !1 || e == null) throw Error(t);
}
function xt(e, t, n, r) {
  let i =
    typeof e == `string`
      ? new URL(
          e,
          typeof window > `u`
            ? `server://singlefetch/`
            : window.location.origin,
        )
      : e;
  return (
    n
      ? i.pathname.endsWith(`/`)
        ? (i.pathname = `${i.pathname}_.${r}`)
        : (i.pathname = `${i.pathname}.${r}`)
      : i.pathname === `/`
        ? (i.pathname = `_root.${r}`)
        : t && P(i.pathname, t) === `/`
          ? (i.pathname = `${gn(t)}/_root.${r}`)
          : (i.pathname = `${gn(i.pathname)}.${r}`),
    i
  );
}
async function St(e, t) {
  if (e.id in t) return t[e.id];
  try {
    let n = await w(() => import(e.module), []);
    return ((t[e.id] = n), n);
  } catch (t) {
    return (
      console.error(
        `Error loading route module \`${e.module}\`, reloading page...`,
      ),
      console.error(t),
      window.__reactRouterContext && window.__reactRouterContext.isSpaMode,
      window.location.reload(),
      new Promise(() => {})
    );
  }
}
function Ct(e) {
  return e != null && typeof e.page == `string`;
}
function wt(e) {
  return e == null
    ? !1
    : e.href == null
      ? e.rel === `preload` &&
        typeof e.imageSrcSet == `string` &&
        typeof e.imageSizes == `string`
      : typeof e.rel == `string` && typeof e.href == `string`;
}
async function Tt(e, t, n) {
  return At(
    (
      await Promise.all(
        e.map(async (e) => {
          let r = t.routes[e.route.id];
          if (r) {
            let e = await St(r, n);
            return e.links ? e.links() : [];
          }
          return [];
        }),
      )
    )
      .flat(1)
      .filter(wt)
      .filter((e) => e.rel === `stylesheet` || e.rel === `preload`)
      .map((e) =>
        e.rel === `stylesheet`
          ? { ...e, rel: `prefetch`, as: `style` }
          : { ...e, rel: `prefetch` },
      ),
  );
}
function Et(e, t, n, r, i, a) {
  let o = (e, t) => (n[t] ? e.route.id !== n[t].route.id : !0),
    s = (e, t) =>
      n[t].pathname !== e.pathname ||
      (n[t].route.path?.endsWith(`*`) && n[t].params[`*`] !== e.params[`*`]);
  return a === `assets`
    ? t.filter((e, t) => o(e, t) || s(e, t))
    : a === `data`
      ? t.filter((t, a) => {
          let c = r.routes[t.route.id];
          if (!c || !c.hasLoader) return !1;
          if (o(t, a) || s(t, a)) return !0;
          if (t.route.shouldRevalidate) {
            let r = t.route.shouldRevalidate({
              currentUrl: new URL(
                i.pathname + i.search + i.hash,
                window.origin,
              ),
              currentParams: n[0]?.params || {},
              nextUrl: new URL(e, window.origin),
              nextParams: t.params,
              defaultShouldRevalidate: !0,
            });
            if (typeof r == `boolean`) return r;
          }
          return !0;
        })
      : [];
}
function Dt(e, t, { includeHydrateFallback: n } = {}) {
  return Ot(
    e
      .map((e) => {
        let r = t.routes[e.route.id];
        if (!r) return [];
        let i = [r.module];
        return (
          r.clientActionModule && (i = i.concat(r.clientActionModule)),
          r.clientLoaderModule && (i = i.concat(r.clientLoaderModule)),
          n &&
            r.hydrateFallbackModule &&
            (i = i.concat(r.hydrateFallbackModule)),
          r.imports && (i = i.concat(r.imports)),
          i
        );
      })
      .flat(1),
  );
}
function Ot(e) {
  return [...new Set(e)];
}
function kt(e) {
  let t = {},
    n = Object.keys(e).sort();
  for (let r of n) t[r] = e[r];
  return t;
}
function At(e, t) {
  let n = new Set(),
    r = new Set(t);
  return e.reduce((e, i) => {
    if (t && !Ct(i) && i.as === `script` && i.href && r.has(i.href)) return e;
    let a = JSON.stringify(kt(i));
    return (n.has(a) || (n.add(a), e.push({ key: a, link: i })), e);
  }, []);
}
function jt() {
  let e = I.useContext(Tn);
  return (
    bt(
      e,
      `You must render this element inside a <DataRouterContext.Provider> element`,
    ),
    e
  );
}
function Mt() {
  let e = I.useContext(En);
  return (
    bt(
      e,
      `You must render this element inside a <DataRouterStateContext.Provider> element`,
    ),
    e
  );
}
function Nt() {
  let e = I.useContext(Jn);
  return (
    bt(e, `You must render this element inside a <HydratedRouter> element`),
    e
  );
}
function Pt(e, t) {
  let n = I.useContext(Jn),
    [r, i] = I.useState(!1),
    [a, o] = I.useState(!1),
    {
      onFocus: s,
      onBlur: c,
      onMouseEnter: l,
      onMouseLeave: u,
      onTouchStart: d,
    } = t,
    f = I.useRef(null);
  (I.useEffect(() => {
    if ((e === `render` && o(!0), e === `viewport`)) {
      let e = new IntersectionObserver(
        (e) => {
          e.forEach((e) => {
            o(e.isIntersecting);
          });
        },
        { threshold: 0.5 },
      );
      return (
        f.current && e.observe(f.current),
        () => {
          e.disconnect();
        }
      );
    }
  }, [e]),
    I.useEffect(() => {
      if (r) {
        let e = setTimeout(() => {
          o(!0);
        }, 100);
        return () => {
          clearTimeout(e);
        };
      }
    }, [r]));
  let p = () => {
      i(!0);
    },
    m = () => {
      (i(!1), o(!1));
    };
  return n
    ? e === `intent`
      ? [
          a,
          f,
          {
            onFocus: Ft(s, p),
            onBlur: Ft(c, m),
            onMouseEnter: Ft(l, p),
            onMouseLeave: Ft(u, m),
            onTouchStart: Ft(d, p),
          },
        ]
      : [a, f, {}]
    : [!1, f, {}];
}
function Ft(e, t) {
  return (n) => {
    (e && e(n), n.defaultPrevented || t(n));
  };
}
function It({ page: e, ...t }) {
  let n = Ae(),
    { nonce: r } = Nt(),
    { router: i } = jt(),
    a = I.useMemo(() => ce(i.routes, e, i.basename), [i.routes, e, i.basename]);
  return a
    ? (t.nonce == null && r && (t = { ...t, nonce: r }),
      n
        ? I.createElement(Rt, { page: e, matches: a, ...t })
        : I.createElement(zt, { page: e, matches: a, ...t }))
    : null;
}
function Lt(e) {
  let { manifest: t, routeModules: n } = Nt(),
    [r, i] = I.useState([]);
  return (
    I.useEffect(() => {
      let r = !1;
      return (
        Tt(e, t, n).then((e) => {
          r || i(e);
        }),
        () => {
          r = !0;
        }
      );
    }, [e, t, n]),
    r
  );
}
function Rt({ page: e, matches: t, ...n }) {
  let r = Fe(),
    { future: i } = Nt(),
    { basename: a } = jt(),
    o = I.useMemo(() => {
      if (e === r.pathname + r.search + r.hash) return [];
      let n = xt(e, a, i.v8_trailingSlashAwareDataRequests, `rsc`),
        o = !1,
        s = [];
      for (let e of t)
        typeof e.route.shouldRevalidate == `function`
          ? (o = !0)
          : s.push(e.route.id);
      return (
        o && s.length > 0 && n.searchParams.set(`_routes`, s.join(`,`)),
        [n.pathname + n.search]
      );
    }, [a, i.v8_trailingSlashAwareDataRequests, e, r, t]);
  return I.createElement(
    I.Fragment,
    null,
    o.map((e) =>
      I.createElement(`link`, {
        key: e,
        rel: `prefetch`,
        as: `fetch`,
        href: e,
        ...n,
      }),
    ),
  );
}
function zt({ page: e, matches: t, ...n }) {
  let r = Fe(),
    { future: i, manifest: a, routeModules: o } = Nt(),
    { basename: s } = jt(),
    { loaderData: c, matches: l } = Mt(),
    u = I.useMemo(() => Et(e, t, l, a, r, `data`), [e, t, l, a, r]),
    d = I.useMemo(() => Et(e, t, l, a, r, `assets`), [e, t, l, a, r]),
    f = I.useMemo(() => {
      if (e === r.pathname + r.search + r.hash) return [];
      let n = new Set(),
        l = !1;
      if (
        (t.forEach((e) => {
          let t = a.routes[e.route.id];
          !t ||
            !t.hasLoader ||
            ((!u.some((t) => t.route.id === e.route.id) &&
              e.route.id in c &&
              o[e.route.id]?.shouldRevalidate) ||
            t.hasClientLoader
              ? (l = !0)
              : n.add(e.route.id));
        }),
        n.size === 0)
      )
        return [];
      let d = xt(e, s, i.v8_trailingSlashAwareDataRequests, `data`);
      return (
        l &&
          n.size > 0 &&
          d.searchParams.set(
            `_routes`,
            t
              .filter((e) => n.has(e.route.id))
              .map((e) => e.route.id)
              .join(`,`),
          ),
        [d.pathname + d.search]
      );
    }, [s, i.v8_trailingSlashAwareDataRequests, c, r, a, u, t, e, o]),
    p = I.useMemo(() => Dt(d, a), [d, a]),
    m = Lt(d);
  return I.createElement(
    I.Fragment,
    null,
    f.map((e) =>
      I.createElement(`link`, {
        key: e,
        rel: `prefetch`,
        as: `fetch`,
        href: e,
        ...n,
      }),
    ),
    p.map((e) =>
      I.createElement(`link`, { key: e, rel: `modulepreload`, href: e, ...n }),
    ),
    m.map(({ key: e, link: t }) =>
      I.createElement(`link`, {
        key: e,
        nonce: n.nonce,
        ...t,
        crossOrigin: t.crossOrigin ?? n.crossOrigin,
      }),
    ),
  );
}
function Bt(...e) {
  return (t) => {
    e.forEach((e) => {
      typeof e == `function` ? e(t) : e != null && (e.current = t);
    });
  };
}
function Vt({ basename: e, children: t, useTransitions: n, window: r }) {
  let i = L.useRef();
  i.current ??= E({ window: r, v5Compat: !0 });
  let a = i.current,
    [o, s] = L.useState({ action: a.action, location: a.location }),
    c = L.useCallback(
      (e) => {
        n === !1 ? s(e) : L.startTransition(() => s(e));
      },
      [n],
    );
  return (
    L.useLayoutEffect(() => a.listen(c), [a, c]),
    L.createElement(st, {
      basename: e,
      children: t,
      location: o.location,
      navigationType: o.action,
      navigator: a,
      useTransitions: n,
    })
  );
}
function Ht({ basename: e, children: t, history: n, useTransitions: r }) {
  let [i, a] = L.useState({ action: n.action, location: n.location }),
    o = L.useCallback(
      (e) => {
        r === !1 ? a(e) : L.startTransition(() => a(e));
      },
      [r],
    );
  return (
    L.useLayoutEffect(() => n.listen(o), [n, o]),
    L.createElement(st, {
      basename: e,
      children: t,
      location: i.location,
      navigationType: i.action,
      navigator: n,
      useTransitions: r,
    })
  );
}
function Ut({ getKey: e, storageKey: t, ...n }) {
  let r = L.useContext(Jn),
    { basename: i } = L.useContext(R),
    a = Fe(),
    o = et();
  Zt({ getKey: e, storageKey: t });
  let s = L.useMemo(() => {
    if (!r || !e) return null;
    let t = Xt(a, o, i, e);
    return t === a.key ? null : t;
  }, []);
  if (!r || r.isSpaMode) return null;
  let c = ((e, t) => {
    if (!window.history.state || !window.history.state.key) {
      let e = Math.random().toString(32).slice(2);
      window.history.replaceState({ key: e }, ``);
    }
    try {
      let n = JSON.parse(sessionStorage.getItem(e) || `{}`)[
        t || window.history.state.key
      ];
      typeof n == `number` && window.scrollTo(0, n);
    } catch (t) {
      (console.error(t), sessionStorage.removeItem(e));
    }
  }).toString();
  return (
    n.nonce == null && r?.nonce && (n.nonce = r.nonce),
    L.createElement(`script`, {
      ...n,
      suppressHydrationWarning: !0,
      dangerouslySetInnerHTML: {
        __html: `(${c})(${yt(JSON.stringify(t || tr))}, ${yt(JSON.stringify(s))})`,
      },
    })
  );
}
function Wt(e) {
  return `${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function Gt(e) {
  let t = L.useContext(Tn);
  return (D(t, Wt(e)), t);
}
function Kt(e) {
  let t = L.useContext(En);
  return (D(t, Wt(e)), t);
}
function qt(
  e,
  {
    target: t,
    replace: n,
    mask: r,
    state: i,
    preventScrollReset: a,
    relative: o,
    viewTransition: s,
    defaultShouldRevalidate: c,
    useTransitions: l,
  } = {},
) {
  let u = Le(),
    d = Fe(),
    f = Be(e, { relative: o });
  return L.useCallback(
    (p) => {
      if (ht(p, t)) {
        p.preventDefault();
        let t = n === void 0 ? A(d) === A(f) : n,
          m = () =>
            u(e, {
              replace: t,
              mask: r,
              state: i,
              preventScrollReset: a,
              relative: o,
              viewTransition: s,
              defaultShouldRevalidate: c,
            });
        l ? L.startTransition(() => m()) : m();
      }
    },
    [d, u, f, n, r, i, t, e, a, o, s, c, l],
  );
}
function Jt() {
  let { router: e } = Gt(`useSubmit`),
    { basename: t } = L.useContext(R),
    n = Qe(),
    r = e.fetch,
    i = e.navigate;
  return L.useCallback(
    async (e, a = {}) => {
      let { action: o, method: s, encType: c, formData: l, body: u } = vt(e, t);
      a.navigate === !1
        ? await r(a.fetcherKey || er(), n, a.action || o, {
            defaultShouldRevalidate: a.defaultShouldRevalidate,
            preventScrollReset: a.preventScrollReset,
            formData: l,
            body: u,
            formMethod: a.method || s,
            formEncType: a.encType || c,
            flushSync: a.flushSync,
          })
        : await i(a.action || o, {
            defaultShouldRevalidate: a.defaultShouldRevalidate,
            preventScrollReset: a.preventScrollReset,
            formData: l,
            body: u,
            formMethod: a.method || s,
            formEncType: a.encType || c,
            replace: a.replace,
            state: a.state,
            fromRouteId: n,
            flushSync: a.flushSync,
            viewTransition: a.viewTransition,
          });
    },
    [r, i, t, n],
  );
}
function Yt(e, { relative: t } = {}) {
  let { basename: n } = L.useContext(R),
    r = L.useContext(Mn);
  D(r, `useFormAction must be used inside a RouteContext`);
  let [i] = r.matches.slice(-1),
    a = { ...Be(e || `.`, { relative: t }) },
    o = Fe();
  if (e == null) {
    a.search = o.search;
    let e = new URLSearchParams(a.search),
      t = e.getAll(`index`);
    if (t.some((e) => e === ``)) {
      (e.delete(`index`),
        t.filter((e) => e).forEach((t) => e.append(`index`, t)));
      let n = e.toString();
      a.search = n ? `?${n}` : ``;
    }
  }
  return (
    (!e || e === `.`) &&
      i.route.index &&
      (a.search = a.search ? a.search.replace(/^\?/, `?index&`) : `?index`),
    n !== `/` && (a.pathname = a.pathname === `/` ? n : hn([n, a.pathname])),
    A(a)
  );
}
function Xt(e, t, n, r) {
  let i = null;
  return (
    r &&
      (i = r(
        n === `/` ? e : { ...e, pathname: P(e.pathname, n) || e.pathname },
        t,
      )),
    (i ??= e.key),
    i
  );
}
function Zt({ getKey: e, storageKey: t } = {}) {
  let { router: n } = Gt(`useScrollRestoration`),
    { restoreScrollPosition: r, preventScrollReset: i } =
      Kt(`useScrollRestoration`),
    { basename: a } = L.useContext(R),
    o = Fe(),
    s = et(),
    c = $e();
  (L.useEffect(
    () => (
      (window.history.scrollRestoration = `manual`),
      () => {
        window.history.scrollRestoration = `auto`;
      }
    ),
    [],
  ),
    Qt(
      L.useCallback(() => {
        if (c.state === `idle`) {
          let t = Xt(o, s, a, e);
          nr[t] = window.scrollY;
        }
        try {
          sessionStorage.setItem(t || tr, JSON.stringify(nr));
        } catch (e) {
          O(
            !1,
            `Failed to save scroll positions in sessionStorage, <ScrollRestoration /> will not work properly (${e}).`,
          );
        }
        window.history.scrollRestoration = `auto`;
      }, [c.state, e, a, o, s, t]),
    ),
    typeof document < `u` &&
      (L.useLayoutEffect(() => {
        try {
          let e = sessionStorage.getItem(t || tr);
          e && (nr = JSON.parse(e));
        } catch {}
      }, [t]),
      L.useLayoutEffect(() => {
        let t = n?.enableScrollRestoration(
          nr,
          () => window.scrollY,
          e ? (t, n) => Xt(t, n, a, e) : void 0,
        );
        return () => t && t();
      }, [n, a, e]),
      L.useLayoutEffect(() => {
        if (r !== !1) {
          if (typeof r == `number`) {
            window.scrollTo(0, r);
            return;
          }
          try {
            if (o.hash) {
              let e = document.getElementById(
                decodeURIComponent(o.hash.slice(1)),
              );
              if (e) {
                e.scrollIntoView();
                return;
              }
            }
          } catch {
            O(
              !1,
              `"${o.hash.slice(1)}" is not a decodable element ID. The view will not scroll to it.`,
            );
          }
          i !== !0 && window.scrollTo(0, 0);
        }
      }, [o, r, i])));
}
function Qt(e, t) {
  let { capture: n } = t || {};
  L.useEffect(() => {
    let t = n == null ? void 0 : { capture: n };
    return (
      window.addEventListener(`pagehide`, e, t),
      () => {
        window.removeEventListener(`pagehide`, e, t);
      }
    );
  }, [e, n]);
}
function $t(e, { relative: t } = {}) {
  let n = L.useContext(On);
  D(
    n != null,
    "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?",
  );
  let { basename: r } = Gt(`useViewTransitionState`),
    i = Be(e, { relative: t });
  if (!n.isTransitioning) return !1;
  let a = P(n.currentLocation.pathname, r) || n.currentLocation.pathname,
    o = P(n.nextLocation.pathname, r) || n.nextLocation.pathname;
  return ge(i.pathname, o) != null || ge(i.pathname, a) != null;
}
var en,
  F,
  tn,
  nn,
  I,
  L,
  rn,
  an,
  on,
  sn,
  cn,
  ln,
  un,
  dn,
  fn,
  pn,
  mn,
  hn,
  gn,
  _n,
  vn,
  yn,
  bn,
  xn,
  Sn,
  Cn,
  wn,
  Tn,
  En,
  Dn,
  On,
  kn,
  An,
  R,
  jn,
  Mn,
  Nn,
  Pn,
  Fn,
  In,
  Ln,
  Rn,
  zn,
  Bn,
  Vn,
  Hn,
  Un,
  Wn,
  Gn,
  Kn,
  qn,
  Jn,
  Yn,
  Xn,
  Zn,
  Qn,
  $n,
  er,
  tr,
  nr,
  rr = t(() => {
    ((en = r(n(), 1)),
      (F = r(n(), 1)),
      (tn = r(n(), 1)),
      n(),
      (nn = r(n(), 1)),
      (I = r(n(), 1)),
      n(),
      n(),
      n(),
      (L = r(n(), 1)),
      n(),
      ne(),
      (rn = /^(?:[a-z][a-z0-9+.-]*:|[\\/]{2})/i),
      (an = /^[\\/]{2}/),
      (on = `popstate`),
      (sn = /^:[\w-]+$/),
      (cn = 3),
      (ln = 2),
      (un = 1),
      (dn = 10),
      (fn = -2),
      (pn = (e) => e === `*`),
      (mn = (e) => e.replace(/[\\/]{2,}/g, `/`)),
      (hn = (e) => mn(e.join(`/`))),
      (gn = (e) => e.replace(/\/+$/, ``)),
      (_n = (e) => gn(e).replace(/^\/*/, `/`)),
      (vn = (e) => (!e || e === `?` ? `` : e.startsWith(`?`) ? e : `?` + e)),
      (yn = (e) => (!e || e === `#` ? `` : e.startsWith(`#`) ? e : `#` + e)),
      (bn = class {
        constructor(e, t, n, r = !1) {
          ((this.status = e),
            (this.statusText = t || ``),
            (this.internal = r),
            n instanceof Error
              ? ((this.data = n.toString()), (this.error = n))
              : (this.data = n));
        }
      }),
      (xn =
        typeof window < `u` &&
        window.document !== void 0 &&
        window.document.createElement !== void 0),
      Object.getOwnPropertyNames(Object.prototype).sort().join(`\0`),
      (Sn = [`POST`, `PUT`, `PATCH`, `DELETE`]),
      new Set(Sn),
      (Cn = [`GET`, ...Sn]),
      new Set(Cn),
      (wn = [
        `about:`,
        `blob:`,
        `chrome:`,
        `chrome-untrusted:`,
        `content:`,
        `data:`,
        `devtools:`,
        `file:`,
        `filesystem:`,
        `javascript:`,
      ]),
      (Tn = en.createContext(null)),
      (Tn.displayName = `DataRouter`),
      (En = en.createContext(null)),
      (En.displayName = `DataRouterState`),
      (Dn = en.createContext(!1)),
      (On = en.createContext({ isTransitioning: !1 })),
      (On.displayName = `ViewTransition`),
      (kn = en.createContext(new Map())),
      (kn.displayName = `Fetchers`),
      (An = en.createContext(null)),
      (An.displayName = `Await`),
      (R = en.createContext(null)),
      (R.displayName = `Navigation`),
      (jn = en.createContext(null)),
      (jn.displayName = `Location`),
      (Mn = en.createContext({ outlet: null, matches: [], isDataRoute: !1 })),
      (Mn.displayName = `Route`),
      (Nn = en.createContext(null)),
      (Nn.displayName = `RouteError`),
      (Pn = `REACT_ROUTER_ERROR`),
      (Fn = `REDIRECT`),
      (In = `ROUTE_ERROR_RESPONSE`),
      (Ln = `You should call navigate() in a React.useEffect(), not when your component is first rendered.`),
      F.createContext(null),
      (Rn = F.createElement(Ue, null)),
      (zn = class extends F.Component {
        constructor(e) {
          (super(e),
            (this.state = {
              location: e.location,
              revalidation: e.revalidation,
              error: e.error,
            }));
        }
        static getDerivedStateFromError(e) {
          return { error: e };
        }
        static getDerivedStateFromProps(e, t) {
          return t.location !== e.location ||
            (t.revalidation !== `idle` && e.revalidation === `idle`)
            ? {
                error: e.error,
                location: e.location,
                revalidation: e.revalidation,
              }
            : {
                error: e.error === void 0 ? t.error : e.error,
                location: t.location,
                revalidation: e.revalidation || t.revalidation,
              };
        }
        componentDidCatch(e, t) {
          this.props.onError
            ? this.props.onError(e, t)
            : console.error(
                `React Router caught the following error during render`,
                e,
              );
        }
        render() {
          let e = this.state.error;
          if (
            this.context &&
            typeof e == `object` &&
            e &&
            `digest` in e &&
            typeof e.digest == `string`
          ) {
            let t = Me(e.digest);
            t && (e = t);
          }
          let t =
            e === void 0
              ? this.props.children
              : F.createElement(
                  Mn.Provider,
                  { value: this.props.routeContext },
                  F.createElement(Nn.Provider, {
                    value: e,
                    children: this.props.component,
                  }),
                );
          return this.context ? F.createElement(We, { error: e }, t) : t;
        }
      }),
      (zn.contextType = Dn),
      (Bn = new WeakMap()),
      (Vn = {}),
      tn.memo(it),
      tn.Component,
      (Hn = `get`),
      (Un = `application/x-www-form-urlencoded`),
      (Wn = null),
      (Gn = new Set([
        `application/x-www-form-urlencoded`,
        `multipart/form-data`,
        `text/plain`,
      ])),
      Object.getOwnPropertyNames(Object.prototype).sort().join(`\0`),
      (Kn = {
        "&": `\\u0026`,
        ">": `\\u003e`,
        "<": `\\u003c`,
        "\u2028": `\\u2028`,
        "\u2029": `\\u2029`,
      }),
      (qn = /[&><\u2028\u2029]/g),
      (Jn = I.createContext(void 0)),
      (Jn.displayName = `FrameworkContext`),
      nn.Component,
      (Yn =
        typeof window < `u` &&
        window.document !== void 0 &&
        window.document.createElement !== void 0));
    try {
      Yn && (window.__reactRouterVersion = `7.18.2`);
    } catch {}
    ((Ht.displayName = `unstable_HistoryRouter`),
      (Xn = L.forwardRef(function (
        {
          onClick: e,
          discover: t = `render`,
          prefetch: n = `none`,
          relative: r,
          reloadDocument: i,
          replace: a,
          mask: o,
          state: s,
          target: c,
          to: l,
          preventScrollReset: u,
          viewTransition: d,
          defaultShouldRevalidate: f,
          ...p
        },
        m,
      ) {
        let { basename: h, navigator: g, useTransitions: _ } = L.useContext(R),
          v = typeof l == `string` && rn.test(l),
          ee = Oe(l, h);
        l = ee.to;
        let y = Ne(l, { relative: r }),
          b = Fe(),
          x = null;
        if (o) {
          let e = Te(o, [], b.mask ? b.mask.pathname : `/`, !0);
          (h !== `/` &&
            (e.pathname = e.pathname === `/` ? h : hn([h, e.pathname])),
            (x = g.createHref(e)));
        }
        let [S, C, te] = Pt(n, p),
          w = qt(l, {
            replace: a,
            mask: o,
            state: s,
            target: c,
            preventScrollReset: u,
            relative: r,
            viewTransition: d,
            defaultShouldRevalidate: f,
            useTransitions: _,
          });
        function ne(t) {
          (e && e(t), t.defaultPrevented || w(t));
        }
        let re = !(ee.isExternal || i),
          T = L.createElement(`a`, {
            ...p,
            ...te,
            href: (re ? x : void 0) || ee.absoluteURL || y,
            onClick: re ? ne : e,
            ref: Bt(m, C),
            target: c,
            "data-discover": !v && t === `render` ? `true` : void 0,
          });
        return S && !v
          ? L.createElement(
              L.Fragment,
              null,
              T,
              L.createElement(It, { page: y }),
            )
          : T;
      })),
      (Xn.displayName = `Link`),
      (Zn = L.forwardRef(function (
        {
          "aria-current": e = `page`,
          caseSensitive: t = !1,
          className: n = ``,
          end: r = !1,
          style: i,
          to: a,
          viewTransition: o,
          children: s,
          ...c
        },
        l,
      ) {
        let u = Be(a, { relative: c.relative }),
          d = Fe(),
          f = L.useContext(En),
          { navigator: p, basename: m } = L.useContext(R),
          h = f != null && $t(u) && o === !0,
          g = p.encodeLocation ? p.encodeLocation(u).pathname : u.pathname,
          _ = d.pathname,
          v =
            f && f.navigation && f.navigation.location
              ? f.navigation.location.pathname
              : null;
        (t ||
          ((_ = _.toLowerCase()),
          (v = v ? v.toLowerCase() : null),
          (g = g.toLowerCase())),
          v && m && (v = P(v, m) || v));
        let ee = g !== `/` && g.endsWith(`/`) ? g.length - 1 : g.length,
          y = _ === g || (!r && _.startsWith(g) && _.charAt(ee) === `/`),
          b =
            v != null &&
            (v === g || (!r && v.startsWith(g) && v.charAt(g.length) === `/`)),
          x = { isActive: y, isPending: b, isTransitioning: h },
          S = y ? e : void 0,
          C;
        C =
          typeof n == `function`
            ? n(x)
            : [
                n,
                y ? `active` : null,
                b ? `pending` : null,
                h ? `transitioning` : null,
              ]
                .filter(Boolean)
                .join(` `);
        let te = typeof i == `function` ? i(x) : i;
        return L.createElement(
          Xn,
          {
            ...c,
            "aria-current": S,
            className: C,
            ref: l,
            style: te,
            to: a,
            viewTransition: o,
          },
          typeof s == `function` ? s(x) : s,
        );
      })),
      (Zn.displayName = `NavLink`),
      (Qn = L.forwardRef(
        (
          {
            discover: e = `render`,
            fetcherKey: t,
            navigate: n,
            reloadDocument: r,
            replace: i,
            state: a,
            method: o = Hn,
            action: s,
            onSubmit: c,
            relative: l,
            preventScrollReset: u,
            viewTransition: d,
            defaultShouldRevalidate: f,
            ...p
          },
          m,
        ) => {
          let { useTransitions: h } = L.useContext(R),
            g = Jt(),
            _ = Yt(s, { relative: l }),
            v = o.toLowerCase() === `get` ? `get` : `post`,
            ee = typeof s == `string` && rn.test(s);
          return L.createElement(`form`, {
            ref: m,
            method: v,
            action: _,
            onSubmit: r
              ? c
              : (e) => {
                  if ((c && c(e), e.defaultPrevented)) return;
                  e.preventDefault();
                  let r = e.nativeEvent.submitter,
                    s = r?.getAttribute(`formmethod`) || o,
                    p = () =>
                      g(r || e.currentTarget, {
                        fetcherKey: t,
                        method: s,
                        navigate: n,
                        replace: i,
                        state: a,
                        relative: l,
                        preventScrollReset: u,
                        viewTransition: d,
                        defaultShouldRevalidate: f,
                      });
                  h && n !== !1 ? L.startTransition(() => p()) : p();
                },
            ...p,
            "data-discover": !ee && e === `render` ? `true` : void 0,
          });
        },
      )),
      (Qn.displayName = `Form`),
      (Ut.displayName = `ScrollRestoration`),
      ($n = 0),
      (er = () => `__${String(++$n)}__`),
      (tr = `react-router-scroll-positions`),
      (nr = {}));
  }),
  ir = t(() => {
    rr();
  }),
  ar = t(() => {
    ir();
  }),
  or,
  sr,
  cr = t(() => {
    ((or = (e) => {
      let t,
        n = new Set(),
        r = (e, r) => {
          let i = typeof e == `function` ? e(t) : e;
          if (!Object.is(i, t)) {
            let e = t;
            ((t =
              (r ?? (typeof i != `object` || !i))
                ? i
                : Object.assign({}, t, i)),
              n.forEach((n) => n(t, e)));
          }
        },
        i = () => t,
        a = {
          setState: r,
          getState: i,
          getInitialState: () => o,
          subscribe: (e) => (n.add(e), () => n.delete(e)),
        },
        o = (t = e(r, i, a));
      return a;
    }),
      (sr = (e) => (e ? or(e) : or)));
  });
function lr(e, t = dr) {
  let n = ur.useSyncExternalStore(
    e.subscribe,
    ur.useCallback(() => t(e.getState()), [e, t]),
    ur.useCallback(() => t(e.getInitialState()), [e, t]),
  );
  return (ur.useDebugValue(n), n);
}
var ur,
  dr,
  fr,
  pr,
  mr = t(() => {
    ((ur = r(n(), 1)),
      cr(),
      (dr = (e) => e),
      (fr = (e) => {
        let t = sr(e),
          n = (e) => lr(t, e);
        return (Object.assign(n, t), n);
      }),
      (pr = (e) => (e ? fr(e) : fr)));
  }),
  hr = t(() => {
    (cr(), mr());
  });
function gr(e, t) {
  return function () {
    return e.apply(t, arguments);
  };
}
var _r = t(() => {});
function vr(e) {
  return (
    e !== null &&
    !Ir(e) &&
    e.constructor !== null &&
    !Ir(e.constructor) &&
    z(e.constructor.isBuffer) &&
    e.constructor.isBuffer(e)
  );
}
function yr(e) {
  let t;
  return (
    (t =
      typeof ArrayBuffer < `u` && ArrayBuffer.isView
        ? ArrayBuffer.isView(e)
        : e && e.buffer && Lr(e.buffer)),
    t
  );
}
function br() {
  return typeof globalThis < `u`
    ? globalThis
    : typeof self < `u`
      ? self
      : typeof window < `u`
        ? window
        : typeof global < `u`
          ? global
          : {};
}
function xr(e, t, { allOwnKeys: n = !1 } = {}) {
  if (e == null) return;
  let r, i;
  if ((typeof e != `object` && (e = [e]), Fr(e)))
    for (r = 0, i = e.length; r < i; r++) t.call(null, e[r], r, e);
  else {
    if (vr(e)) return;
    let i = n ? Object.getOwnPropertyNames(e) : Object.keys(e),
      a = i.length,
      o;
    for (r = 0; r < a; r++) ((o = i[r]), t.call(null, e[o], o, e));
  }
}
function Sr(e, t) {
  if (vr(e)) return null;
  t = t.toLowerCase();
  let n = Object.keys(e),
    r = n.length,
    i;
  for (; r-- > 0;) if (((i = n[r]), t === i.toLowerCase())) return i;
  return null;
}
function Cr(...e) {
  let { caseless: t, skipUndefined: n } = (si(this) && this) || {},
    r = {},
    i = (e, i) => {
      if (i === `__proto__` || i === `constructor` || i === `prototype`) return;
      let a = (t && typeof i == `string` && Sr(r, i)) || i,
        o = kr(r, a) ? r[a] : void 0;
      Hr(o) && Hr(e)
        ? (r[a] = Cr(o, e))
        : Hr(e)
          ? (r[a] = Cr({}, e))
          : Fr(e)
            ? (r[a] = e.slice())
            : (!n || !Ir(e)) && (r[a] = e);
    };
  for (let t = 0, n = e.length; t < n; t++) {
    let n = e[t];
    if (!n || vr(n) || (xr(n, i), typeof n != `object` || Fr(n))) continue;
    let r = Object.getOwnPropertySymbols(n);
    for (let e = 0; e < r.length; e++) {
      let t = r[e];
      yi.call(n, t) && i(n[t], t);
    }
  }
  return r;
}
function wr(e) {
  return !!(e && z(e.append) && e[Or] === `FormData` && e[Dr]);
}
var Tr,
  Er,
  Dr,
  Or,
  kr,
  Ar,
  jr,
  Mr,
  Nr,
  Pr,
  Fr,
  Ir,
  Lr,
  Rr,
  z,
  zr,
  Br,
  Vr,
  Hr,
  Ur,
  Wr,
  Gr,
  Kr,
  qr,
  Jr,
  Yr,
  Xr,
  Zr,
  Qr,
  $r,
  ei,
  ti,
  ni,
  ri,
  ii,
  ai,
  oi,
  si,
  ci,
  li,
  ui,
  di,
  fi,
  pi,
  mi,
  hi,
  gi,
  _i,
  vi,
  yi,
  bi,
  xi,
  Si,
  Ci,
  wi,
  Ti,
  Ei,
  Di,
  Oi,
  ki,
  Ai,
  ji,
  Mi,
  B,
  V = t(() => {
    (_r(),
      ({ toString: Tr } = Object.prototype),
      ({ getPrototypeOf: Er } = Object),
      ({ iterator: Dr, toStringTag: Or } = Symbol),
      (kr = (
        ({ hasOwnProperty: e }) =>
        (t, n) =>
          e.call(t, n)
      )(Object.prototype)),
      (Ar = (e, t) => {
        let n = e,
          r = [];
        for (; n != null && n !== Object.prototype;) {
          if (r.indexOf(n) !== -1) return !1;
          if ((r.push(n), kr(n, t))) return !0;
          n = Er(n);
        }
        return !1;
      }),
      (jr = (e, t) => (e != null && Ar(e, t) ? e[t] : void 0)),
      (Mr = ((e) => (t) => {
        let n = Tr.call(t);
        return e[n] || (e[n] = n.slice(8, -1).toLowerCase());
      })(Object.create(null))),
      (Nr = (e) => ((e = e.toLowerCase()), (t) => Mr(t) === e)),
      (Pr = (e) => (t) => typeof t === e),
      ({ isArray: Fr } = Array),
      (Ir = Pr(`undefined`)),
      (Lr = Nr(`ArrayBuffer`)),
      (Rr = Pr(`string`)),
      (z = Pr(`function`)),
      (zr = Pr(`number`)),
      (Br = (e) => typeof e == `object` && !!e),
      (Vr = (e) => e === !0 || e === !1),
      (Hr = (e) => {
        if (!Br(e)) return !1;
        let t = Er(e);
        return (
          (t === null || t === Object.prototype || Er(t) === null) &&
          !Ar(e, Or) &&
          !Ar(e, Dr)
        );
      }),
      (Ur = (e) => {
        if (!Br(e) || vr(e)) return !1;
        try {
          return (
            Object.keys(e).length === 0 &&
            Object.getPrototypeOf(e) === Object.prototype
          );
        } catch {
          return !1;
        }
      }),
      (Wr = Nr(`Date`)),
      (Gr = Nr(`File`)),
      (Kr = (e) => !!(e && e.uri !== void 0)),
      (qr = (e) => e && e.getParts !== void 0),
      (Jr = Nr(`Blob`)),
      (Yr = Nr(`FileList`)),
      (Xr = (e) => Br(e) && z(e.pipe)),
      (Zr = br()),
      (Qr = Zr.FormData === void 0 ? void 0 : Zr.FormData),
      ($r = (e) => {
        if (!e) return !1;
        if (Qr && e instanceof Qr) return !0;
        let t = Er(e);
        if (!t || t === Object.prototype || !z(e.append)) return !1;
        let n = Mr(e);
        return (
          n === `formdata` ||
          (n === `object` &&
            z(e.toString) &&
            e.toString() === `[object FormData]`)
        );
      }),
      (ei = Nr(`URLSearchParams`)),
      ([ti, ni, ri, ii] = [
        `ReadableStream`,
        `Request`,
        `Response`,
        `Headers`,
      ].map(Nr)),
      (ai = (e) =>
        e.trim
          ? e.trim()
          : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, ``)),
      (oi =
        typeof globalThis < `u`
          ? globalThis
          : typeof self < `u`
            ? self
            : typeof window < `u`
              ? window
              : global),
      (si = (e) => !Ir(e) && e !== oi),
      (ci = (e, t, n, { allOwnKeys: r } = {}) => (
        xr(
          t,
          (t, r) => {
            n && z(t)
              ? Object.defineProperty(e, r, {
                  __proto__: null,
                  value: gr(t, n),
                  writable: !0,
                  enumerable: !0,
                  configurable: !0,
                })
              : Object.defineProperty(e, r, {
                  __proto__: null,
                  value: t,
                  writable: !0,
                  enumerable: !0,
                  configurable: !0,
                });
          },
          { allOwnKeys: r },
        ),
        e
      )),
      (li = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e)),
      (ui = (e, t, n, r) => {
        ((e.prototype = Object.create(t.prototype, r)),
          Object.defineProperty(e.prototype, "constructor", {
            __proto__: null,
            value: e,
            writable: !0,
            enumerable: !1,
            configurable: !0,
          }),
          Object.defineProperty(e, "super", {
            __proto__: null,
            value: t.prototype,
          }),
          n && Object.assign(e.prototype, n));
      }),
      (di = (e, t, n, r) => {
        let i,
          a,
          o,
          s = {};
        if (((t ||= {}), e == null)) return t;
        do {
          for (i = Object.getOwnPropertyNames(e), a = i.length; a-- > 0;)
            ((o = i[a]),
              (!r || r(o, e, t)) && !s[o] && ((t[o] = e[o]), (s[o] = !0)));
          e = n !== !1 && Er(e);
        } while (e && (!n || n(e, t)) && e !== Object.prototype);
        return t;
      }),
      (fi = (e, t, n) => {
        ((e = String(e)),
          (n === void 0 || n > e.length) && (n = e.length),
          (n -= t.length));
        let r = e.indexOf(t, n);
        return r !== -1 && r === n;
      }),
      (pi = (e) => {
        if (!e) return null;
        if (Fr(e)) return e;
        let t = e.length;
        if (!zr(t)) return null;
        let n = Array(t);
        for (; t-- > 0;) n[t] = e[t];
        return n;
      }),
      (mi = (
        (e) => (t) =>
          e && t instanceof e
      )(typeof Uint8Array < `u` && Er(Uint8Array))),
      (hi = (e, t) => {
        let n = (e && e[Dr]).call(e),
          r;
        for (; (r = n.next()) && !r.done;) {
          let n = r.value;
          t.call(e, n[0], n[1]);
        }
      }),
      (gi = (e, t) => {
        let n,
          r = [];
        for (; (n = e.exec(t)) !== null;) r.push(n);
        return r;
      }),
      (_i = Nr(`HTMLFormElement`)),
      (vi = (e) =>
        e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (e, t, n) {
          return t.toUpperCase() + n;
        })),
      ({ propertyIsEnumerable: yi } = Object.prototype),
      (bi = Nr(`RegExp`)),
      (xi = (e, t) => {
        let n = Object.getOwnPropertyDescriptors(e),
          r = {};
        (xr(n, (n, i) => {
          let a;
          (a = t(n, i, e)) !== !1 && (r[i] = a || n);
        }),
          Object.defineProperties(e, r));
      }),
      (Si = (e) => {
        xi(e, (t, n) => {
          if (z(e) && [`arguments`, `caller`, `callee`].includes(n)) return !1;
          let r = e[n];
          if (z(r)) {
            if (((t.enumerable = !1), `writable` in t)) {
              t.writable = !1;
              return;
            }
            t.set ||= () => {
              throw Error(`Can not rewrite read-only method '` + n + `'`);
            };
          }
        });
      }),
      (Ci = (e, t) => {
        let n = {},
          r = (e) => {
            e.forEach((e) => {
              n[e] = !0;
            });
          };
        return (Fr(e) ? r(e) : r(String(e).split(t)), n);
      }),
      (wi = () => {}),
      (Ti = (e, t) => (e != null && Number.isFinite((e = +e)) ? e : t)),
      (Ei = (e) => {
        let t = new WeakSet(),
          n = (e) => {
            if (Br(e)) {
              if (t.has(e)) return;
              if (vr(e)) return e;
              if (!(`toJSON` in e)) {
                t.add(e);
                let r = Fr(e) ? [] : {};
                return (
                  xr(e, (e, t) => {
                    let i = n(e);
                    !Ir(i) && (r[t] = i);
                  }),
                  t.delete(e),
                  r
                );
              }
            }
            return e;
          };
        return n(e);
      }),
      (Di = Nr(`AsyncFunction`)),
      (Oi = (e) => e && (Br(e) || z(e)) && z(e.then) && z(e.catch)),
      (ki = ((e, t) =>
        e
          ? setImmediate
          : t
            ? ((e, t) => (
                oi.addEventListener(
                  `message`,
                  ({ source: n, data: r }) => {
                    n === oi && r === e && t.length && t.shift()();
                  },
                  !1,
                ),
                (n) => {
                  (t.push(n), oi.postMessage(e, `*`));
                }
              ))(`axios@${Math.random()}`, [])
            : (e) => setTimeout(e))(
        typeof setImmediate == `function`,
        z(oi.postMessage),
      )),
      (Ai =
        typeof queueMicrotask < `u`
          ? queueMicrotask.bind(oi)
          : (typeof process < `u` && process.nextTick) || ki),
      (ji = (e) => e != null && z(e[Dr])),
      (Mi = (e) => e != null && Ar(e, Dr) && ji(e)),
      (B = {
        isArray: Fr,
        isArrayBuffer: Lr,
        isBuffer: vr,
        isFormData: $r,
        isArrayBufferView: yr,
        isString: Rr,
        isNumber: zr,
        isBoolean: Vr,
        isObject: Br,
        isPlainObject: Hr,
        isEmptyObject: Ur,
        isReadableStream: ti,
        isRequest: ni,
        isResponse: ri,
        isHeaders: ii,
        isUndefined: Ir,
        isDate: Wr,
        isFile: Gr,
        isReactNativeBlob: Kr,
        isReactNative: qr,
        isBlob: Jr,
        isRegExp: bi,
        isFunction: z,
        isStream: Xr,
        isURLSearchParams: ei,
        isTypedArray: mi,
        isFileList: Yr,
        forEach: xr,
        merge: Cr,
        extend: ci,
        trim: ai,
        stripBOM: li,
        inherits: ui,
        toFlatObject: di,
        kindOf: Mr,
        kindOfTest: Nr,
        endsWith: fi,
        toArray: pi,
        forEachEntry: hi,
        matchAll: gi,
        isHTMLForm: _i,
        hasOwnProperty: kr,
        hasOwnProp: kr,
        hasOwnInPrototypeChain: Ar,
        getSafeProp: jr,
        reduceDescriptors: xi,
        freezeMethods: Si,
        toObjectSet: Ci,
        toCamelCase: vi,
        noop: wi,
        toFiniteNumber: Ti,
        findKey: Sr,
        global: oi,
        isContextDefined: si,
        isSpecCompliantForm: wr,
        toJSONObject: Ei,
        isAsyncFn: Di,
        isThenable: Oi,
        setImmediate: ki,
        asap: Ai,
        isIterable: ji,
        isSafeIterable: Mi,
      }));
  }),
  Ni,
  Pi,
  Fi = t(() => {
    (V(),
      (Ni = B.toObjectSet([
        `age`,
        `authorization`,
        `content-length`,
        `content-type`,
        `etag`,
        `expires`,
        `from`,
        `host`,
        `if-modified-since`,
        `if-unmodified-since`,
        `last-modified`,
        `location`,
        `max-forwards`,
        `proxy-authorization`,
        `referer`,
        `retry-after`,
        `user-agent`,
      ])),
      (Pi = (e) => {
        let t = {},
          n,
          r,
          i;
        return (
          e &&
            e
              .split(
                `
`,
              )
              .forEach(function (e) {
                ((i = e.indexOf(`:`)),
                  (n = e.substring(0, i).trim().toLowerCase()),
                  (r = e.substring(i + 1).trim()),
                  !(!n || (t[n] && Ni[n])) &&
                    (n === `set-cookie`
                      ? t[n]
                        ? t[n].push(r)
                        : (t[n] = [r])
                      : (t[n] = t[n] ? t[n] + `, ` + r : r)));
              }),
          t
        );
      }));
  });
function Ii(e) {
  let t = 0,
    n = e.length;
  for (; t < n;) {
    let n = e.charCodeAt(t);
    if (n !== 9 && n !== 32) break;
    t += 1;
  }
  for (; n > t;) {
    let t = e.charCodeAt(n - 1);
    if (t !== 9 && t !== 32) break;
    --n;
  }
  return t === 0 && n === e.length ? e : e.slice(t, n);
}
function Li(e, t) {
  return B.isArray(e) ? e.map((e) => Li(e, t)) : Ii(String(e).replace(t, ``));
}
function Ri(e) {
  let t = Object.create(null);
  return (
    B.forEach(e.toJSON(), (e, n) => {
      t[n] = Hi(e);
    }),
    t
  );
}
var zi,
  Bi,
  Vi,
  Hi,
  Ui = t(() => {
    (V(),
      (zi = RegExp(`[\\u0000-\\u0008\\u000a-\\u001f\\u007f]+`, `g`)),
      (Bi = RegExp(`[^\\u0009\\u0020-\\u007e\\u0080-\\u00ff]+`, `g`)),
      (Vi = (e) => Li(e, zi)),
      (Hi = (e) => Li(e, Bi)));
  });
function Wi(e) {
  return e && String(e).trim().toLowerCase();
}
function Gi(e) {
  return e === !1 || e == null ? e : B.isArray(e) ? e.map(Gi) : Vi(String(e));
}
function Ki(e) {
  let t = Object.create(null),
    n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g,
    r;
  for (; (r = n.exec(e));) t[r[1]] = r[2];
  return t;
}
function qi(e, t, n, r, i) {
  if (B.isFunction(r)) return r.call(this, t, n);
  if ((i && (t = n), B.isString(t))) {
    if (B.isString(r)) return t.indexOf(r) !== -1;
    if (B.isRegExp(r)) return r.test(t);
  }
}
function Ji(e) {
  return e
    .trim()
    .toLowerCase()
    .replace(/([a-z\d])(\w*)/g, (e, t, n) => t.toUpperCase() + n);
}
function Yi(e, t) {
  let n = B.toCamelCase(` ` + t);
  [`get`, `set`, `has`].forEach((r) => {
    Object.defineProperty(e, r + n, {
      __proto__: null,
      value: function (e, n, i) {
        return this[r].call(this, t, e, n, i);
      },
      configurable: !0,
    });
  });
}
var Xi,
  Zi,
  H,
  Qi = t(() => {
    (V(),
      Fi(),
      Ui(),
      (Xi = Symbol(`internals`)),
      (Zi = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim())),
      (H = class {
        constructor(e) {
          e && this.set(e);
        }
        set(e, t, n) {
          let r = this;
          function i(e, t, n) {
            let i = Wi(t);
            if (!i) return;
            let a = B.findKey(r, i);
            (!a ||
              r[a] === void 0 ||
              n === !0 ||
              (n === void 0 && r[a] !== !1)) &&
              (r[a || t] = Gi(e));
          }
          let a = (e, t) => B.forEach(e, (e, n) => i(e, n, t));
          if (B.isPlainObject(e) || e instanceof this.constructor) a(e, t);
          else if (B.isString(e) && (e = e.trim()) && !Zi(e)) a(Pi(e), t);
          else if (B.isObject(e) && B.isSafeIterable(e)) {
            let n = Object.create(null),
              r,
              i;
            for (let t of e) {
              if (!B.isArray(t))
                throw TypeError(`Object iterator must return a key-value pair`);
              ((i = t[0]),
                B.hasOwnProp(n, i)
                  ? ((r = n[i]),
                    (n[i] = B.isArray(r) ? [...r, t[1]] : [r, t[1]]))
                  : (n[i] = t[1]));
            }
            a(n, t);
          } else e != null && i(t, e, n);
          return this;
        }
        get(e, t) {
          if (((e = Wi(e)), e)) {
            let n = B.findKey(this, e);
            if (n) {
              let e = this[n];
              if (!t) return e;
              if (t === !0) return Ki(e);
              if (B.isFunction(t)) return t.call(this, e, n);
              if (B.isRegExp(t)) return t.exec(e);
              throw TypeError(`parser must be boolean|regexp|function`);
            }
          }
        }
        has(e, t) {
          if (((e = Wi(e)), e)) {
            let n = B.findKey(this, e);
            return !!(
              n &&
              this[n] !== void 0 &&
              (!t || qi(this, this[n], n, t))
            );
          }
          return !1;
        }
        delete(e, t) {
          let n = this,
            r = !1;
          function i(e) {
            if (((e = Wi(e)), e)) {
              let i = B.findKey(n, e);
              i && (!t || qi(n, n[i], i, t)) && (delete n[i], (r = !0));
            }
          }
          return (B.isArray(e) ? e.forEach(i) : i(e), r);
        }
        clear(e) {
          let t = Object.keys(this),
            n = t.length,
            r = !1;
          for (; n--;) {
            let i = t[n];
            (!e || qi(this, this[i], i, e, !0)) && (delete this[i], (r = !0));
          }
          return r;
        }
        normalize(e) {
          let t = this,
            n = {};
          return (
            B.forEach(this, (r, i) => {
              let a = B.findKey(n, i);
              if (a) {
                ((t[a] = Gi(r)), delete t[i]);
                return;
              }
              let o = e ? Ji(i) : String(i).trim();
              (o !== i && delete t[i], (t[o] = Gi(r)), (n[o] = !0));
            }),
            this
          );
        }
        concat(...e) {
          return this.constructor.concat(this, ...e);
        }
        toJSON(e) {
          let t = Object.create(null);
          return (
            B.forEach(this, (n, r) => {
              n != null &&
                n !== !1 &&
                (t[r] = e && B.isArray(n) ? n.join(`, `) : n);
            }),
            t
          );
        }
        [Symbol.iterator]() {
          return Object.entries(this.toJSON())[Symbol.iterator]();
        }
        toString() {
          return Object.entries(this.toJSON()).map(([e, t]) => e + `: ` + t)
            .join(`
`);
        }
        getSetCookie() {
          return this.get(`set-cookie`) || [];
        }
        get [Symbol.toStringTag]() {
          return `AxiosHeaders`;
        }
        static from(e) {
          return e instanceof this ? e : new this(e);
        }
        static concat(e, ...t) {
          let n = new this(e);
          return (t.forEach((e) => n.set(e)), n);
        }
        static accessor(e) {
          let t = (this[Xi] = this[Xi] = { accessors: {} }).accessors,
            n = this.prototype;
          function r(e) {
            let r = Wi(e);
            t[r] || (Yi(n, e), (t[r] = !0));
          }
          return (B.isArray(e) ? e.forEach(r) : r(e), this);
        }
      }),
      H.accessor([
        `Content-Type`,
        `Content-Length`,
        `Accept`,
        `Accept-Encoding`,
        `User-Agent`,
        `Authorization`,
      ]),
      B.reduceDescriptors(H.prototype, ({ value: e }, t) => {
        let n = t[0].toUpperCase() + t.slice(1);
        return {
          get: () => e,
          set(e) {
            this[n] = e;
          },
        };
      }),
      B.freezeMethods(H));
  });
function $i(e) {
  if (B.hasOwnProp(e, `toJSON`)) return !0;
  let t = Object.getPrototypeOf(e);
  for (; t && t !== Object.prototype;) {
    if (B.hasOwnProp(t, `toJSON`)) return !0;
    t = Object.getPrototypeOf(t);
  }
  return !1;
}
function ea(e, t) {
  let n = new Set(t.map((e) => String(e).toLowerCase())),
    r = [],
    i = (e) => {
      if (typeof e != `object` || !e || B.isBuffer(e)) return e;
      if (r.indexOf(e) !== -1) return;
      (e instanceof H && (e = e.toJSON()), r.push(e));
      let t;
      if (B.isArray(e))
        ((t = []),
          e.forEach((e, n) => {
            let r = i(e);
            B.isUndefined(r) || (t[n] = r);
          }));
      else {
        if (!B.isPlainObject(e) && $i(e)) return (r.pop(), e);
        t = Object.create(null);
        for (let [r, a] of Object.entries(e)) {
          let e = n.has(r.toLowerCase()) ? ta : i(a);
          B.isUndefined(e) || (t[r] = e);
        }
      }
      return (r.pop(), t);
    };
  return i(e);
}
var ta,
  U,
  na = t(() => {
    (V(),
      Qi(),
      (ta = `[REDACTED ****]`),
      (U = class e extends Error {
        static from(t, n, r, i, a, o) {
          let s = new e(t.message, n || t.code, r, i, a);
          return (
            (s.cause = t),
            (s.name = t.name),
            t.status != null && s.status == null && (s.status = t.status),
            o && Object.assign(s, o),
            s
          );
        }
        constructor(e, t, n, r, i) {
          (super(e),
            Object.defineProperty(this, "message", {
              __proto__: null,
              value: e,
              enumerable: !0,
              writable: !0,
              configurable: !0,
            }),
            (this.name = `AxiosError`),
            (this.isAxiosError = !0),
            t && (this.code = t),
            n && (this.config = n),
            r && (this.request = r),
            i && ((this.response = i), (this.status = i.status)));
        }
        toJSON() {
          let e = this.config,
            t = e && B.hasOwnProp(e, `redact`) ? e.redact : void 0,
            n = B.isArray(t) && t.length > 0 ? ea(e, t) : B.toJSONObject(e);
          return {
            message: this.message,
            name: this.name,
            description: this.description,
            number: this.number,
            fileName: this.fileName,
            lineNumber: this.lineNumber,
            columnNumber: this.columnNumber,
            stack: this.stack,
            config: n,
            code: this.code,
            status: this.status,
          };
        }
      }),
      (U.ERR_BAD_OPTION_VALUE = `ERR_BAD_OPTION_VALUE`),
      (U.ERR_BAD_OPTION = `ERR_BAD_OPTION`),
      (U.ECONNABORTED = `ECONNABORTED`),
      (U.ETIMEDOUT = `ETIMEDOUT`),
      (U.ECONNREFUSED = `ECONNREFUSED`),
      (U.ERR_NETWORK = `ERR_NETWORK`),
      (U.ERR_FR_TOO_MANY_REDIRECTS = `ERR_FR_TOO_MANY_REDIRECTS`),
      (U.ERR_DEPRECATED = `ERR_DEPRECATED`),
      (U.ERR_BAD_RESPONSE = `ERR_BAD_RESPONSE`),
      (U.ERR_BAD_REQUEST = `ERR_BAD_REQUEST`),
      (U.ERR_CANCELED = `ERR_CANCELED`),
      (U.ERR_NOT_SUPPORT = `ERR_NOT_SUPPORT`),
      (U.ERR_INVALID_URL = `ERR_INVALID_URL`),
      (U.ERR_FORM_DATA_DEPTH_EXCEEDED = `ERR_FORM_DATA_DEPTH_EXCEEDED`));
  }),
  ra = t(() => {});
function ia(e) {
  return B.isPlainObject(e) || B.isArray(e);
}
function aa(e) {
  return B.endsWith(e, `[]`) ? e.slice(0, -2) : e;
}
function oa(e, t, n) {
  return e
    ? e
        .concat(t)
        .map(function (e, t) {
          return ((e = aa(e)), !n && t ? `[` + e + `]` : e);
        })
        .join(n ? `.` : ``)
    : t;
}
function sa(e) {
  return B.isArray(e) && !e.some(ia);
}
function ca(e, t, n) {
  if (!B.isObject(e)) throw TypeError(`target must be an object`);
  ((t ||= new FormData()),
    (n = B.toFlatObject(
      n,
      { metaTokens: !0, dots: !1, indexes: !1 },
      !1,
      function (e, t) {
        return !B.isUndefined(t[e]);
      },
    )));
  let r = n.metaTokens,
    i = n.visitor || m,
    a = n.dots,
    o = n.indexes,
    s = n.Blob || (typeof Blob < `u` && Blob),
    c = n.maxDepth === void 0 ? 100 : n.maxDepth,
    l = s && B.isSpecCompliantForm(t),
    u = [];
  if (!B.isFunction(i)) throw TypeError(`visitor must be a function`);
  function d(e) {
    if (e === null) return ``;
    if (B.isDate(e)) return e.toISOString();
    if (B.isBoolean(e)) return e.toString();
    if (!l && B.isBlob(e))
      throw new U(`Blob is not supported. Use a Buffer instead.`);
    return B.isArrayBuffer(e) || B.isTypedArray(e)
      ? l && typeof Blob == `function`
        ? new Blob([e])
        : Buffer.from(e)
      : e;
  }
  function f(e) {
    if (e > c)
      throw new U(
        `Object is too deeply nested (` + e + ` levels). Max depth: ` + c,
        U.ERR_FORM_DATA_DEPTH_EXCEEDED,
      );
  }
  function p(e, t) {
    if (c === 1 / 0) return JSON.stringify(e);
    let n = [];
    return JSON.stringify(e, function (e, r) {
      if (!B.isObject(r)) return r;
      for (; n.length && n[n.length - 1] !== this;) n.pop();
      return (n.push(r), f(t + n.length - 1), r);
    });
  }
  function m(e, n, i) {
    let s = e;
    if (B.isReactNative(t) && B.isReactNativeBlob(e))
      return (t.append(oa(i, n, a), d(e)), !1);
    if (e && !i && typeof e == `object`) {
      if (B.endsWith(n, `{}`)) ((n = r ? n : n.slice(0, -2)), (e = p(e, 1)));
      else if (
        (B.isArray(e) && sa(e)) ||
        ((B.isFileList(e) || B.endsWith(n, `[]`)) && (s = B.toArray(e)))
      )
        return (
          (n = aa(n)),
          s.forEach(function (e, r) {
            !(B.isUndefined(e) || e === null) &&
              t.append(
                o === !0 ? oa([n], r, a) : o === null ? n : n + `[]`,
                d(e),
              );
          }),
          !1
        );
    }
    return ia(e) ? !0 : (t.append(oa(i, n, a), d(e)), !1);
  }
  let h = Object.assign(la, {
    defaultVisitor: m,
    convertValue: d,
    isVisitable: ia,
  });
  function g(e, n, r = 0) {
    if (!B.isUndefined(e)) {
      if ((f(r), u.indexOf(e) !== -1))
        throw Error(`Circular reference detected in ` + n.join(`.`));
      (u.push(e),
        B.forEach(e, function (e, a) {
          (!(B.isUndefined(e) || e === null) &&
            i.call(t, e, B.isString(a) ? a.trim() : a, n, h)) === !0 &&
            g(e, n ? n.concat(a) : [a], r + 1);
        }),
        u.pop());
    }
  }
  if (!B.isObject(e)) throw TypeError(`data must be an object`);
  return (g(e), t);
}
var la,
  ua = t(() => {
    (V(),
      na(),
      ra(),
      (la = B.toFlatObject(B, {}, null, function (e) {
        return /^is[A-Z]/.test(e);
      })));
  });
function da(e) {
  let t = {
    "!": `%21`,
    "'": `%27`,
    "(": `%28`,
    ")": `%29`,
    "~": `%7E`,
    "%20": `+`,
  };
  return encodeURIComponent(e).replace(/[!'()~]|%20/g, function (e) {
    return t[e];
  });
}
function fa(e, t) {
  ((this._pairs = []), e && ca(e, this, t));
}
var pa,
  ma = t(() => {
    (ua(),
      (pa = fa.prototype),
      (pa.append = function (e, t) {
        this._pairs.push([e, t]);
      }),
      (pa.toString = function (e) {
        let t = e
          ? function (t) {
              return e.call(this, t, da);
            }
          : da;
        return this._pairs
          .map(function (e) {
            return t(e[0]) + `=` + t(e[1]);
          }, ``)
          .join(`&`);
      }));
  });
function ha(e) {
  return encodeURIComponent(e)
    .replace(/%3A/gi, `:`)
    .replace(/%24/g, `$`)
    .replace(/%2C/gi, `,`)
    .replace(/%20/g, `+`);
}
function ga(e, t, n) {
  if (!t) return e;
  let r = B.isFunction(n) ? { serialize: n } : n,
    i = B.getSafeProp(r, `encode`) || ha,
    a = B.getSafeProp(r, `serialize`),
    o;
  if (
    ((o = a
      ? a(t, r)
      : B.isURLSearchParams(t)
        ? t.toString()
        : new fa(t, r).toString(i)),
    o)
  ) {
    let t = e.indexOf(`#`);
    (t !== -1 && (e = e.slice(0, t)),
      (e += (e.indexOf(`?`) === -1 ? `?` : `&`) + o));
  }
  return e;
}
var _a = t(() => {
    (V(), ma());
  }),
  va,
  ya = t(() => {
    (V(),
      (va = class {
        constructor() {
          this.handlers = [];
        }
        use(e, t, n) {
          return (
            this.handlers.push({
              fulfilled: e,
              rejected: t,
              synchronous: n ? n.synchronous : !1,
              runWhen: n ? n.runWhen : null,
            }),
            this.handlers.length - 1
          );
        }
        eject(e) {
          this.handlers[e] && (this.handlers[e] = null);
        }
        clear() {
          this.handlers &&= [];
        }
        forEach(e) {
          B.forEach(this.handlers, function (t) {
            t !== null && e(t);
          });
        }
      }));
  }),
  ba,
  xa = t(() => {
    ba = {
      silentJSONParsing: !0,
      forcedJSONParsing: !0,
      clarifyTimeoutError: !1,
      legacyInterceptorReqResOrdering: !0,
      advertiseZstdAcceptEncoding: !1,
      validateStatusUndefinedResolves: !0,
    };
  }),
  Sa,
  Ca = t(() => {
    (ma(), (Sa = typeof URLSearchParams < `u` ? URLSearchParams : fa));
  }),
  wa,
  Ta = t(() => {
    wa = typeof FormData < `u` ? FormData : null;
  }),
  Ea,
  Da = t(() => {
    Ea = typeof Blob < `u` ? Blob : null;
  }),
  Oa,
  ka = t(() => {
    (Ca(),
      Ta(),
      Da(),
      (Oa = {
        isBrowser: !0,
        classes: { URLSearchParams: Sa, FormData: wa, Blob: Ea },
        protocols: [`http`, `https`, `file`, `blob`, `url`, `data`],
      }));
  }),
  Aa = e({
    hasBrowserEnv: () => ja,
    hasStandardBrowserEnv: () => Na,
    hasStandardBrowserWebWorkerEnv: () => Pa,
    navigator: () => Ma,
    origin: () => Fa,
  }),
  ja,
  Ma,
  Na,
  Pa,
  Fa,
  Ia = t(() => {
    ((ja = typeof window < `u` && typeof document < `u`),
      (Ma = (typeof navigator == `object` && navigator) || void 0),
      (Na =
        ja &&
        (!Ma || [`ReactNative`, `NativeScript`, `NS`].indexOf(Ma.product) < 0)),
      (Pa =
        typeof WorkerGlobalScope < `u` &&
        self instanceof WorkerGlobalScope &&
        typeof self.importScripts == `function`),
      (Fa = (ja && window.location.href) || `http://localhost`));
  }),
  W,
  La = t(() => {
    (ka(), Ia(), (W = { ...Aa, ...Oa }));
  });
function Ra(e, t) {
  return ca(e, new W.classes.URLSearchParams(), {
    visitor: function (e, t, n, r) {
      return W.isNode && B.isBuffer(e)
        ? (this.append(t, e.toString(`base64`)), !1)
        : r.defaultVisitor.apply(this, arguments);
    },
    ...t,
  });
}
var za = t(() => {
  (V(), ua(), La());
});
function Ba(e) {
  if (e > Wa)
    throw new U(
      `FormData field is too deeply nested (` +
        e +
        ` levels). Max depth: ` +
        Wa,
      U.ERR_FORM_DATA_DEPTH_EXCEEDED,
    );
}
function Va(e) {
  let t = [],
    n = /\w+|\[(\w*)]/g,
    r;
  for (; (r = n.exec(e)) !== null;)
    (Ba(t.length), t.push(r[0] === `[]` ? `` : r[1] || r[0]));
  return t;
}
function Ha(e) {
  let t = {},
    n = Object.keys(e),
    r,
    i = n.length,
    a;
  for (r = 0; r < i; r++) ((a = n[r]), (t[a] = e[a]));
  return t;
}
function Ua(e) {
  function t(e, n, r, i) {
    Ba(i);
    let a = e[i++];
    if (a === `__proto__`) return !0;
    let o = Number.isFinite(+a),
      s = i >= e.length;
    return (
      (a = !a && B.isArray(r) ? r.length : a),
      s
        ? (B.hasOwnProp(r, a)
            ? (r[a] = B.isArray(r[a]) ? r[a].concat(n) : [r[a], n])
            : (r[a] = n),
          !o)
        : ((!B.hasOwnProp(r, a) || !B.isObject(r[a])) && (r[a] = []),
          t(e, n, r[a], i) && B.isArray(r[a]) && (r[a] = Ha(r[a])),
          !o)
    );
  }
  if (B.isFormData(e) && B.isFunction(e.entries)) {
    let n = {};
    return (
      B.forEachEntry(e, (e, r) => {
        t(Va(e), r, n, 0);
      }),
      n
    );
  }
  return null;
}
var Wa,
  Ga = t(() => {
    (V(), na(), ua(), (Wa = 100));
  });
function Ka(e, t, n) {
  if (B.isString(e))
    try {
      return ((t || JSON.parse)(e), B.trim(e));
    } catch (e) {
      if (e.name !== `SyntaxError`) throw e;
    }
  return (n || JSON.stringify)(e);
}
var qa,
  Ja,
  Ya = t(() => {
    (V(),
      na(),
      xa(),
      ua(),
      za(),
      La(),
      Ga(),
      (qa = (e, t) => (e != null && B.hasOwnProp(e, t) ? e[t] : void 0)),
      (Ja = {
        transitional: ba,
        adapter: [`xhr`, `http`, `fetch`],
        transformRequest: [
          function (e, t) {
            let n = t.getContentType() || ``,
              r = n.indexOf(`application/json`) > -1,
              i = B.isObject(e);
            if (
              (i && B.isHTMLForm(e) && (e = new FormData(e)), B.isFormData(e))
            )
              return r ? JSON.stringify(Ua(e)) : e;
            if (
              B.isArrayBuffer(e) ||
              B.isBuffer(e) ||
              B.isStream(e) ||
              B.isFile(e) ||
              B.isBlob(e) ||
              B.isReadableStream(e)
            )
              return e;
            if (B.isArrayBufferView(e)) return e.buffer;
            if (B.isURLSearchParams(e))
              return (
                t.setContentType(
                  `application/x-www-form-urlencoded;charset=utf-8`,
                  !1,
                ),
                e.toString()
              );
            let a;
            if (i) {
              let t = qa(this, `formSerializer`);
              if (n.indexOf(`application/x-www-form-urlencoded`) > -1)
                return Ra(e, t).toString();
              if (
                (a = B.isFileList(e)) ||
                n.indexOf(`multipart/form-data`) > -1
              ) {
                let n = qa(this, `env`),
                  r = n && n.FormData;
                return ca(a ? { "files[]": e } : e, r && new r(), t);
              }
            }
            return i || r
              ? (t.setContentType(`application/json`, !1), Ka(e))
              : e;
          },
        ],
        transformResponse: [
          function (e) {
            let t = qa(this, `transitional`) || Ja.transitional,
              n = t && t.forcedJSONParsing,
              r = qa(this, `responseType`),
              i = r === `json`;
            if (B.isResponse(e) || B.isReadableStream(e)) return e;
            if (e && B.isString(e) && ((n && !r) || i)) {
              let n = !(t && t.silentJSONParsing) && i;
              try {
                return JSON.parse(e, qa(this, `parseReviver`));
              } catch (e) {
                if (n)
                  throw e.name === `SyntaxError`
                    ? U.from(
                        e,
                        U.ERR_BAD_RESPONSE,
                        this,
                        null,
                        qa(this, `response`),
                      )
                    : e;
              }
            }
            return e;
          },
        ],
        timeout: 0,
        xsrfCookieName: `XSRF-TOKEN`,
        xsrfHeaderName: `X-XSRF-TOKEN`,
        maxContentLength: -1,
        maxBodyLength: -1,
        env: { FormData: W.classes.FormData, Blob: W.classes.Blob },
        validateStatus: function (e) {
          return e >= 200 && e < 300;
        },
        headers: {
          common: {
            Accept: `application/json, text/plain, */*`,
            "Content-Type": void 0,
          },
        },
      }),
      B.forEach(
        [`delete`, `get`, `head`, `post`, `put`, `patch`, `query`],
        (e) => {
          Ja.headers[e] = {};
        },
      ));
  });
function Xa(e, t) {
  let n = this || Ja,
    r = t || n,
    i = H.from(r.headers),
    a = r.data;
  return (
    B.forEach(e, function (e) {
      a = e.call(n, a, i.normalize(), t ? t.status : void 0);
    }),
    i.normalize(),
    a
  );
}
var Za = t(() => {
  (V(), Ya(), Qi());
});
function Qa(e) {
  return !!(e && e.__CANCEL__);
}
var $a = t(() => {}),
  eo,
  to = t(() => {
    (na(),
      (eo = class extends U {
        constructor(e, t, n) {
          (super(e ?? `canceled`, U.ERR_CANCELED, t, n),
            (this.name = `CanceledError`),
            (this.__CANCEL__ = !0));
        }
      }));
  });
function no(e, t, n) {
  let r = n.config.validateStatus;
  !n.status || !r || r(n.status)
    ? e(n)
    : t(
        new U(
          `Request failed with status code ` + n.status,
          n.status >= 400 && n.status < 500
            ? U.ERR_BAD_REQUEST
            : U.ERR_BAD_RESPONSE,
          n.config,
          n.request,
          n,
        ),
      );
}
var ro = t(() => {
  na();
});
function io(e) {
  let t = /^([-+\w]{1,25}):(?:\/\/)?/.exec(e);
  return (t && t[1]) || ``;
}
var ao = t(() => {});
function oo(e, t) {
  e ||= 10;
  let n = Array(e),
    r = Array(e),
    i = 0,
    a = 0,
    o;
  return (
    (t = t === void 0 ? 1e3 : t),
    function (s) {
      let c = Date.now(),
        l = r[a];
      ((o ||= c), (n[i] = s), (r[i] = c));
      let u = a,
        d = 0;
      for (; u !== i;) ((d += n[u++]), (u %= e));
      if (((i = (i + 1) % e), i === a && (a = (a + 1) % e), c - o < t)) return;
      let f = l && c - l;
      return f ? Math.round((d * 1e3) / f) : void 0;
    }
  );
}
var so = t(() => {});
function co(e, t) {
  let n = 0,
    r = 1e3 / t,
    i,
    a,
    o = (t, r = Date.now()) => {
      ((n = r), (i = null), (a &&= (clearTimeout(a), null)), e(...t));
    };
  return [
    (...e) => {
      let t = Date.now(),
        s = t - n;
      s >= r
        ? o(e, t)
        : ((i = e),
          (a ||= setTimeout(() => {
            ((a = null), o(i));
          }, r - s)));
    },
    () => i && o(i),
  ];
}
var lo = t(() => {}),
  uo,
  fo,
  po,
  mo = t(() => {
    (so(),
      lo(),
      V(),
      (uo = (e, t, n = 3) => {
        let r = 0,
          i = oo(50, 250);
        return co((n) => {
          if (!n || typeof n.loaded != `number`) return;
          let a = n.loaded,
            o = n.lengthComputable ? n.total : void 0,
            s = o == null ? a : Math.min(a, o),
            c = Math.max(0, s - r),
            l = i(c);
          ((r = Math.max(r, s)),
            e({
              loaded: s,
              total: o,
              progress: o ? s / o : void 0,
              bytes: c,
              rate: l || void 0,
              estimated: l && o ? (o - s) / l : void 0,
              event: n,
              lengthComputable: o != null,
              [t ? `download` : `upload`]: !0,
            }));
        }, n);
      }),
      (fo = (e, t) => {
        let n = e != null;
        return [
          (r) => t[0]({ lengthComputable: n, total: e, loaded: r }),
          t[1],
        ];
      }),
      (po =
        (e) =>
        (...t) =>
          B.asap(() => e(...t))));
  }),
  ho,
  go = t(() => {
    (La(),
      (ho = W.hasStandardBrowserEnv
        ? ((e, t) => (n) => (
            (n = new URL(n, W.origin)),
            e.protocol === n.protocol &&
              e.host === n.host &&
              (t || e.port === n.port)
          ))(
            new URL(W.origin),
            W.navigator && /(msie|trident)/i.test(W.navigator.userAgent),
          )
        : () => !0));
  }),
  _o,
  vo = t(() => {
    (V(),
      La(),
      (_o = W.hasStandardBrowserEnv
        ? {
            write(e, t, n, r, i, a, o) {
              if (typeof document > `u`) return;
              let s = [`${e}=${encodeURIComponent(t)}`];
              (B.isNumber(n) && s.push(`expires=${new Date(n).toUTCString()}`),
                B.isString(r) && s.push(`path=${r}`),
                B.isString(i) && s.push(`domain=${i}`),
                a === !0 && s.push(`secure`),
                B.isString(o) && s.push(`SameSite=${o}`),
                (document.cookie = s.join(`; `)));
            },
            read(e) {
              if (typeof document > `u`) return null;
              let t = document.cookie.split(`;`);
              for (let n = 0; n < t.length; n++) {
                let r = t[n].replace(/^\s+/, ``),
                  i = r.indexOf(`=`);
                if (i !== -1 && r.slice(0, i) === e)
                  return decodeURIComponent(r.slice(i + 1));
              }
              return null;
            },
            remove(e) {
              this.write(e, ``, Date.now() - 864e5, `/`);
            },
          }
        : {
            write() {},
            read() {
              return null;
            },
            remove() {},
          }));
  });
function yo(e) {
  return typeof e == `string` ? /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e) : !1;
}
var bo = t(() => {});
function xo(e, t) {
  return t ? e.replace(/\/?\/$/, ``) + `/` + t.replace(/^\/+/, ``) : e;
}
var So = t(() => {});
function Co(e) {
  let t = 0;
  for (; t < e.length && e.charCodeAt(t) <= 32;) t++;
  return e.slice(t);
}
function wo(e) {
  return Co(e).replace(Oo, ``);
}
function To(e, t) {
  if (typeof e == `string` && Do.test(wo(e)))
    throw new U(
      `Invalid URL: missing "//" after protocol`,
      U.ERR_INVALID_URL,
      t,
    );
}
function Eo(e, t, n, r) {
  To(t, r);
  let i = !yo(t);
  return e && (i || n === !1) ? (To(e, r), xo(e, t)) : t;
}
var Do,
  Oo,
  ko = t(() => {
    (na(), bo(), So(), (Do = /^https?:(?!\/\/)/i), (Oo = /[\t\n\r]/g));
  });
function Ao(e, t) {
  t ||= {};
  let n = Object.create(null);
  Object.defineProperty(n, "hasOwnProperty", {
    __proto__: null,
    value: Object.prototype.hasOwnProperty,
    enumerable: !1,
    writable: !0,
    configurable: !0,
  });
  function r(e, t, n, r) {
    return B.isPlainObject(e) && B.isPlainObject(t)
      ? B.merge.call({ caseless: r }, e, t)
      : B.isPlainObject(t)
        ? B.merge({}, t)
        : B.isArray(t)
          ? t.slice()
          : t;
  }
  function i(e, t, n, i) {
    if (!B.isUndefined(t)) return r(e, t, n, i);
    if (!B.isUndefined(e)) return r(void 0, e, n, i);
  }
  function a(e, t) {
    if (!B.isUndefined(t)) return r(void 0, t);
  }
  function o(e, t) {
    if (!B.isUndefined(t)) return r(void 0, t);
    if (!B.isUndefined(e)) return r(void 0, e);
  }
  function s(n) {
    let r = B.hasOwnProp(t, `transitional`) ? t.transitional : void 0;
    if (!B.isUndefined(r))
      if (B.isPlainObject(r)) {
        if (B.hasOwnProp(r, n)) return r[n];
      } else return;
    let i = B.hasOwnProp(e, `transitional`) ? e.transitional : void 0;
    if (B.isPlainObject(i) && B.hasOwnProp(i, n)) return i[n];
  }
  function c(n, i, a) {
    if (B.hasOwnProp(t, a)) return r(n, i);
    if (B.hasOwnProp(e, a)) return r(void 0, n);
  }
  let l = {
    url: a,
    method: a,
    data: a,
    baseURL: o,
    transformRequest: o,
    transformResponse: o,
    paramsSerializer: o,
    timeout: o,
    timeoutMessage: o,
    withCredentials: o,
    withXSRFToken: o,
    adapter: o,
    responseType: o,
    xsrfCookieName: o,
    xsrfHeaderName: o,
    onUploadProgress: o,
    onDownloadProgress: o,
    decompress: o,
    maxContentLength: o,
    maxBodyLength: o,
    beforeRedirect: o,
    transport: o,
    httpAgent: o,
    httpsAgent: o,
    cancelToken: o,
    socketPath: o,
    allowedSocketPaths: o,
    responseEncoding: o,
    validateStatus: c,
    headers: (e, t, n) => i(jo(e), jo(t), n, !0),
  };
  return (
    B.forEach(Object.keys({ ...e, ...t }), function (r) {
      if (r === `__proto__` || r === `constructor` || r === `prototype`) return;
      let a = B.hasOwnProp(l, r) ? l[r] : i,
        o = a(
          B.hasOwnProp(e, r) ? e[r] : void 0,
          B.hasOwnProp(t, r) ? t[r] : void 0,
          r,
        );
      (B.isUndefined(o) && a !== c) || (n[r] = o);
    }),
    B.hasOwnProp(t, `validateStatus`) &&
      B.isUndefined(t.validateStatus) &&
      s(`validateStatusUndefinedResolves`) === !1 &&
      (B.hasOwnProp(e, `validateStatus`)
        ? (n.validateStatus = r(void 0, e.validateStatus))
        : delete n.validateStatus),
    n
  );
}
var jo,
  Mo = t(() => {
    (V(), Qi(), (jo = (e) => (e instanceof H ? { ...e } : e)));
  });
function No(e, t, n) {
  if (n !== `content-only`) {
    e.set(t);
    return;
  }
  Object.entries(t).forEach(([t, n]) => {
    Fo.includes(t.toLowerCase()) && e.set(t, n);
  });
}
function Po(e) {
  let t = Ao({}, e),
    n = (e) => (B.hasOwnProp(t, e) ? t[e] : void 0),
    r = n(`data`),
    i = n(`withXSRFToken`),
    a = n(`xsrfHeaderName`),
    o = n(`xsrfCookieName`),
    s = n(`headers`),
    c = n(`auth`),
    l = n(`baseURL`),
    u = n(`allowAbsoluteUrls`),
    d = n(`url`);
  if (
    ((t.headers = s = H.from(s)),
    (t.url = ga(Eo(l, d, u, t), n(`params`), n(`paramsSerializer`))),
    c)
  ) {
    let e = B.getSafeProp(c, `username`) || ``,
      t = B.getSafeProp(c, `password`) || ``;
    s.set(`Authorization`, `Basic ` + btoa(e + `:` + (t ? Io(t) : ``)));
  }
  if (
    (B.isFormData(r) &&
      (W.hasStandardBrowserEnv ||
      W.hasStandardBrowserWebWorkerEnv ||
      B.isReactNative(r)
        ? s.setContentType(void 0)
        : B.isFunction(r.getHeaders) &&
          No(s, r.getHeaders(), n(`formDataHeaderPolicy`))),
    W.hasStandardBrowserEnv &&
      (B.isFunction(i) && (i = i(t)), i === !0 || (i == null && ho(t.url))))
  ) {
    let e = a && o && _o.read(o);
    e && s.set(a, e);
  }
  return t;
}
var Fo,
  Io,
  Lo = t(() => {
    (La(),
      V(),
      go(),
      vo(),
      ko(),
      Mo(),
      Qi(),
      _a(),
      (Fo = [`content-type`, `content-length`]),
      (Io = (e) =>
        encodeURIComponent(e).replace(/%([0-9A-F]{2})/gi, (e, t) =>
          String.fromCharCode(parseInt(t, 16)),
        )));
  }),
  Ro,
  zo,
  Bo = t(() => {
    (V(),
      ro(),
      xa(),
      na(),
      to(),
      ao(),
      La(),
      Qi(),
      mo(),
      Lo(),
      Ui(),
      (Ro = typeof XMLHttpRequest < `u`),
      (zo =
        Ro &&
        function (e) {
          return new Promise(function (t, n) {
            let r = Po(e),
              i = r.data,
              a = H.from(r.headers).normalize(),
              {
                responseType: o,
                onUploadProgress: s,
                onDownloadProgress: c,
              } = r,
              l,
              u,
              d,
              f,
              p;
            function m() {
              (f && f(),
                p && p(),
                r.cancelToken && r.cancelToken.unsubscribe(l),
                r.signal && r.signal.removeEventListener(`abort`, l));
            }
            let h = new XMLHttpRequest();
            (h.open(r.method.toUpperCase(), r.url, !0),
              (h.timeout = r.timeout));
            function g() {
              if (!h) return;
              let r = H.from(
                `getAllResponseHeaders` in h && h.getAllResponseHeaders(),
              );
              (no(
                function (e) {
                  (t(e), m());
                },
                function (e) {
                  (n(e), m());
                },
                {
                  data:
                    !o || o === `text` || o === `json`
                      ? h.responseText
                      : h.response,
                  status: h.status,
                  statusText: h.statusText,
                  headers: r,
                  config: e,
                  request: h,
                },
              ),
                (h = null));
            }
            (`onloadend` in h
              ? (h.onloadend = g)
              : (h.onreadystatechange = function () {
                  !h ||
                    h.readyState !== 4 ||
                    (h.status === 0 &&
                      !(h.responseURL && h.responseURL.startsWith(`file:`))) ||
                    setTimeout(g);
                }),
              (h.onabort = function () {
                h &&=
                  (n(new U(`Request aborted`, U.ECONNABORTED, e, h)),
                  m(),
                  null);
              }),
              (h.onerror = function (t) {
                let r = new U(
                  t && t.message ? t.message : `Network Error`,
                  U.ERR_NETWORK,
                  e,
                  h,
                );
                ((r.event = t || null), n(r), m(), (h = null));
              }),
              (h.ontimeout = function () {
                let t = r.timeout
                    ? `timeout of ` + r.timeout + `ms exceeded`
                    : `timeout exceeded`,
                  i = r.transitional || ba;
                (r.timeoutErrorMessage && (t = r.timeoutErrorMessage),
                  n(
                    new U(
                      t,
                      i.clarifyTimeoutError ? U.ETIMEDOUT : U.ECONNABORTED,
                      e,
                      h,
                    ),
                  ),
                  m(),
                  (h = null));
              }),
              i === void 0 && a.setContentType(null),
              `setRequestHeader` in h &&
                B.forEach(Ri(a), function (e, t) {
                  h.setRequestHeader(t, e);
                }),
              B.isUndefined(r.withCredentials) ||
                (h.withCredentials = !!r.withCredentials),
              o && o !== `json` && (h.responseType = r.responseType),
              c && (([d, p] = uo(c, !0)), h.addEventListener(`progress`, d)),
              s &&
                h.upload &&
                (([u, f] = uo(s)),
                h.upload.addEventListener(`progress`, u),
                h.upload.addEventListener(`loadend`, f)),
              (r.cancelToken || r.signal) &&
                ((l = (t) => {
                  h &&=
                    (n(!t || t.type ? new eo(null, e, h) : t),
                    h.abort(),
                    m(),
                    null);
                }),
                r.cancelToken && r.cancelToken.subscribe(l),
                r.signal &&
                  (r.signal.aborted
                    ? l()
                    : r.signal.addEventListener(`abort`, l))));
            let _ = io(r.url);
            if (_ && !W.protocols.includes(_)) {
              n(new U(`Unsupported protocol ` + _ + `:`, U.ERR_BAD_REQUEST, e));
              return;
            }
            h.send(i || null);
          });
        }));
  }),
  Vo,
  Ho = t(() => {
    (to(),
      na(),
      V(),
      (Vo = (e, t) => {
        if (((e = e ? e.filter(Boolean) : []), !t && !e.length)) return;
        let n = new AbortController(),
          r = !1,
          i = function (e) {
            if (!r) {
              ((r = !0), o());
              let t = e instanceof Error ? e : this.reason;
              n.abort(
                t instanceof U ? t : new eo(t instanceof Error ? t.message : t),
              );
            }
          },
          a =
            t &&
            setTimeout(() => {
              ((a = null), i(new U(`timeout of ${t}ms exceeded`, U.ETIMEDOUT)));
            }, t),
          o = () => {
            e &&=
              (a && clearTimeout(a),
              (a = null),
              e.forEach((e) => {
                e.unsubscribe
                  ? e.unsubscribe(i)
                  : e.removeEventListener(`abort`, i);
              }),
              null);
          };
        e.forEach((e) => e.addEventListener(`abort`, i));
        let { signal: s } = n;
        return ((s.unsubscribe = () => B.asap(o)), s);
      }));
  }),
  Uo,
  Wo,
  Go,
  Ko,
  qo = t(() => {
    ((Uo = function* (e, t) {
      let n = e.byteLength;
      if (!t || n < t) {
        yield e;
        return;
      }
      let r = 0,
        i;
      for (; r < n;) ((i = r + t), yield e.slice(r, i), (r = i));
    }),
      (Wo = async function* (e, t) {
        for await (let n of Go(e)) yield* Uo(n, t);
      }),
      (Go = async function* (e) {
        if (e[Symbol.asyncIterator]) {
          yield* e;
          return;
        }
        let t = e.getReader();
        try {
          for (;;) {
            let { done: e, value: n } = await t.read();
            if (e) break;
            yield n;
          }
        } finally {
          await t.cancel();
        }
      }),
      (Ko = (e, t, n, r) => {
        let i = Wo(e, t),
          a = 0,
          o,
          s = (e) => {
            o || ((o = !0), r && r(e));
          };
        return new ReadableStream(
          {
            async pull(e) {
              try {
                let { done: t, value: r } = await i.next();
                if (t) {
                  (s(), e.close());
                  return;
                }
                let o = r.byteLength;
                (n && n((a += o)), e.enqueue(new Uint8Array(r)));
              } catch (e) {
                throw (s(e), e);
              }
            },
            cancel(e) {
              return (s(e), i.return());
            },
          },
          { highWaterMark: 2 },
        );
      }));
  });
function Jo(e) {
  if (!e || typeof e != `string` || !e.startsWith(`data:`)) return 0;
  let t = e.indexOf(`,`);
  if (t < 0) return 0;
  let n = e.slice(5, t),
    r = e.slice(t + 1);
  if (/;base64/i.test(n)) {
    let e = r.length,
      t = r.length;
    for (let n = 0; n < t; n++)
      if (r.charCodeAt(n) === 37 && n + 2 < t) {
        let t = r.charCodeAt(n + 1),
          i = r.charCodeAt(n + 2);
        Yo(t) && Yo(i) && ((e -= 2), (n += 2));
      }
    let n = 0,
      i = t - 1,
      a = (e) =>
        e >= 2 &&
        r.charCodeAt(e - 2) === 37 &&
        r.charCodeAt(e - 1) === 51 &&
        (r.charCodeAt(e) === 68 || r.charCodeAt(e) === 100);
    (i >= 0 && (r.charCodeAt(i) === 61 ? (n++, i--) : a(i) && (n++, (i -= 3))),
      n === 1 && i >= 0 && (r.charCodeAt(i) === 61 || a(i)) && n++);
    let o = Math.floor(e / 4) * 3 - (n || 0);
    return o > 0 ? o : 0;
  }
  let i = 0;
  for (let e = 0, t = r.length; e < t; e++) {
    let n = r.charCodeAt(e);
    if (n === 37 && Xo(r, e, t)) ((i += 1), (e += 2));
    else if (n < 128) i += 1;
    else if (n < 2048) i += 2;
    else if (n >= 55296 && n <= 56319 && e + 1 < t) {
      let t = r.charCodeAt(e + 1);
      t >= 56320 && t <= 57343 ? ((i += 4), e++) : (i += 3);
    } else i += 3;
  }
  return i;
}
var Yo,
  Xo,
  Zo = t(() => {
    ((Yo = (e) =>
      (e >= 48 && e <= 57) || (e >= 65 && e <= 70) || (e >= 97 && e <= 102)),
      (Xo = (e, t, n) =>
        t + 2 < n && Yo(e.charCodeAt(t + 1)) && Yo(e.charCodeAt(t + 2))));
  }),
  Qo,
  $o = t(() => {
    Qo = `1.18.0`;
  }),
  es,
  ts,
  ns,
  rs,
  is,
  as,
  os,
  ss,
  cs,
  ls = t(() => {
    (La(),
      V(),
      na(),
      Ho(),
      qo(),
      Qi(),
      mo(),
      Lo(),
      ro(),
      Zo(),
      $o(),
      Ui(),
      (es = 64 * 1024),
      ({ isFunction: ts } = B),
      (ns = (e) =>
        encodeURIComponent(e).replace(/%([0-9A-F]{2})/gi, (e, t) =>
          String.fromCharCode(parseInt(t, 16)),
        )),
      (rs = (e) => {
        if (!B.isString(e)) return e;
        try {
          return decodeURIComponent(e);
        } catch {
          return e;
        }
      }),
      (is = (e, ...t) => {
        try {
          return !!e(...t);
        } catch {
          return !1;
        }
      }),
      (as = (e) => {
        let t = e.indexOf(`://`),
          n = e;
        return (
          t !== -1 && (n = n.slice(t + 3)),
          n.includes(`@`) || n.includes(`:`)
        );
      }),
      (os = (e) => {
        let t =
            B.global !== void 0 && B.global !== null ? B.global : globalThis,
          { ReadableStream: n, TextEncoder: r } = t;
        e = B.merge.call(
          { skipUndefined: !0 },
          { Request: t.Request, Response: t.Response },
          e,
        );
        let { fetch: i, Request: a, Response: o } = e,
          s = i ? ts(i) : typeof fetch == `function`,
          c = ts(a),
          l = ts(o);
        if (!s) return !1;
        let u = s && ts(n),
          d =
            s &&
            (typeof r == `function`
              ? (
                  (e) => (t) =>
                    e.encode(t)
                )(new r())
              : async (e) => new Uint8Array(await new a(e).arrayBuffer())),
          f =
            c &&
            u &&
            is(() => {
              let e = !1,
                t = new a(W.origin, {
                  body: new n(),
                  method: `POST`,
                  get duplex() {
                    return ((e = !0), `half`);
                  },
                }),
                r = t.headers.has(`Content-Type`);
              return (t.body != null && t.body.cancel(), e && !r);
            }),
          p = l && u && is(() => B.isReadableStream(new o(``).body)),
          m = { stream: p && ((e) => e.body) };
        s &&
          [`text`, `arrayBuffer`, `blob`, `formData`, `stream`].forEach((e) => {
            !m[e] &&
              (m[e] = (t, n) => {
                let r = t && t[e];
                if (r) return r.call(t);
                throw new U(
                  `Response type '${e}' is not supported`,
                  U.ERR_NOT_SUPPORT,
                  n,
                );
              });
          });
        let h = async (e) => {
            if (e == null) return 0;
            if (B.isBlob(e)) return e.size;
            if (B.isSpecCompliantForm(e))
              return (
                await new a(W.origin, { method: `POST`, body: e }).arrayBuffer()
              ).byteLength;
            if (B.isArrayBufferView(e) || B.isArrayBuffer(e))
              return e.byteLength;
            if ((B.isURLSearchParams(e) && (e += ``), B.isString(e)))
              return (await d(e)).byteLength;
          },
          g = async (e, t) => B.toFiniteNumber(e.getContentLength()) ?? h(t);
        return async (e) => {
          let {
              url: t,
              method: n,
              data: s,
              signal: l,
              cancelToken: d,
              timeout: _,
              onDownloadProgress: v,
              onUploadProgress: ee,
              responseType: y,
              headers: b,
              withCredentials: x = `same-origin`,
              fetchOptions: S,
              maxContentLength: C,
              maxBodyLength: te,
            } = Po(e),
            w = B.isNumber(C) && C > -1,
            ne = B.isNumber(te) && te > -1,
            re = (t) => (B.hasOwnProp(e, t) ? e[t] : void 0),
            T = i || fetch;
          y = y ? (y + ``).toLowerCase() : `text`;
          let E = Vo([l, d && d.toAbortSignal()], _),
            D = null,
            O =
              E &&
              E.unsubscribe &&
              (() => {
                E.unsubscribe();
              }),
            ie,
            k = null,
            ae = () =>
              new U(
                `Request body larger than maxBodyLength limit`,
                U.ERR_BAD_REQUEST,
                e,
                D,
              );
          try {
            let i,
              l = re(`auth`);
            if (
              (l &&
                (i = {
                  username: B.getSafeProp(l, `username`) || ``,
                  password: B.getSafeProp(l, `password`) || ``,
                }),
              as(t))
            ) {
              let e = new URL(t, W.origin);
              (!i &&
                (e.username || e.password) &&
                (i = { username: rs(e.username), password: rs(e.password) }),
                (e.username || e.password) &&
                  ((e.username = ``), (e.password = ``), (t = e.href)));
            }
            if (
              (i &&
                (b.delete(`authorization`),
                b.set(
                  `Authorization`,
                  `Basic ` +
                    btoa(ns((i.username || ``) + `:` + (i.password || ``))),
                )),
              w && typeof t == `string` && t.startsWith(`data:`) && Jo(t) > C)
            )
              throw new U(
                `maxContentLength size of ` + C + ` exceeded`,
                U.ERR_BAD_RESPONSE,
                e,
                D,
              );
            if (ne && n !== `get` && n !== `head`) {
              let e = await h(s);
              if (typeof e == `number` && isFinite(e) && ((ie = e), e > te))
                throw ae();
            }
            let d = ne && (B.isReadableStream(s) || B.isStream(s)),
              _ = (e, t, n) =>
                Ko(
                  e,
                  es,
                  (e) => {
                    if (ne && e > te) throw (k = ae());
                    t && t(e);
                  },
                  n,
                );
            if (f && n !== `get` && n !== `head` && (ee || d)) {
              if (((ie ??= await g(b, s)), ie !== 0 || d)) {
                let e = new a(t, { method: `POST`, body: s, duplex: `half` }),
                  n;
                if (
                  (B.isFormData(s) &&
                    (n = e.headers.get(`content-type`)) &&
                    b.setContentType(n),
                  e.body)
                ) {
                  let [t, n] = (ee && fo(ie, uo(po(ee)))) || [];
                  s = _(e.body, t, n);
                }
              }
            } else if (d && !c && u && n !== `get` && n !== `head`) s = _(s);
            else if (d && c && !f && n !== `get` && n !== `head`)
              throw new U(
                `Stream request bodies are not supported by the current fetch implementation`,
                U.ERR_NOT_SUPPORT,
                e,
                D,
              );
            B.isString(x) || (x = x ? `include` : `omit`);
            let A = c && `credentials` in a.prototype;
            if (B.isFormData(s)) {
              let e = b.getContentType();
              e &&
                /^multipart\/form-data/i.test(e) &&
                !/boundary=/i.test(e) &&
                b.delete(`content-type`);
            }
            b.set(`User-Agent`, `axios/` + Qo, !1);
            let j = {
              ...S,
              signal: E,
              method: n.toUpperCase(),
              headers: Ri(b.normalize()),
              body: s,
              duplex: `half`,
              credentials: A ? x : void 0,
            };
            D = c && new a(t, j);
            let oe = await (c ? T(D, S) : T(t, j)),
              se = H.from(oe.headers);
            if (w) {
              let t = B.toFiniteNumber(se.getContentLength());
              if (t != null && t > C)
                throw new U(
                  `maxContentLength size of ` + C + ` exceeded`,
                  U.ERR_BAD_RESPONSE,
                  e,
                  D,
                );
            }
            let ce = p && (y === `stream` || y === `response`);
            if (p && oe.body && (v || w || (ce && O))) {
              let t = {};
              [`status`, `statusText`, `headers`].forEach((e) => {
                t[e] = oe[e];
              });
              let n = B.toFiniteNumber(se.getContentLength()),
                [r, i] = (v && fo(n, uo(po(v), !0))) || [],
                a = 0;
              oe = new o(
                Ko(
                  oe.body,
                  es,
                  (t) => {
                    if (w && ((a = t), a > C))
                      throw new U(
                        `maxContentLength size of ` + C + ` exceeded`,
                        U.ERR_BAD_RESPONSE,
                        e,
                        D,
                      );
                    r && r(t);
                  },
                  () => {
                    (i && i(), O && O());
                  },
                ),
                t,
              );
            }
            y ||= `text`;
            let M = await m[B.findKey(m, y) || `text`](oe, e);
            if (w && !p && !ce) {
              let t;
              if (
                (M != null &&
                  (typeof M.byteLength == `number`
                    ? (t = M.byteLength)
                    : typeof M.size == `number`
                      ? (t = M.size)
                      : typeof M == `string` &&
                        (t =
                          typeof r == `function`
                            ? new r().encode(M).byteLength
                            : M.length)),
                typeof t == `number` && t > C)
              )
                throw new U(
                  `maxContentLength size of ` + C + ` exceeded`,
                  U.ERR_BAD_RESPONSE,
                  e,
                  D,
                );
            }
            return (
              !ce && O && O(),
              await new Promise((t, n) => {
                no(t, n, {
                  data: M,
                  headers: H.from(oe.headers),
                  status: oe.status,
                  statusText: oe.statusText,
                  config: e,
                  request: D,
                });
              })
            );
          } catch (t) {
            if ((O && O(), E && E.aborted && E.reason instanceof U)) {
              let n = E.reason;
              throw (
                (n.config = e),
                D && (n.request = D),
                t !== n && (n.cause = t),
                n
              );
            }
            throw k
              ? (D && !k.request && (k.request = D), k)
              : t instanceof U
                ? (D && !t.request && (t.request = D), t)
                : t &&
                    t.name === `TypeError` &&
                    /Load failed|fetch/i.test(t.message)
                  ? Object.assign(
                      new U(
                        `Network Error`,
                        U.ERR_NETWORK,
                        e,
                        D,
                        t && t.response,
                      ),
                      { cause: t.cause || t },
                    )
                  : U.from(t, t && t.code, e, D, t && t.response);
          }
        };
      }),
      (ss = new Map()),
      (cs = (e) => {
        let t = (e && e.env) || {},
          { fetch: n, Request: r, Response: i } = t,
          a = [r, i, n],
          o = a.length,
          s,
          c,
          l = ss;
        for (; o--;)
          ((s = a[o]),
            (c = l.get(s)),
            c === void 0 && l.set(s, (c = o ? new Map() : os(t))),
            (l = c));
        return c;
      }),
      cs());
  });
function us(e, t) {
  e = B.isArray(e) ? e : [e];
  let { length: n } = e,
    r,
    i,
    a = {};
  for (let o = 0; o < n; o++) {
    r = e[o];
    let n;
    if (
      ((i = r),
      !ps(r) && ((i = ds[(n = String(r)).toLowerCase()]), i === void 0))
    )
      throw new U(`Unknown adapter '${n}'`);
    if (i && (B.isFunction(i) || (i = i.get(t)))) break;
    a[n || `#` + o] = i;
  }
  if (!i) {
    let e = Object.entries(a).map(
      ([e, t]) =>
        `adapter ${e} ` +
        (t === !1
          ? `is not supported by the environment`
          : `is not available in the build`),
    );
    throw new U(
      `There is no suitable adapter to dispatch the request ` +
        (n
          ? e.length > 1
            ? `since :
` +
              e.map(fs).join(`
`)
            : ` ` + fs(e[0])
          : `as no adapter specified`),
      `ERR_NOT_SUPPORT`,
    );
  }
  return i;
}
var ds,
  fs,
  ps,
  ms,
  hs = t(() => {
    (V(),
      ra(),
      Bo(),
      ls(),
      na(),
      (ds = { http: null, xhr: zo, fetch: { get: cs } }),
      B.forEach(ds, (e, t) => {
        if (e) {
          try {
            Object.defineProperty(e, "name", { __proto__: null, value: t });
          } catch {}
          Object.defineProperty(e, "adapterName", {
            __proto__: null,
            value: t,
          });
        }
      }),
      (fs = (e) => `- ${e}`),
      (ps = (e) => B.isFunction(e) || e === null || e === !1),
      (ms = { getAdapter: us, adapters: ds }));
  });
function gs(e) {
  if (
    (e.cancelToken && e.cancelToken.throwIfRequested(),
    e.signal && e.signal.aborted)
  )
    throw new eo(null, e);
}
function _s(e) {
  return (
    gs(e),
    (e.headers = H.from(e.headers)),
    (e.data = Xa.call(e, e.transformRequest)),
    [`post`, `put`, `patch`].indexOf(e.method) !== -1 &&
      e.headers.setContentType(`application/x-www-form-urlencoded`, !1),
    ms
      .getAdapter(
        e.adapter || Ja.adapter,
        e,
      )(e)
      .then(
        function (t) {
          (gs(e), (e.response = t));
          try {
            t.data = Xa.call(e, e.transformResponse, t);
          } finally {
            delete e.response;
          }
          return ((t.headers = H.from(t.headers)), t);
        },
        function (t) {
          if (!Qa(t) && (gs(e), t && t.response)) {
            e.response = t.response;
            try {
              t.response.data = Xa.call(e, e.transformResponse, t.response);
            } finally {
              delete e.response;
            }
            t.response.headers = H.from(t.response.headers);
          }
          return Promise.reject(t);
        },
      )
  );
}
var vs = t(() => {
  (Za(), $a(), Ya(), to(), Qi(), hs());
});
function ys(e, t, n) {
  if (typeof e != `object`)
    throw new U(`options must be an object`, U.ERR_BAD_OPTION_VALUE);
  let r = Object.keys(e),
    i = r.length;
  for (; i-- > 0;) {
    let a = r[i],
      o = Object.prototype.hasOwnProperty.call(t, a) ? t[a] : void 0;
    if (o) {
      let t = e[a],
        n = t === void 0 || o(t, a, e);
      if (n !== !0)
        throw new U(`option ` + a + ` must be ` + n, U.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (n !== !0) throw new U(`Unknown option ` + a, U.ERR_BAD_OPTION);
  }
}
var bs,
  xs,
  Ss,
  Cs = t(() => {
    ($o(),
      na(),
      (bs = {}),
      [`object`, `boolean`, `number`, `function`, `string`, `symbol`].forEach(
        (e, t) => {
          bs[e] = function (n) {
            return typeof n === e || `a` + (t < 1 ? `n ` : ` `) + e;
          };
        },
      ),
      (xs = {}),
      (bs.transitional = function (e, t, n) {
        function r(e, t) {
          return (
            `[Axios v` +
            Qo +
            `] Transitional option '` +
            e +
            `'` +
            t +
            (n ? `. ` + n : ``)
          );
        }
        return (n, i, a) => {
          if (e === !1)
            throw new U(
              r(i, ` has been removed` + (t ? ` in ` + t : ``)),
              U.ERR_DEPRECATED,
            );
          return (
            t &&
              !xs[i] &&
              ((xs[i] = !0),
              console.warn(
                r(
                  i,
                  ` has been deprecated since v` +
                    t +
                    ` and will be removed in the near future`,
                ),
              )),
            e ? e(n, i, a) : !0
          );
        };
      }),
      (bs.spelling = function (e) {
        return (t, n) => (
          console.warn(`${n} is likely a misspelling of ${e}`),
          !0
        );
      }),
      (Ss = { assertOptions: ys, validators: bs }));
  }),
  G,
  ws,
  Ts = t(() => {
    (V(),
      _a(),
      ya(),
      vs(),
      Mo(),
      ko(),
      Cs(),
      Qi(),
      xa(),
      (G = Ss.validators),
      (ws = class {
        constructor(e) {
          ((this.defaults = e || {}),
            (this.interceptors = { request: new va(), response: new va() }));
        }
        async request(e, t) {
          try {
            return await this._request(e, t);
          } catch (e) {
            if (e instanceof Error) {
              let t = {};
              Error.captureStackTrace
                ? Error.captureStackTrace(t)
                : (t = Error());
              let n = (() => {
                if (!t.stack) return ``;
                let e = t.stack.indexOf(`
`);
                return e === -1 ? `` : t.stack.slice(e + 1);
              })();
              try {
                if (!e.stack) e.stack = n;
                else if (n) {
                  let t = n.indexOf(`
`),
                    r =
                      t === -1
                        ? -1
                        : n.indexOf(
                            `
`,
                            t + 1,
                          ),
                    i = r === -1 ? `` : n.slice(r + 1);
                  String(e.stack).endsWith(i) ||
                    (e.stack +=
                      `
` + n);
                }
              } catch {}
            }
            throw e;
          }
        }
        _request(e, t) {
          (typeof e == `string` ? ((t ||= {}), (t.url = e)) : (t = e || {}),
            (t = Ao(this.defaults, t)));
          let { transitional: n, paramsSerializer: r, headers: i } = t;
          (n !== void 0 &&
            Ss.assertOptions(
              n,
              {
                silentJSONParsing: G.transitional(G.boolean),
                forcedJSONParsing: G.transitional(G.boolean),
                clarifyTimeoutError: G.transitional(G.boolean),
                legacyInterceptorReqResOrdering: G.transitional(G.boolean),
                advertiseZstdAcceptEncoding: G.transitional(G.boolean),
                validateStatusUndefinedResolves: G.transitional(G.boolean),
              },
              !1,
            ),
            r != null &&
              (B.isFunction(r)
                ? (t.paramsSerializer = { serialize: r })
                : Ss.assertOptions(
                    r,
                    { encode: G.function, serialize: G.function },
                    !0,
                  )),
            t.allowAbsoluteUrls !== void 0 ||
              (this.defaults.allowAbsoluteUrls === void 0
                ? (t.allowAbsoluteUrls = !0)
                : (t.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls)),
            Ss.assertOptions(
              t,
              {
                baseUrl: G.spelling(`baseURL`),
                withXsrfToken: G.spelling(`withXSRFToken`),
              },
              !0,
            ),
            (t.method = (
              t.method ||
              this.defaults.method ||
              `get`
            ).toLowerCase()));
          let a = i && B.merge(i.common, i[t.method]);
          (i &&
            B.forEach(
              [
                `delete`,
                `get`,
                `head`,
                `post`,
                `put`,
                `patch`,
                `query`,
                `common`,
              ],
              (e) => {
                delete i[e];
              },
            ),
            (t.headers = H.concat(a, i)));
          let o = [],
            s = !0;
          this.interceptors.request.forEach(function (e) {
            if (typeof e.runWhen == `function` && e.runWhen(t) === !1) return;
            s &&= e.synchronous;
            let n = t.transitional || ba;
            n && n.legacyInterceptorReqResOrdering
              ? o.unshift(e.fulfilled, e.rejected)
              : o.push(e.fulfilled, e.rejected);
          });
          let c = [];
          this.interceptors.response.forEach(function (e) {
            c.push(e.fulfilled, e.rejected);
          });
          let l,
            u = 0,
            d;
          if (!s) {
            let e = [_s.bind(this), void 0];
            for (
              e.unshift(...o),
                e.push(...c),
                d = e.length,
                l = Promise.resolve(t);
              u < d;
            )
              l = l.then(e[u++], e[u++]);
            return l;
          }
          d = o.length;
          let f = t;
          for (; u < d;) {
            let e = o[u++],
              t = o[u++];
            try {
              f = e(f);
            } catch (e) {
              t.call(this, e);
              break;
            }
          }
          try {
            l = _s.call(this, f);
          } catch (e) {
            return Promise.reject(e);
          }
          for (u = 0, d = c.length; u < d;) l = l.then(c[u++], c[u++]);
          return l;
        }
        getUri(e) {
          return (
            (e = Ao(this.defaults, e)),
            ga(
              Eo(e.baseURL, e.url, e.allowAbsoluteUrls, e),
              e.params,
              e.paramsSerializer,
            )
          );
        }
      }),
      B.forEach([`delete`, `get`, `head`, `options`], function (e) {
        ws.prototype[e] = function (t, n) {
          return this.request(
            Ao(n || {}, {
              method: e,
              url: t,
              data: n && B.hasOwnProp(n, `data`) ? n.data : void 0,
            }),
          );
        };
      }),
      B.forEach([`post`, `put`, `patch`, `query`], function (e) {
        function t(t) {
          return function (n, r, i) {
            return this.request(
              Ao(i || {}, {
                method: e,
                headers: t ? { "Content-Type": `multipart/form-data` } : {},
                url: n,
                data: r,
              }),
            );
          };
        }
        ((ws.prototype[e] = t()),
          e !== `query` && (ws.prototype[e + `Form`] = t(!0)));
      }));
  }),
  Es,
  Ds = t(() => {
    (to(),
      (Es = class e {
        constructor(e) {
          if (typeof e != `function`)
            throw TypeError(`executor must be a function.`);
          let t;
          this.promise = new Promise(function (e) {
            t = e;
          });
          let n = this;
          (this.promise.then((e) => {
            if (!n._listeners) return;
            let t = n._listeners.length;
            for (; t-- > 0;) n._listeners[t](e);
            n._listeners = null;
          }),
            (this.promise.then = (e) => {
              let t,
                r = new Promise((e) => {
                  (n.subscribe(e), (t = e));
                }).then(e);
              return (
                (r.cancel = function () {
                  n.unsubscribe(t);
                }),
                r
              );
            }),
            e(function (e, r, i) {
              n.reason || ((n.reason = new eo(e, r, i)), t(n.reason));
            }));
        }
        throwIfRequested() {
          if (this.reason) throw this.reason;
        }
        subscribe(e) {
          if (this.reason) {
            e(this.reason);
            return;
          }
          this._listeners ? this._listeners.push(e) : (this._listeners = [e]);
        }
        unsubscribe(e) {
          if (!this._listeners) return;
          let t = this._listeners.indexOf(e);
          t !== -1 && this._listeners.splice(t, 1);
        }
        toAbortSignal() {
          let e = new AbortController(),
            t = (t) => {
              e.abort(t);
            };
          return (
            this.subscribe(t),
            (e.signal.unsubscribe = () => this.unsubscribe(t)),
            e.signal
          );
        }
        static source() {
          let t;
          return {
            token: new e(function (e) {
              t = e;
            }),
            cancel: t,
          };
        }
      }));
  });
function Os(e) {
  return function (t) {
    return e.apply(null, t);
  };
}
var ks = t(() => {});
function As(e) {
  return B.isObject(e) && e.isAxiosError === !0;
}
var js = t(() => {
    V();
  }),
  Ms,
  Ns = t(() => {
    ((Ms = {
      Continue: 100,
      SwitchingProtocols: 101,
      Processing: 102,
      EarlyHints: 103,
      Ok: 200,
      Created: 201,
      Accepted: 202,
      NonAuthoritativeInformation: 203,
      NoContent: 204,
      ResetContent: 205,
      PartialContent: 206,
      MultiStatus: 207,
      AlreadyReported: 208,
      ImUsed: 226,
      MultipleChoices: 300,
      MovedPermanently: 301,
      Found: 302,
      SeeOther: 303,
      NotModified: 304,
      UseProxy: 305,
      Unused: 306,
      TemporaryRedirect: 307,
      PermanentRedirect: 308,
      BadRequest: 400,
      Unauthorized: 401,
      PaymentRequired: 402,
      Forbidden: 403,
      NotFound: 404,
      MethodNotAllowed: 405,
      NotAcceptable: 406,
      ProxyAuthenticationRequired: 407,
      RequestTimeout: 408,
      Conflict: 409,
      Gone: 410,
      LengthRequired: 411,
      PreconditionFailed: 412,
      PayloadTooLarge: 413,
      UriTooLong: 414,
      UnsupportedMediaType: 415,
      RangeNotSatisfiable: 416,
      ExpectationFailed: 417,
      ImATeapot: 418,
      MisdirectedRequest: 421,
      UnprocessableEntity: 422,
      Locked: 423,
      FailedDependency: 424,
      TooEarly: 425,
      UpgradeRequired: 426,
      PreconditionRequired: 428,
      TooManyRequests: 429,
      RequestHeaderFieldsTooLarge: 431,
      UnavailableForLegalReasons: 451,
      InternalServerError: 500,
      NotImplemented: 501,
      BadGateway: 502,
      ServiceUnavailable: 503,
      GatewayTimeout: 504,
      HttpVersionNotSupported: 505,
      VariantAlsoNegotiates: 506,
      InsufficientStorage: 507,
      LoopDetected: 508,
      NotExtended: 510,
      NetworkAuthenticationRequired: 511,
      WebServerIsDown: 521,
      ConnectionTimedOut: 522,
      OriginIsUnreachable: 523,
      TimeoutOccurred: 524,
      SslHandshakeFailed: 525,
      InvalidSslCertificate: 526,
    }),
      Object.entries(Ms).forEach(([e, t]) => {
        Ms[t] = e;
      }));
  });
function Ps(e) {
  let t = new ws(e),
    n = gr(ws.prototype.request, t);
  return (
    B.extend(n, ws.prototype, t, { allOwnKeys: !0 }),
    B.extend(n, t, null, { allOwnKeys: !0 }),
    (n.create = function (t) {
      return Ps(Ao(e, t));
    }),
    n
  );
}
var K,
  Fs = t(() => {
    (V(),
      _r(),
      Ts(),
      Mo(),
      Ya(),
      Ga(),
      to(),
      Ds(),
      $a(),
      $o(),
      ua(),
      na(),
      ks(),
      js(),
      Qi(),
      hs(),
      Ns(),
      (K = Ps(Ja)),
      (K.Axios = ws),
      (K.CanceledError = eo),
      (K.CancelToken = Es),
      (K.isCancel = Qa),
      (K.VERSION = Qo),
      (K.toFormData = ca),
      (K.AxiosError = U),
      (K.Cancel = K.CanceledError),
      (K.all = function (e) {
        return Promise.all(e);
      }),
      (K.spread = Os),
      (K.isAxiosError = As),
      (K.mergeConfig = Ao),
      (K.AxiosHeaders = H),
      (K.formToJSON = (e) => Ua(B.isHTMLForm(e) ? new FormData(e) : e)),
      (K.getAdapter = ms.getAdapter),
      (K.HttpStatusCode = Ms),
      (K.default = K));
  }),
  Is,
  Ls,
  Rs,
  zs,
  Bs,
  Vs,
  Hs,
  Us,
  Ws,
  Gs,
  Ks,
  qs,
  Js,
  Ys,
  Xs,
  Zs,
  Qs,
  $s = t(() => {
    (Fs(),
      ({
        Axios: Is,
        AxiosError: Ls,
        CanceledError: Rs,
        isCancel: zs,
        CancelToken: Bs,
        VERSION: Vs,
        all: Hs,
        Cancel: Us,
        isAxiosError: Ws,
        spread: Gs,
        toFormData: Ks,
        AxiosHeaders: qs,
        HttpStatusCode: Js,
        formToJSON: Ys,
        getAdapter: Xs,
        mergeConfig: Zs,
        create: Qs,
      } = K));
  });
function ec() {
  return nc;
}
var tc,
  nc,
  rc = t(() => {
    ($s(),
      (tc = K.create({
        baseURL: ``,
        timeout: 15e3,
        withCredentials: !0,
        headers: { "Content-Type": `application/json` },
      })),
      tc.interceptors.response.use(
        (e) => e,
        (e) => {
          if (e && e.response && e.response.status === 401)
            try {
              typeof window < `u` &&
                !window.__tpAuthRedirected &&
                ((window.__tpAuthRedirected = !0),
                window.location.assign(
                  `/Users/Login?next=` +
                    encodeURIComponent(window.location.pathname),
                ));
            } catch {}
          return Promise.reject(e);
        },
      ),
      (nc = `cookie`));
  });
function ic() {
  return {
    brand_label: ac((e) => e.brand_label),
    brand_short: ac((e) => e.brand_short),
  };
}
var ac,
  oc = t(() => {
    (hr(),
      (ac = pr((e) => ({
        brand_label: `Teen Patti Studio`,
        brand_short: `TPS`,
        brand_flags: {},
        brand_currency: null,
        fetchByCookie: async () => {},
        fetchByHost: async () => {},
        setFromUser: (t) => {
          if (t) {
            var n = t.effectiveCurrency || t.currency || null;
            e({ brand_currency: n ? String(n).toUpperCase() : null });
          }
        },
        setFromInvite: () => {},
        reset: () => e({ brand_currency: null }),
      }))));
  });
function sc(e, t, n, r) {
  ((mc = e || ``),
    t && (hc = t),
    n !== void 0 && (gc = String(n || ``).toUpperCase()),
    r && Number(r.factor) > 0 && (_c = Number(r.factor)));
}
function cc() {
  return mc;
}
function lc(e) {
  return (e && vc[String(e).toUpperCase()]) || ``;
}
function uc() {
  return 0;
}
function dc(e) {
  return _c === 1 ? e : e / _c;
}
function fc(e, t) {
  return (t === 0 ? Math.floor(Math.abs(e)) : Math.abs(e)).toLocaleString(hc, {
    minimumFractionDigits: t,
    maximumFractionDigits: t,
  });
}
function pc(e, t = !1) {
  if (e == null || isNaN(e)) return `${mc}${yc}0`;
  let n = dc(Number(e)),
    r = t && n > 0 ? `+` : ``,
    i = fc(n, uc(gc));
  return n < 0 ? `-${mc}${yc}${i}` : `${r}${mc}${yc}${i}`;
}
var mc,
  hc,
  gc,
  _c,
  vc,
  yc,
  bc = t(() => {
    ((mc = ``),
      (hc = `en-US`),
      (gc = ``),
      (_c = 1),
      (vc = {
        USD: `USD`,
        EUR: `EUR`,
        GBP: `GBP`,
        INR: `INR`,
        PKR: `PKR`,
        AED: `AED`,
        SAR: `SAR`,
        QAR: `QAR`,
        KWD: `KWD`,
        BHD: `BHD`,
        OMR: `OMR`,
        BDT: `BDT`,
        LKR: `LKR`,
        NPR: `NPR`,
        CAD: `CAD`,
        AUD: `AUD`,
        TRY: `TRY`,
        ZAR: `ZAR`,
        CNY: `CNY`,
        JPY: `JPY`,
        CHF: `CHF`,
        RUB: `RUB`,
        KRW: `KRW`,
        THB: `THB`,
        AZN: `AZN`,
        KZT: `KZT`,
      }),
      (yc = `\xA0`));
  });
function xc() {
  try {
    return sessionStorage.getItem(`tps-standalone`) === `1`;
  } catch {
    return !1;
  }
}
function Sc() {
  if (Tc || xc()) return !1;
  let e = window.location.pathname.replace(/^\/TeenPattiStudio\/?/i, ``),
    t = e ? `?path=` + encodeURIComponent(e) : ``;
  return (window.location.replace(`/Common/TeenPattiStudio` + t), !0);
}
function Cc(e) {
  try {
    (window.top || window).location.assign(e);
  } catch {
    window.location.assign(e);
  }
}
var wc,
  Tc,
  Ec = t(() => {
    wc = !1;
    try {
      wc = window.self !== window.top;
    } catch {
      wc = !0;
    }
    Tc = wc;
    try {
      new URLSearchParams(window.location.search).get(`standalone`) === `1` &&
        sessionStorage.setItem(`tps-standalone`, `1`);
    } catch {}
    if (Tc)
      try {
        document.body.classList.add(`tps-embedded`);
      } catch {}
  });
function Dc(e) {
  if (!e) return null;
  var t = e.effectiveCurrency ? String(e.effectiveCurrency).toUpperCase() : ``;
  return {
    ...e,
    is_admin: !!e.isAdmin,
    is_match_operator: e.isMatchOperator === !0,
    is_one_window_operator: e.isOneWindowOperator === !0,
    bet_presets: e.betStakes || null,
    brand_label: `Teen Patti Studio`,
    brand_short: `TPS`,
    currency: t || null,
  };
}
function Oc(e) {
  var t = e && e.currency ? e.currency : ``,
    n = Number(e && (e.currencyFactor ?? e.currency_factor)) || 1;
  sc(lc(t), `en-US`, t, { factor: n });
  try {
    window.__tpUserRole = e ? e.role : ``;
  } catch {}
}
var kc,
  Ac = t(() => {
    (hr(),
      rc(),
      oc(),
      bc(),
      Ec(),
      (kc = pr((e, t) => ({
        user: null,
        isAuthenticated: !1,
        isLoading: !0,
        error: null,
        token: `cookie`,
        login: async () => (
          Cc(
            `/Users/Login?next=` + encodeURIComponent(window.location.pathname),
          ),
          { success: !1 }
        ),
        loginAsDemo: async () => ({ success: !1 }),
        loginAsGuest: async () => ({ success: !1 }),
        register: async () => ({ success: !1 }),
        checkAuth: async () => {
          try {
            let { data: t } = await tc.get(`/api/me`, { timeout: 1e4 }),
              n = Dc(t.user || t);
            Oc(n);
            try {
              ac.getState().setFromUser(n);
            } catch {}
            e({ user: n, isAuthenticated: !0, isLoading: !1, error: null });
          } catch (r) {
            var n = r && r.response && r.response.status;
            e(
              n === 401 || n === 403
                ? { user: null, isAuthenticated: !1, isLoading: !1 }
                : { isLoading: !t().user },
            );
          }
        },
        refreshUser: async () => {
          try {
            let { data: t } = await tc.get(`/api/me`),
              n = Dc(t.user || t);
            return (e({ user: n }), n);
          } catch {
            return t().user;
          }
        },
        logout: () => {
          (tc.post(`/api/logout`).catch(() => {}),
            e({ user: null, isAuthenticated: !1, isLoading: !1 }),
            Cc(`/Users/Login`));
        },
        clearError: () => e({ error: null }),
      }))));
  });
function jc() {
  let [e, t] = (0, Mc.useState)(() => {
    try {
      let e = localStorage.getItem(Lc);
      return e ? JSON.parse(e) : [];
    } catch {
      return [];
    }
  });
  return {
    recents: e,
    pushRecent: (0, Mc.useCallback)((e) => {
      t((t) => {
        let n = [e, ...t.filter((t) => t !== e)].slice(0, Rc);
        try {
          localStorage.setItem(Lc, JSON.stringify(n));
        } catch {}
        return n;
      });
    }, []),
  };
}
var Mc,
  Nc,
  Pc,
  Fc,
  Ic,
  Lc,
  Rc,
  zc = t(() => {
    ((Mc = r(n())),
      m(),
      (Nc = [
        { id: `all`, label: `All Games`, icon: h },
        { id: `betfair`, label: `BetFair Games`, icon: p },
        { id: `teenpatti`, label: `TeenPatti Studio`, icon: g },
      ]),
      (Pc = [
        `th`,
        `p2020`,
        `p20`,
        `bj`,
        `bje`,
        `tbj`,
        `bac`,
        `tbac`,
        `tb`,
        `hilo`,
        `thl`,
        `omaha`,
        `oh`,
        `derby-race`,
        `drt`,
      ]),
      (Fc = {
        live: `Live`,
        cards: `Cards`,
        crash: `Crash`,
        roulette: `Roulette`,
        instant: `Instant`,
      }),
      (Ic = [
        `Aviator`,
        `Dragon Tiger`,
        `Bollywood Casino`,
        `Blackjack`,
        `Roulette`,
        `RocketX`,
      ]),
      (Lc = `lz_recent_games`),
      (Rc = 8));
  });
function Bc({ children: e, slipNode: t, betsNode: n }) {
  let r = (0, rl.useMemo)(() => ({ slipNode: t, betsNode: n }), [t, n]);
  return (0, q.jsx)(al.Provider, { value: r, children: e });
}
function Vc() {
  return (0, rl.useContext)(al);
}
function Hc({ slot: e, children: t }) {
  let n = Vc(),
    r = n && (e === `slip` ? n.slipNode : n.betsNode);
  return r ? (0, il.createPortal)(t, r) : t;
}
function Uc({ timer: e, isBetting: t }) {
  let n = (0, rl.useRef)(0),
    r = Math.max(0, Number(e) || 0);
  (r > n.current && (n.current = r), r === 0 && (n.current = 0));
  let i = n.current || 1,
    a = ((i ? Math.min(1, r / i) : 0) * 283).toFixed(0) + ` 283`;
  return (0, q.jsxs)(`div`, {
    className: `base-timer`,
    children: [
      (0, q.jsx)(`svg`, {
        viewBox: `0 0 100 100`,
        xmlns: `http://www.w3.org/2000/svg`,
        className: `base-timer__svg`,
        children: (0, q.jsxs)(`g`, {
          className: `base-timer__circle`,
          children: [
            (0, q.jsx)(`circle`, {
              cx: `50`,
              cy: `50`,
              r: `45`,
              className: `base-timer__path-elapsed`,
            }),
            (0, q.jsx)(`path`, {
              strokeDasharray: a,
              d: `M 50, 50 m -45, 0 a 45,45 0 1,0 90,0 a 45,45 0 1,0 -90,0`,
              className: `base-timer__path-remaining ` + (t ? `green` : `red`),
            }),
          ],
        }),
      }),
      (0, q.jsx)(`span`, { className: `base-timer__label`, children: r }),
    ],
  });
}
function Wc({ timer: e, isBetting: t, players: n, children: r, className: i }) {
  return (0, q.jsxs)(`div`, {
    className: `cards-layout` + (i ? ` ` + i : ``),
    children: [
      (0, q.jsxs)(`div`, {
        className: `col-12 timerDiv2`,
        children: [
          n == null
            ? (0, q.jsx)(`span`, {})
            : (0, q.jsxs)(`div`, {
                className: `Connectedclients`,
                children: [
                  (0, q.jsx)(`svg`, {
                    width: `14`,
                    height: `14`,
                    viewBox: `0 0 24 24`,
                    fill: `#fff`,
                    "aria-hidden": `true`,
                    children: (0, q.jsx)(`path`, {
                      d: `M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z`,
                    }),
                  }),
                  (0, q.jsx)(`b`, {
                    children: (0, q.jsx)(`span`, {
                      className: `number`,
                      children: n,
                    }),
                  }),
                ],
              }),
          (0, q.jsx)(Uc, { timer: e, isBetting: t }),
        ],
      }),
      r,
    ],
  });
}
function Gc({ lobbyActive: e }) {
  let t = Le(),
    n = ze().slug,
    r = kc((e) => e.user),
    i = (0, rl.useMemo)(() => {
      let e = new Set(Pc),
        t = u(r).filter((t) => e.has(t.slug)),
        n = (e) => {
          let t = ol.indexOf(e.slug);
          return t < 0 ? 999 : t;
        };
      return t
        .slice()
        .sort((e, t) => n(e) - n(t) || e.name.localeCompare(t.name));
    }, [r]);
  return (0, q.jsxs)(`div`, {
    className: `bp-gametabs`,
    children: [
      (0, q.jsx)(`button`, {
        type: `button`,
        className: `bp-gametab` + (e ? ` is-lobby-active` : ``),
        onClick: () => {
          e || t(`/casino/BetfairGames`);
        },
        children: `Lobby`,
      }),
      i.map((e) =>
        (0, q.jsx)(
          `button`,
          {
            type: `button`,
            className: `bp-gametab` + (e.slug === n ? ` is-active` : ``),
            onClick: () => {
              e.slug !== n && t(`/game/` + e.slug);
            },
            children: e.name,
          },
          e.slug,
        ),
      ),
    ],
  });
}
function Kc(e) {
  let t = String(e || ``).match(/^[A-Za-z]+\d*-(\d{8})-(\d+)$/);
  if (!t) return e;
  let n = t[2].length < 3 ? (`00` + t[2]).slice(-3) : t[2];
  return t[1].slice(2) + n;
}
function qc({
  roundSeq: e,
  timer: t,
  isBetting: n,
  gameId: r,
  tabs: i,
  activeTab: a,
  onTabChange: o,
  dots: s,
}) {
  let c = (s && s.count) || 8,
    l = s
      ? s.active == null
        ? -1
        : s.active
      : e != null && isFinite(e)
        ? (((e - 1) % c) + c) % c
        : -1;
  return (0, q.jsxs)(`div`, {
    className: `bp-embed-header`,
    children: [
      (0, q.jsxs)(`div`, {
        className: `bp-eh-round`,
        children: [
          (0, q.jsx)(`span`, {
            className: `bp-eh-roundlabel`,
            children: `Round`,
          }),
          Array.from({ length: c }, (e, t) =>
            (0, q.jsx)(
              `span`,
              { className: `bp-eh-dot` + (t === l ? ` on` : ``) },
              t,
            ),
          ),
        ],
      }),
      (0, q.jsx)(`div`, {
        className: `bp-eh-timer`,
        children: (0, q.jsx)(Uc, { timer: t, isBetting: n }),
      }),
      (0, q.jsxs)(`div`, {
        className: `bp-eh-right`,
        children: [
          (0, q.jsxs)(`div`, {
            className: `bp-eh-gameid`,
            children: [`Game ID:`, r || `—`],
          }),
          i
            ? (0, q.jsx)(`div`, {
                role: `group`,
                "aria-label": `Game tabs`,
                className: `btn-group btn-group-sm`,
                children: i.map((e) =>
                  (0, q.jsx)(
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
            : null,
        ],
      }),
    ],
  });
}
function Jc({ items: e, roundId: t }) {
  return (0, q.jsxs)(`div`, {
    className: `footer-divbpg border-gradient-footer border-gradient-purple-footer bp-resultsbar`,
    children: [
      (0, q.jsx)(`div`, {
        className: `buttons-div`,
        children: (e || [])
          .slice(0, 10)
          .map((e, t) =>
            (0, q.jsx)(
              `button`,
              {
                type: `button`,
                className: `video-button border-gradient-btn border-gradient-purple-btn`,
                title: e.title || ``,
                children: e.label,
              },
              t,
            ),
          ),
      }),
      (0, q.jsxs)(`div`, {
        className: `round-div`,
        children: [
          (0, q.jsx)(`div`, { className: `label`, children: `Round ID:` }),
          (0, q.jsx)(`div`, { className: `id`, children: t || `—` }),
        ],
      }),
    ],
  });
}
function Yc({ timer: e, phaseName: t }) {
  var n = (0, rl.useRef)(0),
    r = (0, rl.useRef)(t);
  r.current !== t && ((r.current = t), (n.current = 0));
  var i = Math.max(0, Number(e) || 0);
  i > n.current && (n.current = i);
  var a = n.current || 1;
  return (0, q.jsx)(`div`, {
    className: `bp-round-progress`,
    children: (0, q.jsx)(`span`, {
      className: `bp-round-progress-fill`,
      style: { width: Math.min(1, Math.max(0, i / a)) * 100 + `%` },
    }),
  });
}
function Xc({ title: e, children: t, hideHeader: n }) {
  return (0, q.jsxs)(`div`, {
    className: `section-blur`,
    children: [
      (0, q.jsxs)(`div`, {
        className: `market-titlebar`,
        children: [
          (0, q.jsx)(`p`, {
            className: `market-name`,
            children: e
              ? (0, q.jsxs)(`span`, {
                  className: `market-name-badge`,
                  children: [
                    (0, q.jsx)(`i`, {
                      className: `market-name-icon`,
                      children: (0, q.jsx)(`img`, {
                        src: `/assets/games/bpexch/superover/time.png`,
                        alt: ``,
                        width: `16`,
                        height: `16`,
                        style: { display: `block` },
                      }),
                    }),
                    (0, q.jsxs)(`span`, { children: [e, ` `] }),
                  ],
                })
              : null,
          }),
          !n &&
            (0, q.jsxs)(q.Fragment, {
              children: [
                (0, q.jsxs)(`div`, {
                  className: `market-overarround`,
                  children: [
                    (0, q.jsx)(`span`, {}),
                    (0, q.jsx)(`strong`, { children: `Back` }),
                  ],
                }),
                (0, q.jsx)(`div`, {
                  className: `market-overarround market-overarround-lay`,
                  children: (0, q.jsx)(`strong`, { children: `Lay` }),
                }),
              ],
            }),
        ],
      }),
      t,
    ],
  });
}
function Zc(e) {
  if (e == null || e === ``) return ``;
  let t = Number(e);
  return isFinite(t) ? t.toLocaleString(`en-US`) : String(e);
}
function Qc({
  side: e,
  price: t,
  vol: n,
  sel: r,
  live: i,
  hidden: a,
  onClick: o,
  mb: s,
}) {
  let c = [
      `price-price`,
      e === `back` ? `price-back` : `price-lay`,
      s ? `mb-show` : ``,
      r ? `is-sel` : ``,
      i ? `is-live` : `is-off`,
    ]
      .filter(Boolean)
      .join(` `),
    l = !a && t != null && t !== `` && t !== `--` && t !== `—`;
  return (0, q.jsxs)(`a`, {
    className: c,
    role: `button`,
    tabIndex: i && l ? 0 : -1,
    onClick: i && l && o ? o : void 0,
    onKeyDown:
      i && l && o
        ? (e) => {
            (e.key === `Enter` || e.key === ` `) && (e.preventDefault(), o());
          }
        : void 0,
    children: [
      (0, q.jsx)(`span`, { className: `price-odd`, children: l ? t : `` }),
      (0, q.jsx)(`span`, {
        className: `price-amount`,
        children: l ? Zc(n) : ``,
      }),
    ],
  });
}
function $c({
  label: e,
  icon: t,
  sub: n,
  pnl: r,
  tag: i,
  isWin: a,
  isLose: o,
  band: s,
  back: c,
  lay: l,
  backLevels: u,
  layLevels: d,
  isBetting: f,
}) {
  let p = !!f,
    m = u || [],
    h = d || [],
    g = (e, t, n, r) => {
      let i = e[t];
      return (0, q.jsx)(Qc, {
        side: n,
        price: i && i.price,
        vol: i && i.vol,
        hidden: r,
        live: p,
        onClick: i && i.onClick,
      });
    };
  return (0, q.jsx)(`div`, {
    className: `market-runners`,
    children: (0, q.jsxs)(`div`, {
      className: `runner-runner` + (a ? ` is-win` : ``) + (o ? ` is-lose` : ``),
      children: [
        (0, q.jsx)(`h3`, {
          className: `runner-name`,
          children: (0, q.jsxs)(`div`, {
            className: `runner-info`,
            children: [
              (0, q.jsxs)(`span`, {
                className: `clippable runner-display-name`,
                children: [
                  t
                    ? (0, q.jsx)(`span`, {
                        className: `bp-runner-ico`,
                        children: t,
                      })
                    : null,
                  e,
                  i
                    ? (0, q.jsx)(`span`, {
                        className: `runner-tag ` + (i.kind || ``),
                        children: i.text,
                      })
                    : null,
                ],
              }),
              n
                ? (0, q.jsx)(`span`, {
                    className: `runner-pnl`,
                    style: { color: `#2b2f35`, fontWeight: 400 },
                    children: n,
                  })
                : null,
              r
                ? (0, q.jsxs)(`span`, {
                    className: `runner-pnl ` + (r > 0 ? `pos` : `neg`),
                    children: [
                      r > 0 ? `+` : ``,
                      Math.round(r).toLocaleString(),
                    ],
                  })
                : null,
            ],
          }),
        }),
        s
          ? (0, q.jsx)(`div`, {
              className: `runner-band ` + (s.kind || ``),
              children: s.text,
            })
          : (0, q.jsxs)(q.Fragment, {
              children: [
                g(m, 2, `back`, c && c.hidden),
                g(m, 1, `back`, c && c.hidden),
                (0, q.jsx)(Qc, {
                  side: `back`,
                  mb: !0,
                  price: c && c.price,
                  vol: c && c.vol,
                  sel: c && c.sel,
                  hidden: c && c.hidden,
                  live: p,
                  onClick: c && c.onClick,
                }),
                (0, q.jsx)(Qc, {
                  side: `lay`,
                  mb: !0,
                  price: l && l.price,
                  vol: l && l.vol,
                  sel: l && l.sel,
                  hidden: l && l.hidden,
                  live: p,
                  onClick: l && l.onClick,
                }),
                g(h, 1, `lay`, l && l.hidden),
                g(h, 2, `lay`, l && l.hidden),
              ],
            }),
      ],
    }),
  });
}
function el({ rows: e, emptyText: t }) {
  return !e || e.length === 0
    ? (0, q.jsx)(`div`, {
        className: `bp-results-empty`,
        children: t || `No results yet`,
      })
    : (0, q.jsx)(`div`, {
        className: `bp-results-list`,
        children: e.map((e, t) =>
          (0, q.jsxs)(
            `div`,
            {
              className: `bp-result-row`,
              children: [
                (0, q.jsxs)(`p`, {
                  className: `bp-result-head`,
                  children: [
                    e.time,
                    e.time ? ` - ` : ``,
                    `ID= `,
                    Kc(e.roundId),
                  ],
                }),
                e.community
                  ? (0, q.jsxs)(`div`, {
                      className: `bp-result-community`,
                      children: [
                        (0, q.jsx)(`div`, {
                          className: `bp-rc-comm-label`,
                          children: e.communityLabel || `Community Cards`,
                        }),
                        (0, q.jsx)(`div`, {
                          className: `bp-rc-comm-cards`,
                          children: e.community,
                        }),
                      ],
                    })
                  : null,
                (0, q.jsx)(`div`, {
                  className: `bp-result-cards`,
                  children: e.cards.map((e, t) =>
                    (0, q.jsxs)(
                      `div`,
                      {
                        className: `bp-result-card` + (e.win ? ` win` : ``),
                        children: [
                          (0, q.jsx)(`div`, {
                            className: `bp-rc-name`,
                            children: e.name,
                          }),
                          (0, q.jsx)(`div`, {
                            className: `bp-rc-body`,
                            children: e.body,
                          }),
                          (0, q.jsx)(`div`, {
                            className: `bp-rc-band`,
                            children: e.win ? `WINNER` : e.band || `LOSER`,
                          }),
                        ],
                      },
                      t,
                    ),
                  ),
                }),
              ],
            },
            e.roundId || t,
          ),
        ),
      });
}
function tl({ card: e }) {
  if (!e) return null;
  let t = e.suitName || e.suit || ``,
    n = sl[t] || e.suitSymbol || ``,
    r = t === `hearts` || t === `diamonds` || t === `h` || t === `d`,
    i = e.label || e.value || e.rank || ``;
  return (0, q.jsxs)(`span`, {
    style: {
      width: 46,
      height: 57,
      background: `var(--white)`,
      borderRadius: 4,
      display: `inline-flex`,
      flexDirection: `column`,
      alignItems: `center`,
      justifyContent: `center`,
      color: r ? `#d0021b` : `#111`,
      fontWeight: 700,
      fontSize: 18,
      lineHeight: 1,
    },
    children: [
      (0, q.jsx)(`span`, { children: i }),
      (0, q.jsx)(`span`, { style: { fontSize: 16 }, children: n }),
    ],
  });
}
function nl() {
  let [e, t] = (0, rl.useState)(null),
    [n, r] = (0, rl.useState)(null);
  return { slipNode: e, betsNode: n, setSlipNode: t, setBetsNode: r };
}
var rl,
  il,
  q,
  al,
  ol,
  sl,
  cl = t(() => {
    ((rl = r(n())),
      (il = r(o())),
      ar(),
      Ac(),
      f(),
      zc(),
      (q = a()),
      (al = (0, rl.createContext)(null)),
      (ol = [
        `p2020`,
        `th`,
        `p20`,
        `bj`,
        `bje`,
        `tbj`,
        `bac`,
        `tbac`,
        `tb`,
        `hilo`,
        `thl`,
        `omaha`,
        `oh`,
        `derby-race`,
        `drt`,
      ]),
      (sl = {
        spades: `♠`,
        hearts: `♥`,
        diamonds: `♦`,
        clubs: `♣`,
        s: `♠`,
        h: `♥`,
        d: `♦`,
        c: `♣`,
      }));
  });
function ll() {
  vl.forEach(function (e) {
    e(gl);
  });
}
function ul() {
  gl ||
    _l ||
    ((_l = !0),
    tc
      .get(`/api/sports/my-limits`)
      .then(function (e) {
        ((gl = e.data || {}), ll());
      })
      .catch(function () {
        ((gl = {}), ll());
      })
      .finally(function () {
        _l = !1;
      }));
}
function dl() {
  var [e, t] = (0, hl.useState)(gl);
  return (
    (0, hl.useEffect)(function () {
      if (gl) {
        t(gl);
        return;
      }
      return (
        vl.push(t),
        ul(),
        function () {
          vl = vl.filter(function (e) {
            return e !== t;
          });
        }
      );
    }, []),
    e || {}
  );
}
function fl() {
  return (gl && gl.casinoLock) || { all: !1, lobbies: [], slugs: [] };
}
function pl(e, t) {
  var n = fl();
  return n.all || (n.lobbies || []).indexOf(t ? `bfg` : `tps`) >= 0
    ? !0
    : (n.slugs || []).indexOf(String(e)) >= 0;
}
function ml(e) {
  if (e == null) return `No Limit`;
  var t = parseFloat(e);
  return t === 0
    ? `Disabled`
    : t >= 1e7
      ? (t / 1e7).toFixed(t % 1e7 == 0 ? 0 : 1) + `Cr`
      : t >= 1e5
        ? (t / 1e5).toFixed(t % 1e5 == 0 ? 0 : 1) + `L`
        : t >= 1e3
          ? (t / 1e3).toFixed(t % 1e3 == 0 ? 0 : 1) + `K`
          : String(Math.floor(t));
}
var hl,
  gl,
  _l,
  vl,
  yl = t(() => {
    ((hl = r(n())), rc(), (gl = null), (_l = !1), (vl = []));
  }),
  bl = i((e, t) => {
    var n = (function () {
      var e = {
          en: { code: `en`, label: `English`, short: `EN`, rtl: !1 },
          ar: { code: `ar`, label: `العربية`, short: `ع`, rtl: !1 },
        },
        t = `en`,
        n = { AE: 1, SA: 1 },
        r = { AED: 1, SAR: 1 },
        i = {
          ar: {
            "Auto Deposit & Withdrawal": `الإيداع والسحب التلقائي`,
            Soccer: `كرة القدم`,
            Football: `كرة القدم`,
            Tennis: `التنس`,
            Cricket: `الكريكت`,
            "Horse Race": `سباق الخيل`,
            "Horse Racing": `سباق الخيل`,
            Greyhound: `سباق الكلاب`,
            "Grey Hound": `سباق الكلاب`,
            "Sports Book": `الرهانات الرياضية`,
            "All Sports": `جميع الرياضات`,
            "Current Position": `المركز الحالي`,
            Results: `النتائج`,
            "Market Rules": `قواعد السوق`,
            "Terms & Conditions": `الشروط والأحكام`,
            Home: `الرئيسية`,
            "Go Back": `رجوع`,
            Dashboard: `لوحة التحكم`,
            Profile: `الملف الشخصي`,
            Statement: `كشف الحساب`,
            "My Bets": `رهاناتي`,
            "Bet History": `سجل الرهانات`,
            "Profit Loss": `الربح والخسارة`,
            Result: `النتيجة`,
            Logout: `تسجيل الخروج`,
            Login: `تسجيل الدخول`,
            Settings: `الإعدادات`,
            Language: `اللغة`,
            "Change Password": `تغيير كلمة المرور`,
            Password: `كلمة المرور`,
            Search: `بحث`,
            Cancel: `إلغاء`,
            Save: `حفظ`,
            Submit: `إرسال`,
            Close: `إغلاق`,
            Remove: `إزالة`,
            Copy: `نسخ`,
            Loading: `جارٍ التحميل`,
            "Loading…": `جارٍ التحميل…`,
            "Account not found": `لم يتم العثور على الحساب`,
            "My Wallet": `محفظتي`,
            Wallet: `المحفظة`,
            Deposit: `إيداع`,
            Withdraw: `سحب`,
            Accounts: `الحسابات`,
            Balance: `الرصيد`,
            Cash: `نقد`,
            Credit: `ائتمان`,
            Risk: `المخاطرة`,
            Exposure: `الانكشاف`,
            Amount: `المبلغ`,
            Available: `المتاح`,
            "Available For Betting": `المتاح للمراهنة`,
            "Balance Breakdown": `تفاصيل الرصيد`,
            "How It Works": `كيف يعمل`,
            "Deposit Status": `حالة الإيداع`,
            "Withdrawal Status": `حالة السحب`,
            "Payment Accounts": `حسابات الدفع`,
            "Add Account": `إضافة حساب`,
            "ADD ACCOUNT": `إضافة حساب`,
            "ADD NEW ACCOUNT": `إضافة حساب جديد`,
            "No saved accounts": `لا توجد حسابات محفوظة`,
            Country: `الدولة`,
            Bank: `بنك`,
            "Select Bank": `اختر البنك`,
            "Account Name": `اسم الحساب`,
            "Account Number": `رقم الحساب`,
            "Transaction ID": `رقم العملية`,
            "Wallet Address": `عنوان المحفظة`,
            Coin: `العملة الرقمية`,
            Network: `الشبكة`,
            "Book Detail 2": `تفاصيل الدفتر ٢`,
            "No child role available": `لا يوجد دور فرعي متاح`,
            "col:Title": `العنوان`,
            Master: `ماستر`,
            Supermaster: `سوبر ماستر`,
            Admin: `مشرف`,
            "Super Admin": `مشرف أعلى`,
            Dealer: `وكيل`,
            Malik: `مالك`,
            Owner: `المالك`,
            "Client (P/L)": `العميل (ربح/خسارة)`,
            "col:Detail": `التفاصيل`,
            'ON par aap ke <b>poore downline</b> ko stake fields par "kam se kam" min-hints nahi dikhte. Min-bet ka pehra qaim rehta hai — sirf display chhupta hai.': `عند التفعيل، لن تظهر لـ<b>جميع فروعك</b> تلميحات الحد الأدنى في خانات الرهان. حد الرهان الأدنى يبقى سارياً — يُخفى العرض فقط.`,
            "Allowed Market Types ({x})": `أنواع الأسواق المسموحة ({x})`,
            "{x} - Final Sheet": `{x} - الكشف النهائي`,
            "ye adad aap ke poore downline par lagte hain — neeche wala inhe <b>barha</b> sakta hai, <b>ghata nahi</b> sakta.": `تنطبق هذه المبالغ على جميع فروعك — يمكن لمن تحتك <b>زيادتها</b> ولا <b>إنقاصها</b>.`,
            "Credit Received": `الائتمان المستلم`,
            "Balance UpLine": `رصيد الأصل`,
            Users: `المستخدمون`,
            Reports: `التقارير`,
            Exp: `انكشاف`,
            "Bet Lock": `قفل الرهان`,
            Deposits: `الإيداعات`,
            Withdrawals: `السحوبات`,
            Bets: `الرهانات`,
            Ledger: `الدفتر`,
            Games: `الألعاب`,
            "Search-Users": `بحث المستخدمين`,
            "Sport Highlights": `أبرز الرياضات`,
            "Online Right Now": `متصل الآن`,
            "Report Type": `نوع التقرير`,
            "Book Detail": `تفاصيل الدفتر`,
            "Daily PL": `الربح والخسارة اليومي`,
            "Daily Report": `التقرير اليومي`,
            "Final Sheet": `الكشف النهائي`,
            "Commission Report": `تقرير العمولة`,
            Report: `تقرير`,
            "Hide Zero Amounts": `إخفاء المبالغ الصفرية`,
            "Credit Remaining": `الائتمان المتبقي`,
            "P/L Downline": `ربح/خسارة الفروع`,
            "New User": `مستخدم جديد`,
            "Cash / Credit": `نقد / ائتمان`,
            Edit: `تعديل`,
            InActive: `غير نشط`,
            "Settle Account": `تسوية الحساب`,
            "Load Balance": `تحميل الرصيد`,
            Username: `اسم المستخدم`,
            "User Name": `اسم المستخدم`,
            Type: `النوع`,
            Client: `العميل`,
            "P/L": `ربح/خسارة`,
            Share: `الحصة`,
            "Available Balance": `الرصيد المتاح`,
            Options: `خيارات`,
            Name: `الاسم`,
            Total: `الإجمالي`,
            Bettor: `مراهن`,
            IsActive: `نشط`,
            "Betting Allowed": `المراهنة مسموحة`,
            Phone: `الهاتف`,
            Reference: `المرجع`,
            Notes: `ملاحظات`,
            Note: `ملاحظة`,
            "Allowed Market Types": `أنواع الأسواق المسموحة`,
            "Hide Min Limits": `إخفاء الحدود الدنيا`,
            "{x} - Clients List": `{x} - قائمة العملاء`,
            "Create New User under {x}": `إنشاء مستخدم جديد تحت {x}`,
            "Risk (blocked)": `المخاطرة (محجوزة)`,
            "Site jaisi — hamesha up to date; screen band par bhi notification": `مثل الموقع تماماً — دائماً محدّث؛ إشعارات حتى والشاشة مغلقة`,
            "App install hai": `التطبيق مثبّت`,
            "Showing {a} to {b} of {c} entries": `عرض {a} إلى {b} من {c} إدخال`,
            "Showing 0 entries": `عرض 0 إدخال`,
            "Show {x} entries": `إظهار {x} إدخال`,
            "Search:": `بحث:`,
            "My Bets / History": `رهاناتي / السجل`,
            "col:Selection": `الاختيار`,
            "col:Side": `الجانب`,
            "col:Status": `الحالة`,
            "col:Odds": `الاحتمالات`,
            "col:Risk": `المخاطرة`,
            "col:Date": `التاريخ`,
            "col:Description": `الوصف`,
            "col:Amount": `المبلغ`,
            "col:Balance": `الرصيد`,
            "col:Placed": `وُضع في`,
            "col:Updated": `حُدّث`,
            "col:Match name": `اسم المباراة`,
            "col:Market Name": `اسم السوق`,
            "col:Result": `النتيجة`,
            "col:Sport": `الرياضة`,
            "col:Type": `النوع`,
            "col:Profit Loss": `الربح والخسارة`,
            "No {x} markets": `لا توجد أسواق {x}`,
            "Loading {x} markets": `جارٍ تحميل أسواق {x}`,
            "{x} refreshed": `تم تحديث {x}`,
            "col:Matched": `مطابق`,
            "col:Runner": `المتسابق`,
            "col:Price": `السعر`,
            "col:Event": `الحدث`,
            "col:Position": `المركز`,
            "col:Stake": `مبلغ الرهان`,
            "tab:Active": `نشط`,
            "tab:Settled": `تمت التسوية`,
            "tab:Voided": `ملغى`,
            "tab:Cancelled": `ملغي`,
            "profile:Stake": `مبالغ الرهان`,
            "Welcome to Exchange.": `مرحباً بك في البورصة`,
            Liable: `الالتزام`,
            "Active Bets": `الرهانات النشطة`,
            RISK: `المخاطرة`,
            blocked: `محظور`,
            Inplay: `مباشر`,
            Refresh: `تحديث`,
            "No event available": `لا توجد أحداث متاحة`,
            "No races available": `لا توجد سباقات متاحة`,
            "Market Position": `مركز السوق`,
            Plus: `زائد`,
            "Save changes": `حفظ التغييرات`,
            NewPassword: `كلمة المرور الجديدة`,
            Update: `تحديث`,
            "BPexch App": `تطبيق BPexch`,
            "Site jaisi": `مثل الموقع تماماً`,
            "hamesha up to date": `دائماً محدّث`,
            "screen band par bhi notification": `إشعارات حتى والشاشة مغلقة`,
            "App Install karein": `ثبّت التطبيق`,
            "Report Filter": `تصفية التقرير`,
            "Account Ledger": `دفتر الحساب`,
            "entries per page": `إدخالات لكل صفحة`,
            Print: `طباعة`,
            Date: `التاريخ`,
            Description: `الوصف`,
            "Opening Balance": `الرصيد الافتتاحي`,
            Showing: `عرض`,
            entry: `إدخال`,
            entries: `إدخالات`,
            Show: `إظهار`,
            Previous: `السابق`,
            Next: `التالي`,
            "No data available in table": `لا توجد بيانات في الجدول`,
            "No matching records found": `لم يتم العثور على سجلات مطابقة`,
            "Market Results": `نتائج السوق`,
            "Match name": `اسم المباراة`,
            "Market Name": `اسم السوق`,
            "Sports ProfitLoss": `أرباح وخسائر الرياضة`,
            "Bets History": `سجل الرهانات`,
            All: `الكل`,
            Casino: `الكازينو`,
            Placed: `وُضع في`,
            Updated: `حُدّث`,
            "Deposit Fund Request": `طلب إيداع أموال`,
            "Withdraw Request": `طلب سحب`,
            SUBMIT: `إرسال`,
            "SUBMITTING...": `جارٍ الإرسال...`,
            "Enter transaction ID or reference number": `أدخل رقم العملية أو المرجع`,
            "Minimum deposit is": `الحد الأدنى للإيداع هو`,
            "Maximum deposit is": `الحد الأقصى للإيداع هو`,
            "Minimum withdrawal is": `الحد الأدنى للسحب هو`,
            Maximum: `الحد الأقصى`,
            "per transaction": `لكل عملية`,
            "Exceeds available balance": `يتجاوز الرصيد المتاح`,
            "Min deposit": `الحد الأدنى للإيداع`,
            "Min withdrawal": `الحد الأدنى للسحب`,
            Withdrawable: `قابل للسحب`,
            default: `افتراضي`,
            "SAVE & VERIFY": `حفظ وتحقق`,
            "Attachment (Payment Screenshot)": `المرفق (لقطة شاشة الدفع)`,
            "IBAN (optional)": `الآيبان (اختياري)`,
            "Network (TRC20 / BEP20 - optional)": `الشبكة (TRC20 / BEP20 - اختياري)`,
            "Account Type Name (e.g. Skrill)": `اسم نوع الحساب (مثل Skrill)`,
            "Tap to attach screenshot": `اضغط لإرفاق لقطة الشاشة`,
            "Not enabled.": `غير مفعّل.`,
            "No saved accounts. Add an account first.": `لا توجد حسابات محفوظة. أضف حسابًا أولاً.`,
            "Bets deduct from Credit first, then Cash": `تُخصم الرهانات من الائتمان أولاً ثم من النقد`,
            "Winnings always go to Cash": `الأرباح تذهب دائماً إلى النقد`,
            "Withdrawals only from Cash (Credit cannot be withdrawn)": `السحب من النقد فقط (لا يمكن سحب الائتمان)`,
            "MY WALLET": `محفظتي`,
            "AVAILABLE BALANCE": `الرصيد المتاح`,
            "AVAILABLE FOR BETTING": `المتاح للمراهنة`,
            "BALANCE BREAKDOWN": `تفاصيل الرصيد`,
            "HOW IT WORKS": `كيف يعمل`,
            "ACCOUNT INFORMATION": `معلومات الحساب`,
            LOCKED: `محجوز`,
            "Total Balance": `إجمالي الرصيد`,
            "Cash Balance": `الرصيد النقدي`,
            "Credit Balance": `رصيد الائتمان`,
            "Available for Withdrawal": `المتاح للسحب`,
            "Payment Method": `طريقة الدفع`,
            "Bank Name": `اسم البنك`,
            Address: `العنوان`,
            Selected: `المختار`,
            "Scan to pay": `امسح للدفع`,
            "Add Crypto Account": `إضافة حساب عملات رقمية`,
            "No coin": `لا توجد عملة`,
            "No deposit accounts available yet": `لا توجد حسابات إيداع بعد`,
            "Active Deposit Bonus": `مكافأة إيداع نشطة`,
            "Outstanding bonus liability": `التزام المكافأة المستحق`,
            "Transaction ID / Reference Number": `رقم العملية / المرجع`,
            "Enter amount": `أدخل المبلغ`,
            Pending: `قيد الانتظار`,
            Approved: `تمت الموافقة`,
            Rejected: `مرفوض`,
            Completed: `مكتمل`,
            "Terms and conditions": `الشروط والأحكام`,
            Lobby: `الردهة`,
            "No games available": `لا توجد ألعاب متاحة`,
            "32 Card Casino": `كازينو 32 ورقة`,
            "7 Up Down": `7 فوق وتحت`,
            AAA: `أمار أكبر أنتوني`,
            "Amar Akbar Anthony": `أمار أكبر أنتوني`,
            "Andar Bahar": `أندر باهار`,
            "Auto Roulette": `الروليت الآلي`,
            Aviator: `أفياتور`,
            AviatorX: `أفياتور إكس`,
            Baccarat: `باكارات`,
            BlackJack: `بلاك جاك`,
            Blackjack: `بلاك جاك`,
            "Bollywood Casino": `كازينو بوليوود`,
            "Casino War": `حرب الكازينو`,
            "Center Card": `الورقة الوسطى`,
            "Chicken Road 2": `طريق الدجاجة 2`,
            "Derby Race": `سباق ديربي`,
            "Derby Race Turbo": `سباق ديربي توربو`,
            "Dragon Tiger": `التنين والنمر`,
            "Dus Ka Dum": `دس كا دم`,
            "Fortune Gems": `جواهر الحظ`,
            "Heads & Tails": `صورة أم كتابة`,
            HILO: `هاي لو`,
            "Hi Lo": `هاي لو`,
            "High Card": `أعلى ورقة`,
            Lottery: `اليانصيب`,
            "Lucky 7": `الرقم 7 المحظوظ`,
            "Lucky Draw Pakistan": `السحب المحظوظ — باكستان`,
            "Lucky Draw Thailand": `السحب المحظوظ — تايلاند`,
            "Muflis TeenPatti": `مفلس تين باتي`,
            "Omaha Hi": `أوماها هاي`,
            "One Card 20-20": `ورقة واحدة 20-20`,
            "One Card Meter": `ورقة واحدة ميتر`,
            "Pakistan Lucky Draw": `السحب المحظوظ — باكستان`,
            Poker: `بوكر`,
            "Poker 20-20": `بوكر 20-20`,
            "Queen Race": `سباق الملكة`,
            "Race 20-20": `سباق 20-20`,
            "Race To 17": `السباق إلى 17`,
            "Rock Paper Scissor": `حجر ورقة مقص`,
            "Sic-Bo": `سيك بو`,
            "Super Over ODI": `سوبر أوفر ODI`,
            "Super Over T20": `سوبر أوفر T20`,
            "TeenPatti ODI": `تين باتي ODI`,
            "TeenPatti T20": `تين باتي T20`,
            "Thailand Lucky Draw": `السحب المحظوظ — تايلاند`,
            "The Trap": `الفخ`,
            Trio: `ثلاثي`,
            "Turbo Baccarat": `باكارات توربو`,
            "Turbo BlackJack": `بلاك جاك توربو`,
            "Turbo Blackjack": `بلاك جاك توربو`,
            "Turbo Hi Lo": `هاي لو توربو`,
            "Turbo HiLo": `هاي لو توربو`,
          },
        };
      function a(n) {
        var r = String(n ?? ``)
          .toLowerCase()
          .trim();
        return Object.prototype.hasOwnProperty.call(e, r) ? r : t;
      }
      var o = /^(col|tab|bet|profile):/;
      function s(e, n) {
        var r = String(e ?? ``),
          s = a(n),
          c = s === t ? null : i[s];
        if (c && Object.prototype.hasOwnProperty.call(c, r)) return c[r];
        if (o.test(r)) {
          var l = r.replace(o, ``);
          return c && Object.prototype.hasOwnProperty.call(c, l) ? c[l] : l;
        }
        return r;
      }
      function c(t) {
        return r[
          String(t ?? ``)
            .toUpperCase()
            .trim()
        ]
          ? [e.en, e.ar]
          : [e.en];
      }
      function l(t) {
        return n[
          String(t ?? ``)
            .toUpperCase()
            .trim()
        ]
          ? [e.en, e.ar]
          : [e.en];
      }
      function u(e) {
        return c(e).length > 1;
      }
      function d(e, n) {
        var r = a(e);
        return c(n)
          .map(function (e) {
            return e.code;
          })
          .indexOf(r) >= 0
          ? r
          : t;
      }
      function f(t) {
        return !!e[a(t)].rtl;
      }
      function p(t) {
        return e[a(t)];
      }
      function m() {
        return Object.keys(e).map(function (t) {
          return e[t];
        });
      }
      function h(e) {
        var t = i[a(e)];
        return t ? Object.keys(t).length : 0;
      }
      return {
        LANGS: e,
        DEFAULT_LANG: t,
        DICT: i,
        t: s,
        normalize: a,
        info: p,
        list: m,
        isRtl: f,
        count: h,
        langsFor: c,
        langsForRegion: l,
        hasChoice: u,
        resolveFor: d,
      };
    })();
    (t !== void 0 && t.exports && (t.exports = n),
      typeof globalThis < `u` && (globalThis.BPi18n = n));
  });
function xl() {
  try {
    let e = new URLSearchParams(window.location.search).get(`lang`);
    if (e) return String(e).toLowerCase();
    let t = String(window.location.hash || ``).match(/[?&]lang=([A-Za-z-]+)/);
    if (t) return t[1].toLowerCase();
  } catch {}
  return `en`;
}
function Sl(e) {
  return !Cl || !Cl.t ? e : Cl.t(e, wl);
}
var Cl,
  wl,
  Tl = t(() => {
    (bl(),
      (Cl = (typeof globalThis < `u` && globalThis.BPi18n) || null),
      (wl = xl()));
  });
function El(e, t) {
  let n = u(e),
    r = new Set(Pc),
    i = n.filter(
      (e) =>
        (t ? r.has(e.slug) : !r.has(e.slug) && !Al.has(e.slug)) &&
        !pl(e.slug, t),
    ),
    a = t ? jl : kl,
    o = (e) => {
      let t = a.indexOf(e.slug);
      return t < 0 ? 999 : t;
    };
  return i.slice().sort((e, t) => o(e) - o(t) || e.name.localeCompare(t.name));
}
function Dl() {
  let e = Le(),
    { tab: t } = ze(),
    n = kc((e) => e.user),
    r = String(t || ``).toLowerCase() === `betfairgames`,
    i = (0, Ol.useMemo)(() => El(n, r), [n, r, dl()]),
    a = (e) =>
      (e.display && e.display.image) || `/assets/games/images/${e.slug}.svg`;
  return r
    ? (0, J.jsx)(`div`, {
        className: `bp-tps bp-exlobby-page`,
        children: (0, J.jsxs)(`div`, {
          className: `card ExMainCardbundle`,
          children: [
            (0, J.jsx)(Gc, { lobbyActive: !0 }),
            (0, J.jsx)(`div`, {
              className: `card-body bp-exlobby`,
              children: (0, J.jsxs)(`div`, {
                className: `bp-exlobby-row`,
                children: [
                  i.map((t) =>
                    (0, J.jsx)(
                      `div`,
                      {
                        className: `bp-extile`,
                        children: (0, J.jsxs)(`a`, {
                          href: `/TeenPattiStudio/game/${t.slug}`,
                          onClick: (n) => {
                            (n.preventDefault(), e(`/game/${t.slug}`));
                          },
                          children: [
                            (0, J.jsx)(`img`, {
                              src: a(t),
                              alt: Sl(t.name),
                              loading: `lazy`,
                              decoding: `async`,
                              width: `214`,
                              height: `136`,
                            }),
                            (0, J.jsx)(`div`, {
                              className: `bp-extile-cap`,
                              children: Sl(t.name),
                            }),
                          ],
                        }),
                      },
                      t.slug,
                    ),
                  ),
                  i.length
                    ? null
                    : (0, J.jsx)(`p`, {
                        className: `bp-extile-cap`,
                        style: { padding: 30 },
                        children: Sl(`No games available`),
                      }),
                ],
              }),
            }),
          ],
        }),
      })
    : (0, J.jsx)(`div`, {
        className: `lobby-ctn bp-lobby`,
        children: (0, J.jsx)(`div`, {
          className: `card-body lobby-content`,
          children: (0, J.jsxs)(`div`, {
            className: `row bp-lobby-row`,
            children: [
              i.map((t) =>
                (0, J.jsxs)(
                  `div`,
                  {
                    className: `image-wrapper`,
                    children: [
                      (0, J.jsxs)(`a`, {
                        href: `/TeenPattiStudio/game/${t.slug}`,
                        onClick: (n) => {
                          (n.preventDefault(), e(`/game/${t.slug}`));
                        },
                        children: [
                          (0, J.jsx)(`img`, {
                            src: a(t),
                            alt: Sl(t.name),
                            className: `responsive-image`,
                            loading: `lazy`,
                            decoding: `async`,
                            width: `290`,
                            height: `180`,
                          }),
                          ` `,
                        ],
                      }),
                      (0, J.jsx)(`p`, {
                        className: `image-caption`,
                        style: { color: `white` },
                        children: Sl(t.name),
                      }),
                    ],
                  },
                  t.slug,
                ),
              ),
              i.length
                ? null
                : (0, J.jsx)(`p`, {
                    className: `image-caption`,
                    style: { color: `white`, padding: 30 },
                    children: Sl(`No games available`),
                  }),
            ],
          }),
        }),
      });
}
var Ol,
  J,
  kl,
  Al,
  jl,
  Ml = t(() => {
    ((Ol = r(n())),
      ar(),
      Ac(),
      f(),
      zc(),
      cl(),
      yl(),
      Tl(),
      (J = a()),
      (kl =
        `aviator.aviator-classic.cr2.tp20.tpodi.ar.mtp.rps.pkr.sicbo.hilotps.ab.dt.7ud.aaa.soo.soc.32c.bc.rt17.r2020.hc.cwar.l7.cc.trio.trap.oc20.ocm.qr.dkd.lot.ht.fg`.split(
          `.`,
        )),
      (Al = new Set([`lucky-thailand`, `lucky-pakistan`])),
      (jl = [
        `p2020`,
        `p20`,
        `th`,
        `bj`,
        `bje`,
        `tbj`,
        `bac`,
        `tbac`,
        `tb`,
        `hilo`,
        `thl`,
        `omaha`,
        `oh`,
        `derby-race`,
        `drt`,
      ]));
  });
function Nl(e) {
  if (!e || typeof document > `u`) return;
  let t = document.head || document.getElementsByTagName(`head`)[0],
    n = document.createElement(`style`);
  ((n.type = `text/css`),
    t.appendChild(n),
    n.styleSheet
      ? (n.styleSheet.cssText = e)
      : n.appendChild(document.createTextNode(e)));
}
function Pl(e) {
  return e.label !== void 0;
}
function Fl(...e) {
  return e.filter(Boolean).join(` `);
}
function Il(e) {
  let [t, n] = e.split(`-`),
    r = [];
  return (t && r.push(t), n && r.push(n), r);
}
function Ll() {
  if (typeof window > `u` || typeof document > `u`) return `ltr`;
  let e = document.documentElement.getAttribute(`dir`);
  return e === `auto` || !e
    ? window.getComputedStyle(document.documentElement).direction
    : e;
}
function Rl(e, t) {
  let n = {};
  return (
    [e, t].forEach((e, t) => {
      let r = t === 1,
        i = r ? `--mobile-offset` : `--offset`,
        a = r ? su : ou;
      function o(e) {
        [`top`, `right`, `bottom`, `left`].forEach((t) => {
          n[`${i}-${t}`] = typeof e == `number` ? `${e}px` : e;
        });
      }
      typeof e == `number` || typeof e == `string`
        ? o(e)
        : typeof e == `object`
          ? [`top`, `right`, `bottom`, `left`].forEach((t) => {
              e[t] === void 0
                ? (n[`${i}-${t}`] = a)
                : (n[`${i}-${t}`] =
                    typeof e[t] == `number` ? `${e[t]}px` : e[t]);
            })
          : o(a);
    }),
    n
  );
}
var Y,
  zl,
  Bl,
  Vl,
  Hl,
  Ul,
  Wl,
  Gl,
  Kl,
  ql,
  Jl,
  Yl,
  Xl,
  Zl,
  Ql,
  X,
  $l,
  eu,
  tu,
  nu,
  ru,
  iu,
  au,
  ou,
  su,
  cu,
  lu,
  uu,
  du,
  fu,
  pu,
  mu,
  hu = t(() => {
    ((Y = r(n(), 1)),
      (zl = r(o(), 1)),
      (Bl = (e) => {
        switch (e) {
          case `success`:
            return Ul;
          case `info`:
            return Gl;
          case `warning`:
            return Wl;
          case `error`:
            return Kl;
          default:
            return null;
        }
      }),
      (Vl = Array(12).fill(0)),
      (Hl = ({ visible: e, className: t }) =>
        Y.createElement(
          `div`,
          {
            className: [`sonner-loading-wrapper`, t].filter(Boolean).join(` `),
            "data-visible": e,
          },
          Y.createElement(
            `div`,
            { className: `sonner-spinner` },
            Vl.map((e, t) =>
              Y.createElement(`div`, {
                className: `sonner-loading-bar`,
                key: `spinner-bar-${t}`,
              }),
            ),
          ),
        )),
      (Ul = Y.createElement(
        `svg`,
        {
          xmlns: `http://www.w3.org/2000/svg`,
          viewBox: `0 0 20 20`,
          fill: `currentColor`,
          height: `20`,
          width: `20`,
          "aria-hidden": `true`,
        },
        Y.createElement(`path`, {
          fillRule: `evenodd`,
          d: `M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z`,
          clipRule: `evenodd`,
        }),
      )),
      (Wl = Y.createElement(
        `svg`,
        {
          xmlns: `http://www.w3.org/2000/svg`,
          viewBox: `0 0 24 24`,
          fill: `currentColor`,
          height: `20`,
          width: `20`,
          "aria-hidden": `true`,
        },
        Y.createElement(`path`, {
          fillRule: `evenodd`,
          d: `M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z`,
          clipRule: `evenodd`,
        }),
      )),
      (Gl = Y.createElement(
        `svg`,
        {
          xmlns: `http://www.w3.org/2000/svg`,
          viewBox: `0 0 20 20`,
          fill: `currentColor`,
          height: `20`,
          width: `20`,
          "aria-hidden": `true`,
        },
        Y.createElement(`path`, {
          fillRule: `evenodd`,
          d: `M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z`,
          clipRule: `evenodd`,
        }),
      )),
      (Kl = Y.createElement(
        `svg`,
        {
          xmlns: `http://www.w3.org/2000/svg`,
          viewBox: `0 0 20 20`,
          fill: `currentColor`,
          height: `20`,
          width: `20`,
          "aria-hidden": `true`,
        },
        Y.createElement(`path`, {
          fillRule: `evenodd`,
          d: `M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z`,
          clipRule: `evenodd`,
        }),
      )),
      (ql = Y.createElement(
        `svg`,
        {
          xmlns: `http://www.w3.org/2000/svg`,
          width: `12`,
          height: `12`,
          viewBox: `0 0 24 24`,
          fill: `none`,
          stroke: `currentColor`,
          strokeWidth: `1.5`,
          strokeLinecap: `round`,
          strokeLinejoin: `round`,
          "aria-hidden": `true`,
        },
        Y.createElement(`line`, { x1: `18`, y1: `6`, x2: `6`, y2: `18` }),
        Y.createElement(`line`, { x1: `6`, y1: `6`, x2: `18`, y2: `18` }),
      )),
      (Jl = () => {
        let [e, t] = Y.useState(document.hidden);
        return (
          Y.useEffect(() => {
            let e = () => {
              t(document.hidden);
            };
            return (
              document.addEventListener(`visibilitychange`, e),
              () => document.removeEventListener(`visibilitychange`, e)
            );
          }, []),
          e
        );
      }),
      (Yl = 1),
      (Xl = 100),
      (Zl = (e) =>
        typeof e?.id == `number` || e?.id?.length > 0 ? e.id : Yl++),
      (Ql = class {
        constructor() {
          ((this.subscribe = (e) => (
            this.subscribers.push(e),
            this.getActiveToasts().forEach((t) => e(t)),
            () => {
              let t = this.subscribers.indexOf(e);
              this.subscribers.splice(t, 1);
            }
          )),
            (this.publish = (e) => {
              this.subscribers.forEach((t) => t(e));
            }),
            (this.addToast = (e) => {
              (this.publish(e),
                (this.toasts = [...this.toasts, e]),
                this.trimHistory());
            }),
            (this.trimHistory = () => {
              let e = this.toasts.length - Xl;
              e <= 0 ||
                (this.toasts = this.toasts.filter((t) =>
                  e > 0 && this.dismissedToasts.has(t.id)
                    ? (this.dismissedToasts.delete(t.id), e--, !1)
                    : !0,
                ));
            }),
            (this.create = (e) => {
              let { message: t, ...n } = e,
                r = Zl(e),
                i = this.pendingDismissals.get(r);
              i !== void 0 &&
                (cancelAnimationFrame(i),
                this.pendingDismissals.delete(r),
                this.dismissedToasts.delete(r));
              let a = this.dismissedToasts.has(r),
                o = e.dismissible === void 0 ? !0 : e.dismissible;
              return (
                a &&
                  (this.dismissedToasts.delete(r),
                  (this.toasts = this.toasts.filter((e) => e.id !== r))),
                !a && this.toasts.find((e) => e.id === r)
                  ? (this.toasts = this.toasts.map((n) =>
                      n.id === r
                        ? (this.publish({ ...n, ...e, id: r, title: t }),
                          { ...n, ...e, id: r, dismissible: o, title: t })
                        : n,
                    ))
                  : this.addToast({ title: t, ...n, dismissible: o, id: r }),
                r
              );
            }),
            (this.dismiss = (e) => {
              if (e == null)
                return (
                  this.getActiveToasts().forEach((e) => {
                    (this.dismissedToasts.add(e.id),
                      this.subscribers.forEach((t) =>
                        t({ id: e.id, dismiss: !0 }),
                      ));
                  }),
                  e
                );
              this.dismissedToasts.add(e);
              let t = this.pendingDismissals.get(e);
              return (
                t !== void 0 && cancelAnimationFrame(t),
                this.pendingDismissals.set(
                  e,
                  requestAnimationFrame(() => {
                    (this.pendingDismissals.delete(e),
                      this.subscribers.forEach((t) =>
                        t({ id: e, dismiss: !0 }),
                      ));
                  }),
                ),
                e
              );
            }),
            (this.message = (e, t) =>
              this.create({ ...t, message: e, type: void 0 })),
            (this.error = (e, t) =>
              this.create({ ...t, message: e, type: `error` })),
            (this.success = (e, t) =>
              this.create({ ...t, type: `success`, message: e })),
            (this.info = (e, t) =>
              this.create({ ...t, type: `info`, message: e })),
            (this.warning = (e, t) =>
              this.create({ ...t, type: `warning`, message: e })),
            (this.loading = (e, t) =>
              this.create({ ...t, type: `loading`, message: e })),
            (this.promise = (e, t) => {
              if (!t) return;
              let n;
              t.loading !== void 0 &&
                (n = this.create({
                  ...t,
                  promise: e,
                  type: `loading`,
                  message: t.loading,
                  description:
                    typeof t.description == `function` ? void 0 : t.description,
                }));
              let r = Promise.resolve(e instanceof Function ? e() : e),
                i = n !== void 0,
                a,
                o = r
                  .then(async (e) => {
                    if (((a = [`resolve`, e]), Y.isValidElement(e)))
                      ((i = !1),
                        this.create({ id: n, type: `default`, message: e }));
                    else if (eu(e) && !e.ok) {
                      i = !1;
                      let r =
                          typeof t.error == `function`
                            ? await t.error(`HTTP error! status: ${e.status}`)
                            : t.error,
                        a =
                          typeof t.description == `function`
                            ? await t.description(
                                `HTTP error! status: ${e.status}`,
                              )
                            : t.description,
                        o =
                          typeof r == `object` && !Y.isValidElement(r)
                            ? r
                            : { message: r };
                      this.create({
                        id: n,
                        type: `error`,
                        description: a,
                        ...o,
                      });
                    } else if (e instanceof Error) {
                      i = !1;
                      let r =
                          typeof t.error == `function`
                            ? await t.error(e)
                            : t.error,
                        a =
                          typeof t.description == `function`
                            ? await t.description(e)
                            : t.description,
                        o =
                          typeof r == `object` && !Y.isValidElement(r)
                            ? r
                            : { message: r };
                      this.create({
                        id: n,
                        type: `error`,
                        description: a,
                        ...o,
                      });
                    } else if (t.success !== void 0) {
                      i = !1;
                      let r =
                          typeof t.success == `function`
                            ? await t.success(e)
                            : t.success,
                        a =
                          typeof t.description == `function`
                            ? await t.description(e)
                            : t.description,
                        o =
                          typeof r == `object` && !Y.isValidElement(r)
                            ? r
                            : { message: r };
                      this.create({
                        id: n,
                        type: `success`,
                        description: a,
                        ...o,
                      });
                    }
                  })
                  .catch(async (e) => {
                    if (((a = [`reject`, e]), t.error !== void 0)) {
                      i = !1;
                      let r =
                          typeof t.error == `function`
                            ? await t.error(e)
                            : t.error,
                        a =
                          typeof t.description == `function`
                            ? await t.description(e)
                            : t.description,
                        o =
                          typeof r == `object` && !Y.isValidElement(r)
                            ? r
                            : { message: r };
                      this.create({
                        id: n,
                        type: `error`,
                        description: a,
                        ...o,
                      });
                    }
                  })
                  .finally(() => {
                    (i && (this.dismiss(n), (n = void 0)),
                      t.finally == null || t.finally.call(t));
                  }),
                s = () =>
                  new Promise((e, t) =>
                    o
                      .then(() => (a[0] === `reject` ? t(a[1]) : e(a[1])))
                      .catch(t),
                  );
              return typeof n != `string` && typeof n != `number`
                ? { unwrap: s }
                : Object.assign(n, { unwrap: s });
            }),
            (this.custom = (e, t) => {
              let n = Zl(t);
              return (this.create({ ...t, jsx: e(n), id: n, type: void 0 }), n);
            }),
            (this.getActiveToasts = () =>
              this.toasts.filter((e) => !this.dismissedToasts.has(e.id))),
            (this.subscribers = []),
            (this.toasts = []),
            (this.dismissedToasts = new Set()),
            (this.pendingDismissals = new Map()));
        }
      }),
      (X = new Ql()),
      ($l = (e, t) => X.message(e, t)),
      (eu = (e) =>
        e &&
        typeof e == `object` &&
        `ok` in e &&
        typeof e.ok == `boolean` &&
        `status` in e &&
        typeof e.status == `number`),
      (tu = $l),
      (nu = () => X.toasts),
      (ru = () => X.getActiveToasts()),
      (iu = Object.assign(
        tu,
        {
          success: X.success,
          info: X.info,
          warning: X.warning,
          error: X.error,
          custom: X.custom,
          message: X.message,
          promise: X.promise,
          dismiss: X.dismiss,
          loading: X.loading,
        },
        { getHistory: nu, getToasts: ru },
      )),
      Nl(
        `[data-sonner-toaster][dir=ltr],html[dir=ltr]{--toast-icon-margin-start:-3px;--toast-icon-margin-end:4px;--toast-svg-margin-start:-1px;--toast-svg-margin-end:0px;--toast-button-margin-start:auto;--toast-button-margin-end:0;--toast-close-button-start:0;--toast-close-button-end:unset;--toast-close-button-transform:translate(-35%, -35%)}[data-sonner-toaster][dir=rtl],html[dir=rtl]{--toast-icon-margin-start:4px;--toast-icon-margin-end:-3px;--toast-svg-margin-start:0px;--toast-svg-margin-end:-1px;--toast-button-margin-start:0;--toast-button-margin-end:auto;--toast-close-button-start:unset;--toast-close-button-end:0;--toast-close-button-transform:translate(35%, -35%)}[data-sonner-toaster]{position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1:hsl(0, 0%, 99%);--gray2:hsl(0, 0%, 97.3%);--gray3:hsl(0, 0%, 95.1%);--gray4:hsl(0, 0%, 93%);--gray5:hsl(0, 0%, 90.9%);--gray6:hsl(0, 0%, 88.7%);--gray7:hsl(0, 0%, 85.8%);--gray8:hsl(0, 0%, 78%);--gray9:hsl(0, 0%, 56.1%);--gray10:hsl(0, 0%, 52.3%);--gray11:hsl(0, 0%, 43.5%);--gray12:hsl(0, 0%, 9%);--border-radius:8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:0;z-index:999999999;transition:transform .4s ease}@media (hover:none) and (pointer:coarse){[data-sonner-toaster][data-lifted=true]{transform:none}}[data-sonner-toaster][data-x-position=right]{right:var(--offset-right)}[data-sonner-toaster][data-x-position=left]{left:var(--offset-left)}[data-sonner-toaster][data-x-position=center]{left:50%;transform:translateX(-50%)}[data-sonner-toaster][data-y-position=top]{top:var(--offset-top)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--offset-bottom)}[data-sonner-toast]{--y:translateY(100%);--lift-amount:calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:0;overflow-wrap:anywhere}[data-sonner-toast][data-styled=true]{padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px rgba(0,0,0,.1);width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}[data-sonner-toast]:focus-visible{box-shadow:0 4px 12px rgba(0,0,0,.1),0 0 0 2px rgba(0,0,0,.2)}[data-sonner-toast][data-y-position=top]{top:0;--y:translateY(-100%);--lift:1;--lift-amount:calc(1 * var(--gap))}[data-sonner-toast][data-y-position=bottom]{bottom:0;--y:translateY(100%);--lift:-1;--lift-amount:calc(var(--lift) * var(--gap))}[data-sonner-toast][data-styled=true] [data-description]{font-weight:400;line-height:1.4;color:#3f3f3f}[data-rich-colors=true][data-sonner-toast][data-styled=true] [data-description]{color:inherit}[data-sonner-toaster][data-sonner-theme=dark] [data-description]{color:#e8e8e8}[data-sonner-toast][data-styled=true] [data-title]{font-weight:500;line-height:1.5;color:inherit}[data-sonner-toast][data-styled=true] [data-icon]{display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}[data-sonner-toast][data-promise=true] [data-icon]>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}[data-sonner-toast][data-styled=true] [data-icon]>*{flex-shrink:0}[data-sonner-toast][data-styled=true] [data-icon] svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}[data-sonner-toast][data-styled=true] [data-content]{display:flex;flex-direction:column;gap:2px;flex:1;min-width:0}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;font-weight:500;cursor:pointer;outline:0;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}[data-sonner-toast][data-styled=true] [data-button]:focus-visible{box-shadow:0 0 0 2px rgba(0,0,0,.4)}[data-sonner-toast][data-styled=true] [data-button]:first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}[data-sonner-toast][data-styled=true] [data-cancel]{color:var(--normal-text);background:rgba(0,0,0,.08)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast][data-styled=true] [data-cancel]{background:rgba(255,255,255,.3)}[data-sonner-toast][data-styled=true] [data-close-button]{position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;color:var(--normal-text);background:var(--normal-bg);border:1px solid var(--normal-border);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast][data-styled=true] [data-close-button]:focus-visible{box-shadow:0 4px 12px rgba(0,0,0,.1),0 0 0 2px rgba(0,0,0,.2)}[data-sonner-toast][data-styled=true] [data-disabled=true]{cursor:not-allowed}[data-sonner-toast][data-styled=true]:hover [data-close-button]:hover{background:var(--gray2);border-color:var(--gray5)}[data-sonner-toast][data-swiping=true]::before{content:'';position:absolute;left:-100%;right:-100%;height:100%;z-index:-1}[data-sonner-toast][data-y-position=top][data-swiping=true]::before{bottom:50%;transform:scaleY(3) translateY(50%)}[data-sonner-toast][data-y-position=bottom][data-swiping=true]::before{top:50%;transform:scaleY(3) translateY(-50%)}[data-sonner-toast][data-swiping=false][data-removed=true]::before{content:'';position:absolute;inset:0;transform:scaleY(2)}[data-sonner-toast][data-expanded=true]::after{content:'';position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}[data-sonner-toast][data-mounted=true]{--y:translateY(0);opacity:1}[data-sonner-toast][data-expanded=false][data-front=false]{--scale:var(--toasts-before) * 0.05 + 1;--y:translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}[data-sonner-toast]>*{transition:opacity .4s}[data-sonner-toast][data-x-position=right]{right:0}[data-sonner-toast][data-x-position=left]{left:0}[data-sonner-toast][data-expanded=false][data-front=false][data-styled=true]>*{opacity:0}[data-sonner-toast][data-visible=false]{opacity:0;pointer-events:none}[data-sonner-toast][data-mounted=true][data-expanded=true]{--y:translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}[data-sonner-toast][data-removed=true][data-front=true][data-swipe-out=false]{--y:translateY(calc(var(--lift) * -100%));opacity:0}[data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=true]{--y:translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}[data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=false]{--y:translateY(40%);opacity:0;transition:transform .5s,opacity .2s}[data-sonner-toast][data-removed=true][data-front=false]::before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount-y,0)) translateX(var(--swipe-amount-x,0));transition:none}[data-sonner-toast][data-swiped=true]{-webkit-user-select:none;user-select:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation-duration:.2s;animation-timing-function:ease-out;animation-fill-mode:forwards}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=left]{animation-name:swipe-out-left}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=right]{animation-name:swipe-out-right}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=up]{animation-name:swipe-out-up}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=down]{animation-name:swipe-out-down}@keyframes swipe-out-left{from{transform:var(--y) translateX(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translateX(calc(var(--swipe-amount-x) - 100%));opacity:0}}@keyframes swipe-out-right{from{transform:var(--y) translateX(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translateX(calc(var(--swipe-amount-x) + 100%));opacity:0}}@keyframes swipe-out-up{from{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) - 100%));opacity:0}}@keyframes swipe-out-down{from{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) + 100%));opacity:0}}@media (max-width:600px){[data-sonner-toaster]{position:fixed;right:var(--mobile-offset-right);left:var(--mobile-offset-left);width:100%}[data-sonner-toaster][dir=rtl]{left:calc(var(--mobile-offset-left) * -1)}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset-left) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset-left)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--mobile-offset-bottom)}[data-sonner-toaster][data-y-position=top]{top:var(--mobile-offset-top)}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset-left);right:var(--mobile-offset-right);transform:none}}[data-sonner-toaster][data-sonner-theme=light]{--normal-bg:#fff;--normal-border:var(--gray4);--normal-text:var(--gray12);--success-bg:hsl(143, 85%, 96%);--success-border:hsl(145, 92%, 87%);--success-text:hsl(140, 100%, 27%);--info-bg:hsl(208, 100%, 97%);--info-border:hsl(221, 91%, 93%);--info-text:hsl(210, 92%, 45%);--warning-bg:hsl(49, 100%, 97%);--warning-border:hsl(49, 91%, 84%);--warning-text:hsl(31, 92%, 45%);--error-bg:hsl(359, 100%, 97%);--error-border:hsl(359, 100%, 94%);--error-text:hsl(360, 100%, 45%)}[data-sonner-toaster][data-sonner-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg:#000;--normal-border:hsl(0, 0%, 20%);--normal-text:var(--gray1)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg:#fff;--normal-border:var(--gray3);--normal-text:var(--gray12)}[data-sonner-toaster][data-sonner-theme=dark]{--normal-bg:#000;--normal-bg-hover:hsl(0, 0%, 12%);--normal-border:hsl(0, 0%, 20%);--normal-border-hover:hsl(0, 0%, 25%);--normal-text:var(--gray1);--success-bg:hsl(150, 100%, 6%);--success-border:hsl(147, 100%, 12%);--success-text:hsl(150, 86%, 65%);--info-bg:hsl(215, 100%, 6%);--info-border:hsl(223, 43%, 17%);--info-text:hsl(216, 87%, 65%);--warning-bg:hsl(64, 100%, 6%);--warning-border:hsl(60, 100%, 9%);--warning-text:hsl(46, 87%, 65%);--error-bg:hsl(358, 76%, 10%);--error-border:hsl(357, 89%, 16%);--error-text:hsl(358, 100%, 81%)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast] [data-close-button]{background:var(--normal-bg);border-color:var(--normal-border);color:var(--normal-text)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast] [data-close-button]:hover{background:var(--normal-bg-hover);border-color:var(--normal-border-hover)}[data-rich-colors=true][data-sonner-toast][data-type=success]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size:16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:first-child{animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}100%{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}100%{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}100%{opacity:.15}}@media (prefers-reduced-motion){.sonner-loading-bar,[data-sonner-toast],[data-sonner-toast]>*{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}`,
      ),
      (au = 3),
      (ou = `24px`),
      (su = `16px`),
      (cu = 4e3),
      (lu = 356),
      (uu = 14),
      (du = 45),
      (fu = 200),
      (pu = (e) => {
        let {
            invert: t,
            toast: n,
            unstyled: r,
            interacting: i,
            setHeights: a,
            visibleToasts: o,
            heights: s,
            index: c,
            toasts: l,
            expanded: u,
            removeToast: d,
            defaultRichColors: f,
            closeButton: p,
            style: m,
            cancelButtonStyle: h,
            actionButtonStyle: g,
            className: _ = ``,
            descriptionClassName: v = ``,
            duration: ee,
            position: y,
            gap: b,
            expandByDefault: x,
            classNames: S,
            icons: C,
            closeButtonAriaLabel: te = `Close toast`,
          } = e,
          [w, ne] = Y.useState(null),
          [re, T] = Y.useState(null),
          [E, D] = Y.useState(!1),
          [O, ie] = Y.useState(!1),
          [k, ae] = Y.useState(!1),
          [A, j] = Y.useState(!1),
          [oe, se] = Y.useState(!1),
          [ce, M] = Y.useState(0),
          [le, ue] = Y.useState(0),
          de = Y.useRef(n.duration || ee || cu),
          fe = Y.useRef(null),
          pe = Y.useRef(null),
          me = c === 0,
          he = c + 1 <= o,
          N = n.type,
          ge = N ?? `default`,
          _e = n.dismissible !== !1,
          ve = n.className || ``,
          ye = n.descriptionClassName || ``,
          P = Y.useMemo(
            () => s.findIndex((e) => e.toastId === n.id) || 0,
            [s, n.id],
          ),
          be = Y.useMemo(() => n.closeButton ?? p, [n.closeButton, p]),
          xe = Y.useMemo(() => n.duration || ee || cu, [n.duration, ee]),
          Se = Y.useRef(0),
          Ce = Y.useRef(0),
          we = Y.useRef(0),
          Te = Y.useRef(null),
          [Ee, De] = y.split(`-`),
          Oe = Y.useMemo(
            () => s.reduce((e, t, n) => (n >= P ? e : e + t.height), 0),
            [s, P],
          ),
          ke = Jl(),
          Ae = Y.useMemo(
            () => e.swipeDirections ?? Il(y),
            [e.swipeDirections, y],
          ),
          je = n.invert || t,
          Me = N === `loading`;
        ((Ce.current = Y.useMemo(() => P * b + Oe, [P, Oe])),
          Y.useEffect(() => {
            de.current = xe;
          }, [xe]),
          Y.useEffect(() => {
            D(!0);
          }, []),
          Y.useEffect(() => {
            let e = pe.current;
            if (e) {
              let t = e.getBoundingClientRect().height;
              return (
                ue(t),
                a((e) => [
                  { toastId: n.id, height: t, position: n.position },
                  ...e,
                ]),
                () => a((e) => e.filter((e) => e.toastId !== n.id))
              );
            }
          }, [a, n.id]),
          Y.useLayoutEffect(() => {
            if (!E) return;
            let e = pe.current,
              t = e.style.height;
            e.style.height = `auto`;
            let r = e.getBoundingClientRect().height;
            ((e.style.height = t),
              ue(r),
              a((e) =>
                e.find((e) => e.toastId === n.id)
                  ? e.map((e) => (e.toastId === n.id ? { ...e, height: r } : e))
                  : [{ toastId: n.id, height: r, position: n.position }, ...e],
              ));
          }, [E, n.title, n.description, a, n.id, n.jsx, n.action, n.cancel]));
        let Ne = Y.useCallback(() => {
          (ie(!0),
            M(Ce.current),
            a((e) => e.filter((e) => e.toastId !== n.id)),
            setTimeout(() => {
              d(n);
            }, fu));
        }, [n, d, a, Ce]);
        (Y.useEffect(() => {
          if (
            (n.promise && N === `loading`) ||
            n.duration === 1 / 0 ||
            n.type === `loading`
          )
            return;
          let e;
          return (
            u || i || ke
              ? (() => {
                  if (we.current < Se.current) {
                    let e = new Date().getTime() - Se.current;
                    de.current -= e;
                  }
                  we.current = new Date().getTime();
                })()
              : de.current !== 1 / 0 &&
                ((Se.current = new Date().getTime()),
                (e = setTimeout(() => {
                  (n.onAutoClose == null || n.onAutoClose.call(n, n), Ne());
                }, de.current))),
            () => clearTimeout(e)
          );
        }, [u, i, n, N, ke, Ne]),
          Y.useEffect(() => {
            n.delete && (Ne(), n.onDismiss == null || n.onDismiss.call(n, n));
          }, [Ne, n.delete]));
        function Pe() {
          return C?.loading
            ? Y.createElement(
                `div`,
                {
                  className: Fl(
                    S?.loader,
                    n?.classNames?.loader,
                    `sonner-loader`,
                  ),
                  "data-visible": N === `loading`,
                },
                C.loading,
              )
            : Y.createElement(Hl, {
                className: Fl(S?.loader, n?.classNames?.loader),
                visible: N === `loading`,
              });
        }
        let Fe = n.icon || C?.[N] || Bl(N);
        return Y.createElement(
          `li`,
          {
            tabIndex: 0,
            ref: pe,
            className: Fl(
              _,
              ve,
              S?.toast,
              n?.classNames?.toast,
              S?.[ge],
              n?.classNames?.[ge],
            ),
            "data-sonner-toast": ``,
            "data-rich-colors": n.richColors ?? f,
            "data-styled": !(n.jsx || n.unstyled || r),
            "data-mounted": E,
            "data-promise": !!n.promise,
            "data-swiped": oe,
            "data-removed": O,
            "data-visible": he,
            "data-y-position": Ee,
            "data-x-position": De,
            "data-index": c,
            "data-front": me,
            "data-swiping": k,
            "data-dismissible": _e,
            "data-type": N,
            "data-invert": je,
            "data-swipe-out": A,
            "data-swipe-direction": re,
            "data-expanded": !!(u || (x && E)),
            "data-testid": n.testId,
            style: {
              "--index": c,
              "--toasts-before": c,
              "--z-index": l.length - c,
              "--offset": `${O ? ce : Ce.current}px`,
              "--initial-height": x ? `auto` : `${le}px`,
              ...m,
              ...n.style,
            },
            onDragEnd: () => {
              (ae(!1), ne(null), (Te.current = null));
            },
            onPointerDown: (e) => {
              e.button !== 2 &&
                (Me ||
                  !_e ||
                  ((fe.current = new Date()),
                  M(Ce.current),
                  e.target.setPointerCapture(e.pointerId),
                  e.target.tagName !== `BUTTON` &&
                    (ae(!0), (Te.current = { x: e.clientX, y: e.clientY }))));
            },
            onPointerUp: () => {
              if (A || !_e) return;
              Te.current = null;
              let e = Number(
                  pe.current?.style
                    .getPropertyValue(`--swipe-amount-x`)
                    .replace(`px`, ``) || 0,
                ),
                t = Number(
                  pe.current?.style
                    .getPropertyValue(`--swipe-amount-y`)
                    .replace(`px`, ``) || 0,
                ),
                r = new Date().getTime() - fe.current?.getTime(),
                i = w === `x` ? e : t,
                a = Math.abs(i) / r;
              if (
                (w === `x`
                  ? Ae.includes(e > 0 ? `right` : `left`)
                  : Ae.includes(t > 0 ? `bottom` : `top`)) &&
                (Math.abs(i) >= du || a > 0.11)
              ) {
                (M(Ce.current),
                  n.onDismiss == null || n.onDismiss.call(n, n),
                  T(
                    w === `x`
                      ? e > 0
                        ? `right`
                        : `left`
                      : t > 0
                        ? `down`
                        : `up`,
                  ),
                  Ne(),
                  j(!0));
                return;
              } else {
                var o, s;
                ((o = pe.current) == null ||
                  o.style.setProperty(`--swipe-amount-x`, `0px`),
                  (s = pe.current) == null ||
                    s.style.setProperty(`--swipe-amount-y`, `0px`));
              }
              (se(!1), ae(!1), ne(null));
            },
            onPointerMove: (e) => {
              var t, n;
              if (
                !Te.current ||
                !_e ||
                window.getSelection()?.toString().length > 0
              )
                return;
              let r = e.clientY - Te.current.y,
                i = e.clientX - Te.current.x;
              !w &&
                (Math.abs(i) > 1 || Math.abs(r) > 1) &&
                ne(Math.abs(i) > Math.abs(r) ? `x` : `y`);
              let a = { x: 0, y: 0 },
                o = (e) => 1 / (1.5 + Math.abs(e) / 20);
              if (w === `y`) {
                if (Ae.includes(`top`) || Ae.includes(`bottom`))
                  if (
                    (Ae.includes(`top`) && r < 0) ||
                    (Ae.includes(`bottom`) && r > 0)
                  )
                    a.y = r;
                  else {
                    let e = r * o(r);
                    a.y = Math.abs(e) < Math.abs(r) ? e : r;
                  }
              } else if (
                w === `x` &&
                (Ae.includes(`left`) || Ae.includes(`right`))
              )
                if (
                  (Ae.includes(`left`) && i < 0) ||
                  (Ae.includes(`right`) && i > 0)
                )
                  a.x = i;
                else {
                  let e = i * o(i);
                  a.x = Math.abs(e) < Math.abs(i) ? e : i;
                }
              ((Math.abs(a.x) > 0 || Math.abs(a.y) > 0) && se(!0),
                (t = pe.current) == null ||
                  t.style.setProperty(`--swipe-amount-x`, `${a.x}px`),
                (n = pe.current) == null ||
                  n.style.setProperty(`--swipe-amount-y`, `${a.y}px`));
            },
          },
          be && !n.jsx && N !== `loading`
            ? Y.createElement(
                `button`,
                {
                  "aria-label": te,
                  "data-disabled": Me,
                  "data-close-button": !0,
                  onClick:
                    Me || !_e
                      ? () => {}
                      : () => {
                          (Ne(), n.onDismiss == null || n.onDismiss.call(n, n));
                        },
                  className: Fl(S?.closeButton, n?.classNames?.closeButton),
                },
                C?.close ?? ql,
              )
            : null,
          (N || n.icon || n.promise) &&
            n.icon !== null &&
            (C?.[N] !== null || n.icon)
            ? Y.createElement(
                `div`,
                {
                  "data-icon": ``,
                  className: Fl(S?.icon, n?.classNames?.icon),
                },
                N === `loading` ? n.icon || Pe() : n.promise ? Pe() : null,
                N === `loading` ? null : Fe,
              )
            : null,
          Y.createElement(
            `div`,
            {
              "data-content": ``,
              className: Fl(S?.content, n?.classNames?.content),
            },
            Y.createElement(
              `div`,
              {
                "data-title": ``,
                className: Fl(S?.title, n?.classNames?.title),
              },
              n.jsx
                ? n.jsx
                : typeof n.title == `function`
                  ? n.title()
                  : n.title,
            ),
            n.description
              ? Y.createElement(
                  `div`,
                  {
                    "data-description": ``,
                    className: Fl(
                      v,
                      ye,
                      S?.description,
                      n?.classNames?.description,
                    ),
                  },
                  typeof n.description == `function`
                    ? n.description()
                    : n.description,
                )
              : null,
          ),
          Y.isValidElement(n.cancel)
            ? n.cancel
            : n.cancel && Pl(n.cancel)
              ? Y.createElement(
                  `button`,
                  {
                    "data-button": !0,
                    "data-cancel": !0,
                    style: n.cancelButtonStyle || h,
                    onClick: (e) => {
                      Pl(n.cancel) &&
                        _e &&
                        (n.cancel.onClick == null ||
                          n.cancel.onClick.call(n.cancel, e),
                        Ne());
                    },
                    className: Fl(S?.cancelButton, n?.classNames?.cancelButton),
                  },
                  n.cancel.label,
                )
              : null,
          Y.isValidElement(n.action)
            ? n.action
            : n.action && Pl(n.action)
              ? Y.createElement(
                  `button`,
                  {
                    "data-button": !0,
                    "data-action": !0,
                    style: n.actionButtonStyle || g,
                    onClick: (e) => {
                      Pl(n.action) &&
                        (n.action.onClick == null ||
                          n.action.onClick.call(n.action, e),
                        !e.defaultPrevented && Ne());
                    },
                    className: Fl(S?.actionButton, n?.classNames?.actionButton),
                  },
                  n.action.label,
                )
              : null,
        );
      }),
      (mu = Y.forwardRef(function (e, t) {
        let {
            id: n,
            invert: r,
            position: i = `bottom-right`,
            hotkey: a = [`altKey`, `KeyT`],
            expand: o,
            closeButton: s,
            className: c,
            offset: l,
            mobileOffset: u,
            theme: d = `light`,
            richColors: f,
            duration: p,
            style: m,
            visibleToasts: h = au,
            toastOptions: g,
            dir: _ = Ll(),
            gap: v = uu,
            icons: ee,
            customAriaLabel: y,
            containerAriaLabel: b = `Notifications`,
          } = e,
          [x, S] = Y.useState([]),
          C = Y.useMemo(
            () =>
              n
                ? x.filter((e) => e.toasterId === n)
                : x.filter((e) => !e.toasterId),
            [x, n],
          ),
          te = Y.useMemo(
            () =>
              Array.from(
                new Set(
                  [i].concat(
                    C.filter((e) => e.position).map((e) => e.position),
                  ),
                ),
              ),
            [C, i],
          ),
          [w, ne] = Y.useState([]),
          [re, T] = Y.useState(!1),
          [E, D] = Y.useState(!1),
          [O, ie] = Y.useState(
            d === `system`
              ? typeof window < `u` &&
                window.matchMedia &&
                window.matchMedia(`(prefers-color-scheme: dark)`).matches
                ? `dark`
                : `light`
              : d,
          ),
          k = Y.useRef(null),
          ae = a.join(`+`).replace(/Key/g, ``).replace(/Digit/g, ``),
          A = Y.useRef(null),
          j = Y.useRef(!1),
          oe = Y.useCallback((e) => {
            S(
              (t) => (
                t.find((t) => t.id === e.id)?.delete || X.dismiss(e.id),
                t.filter(({ id: t }) => t !== e.id)
              ),
            );
          }, []);
        return (
          Y.useEffect(
            () =>
              X.subscribe((e) => {
                if (e.dismiss) {
                  requestAnimationFrame(() => {
                    S((t) =>
                      t.map((t) => (t.id === e.id ? { ...t, delete: !0 } : t)),
                    );
                  });
                  return;
                }
                setTimeout(() => {
                  zl.flushSync(() => {
                    S((t) => {
                      let n = t.findIndex((t) => t.id === e.id);
                      return n === -1
                        ? [e, ...t]
                        : [
                            ...t.slice(0, n),
                            { ...t[n], ...e },
                            ...t.slice(n + 1),
                          ];
                    });
                  });
                });
              }),
            [],
          ),
          Y.useEffect(() => {
            if (d !== `system`) {
              ie(d);
              return;
            }
            if (
              (d === `system` &&
                (window.matchMedia &&
                window.matchMedia(`(prefers-color-scheme: dark)`).matches
                  ? ie(`dark`)
                  : ie(`light`)),
              typeof window > `u`)
            )
              return;
            let e = window.matchMedia(`(prefers-color-scheme: dark)`);
            try {
              e.addEventListener(`change`, ({ matches: e }) => {
                ie(e ? `dark` : `light`);
              });
            } catch {
              e.addListener(({ matches: e }) => {
                try {
                  ie(e ? `dark` : `light`);
                } catch (e) {
                  console.error(e);
                }
              });
            }
          }, [d]),
          Y.useEffect(() => {
            x.length <= 1 && T(!1);
          }, [x]),
          Y.useEffect(() => {
            let e = (e) => {
              if (a.length > 0 && a.every((t) => e[t] || e.code === t)) {
                var t;
                (T(!0), (t = k.current) == null || t.focus());
              }
              e.code === `Escape` &&
                (document.activeElement === k.current ||
                  k.current?.contains(document.activeElement)) &&
                T(!1);
            };
            return (
              document.addEventListener(`keydown`, e),
              () => document.removeEventListener(`keydown`, e)
            );
          }, [a]),
          Y.useEffect(() => {
            if (k.current)
              return () => {
                A.current &&
                  (A.current.focus({ preventScroll: !0 }),
                  (A.current = null),
                  (j.current = !1));
              };
          }, [k.current]),
          Y.createElement(
            `section`,
            {
              ref: t,
              "aria-label": y ?? `${b} ${ae}`,
              tabIndex: -1,
              "aria-live": `polite`,
              "aria-relevant": `additions text`,
              "aria-atomic": `false`,
              suppressHydrationWarning: !0,
              "data-react-aria-top-layer": !0,
            },
            te.map((t, n) => {
              let [i, a] = t.split(`-`);
              return C.length
                ? Y.createElement(
                    `ol`,
                    {
                      key: t,
                      dir: _ === `auto` ? Ll() : _,
                      tabIndex: -1,
                      ref: k,
                      className: c,
                      "data-sonner-toaster": !0,
                      "data-sonner-theme": O,
                      "data-y-position": i,
                      "data-x-position": a,
                      style: {
                        "--front-toast-height": `${w[0]?.height || 0}px`,
                        "--width": `${lu}px`,
                        "--gap": `${v}px`,
                        ...m,
                        ...Rl(l, u),
                      },
                      onBlur: (e) => {
                        j.current &&
                          !e.currentTarget.contains(e.relatedTarget) &&
                          ((j.current = !1),
                          (A.current &&=
                            (A.current.focus({ preventScroll: !0 }), null)));
                      },
                      onFocus: (e) => {
                        (e.target instanceof HTMLElement &&
                          e.target.dataset.dismissible === `false`) ||
                          j.current ||
                          ((j.current = !0), (A.current = e.relatedTarget));
                      },
                      onMouseEnter: () => T(!0),
                      onMouseMove: () => T(!0),
                      onMouseLeave: () => {
                        E || T(!1);
                      },
                      onDragEnd: () => T(!1),
                      onPointerDown: (e) => {
                        (e.target instanceof HTMLElement &&
                          e.target.dataset.dismissible === `false`) ||
                          D(!0);
                      },
                      onPointerUp: () => D(!1),
                    },
                    C.filter(
                      (e) => (!e.position && n === 0) || e.position === t,
                    ).map((n, i) =>
                      Y.createElement(pu, {
                        key: n.id,
                        icons: ee,
                        index: i,
                        toast: n,
                        defaultRichColors: f,
                        duration: g?.duration ?? p,
                        className: g?.className,
                        descriptionClassName: g?.descriptionClassName,
                        invert: r,
                        visibleToasts: h,
                        closeButton: g?.closeButton ?? s,
                        interacting: E,
                        position: t,
                        style: g?.style,
                        unstyled: g?.unstyled,
                        classNames: g?.classNames,
                        cancelButtonStyle: g?.cancelButtonStyle,
                        actionButtonStyle: g?.actionButtonStyle,
                        closeButtonAriaLabel: g?.closeButtonAriaLabel,
                        removeToast: oe,
                        toasts: C.filter((e) => e.position == n.position),
                        heights: w.filter((e) => e.position == n.position),
                        setHeights: ne,
                        expandByDefault: o,
                        gap: v,
                        expanded: re,
                        swipeDirections: e.swipeDirections,
                      }),
                    ),
                  )
                : null;
            }),
          )
        );
      })));
  });
function gu(e) {
  e ||= {};
  var t = Number(e.cash ?? e.cash_balance) || 0,
    n = Number(e.credit ?? e.credit_balance) || 0,
    r = Number(e.exposure ?? e.total_exposure) || 0,
    i = Number(e.total ?? e.total_balance ?? t + n) || 0;
  return {
    cash_balance: t,
    credit_balance: n,
    total_balance: i,
    total_exposure: r,
    total_available:
      Number(e.available ?? e.total_available ?? Math.max(i - r, 0)) || 0,
    withdrawable: Number(e.withdrawable) || 0,
    client_pnl: Number(e.client_pnl ?? e.clientPnl) || 0,
  };
}
var _u,
  vu,
  yu,
  bu = t(() => {
    (hr(),
      rc(),
      (_u = null),
      (vu = !1),
      (yu = pr((e, t) => ({
        cash_balance: 0,
        credit_balance: 0,
        total_balance: 0,
        total_exposure: 0,
        total_available: 0,
        withdrawable: 0,
        total_credit_given: 0,
        client_pnl: 0,
        bonus_liability_outstanding: 0,
        deposit_bonus_rate: 0,
        bet_locked: !1,
        withdraw_locked: !1,
        isLoading: !1,
        fetchWallet: async () => {
          try {
            let { data: n } = await tc.get(`/api/wallet`),
              r = gu(n.wallet || n.balance || n),
              i = t().optimistic;
            if (
              i &&
              Date.now() - i.at < 45e3 &&
              Math.abs(r.total_available - i.expectedAvailable) > 1 &&
              r.total_exposure > i.expectedExposure
            ) {
              e({ isLoading: !1 });
              return;
            }
            (t()._reconcile(r), e({ ...r, isLoading: !1 }));
          } catch (e) {
            e && e.response && e.response.status === 401 && t().stopPolling();
          }
        },
        startPolling: () => {
          let e = () => {
              _u ||=
                (t().fetchWallet(), setInterval(() => t().fetchWallet(), 15e3));
            },
            n = () => {
              _u &&= (clearInterval(_u), null);
            };
          (!vu &&
            typeof document < `u` &&
            (document.addEventListener(`visibilitychange`, () => {
              document.visibilityState === `visible` ? e() : n();
            }),
            window.addEventListener(`pageshow`, () => {
              document.visibilityState === `visible` && e();
            }),
            (vu = !0)),
            (typeof document > `u` || document.visibilityState === `visible`) &&
              e());
        },
        stopPolling: () => {
          _u &&= (clearInterval(_u), null);
        },
        guestDeduct: () => {},
        optimistic: null,
        applyOptimistic: (n) => {
          let r = t(),
            i = Math.max(
              0,
              r.total_available + (Number(n.availableDelta) || 0),
            ),
            a = Math.max(
              0,
              r.total_exposure - (Number(n.exposureRelease) || 0),
            );
          e({
            optimistic: {
              roundId: n.roundId,
              game: n.game,
              pnl: n.pnl,
              expectedAvailable: i,
              expectedExposure: a,
              at: Date.now(),
            },
            total_available: i,
            total_exposure: a,
          });
        },
        _reconcile: (n) => {
          let r = t().optimistic;
          r &&
            (Math.abs(n.total_available - r.expectedAvailable) > 1 &&
              console.warn(
                `[WIN-MOMENT-RECONCILE] optimistic != authoritative — server wins silently`,
                JSON.stringify({
                  game: r.game,
                  round: r.roundId,
                  predictedPnl: r.pnl,
                  expectedAvailable: r.expectedAvailable,
                  serverAvailable: n.total_available,
                  diff: n.total_available - r.expectedAvailable,
                  ageMs: Date.now() - r.at,
                }),
              ),
            e({ optimistic: null }));
        },
        updateFromWS: (n) => {
          let r = gu(n);
          (t()._reconcile(r), e(r));
        },
        reset: () => {
          ((_u &&= (clearInterval(_u), null)),
            e({
              cash_balance: 0,
              credit_balance: 0,
              total_balance: 0,
              total_exposure: 0,
              total_available: 0,
              withdrawable: 0,
              total_credit_given: 0,
              client_pnl: 0,
              bonus_liability_outstanding: 0,
              deposit_bonus_rate: 0,
              bet_locked: !1,
              withdraw_locked: !1,
            }));
        },
      }))));
  }),
  xu,
  Su = t(() => {
    (hr(),
      (xu = pr((e) => ({
        message: null,
        title: `Cheating Alert`,
        durationMs: 0,
        show: (t, n, r) =>
          e({
            message: String(t || ``),
            title: n || `Cheating Alert`,
            durationMs: typeof r == `number` ? r : 0,
          }),
        clear: () => e({ message: null }),
      }))));
  });
function Cu() {
  return typeof window > `u`
    ? `ws://localhost/ws`
    : (window.location.protocol === `https:` ? `wss://` : `ws://`) +
        window.location.host +
        `/ws`;
}
var wu,
  Tu = t(() => {
    wu = Cu();
  });
function Eu() {
  let e = kc((e) => e.user?.id),
    t = (0, Du.useRef)(null),
    n = (0, Du.useRef)(!0),
    r = (0, Du.useRef)(null);
  (0, Du.useEffect)(() => {
    if (((n.current = !0), !e)) return;
    function i() {
      if (!n.current) return;
      let a;
      try {
        a = new WebSocket(wu);
      } catch {
        r.current = setTimeout(i, Ou);
        return;
      }
      ((t.current = a),
        (a.onopen = () => {
          if (!n.current) {
            try {
              a.close();
            } catch {}
            return;
          }
          try {
            var t = ec();
            (t && a.send(JSON.stringify({ action: `auth`, token: t })),
              a.send(
                JSON.stringify({
                  action: `subscribe`,
                  channels: [`user:` + e],
                }),
              ));
          } catch {}
        }),
        (a.onmessage = (t) => {
          if (n.current)
            try {
              let n = JSON.parse(t.data);
              if (n.channel !== `user:` + e) return;
              if (n.event === `balance_update` && n.data) {
                try {
                  yu.getState().updateFromWS(n.data);
                } catch {}
                return;
              }
              if (n.event === `sync`) {
                try {
                  yu.getState().fetchWallet();
                } catch {}
                return;
              }
              if (n.type !== `toast`) return;
              let r = n.data || {},
                i = String(r.message || ``).trim();
              if (!i) return;
              let a = r.severity || `info`;
              if (r.meta && r.meta.kind === `cheating_alert`) {
                xu.getState().show(i, `Cheating Alert`, r.meta.duration || 0);
                return;
              }
              if (r.meta && r.meta.kind === `warning`) {
                xu.getState().show(
                  i,
                  r.meta.title || `WARNING`,
                  r.meta.duration || 3e4,
                );
                return;
              }
              let o = {};
              (r.meta &&
                typeof r.meta.duration == `number` &&
                r.meta.duration > 0 &&
                (o.duration = r.meta.duration),
                a === `error`
                  ? iu.error(i, o)
                  : a === `warning`
                    ? iu.warning(i, o)
                    : a === `success`
                      ? iu.success(i, o)
                      : iu.info(i, o));
            } catch {}
        }),
        (a.onclose = () => {
          n.current && ((t.current = null), (r.current = setTimeout(i, Ou)));
        }),
        (a.onerror = () => {
          try {
            a.close();
          } catch {}
        }));
    }
    return (
      i(),
      () => {
        ((n.current = !1), (r.current &&= (clearTimeout(r.current), null)));
        try {
          t.current?.close();
        } catch {}
        t.current = null;
      }
    );
  }, [e]);
}
var Du,
  Ou,
  ku = t(() => {
    ((Du = r(n())), hu(), Ac(), rc(), Su(), Tu(), bu(), (Ou = 3e3));
  });
function Au() {
  return (0, Z.jsx)(`svg`, {
    width: `27`,
    height: `24`,
    viewBox: `0 0 27 24`,
    fill: `none`,
    xmlns: `http://www.w3.org/2000/svg`,
    "aria-hidden": `true`,
    children: (0, Z.jsx)(`path`, {
      d: `M13.5 1.5 1.5 12h3.2v10.5h6.6v-7h4.4v7h6.6V12h3.2L13.5 1.5z`,
      fill: `#fff`,
    }),
  });
}
function ju() {
  return (0, Z.jsxs)(`svg`, {
    width: `21`,
    height: `21`,
    viewBox: `0 0 21 21`,
    fill: `none`,
    xmlns: `http://www.w3.org/2000/svg`,
    className: `exp-icon`,
    "aria-hidden": `true`,
    children: [
      (0, Z.jsx)(`circle`, {
        cx: `10.5`,
        cy: `10.5`,
        r: `9`,
        stroke: `#cf8d2e`,
        strokeWidth: `1.6`,
      }),
      (0, Z.jsx)(`circle`, {
        cx: `10.5`,
        cy: `10.5`,
        r: `5.2`,
        stroke: `#cf8d2e`,
        strokeWidth: `1.4`,
      }),
      (0, Z.jsx)(`circle`, { cx: `10.5`, cy: `10.5`, r: `2`, fill: `#cf8d2e` }),
    ],
  });
}
function Mu(e, t = 900) {
  let [n, r] = (0, Pu.useState)(e),
    i = (0, Fu.useRef)(e),
    a = (0, Fu.useRef)(0);
  return (
    (0, Pu.useEffect)(() => {
      let n = i.current,
        o = Number(e) || 0;
      if (n === o) return;
      if (
        (typeof window < `u` &&
          window.matchMedia &&
          window.matchMedia(`(prefers-reduced-motion: reduce)`).matches) ||
        Math.abs(o - n) < 2
      ) {
        ((i.current = o), r(o));
        return;
      }
      let s = performance.now(),
        c = (e) => {
          let l = Math.min(1, (e - s) / t),
            u = 1 - (1 - l) ** 3;
          (r(Math.round(n + (o - n) * u)),
            l < 1 ? (a.current = requestAnimationFrame(c)) : (i.current = o));
        };
      return (
        (a.current = requestAnimationFrame(c)),
        () => cancelAnimationFrame(a.current)
      );
    }, [e, t]),
    n
  );
}
function Nu({ variant: e = `user` }) {
  let { user: t, logout: n } = kc(),
    r = yu((e) => e.total_available),
    i = yu((e) => e.total_exposure),
    a = Mu(r),
    o = Mu(i, 600),
    s = Le(),
    [c, l] = (0, Pu.useState)(!1);
  (0, Pu.useEffect)(() => {
    if (!c) return;
    let e = (e) => {
      e.target.closest(`.lobby-container`) || l(!1);
    };
    return (
      document.addEventListener(`click`, e),
      () => document.removeEventListener(`click`, e)
    );
  }, [c]);
  let d = String(t?.role || ``).toLowerCase(),
    f = d === `bettor` || d === `customer` || d === `user`,
    p = (e) => Math.floor(Number(e) || 0).toLocaleString(`en-US`);
  return (0, Z.jsxs)(Z.Fragment, {
    children: [
      (0, Z.jsx)(`div`, {
        className: `bp-exch-bar`,
        children: (0, Z.jsx)(`a`, {
          href: `/`,
          className: `bp-exch-brand`,
          children: `BPEXCH`,
        }),
      }),
      (0, Z.jsxs)(`div`, {
        className:
          `title-section bp-tps-title` +
          (e === `casino` ? ` is-game` : ` is-lobby`),
        children: [
          (0, Z.jsxs)(`div`, {
            className: `lobby-container`,
            children: [
              (0, Z.jsx)(`button`, {
                type: `button`,
                className: `menu-btn`,
                "aria-label": `Menu`,
                onClick: () => l((e) => !e),
                children: `☰`,
              }),
              (0, Z.jsx)(`span`, {
                className: `nav-link`,
                children: (0, Z.jsxs)(`button`, {
                  type: `button`,
                  className: `lobby-btn`,
                  onClick: () => s(`/`),
                  title: `Lobby`,
                  children: [
                    (0, Z.jsx)(Au, {}),
                    (0, Z.jsx)(`p`, {
                      className: `lobby-name`,
                      children: `Lobby`,
                    }),
                  ],
                }),
              }),
              c &&
                (0, Z.jsx)(`div`, {
                  className: `bp-games-sidebar`,
                  children: (0, Z.jsx)(`div`, {
                    className: `sidebar-content`,
                    children: (0, Z.jsxs)(`ul`, {
                      children: [
                        (0, Z.jsx)(`li`, {
                          children: (0, Z.jsx)(`a`, {
                            href: Iu,
                            onClick: () => l(!1),
                            children: `← Sports Dashboard`,
                          }),
                        }),
                        (0, Z.jsx)(`li`, {
                          children: (0, Z.jsx)(`a`, {
                            href: `/TeenPattiStudio/`,
                            onClick: (e) => {
                              (e.preventDefault(), l(!1), s(`/`));
                            },
                            children: `Teen Patti Studio`,
                          }),
                        }),
                        (0, Z.jsx)(`li`, {
                          children: (0, Z.jsx)(`a`, {
                            href: `/TeenPattiStudio/casino/betfairgames`,
                            onClick: (e) => {
                              (e.preventDefault(),
                                l(!1),
                                s(`/casino/betfairgames`));
                            },
                            children: `BetFair Games`,
                          }),
                        }),
                        u(t).map((e) =>
                          (0, Z.jsx)(
                            `li`,
                            {
                              children: (0, Z.jsx)(`a`, {
                                href: `/TeenPattiStudio/game/` + e.slug,
                                onClick: (t) => {
                                  (t.preventDefault(),
                                    l(!1),
                                    s(`/game/` + e.slug));
                                },
                                children: (0, Z.jsx)(`span`, {
                                  className: `item`,
                                  children: e.name,
                                }),
                              }),
                            },
                            e.slug,
                          ),
                        ),
                      ],
                    }),
                  }),
                }),
            ],
          }),
          (0, Z.jsx)(`div`, {
            className: `btn-logo-ctn`,
            children: (0, Z.jsx)(`img`, {
              src: Lu,
              alt: `TeenPatti Studio`,
              className: `logo`,
              width: `180`,
              height: `60`,
            }),
          }),
          (0, Z.jsx)(`div`, {
            className: `exposure-search-ctn`,
            children: f
              ? (0, Z.jsxs)(`div`, {
                  className: `exposure-balance-ctn`,
                  children: [
                    (0, Z.jsx)(ju, {}),
                    (0, Z.jsx)(`div`, {
                      className: `exp-bal`,
                      children: (0, Z.jsx)(`div`, {
                        className: `balance-ctn`,
                        children: (0, Z.jsxs)(`div`, {
                          className: `designation`,
                          children: [
                            (0, Z.jsxs)(`span`, {
                              className: `wallet-balance`,
                              children: [`B: `, p(a)],
                            }),
                            (0, Z.jsxs)(`span`, {
                              className: `wallet-exposure`,
                              children: [` | L: `, p(o)],
                            }),
                          ],
                        }),
                      }),
                    }),
                  ],
                })
              : (0, Z.jsx)(`div`, {
                  className: `exposure-balance-ctn`,
                  children: (0, Z.jsx)(`div`, {
                    className: `exp-bal`,
                    children: (0, Z.jsx)(`span`, {
                      className: `wallet-balance`,
                      children: t?.username || ``,
                    }),
                  }),
                }),
          }),
        ],
      }),
    ],
  });
}
var Pu,
  Fu,
  Z,
  Iu,
  Lu,
  Ru = t(() => {
    ((Pu = r(n())),
      (Fu = r(n())),
      f(),
      ar(),
      Ac(),
      bu(),
      (Z = a()),
      (Iu = `/`),
      (Lu = `/assets/games/bpexch/tpslogo.t.webp`));
  });
function zu({ children: e }) {
  let { slug: t } = ze(),
    n = Pc.includes(String(t || ``));
  return (
    (0, Bu.useEffect)(() => {
      if (Tc) {
        try {
          n
            ? document.body.classList.remove(`tps-dark`)
            : document.body.classList.add(`tps-dark`);
        } catch {}
        return () => {
          try {
            document.body.classList.remove(`tps-dark`);
          } catch {}
        };
      }
    }, [n]),
    (0, Vu.jsxs)(`div`, {
      className: `bp-tps`,
      style: {
        width: `100%`,
        minHeight: `100vh`,
        background: Tc ? `transparent` : `#000`,
      },
      children: [
        !Tc && (0, Vu.jsx)(Nu, { variant: `casino` }),
        (0, Vu.jsx)(`div`, { style: { width: `100%` }, children: e }),
      ],
    })
  );
}
var Bu,
  Vu,
  Hu = t(() => {
    ((Bu = r(n())), ar(), Ru(), Ec(), zc(), (Vu = a()));
  });
function Uu({ children: e }) {
  return (0, Gu.jsxs)(`div`, {
    className: `bp-tps bp-lobby-root`,
    style: {
      width: `100%`,
      minHeight: `100vh`,
      background: Tc ? `transparent` : `#000`,
    },
    children: [
      !Tc && (0, Gu.jsx)(Nu, { variant: `user` }),
      (0, Gu.jsx)(`div`, { style: { width: `100%` }, children: e }),
    ],
  });
}
var Wu,
  Gu,
  Ku,
  qu = t(() => {
    ((Wu = r(n())), Ru(), Ec(), (Gu = a()), (Ku = (0, Wu.createContext)(null)));
  });
function Ju() {
  return (0, Q.jsx)(`div`, {
    className: `min-h-screen flex items-center justify-center bg-bg-primary`,
    children: (0, Q.jsx)(`span`, {
      className: `inline-block w-8 h-8 border-3 border-accent border-t-transparent rounded-full animate-spin`,
    }),
  });
}
function Yu({ game: e, slug: t }) {
  return (0, Q.jsxs)(`div`, {
    className: `tp-soon`,
    children: [
      (0, Q.jsx)(`span`, {
        className: `tp-soon__icon`,
        children: (e && e.icon) || `🎲`,
      }),
      (0, Q.jsx)(`p`, {
        className: `tp-soon__name`,
        children: (e && e.name) || t,
      }),
      (0, Q.jsx)(`p`, {
        className: `tp-soon__msg`,
        children: `Coming soon on BetPro.`,
      }),
      (0, Q.jsx)(`a`, {
        href: `/TeenPattiStudio/`,
        className: `tp-soon__btn`,
        children: `Back to lobby`,
      }),
    ],
  });
}
function Xu({ children: e }) {
  let t = kc((e) => e.isAuthenticated),
    n = kc((e) => e.isLoading);
  return (
    Eu(),
    (0, id.useEffect)(
      function () {
        if (n) {
          var e = setTimeout(function () {
            kc.getState().isLoading && kc.getState().checkAuth();
          }, 1e4);
          return function () {
            clearTimeout(e);
          };
        }
      },
      [n],
    ),
    (0, id.useEffect)(
      function () {
        !n && !t && Cc(`/Users/Login`);
      },
      [n, t],
    ),
    n || !t ? (0, Q.jsx)(Ju, {}) : e
  );
}
function Zu({ children: e }) {
  let t = yu(function (e) {
      return e.startPolling;
    }),
    n = yu(function (e) {
      return e.stopPolling;
    });
  return (
    (0, id.useEffect)(
      function () {
        return (t(), n);
      },
      [t, n],
    ),
    e
  );
}
function Qu({ children: e, wait: t }) {
  let [n, r] = (0, id.useState)(!1);
  return (
    (0, id.useEffect)(function () {
      var e = !0;
      return (
        tc
          .get(`/api/game/settings`)
          .then(function (t) {
            e && d(t.data && t.data.games);
          })
          .catch(function () {})
          .finally(function () {
            e && r(!0);
          }),
        function () {
          e = !1;
        }
      );
    }, []),
    t && !n ? (0, Q.jsx)(Ju, {}) : e
  );
}
function $u() {
  return (0, Q.jsx)(Qu, {
    wait: !0,
    children: (0, Q.jsx)(Uu, { children: (0, Q.jsx)(Dl, {}) }),
  });
}
function ed() {
  let { slug: e } = ze(),
    t = c(e),
    n = kc(function (e) {
      return e.user;
    }),
    r = t ? t.slug : e;
  if (t && !l(t, n))
    return (0, Q.jsxs)(`div`, {
      className: `flex flex-col items-center justify-center py-20 text-text-muted`,
      children: [
        (0, Q.jsx)(`span`, { className: `text-4xl mb-3`, children: t.icon }),
        (0, Q.jsx)(`p`, {
          className: `text-lg text-text-primary font-medium`,
          children: t.name,
        }),
        (0, Q.jsx)(`p`, {
          className: `text-sm mt-2`,
          children: `This game is not available yet.`,
        }),
      ],
    });
  if (t && t.type === `exchange`) {
    let e = Vd[r];
    return e
      ? (0, Q.jsx)(zu, { children: (0, Q.jsx)(e, {}) })
      : (0, Q.jsx)(zu, { children: (0, Q.jsx)(ad, {}) });
  }
  if (Bd[r]) {
    let e = Bd[r];
    return (0, Q.jsx)(zu, { children: (0, Q.jsx)(e, {}) });
  }
  return Hd.has(r) ||
    (t &&
      (t.type === `react` || t.type === `special` || t.type === `lucky-draw`))
    ? (0, Q.jsx)(zu, { children: (0, Q.jsx)(Yu, { game: t, slug: e }) })
    : (0, Q.jsx)(`div`, {
        className: `flex flex-col items-center justify-center py-20 text-text-muted`,
        children: (0, Q.jsxs)(`p`, {
          className: `text-lg`,
          children: [
            `Game not found: `,
            (0, Q.jsx)(`span`, { className: `text-red`, children: e }),
          ],
        }),
      });
}
function td() {
  return (0, Q.jsx)(Qu, {
    children: (0, Q.jsx)(Zu, { children: (0, Q.jsx)(ed, {}) }),
  });
}
function nd() {
  let e = Le();
  return (
    (0, id.useEffect)(
      () => (
        (window.__TPS_GET_LOBBY_GAMES__ = () => {
          try {
            return El(kc.getState().user, !1).map((e) => ({
              slug: e.slug,
              name: e.name,
            }));
          } catch {
            return [];
          }
        }),
        (window.__TPS_NAVIGATE__ = (t) => e(t)),
        () => {
          (delete window.__TPS_GET_LOBBY_GAMES__,
            delete window.__TPS_NAVIGATE__);
        }
      ),
      [e],
    ),
    null
  );
}
function rd() {
  return (0, Q.jsxs)(Vt, {
    basename: `/TeenPattiStudio`,
    children: [
      (0, Q.jsx)(nd, {}),
      (0, Q.jsx)(mu, {
        position: `top-center`,
        richColors: !0,
        closeButton: !0,
      }),
      (0, Q.jsx)(id.Suspense, {
        fallback: (0, Q.jsx)(Ju, {}),
        children: (0, Q.jsxs)(ct, {
          children: [
            (0, Q.jsx)(ot, {
              path: `/`,
              element: (0, Q.jsx)(Xu, {
                children: (0, Q.jsx)(Zu, { children: (0, Q.jsx)($u, {}) }),
              }),
            }),
            (0, Q.jsx)(ot, {
              path: `/casino`,
              element: (0, Q.jsx)(at, { to: `/`, replace: !0 }),
            }),
            (0, Q.jsx)(ot, {
              path: `/casino/:tab`,
              element: (0, Q.jsx)(Xu, {
                children: (0, Q.jsx)(Zu, { children: (0, Q.jsx)($u, {}) }),
              }),
            }),
            (0, Q.jsx)(ot, {
              path: `/game/:slug`,
              element: (0, Q.jsx)(Xu, { children: (0, Q.jsx)(td, {}) }),
            }),
            (0, Q.jsx)(ot, {
              path: `/exchange/:slug`,
              element: (0, Q.jsx)(Xu, { children: (0, Q.jsx)(td, {}) }),
            }),
            (0, Q.jsx)(ot, {
              path: `/games/:slug`,
              element: (0, Q.jsx)(Xu, { children: (0, Q.jsx)(td, {}) }),
            }),
            (0, Q.jsx)(ot, {
              path: `*`,
              element: (0, Q.jsx)(at, { to: `/`, replace: !0 }),
            }),
          ],
        }),
      }),
    ],
  });
}
var id,
  Q,
  $,
  ad,
  od,
  sd,
  cd,
  ld,
  ud,
  dd,
  fd,
  pd,
  md,
  hd,
  gd,
  _d,
  vd,
  yd,
  bd,
  xd,
  Sd,
  Cd,
  wd,
  Td,
  Ed,
  Dd,
  Od,
  kd,
  Ad,
  jd,
  Md,
  Nd,
  Pd,
  Fd,
  Id,
  Ld,
  Rd,
  zd,
  Bd,
  Vd,
  Hd,
  Ud = t(() => {
    ((id = r(n())),
      Ml(),
      ar(),
      hu(),
      Ac(),
      bu(),
      ku(),
      rc(),
      f(),
      Hu(),
      qu(),
      Ec(),
      (Q = a()),
      ne(),
      ($ = (e) => (0, id.lazy)(e)),
      $(() =>
        w(
          () => import(`./HomePage-BCwT3j9A.js`),
          __vite__mapDeps([0, 1, 2, 3, 4]),
        ),
      ),
      (ad = $(() =>
        w(
          () => import(`./ExchangeGamePage-BTgOhSWj.js`),
          __vite__mapDeps([5, 1, 2, 6, 3]),
        ),
      )),
      (od = $(() =>
        w(
          () => import(`./DragonTigerPage-BucVk96z.js`),
          __vite__mapDeps([7, 1, 8, 9, 6, 10, 11, 12, 13]),
        ),
      )),
      (sd = $(() =>
        w(
          () => import(`./BaccaratPage-hHVGfOcG.js`),
          __vite__mapDeps([14, 1, 15, 8, 16, 9, 6, 10, 17, 11, 12, 13]),
        ),
      )),
      (cd = $(() =>
        w(
          () => import(`./TurboBaccaratPage-Ct97rpsd.js`),
          __vite__mapDeps([18, 1, 15, 8, 16, 9, 6, 10, 17, 11, 12, 13]),
        ),
      )),
      (ld = $(() =>
        w(
          () => import(`./AndarBaharPage-_DvesuCR.js`),
          __vite__mapDeps([19, 1, 8, 9, 6, 10, 11, 12, 13, 20]),
        ),
      )),
      (ud = $(() =>
        w(
          () => import(`./TeenPattiT20Page-BUGvuZHn.js`),
          __vite__mapDeps([21, 1, 8, 9, 6, 10, 11, 12, 13, 20]),
        ),
      )),
      (dd = $(() =>
        w(
          () => import(`./TeenPattiODIPage-Bi07ASQ6.js`),
          __vite__mapDeps([22, 1, 8, 9, 6, 10, 12, 13, 20]),
        ),
      )),
      (fd = $(() =>
        w(
          () => import(`./MuflisTeenPattiPage-CUIPFQaW.js`),
          __vite__mapDeps([23, 1, 8, 9, 6, 10, 11, 12, 13, 20]),
        ),
      )),
      (pd = $(() =>
        w(
          () => import(`./ThirtyTwoCardPage-B1BHixht.js`),
          __vite__mapDeps([24, 1, 8, 9, 6, 10, 11, 12, 13, 20]),
        ),
      )),
      (md = $(() =>
        w(
          () => import(`./BlackjackPage-KnNWBtkK.js`),
          __vite__mapDeps([25, 1, 15, 26, 9, 6, 10, 8, 11, 12, 13]),
        ),
      )),
      (hd = $(() =>
        w(
          () => import(`./TurboBlackjackPage-Bc8rJfVX.js`),
          __vite__mapDeps([27, 1, 15, 26, 9, 6, 10, 8, 11, 12, 13]),
        ),
      )),
      (gd = $(() =>
        w(
          () => import(`./Poker2020Page-D2sI0_gD.js`),
          __vite__mapDeps([28, 1, 15, 8, 9, 6, 10, 11, 12, 13]),
        ),
      )),
      (_d = $(() =>
        w(
          () => import(`./OmahaHiPage-96N3ybh1.js`),
          __vite__mapDeps([29, 1, 15, 8, 16, 9, 6, 10, 11, 12, 13]),
        ),
      )),
      (vd = $(() =>
        w(
          () => import(`./TurboHoldemPage-HR-9RL_0.js`),
          __vite__mapDeps([30, 1, 28, 15, 8, 9, 6, 10, 11, 12, 13]),
        ),
      )),
      (yd = $(() =>
        w(
          () => import(`./AAAPage-CW3VEd3U.js`),
          __vite__mapDeps([31, 1, 8, 9, 6, 10, 11, 12, 13]),
        ),
      )),
      (bd = $(() =>
        w(
          () => import(`./SuperOverPage-B3TdBbNA.js`),
          __vite__mapDeps([32, 1, 8, 9, 6, 10, 12, 13, 20]),
        ),
      )),
      (xd = $(() =>
        w(
          () => import(`./SuperOverODIPage-Bv1TnZL6.js`),
          __vite__mapDeps([33, 1, 8, 9, 6, 10, 12, 13, 20]),
        ),
      )),
      (Sd = $(() =>
        w(
          () => import(`./SevenUpDownPage-DI5KbKN1.js`),
          __vite__mapDeps([34, 1, 8, 9, 6, 10, 11, 12, 13]),
        ),
      )),
      (Cd = $(() =>
        w(
          () => import(`./RockPaperScissorPage-BiIpGgMI.js`),
          __vite__mapDeps([35, 1, 8, 9, 6, 10, 11, 12, 13, 20]),
        ),
      )),
      (wd = $(() =>
        w(
          () => import(`./SicBoPage-DmAfYivW.js`),
          __vite__mapDeps([36, 1, 8, 9, 6, 10, 11, 12, 13, 20]),
        ),
      )),
      (Td = $(() =>
        w(
          () => import(`./HiloTpsPage-CnpCa1Wp.js`),
          __vite__mapDeps([37, 1, 8, 9, 6, 10, 11, 12, 13, 20]),
        ),
      )),
      (Ed = $(() =>
        w(
          () => import(`./FortuneGemsPage-DRbSul6H.js`),
          __vite__mapDeps([38, 1, 13, 10]),
        ),
      )),
      (Dd = $(() =>
        w(
          () => import(`./HeadsTailsPage-BhscNSkb.js`),
          __vite__mapDeps([39, 1, 8, 9, 6, 10, 11, 12, 13, 20]),
        ),
      )),
      (Od = $(() =>
        w(
          () => import(`./LotteryPage-COVOGAOh.js`),
          __vite__mapDeps([40, 1, 8, 9, 6, 10, 13, 20]),
        ),
      )),
      (kd = $(() =>
        w(
          () => import(`./HighCardPage-Vjc0j2jk.js`),
          __vite__mapDeps([41, 1, 8, 9, 6, 10, 11, 12, 13, 20]),
        ),
      )),
      (Ad = $(() =>
        w(
          () => import(`./CasinoWarPage-BnDKA6Xt.js`),
          __vite__mapDeps([42, 1, 8, 9, 6, 10, 11, 12, 13, 20]),
        ),
      )),
      (jd = $(() =>
        w(
          () => import(`./Lucky7Page-BI9ErvLt.js`),
          __vite__mapDeps([43, 1, 8, 9, 6, 10, 11, 12, 13, 20]),
        ),
      )),
      (Md = $(() =>
        w(
          () => import(`./OneCard2020Page-hAhBJTbK.js`),
          __vite__mapDeps([44, 1, 8, 9, 6, 10, 11, 12, 13, 20]),
        ),
      )),
      (Nd = $(() =>
        w(
          () => import(`./OneCardMeterPage-Cd2M3mQA.js`),
          __vite__mapDeps([45, 1, 8, 9, 6, 10, 11, 12, 13, 20]),
        ),
      )),
      (Pd = $(() =>
        w(
          () => import(`./TrapPage-BR6njyt_.js`),
          __vite__mapDeps([46, 1, 8, 9, 6, 10, 11, 12, 13, 20]),
        ),
      )),
      (Fd = $(() =>
        w(
          () => import(`./TrioPage-r8HXkGPt.js`),
          __vite__mapDeps([47, 1, 8, 9, 6, 10, 11, 12, 13, 20]),
        ),
      )),
      (Id = $(() =>
        w(
          () => import(`./PokerPage-CpPd6exv.js`),
          __vite__mapDeps([48, 1, 8, 9, 6, 10, 11, 12, 13, 20]),
        ),
      )),
      (Ld = $(() =>
        w(
          () => import(`./BollywoodCasinoPage-C2Fath_H.js`),
          __vite__mapDeps([49, 1, 8, 9, 6, 10, 11, 12, 13, 20]),
        ),
      )),
      (Rd = $(() =>
        w(
          () => import(`./CenterCardPage-DW3E4__3.js`),
          __vite__mapDeps([50, 1, 8, 9, 6, 10, 11, 12, 13, 20]),
        ),
      )),
      (zd = $(() =>
        w(
          () => import(`./AutoRoulettePage-Cp6ry67k.js`),
          __vite__mapDeps([51, 1, 8, 9, 6, 10, 13, 20]),
        ),
      )),
      (Bd = {
        aviator: $(() =>
          w(
            () => import(`./Aviator-_8Beb6PJ.js`),
            __vite__mapDeps([52, 1, 9, 6, 10, 53]),
          ),
        ),
        "aviator-classic": $(() =>
          w(
            () => import(`./AviatorClassic-CxfxYpOF.js`),
            __vite__mapDeps([54, 1, 52, 9, 6, 10, 53]),
          ),
        ),
        cr2: $(() =>
          w(
            () => import(`./ChickenRoad2-BC3pX1Gz.js`),
            __vite__mapDeps([55, 1, 6, 56]),
          ),
        ),
      }),
      (Vd = {
        dt: od,
        bac: sd,
        tbac: cd,
        ab: ld,
        tp20: ud,
        tpodi: dd,
        mtp: fd,
        "32c": pd,
        bj: md,
        tbj: hd,
        p2020: gd,
        omaha: _d,
        th: vd,
        aaa: yd,
        soc: bd,
        soo: xd,
        "7ud": Sd,
        rps: Cd,
        sicbo: wd,
        hilotps: Td,
        fg: Ed,
        ht: Dd,
        lot: Od,
        hc: kd,
        cwar: Ad,
        l7: jd,
        oc20: Md,
        ocm: Nd,
        trap: Pd,
        trio: Fd,
        pkr: Id,
        bc: Ld,
        cc: Rd,
        ar: zd,
        "derby-race": $(() =>
          w(
            () => import(`./DerbyRacePage-9HaUa6jL.js`),
            __vite__mapDeps([57, 1, 15, 16, 9, 6, 10, 11, 12, 13]),
          ),
        ),
        drt: $(() =>
          w(
            () => import(`./DerbyRaceTurboPage-Dh7CLT8g.js`),
            __vite__mapDeps([58, 1, 11, 9, 6, 10, 12, 13, 57, 15, 16]),
          ),
        ),
        hilo: $(() =>
          w(
            () => import(`./HiLoPage-DaYywIv9.js`),
            __vite__mapDeps([59, 1, 15, 8, 16, 9, 6, 10, 11, 12, 13]),
          ),
        ),
        thl: $(() =>
          w(
            () => import(`./TurboHiLoPage-Cgq_JU7M.js`),
            __vite__mapDeps([60, 1, 11, 9, 6, 10, 12, 13, 59, 15, 8, 16]),
          ),
        ),
        dkd: $(() =>
          w(
            () => import(`./DusKaDumPage-Dph1PATs.js`),
            __vite__mapDeps([61, 1, 8, 9, 6, 10, 11, 12, 13, 20]),
          ),
        ),
        rt17: $(() =>
          w(
            () => import(`./RaceTo17Page-D3DIdeMX.js`),
            __vite__mapDeps([62, 1, 8, 9, 6, 10, 11, 12, 13, 20]),
          ),
        ),
        r2020: $(() =>
          w(
            () => import(`./Race2020Page-Do_3ymlp.js`),
            __vite__mapDeps([63, 1, 8, 9, 6, 10, 11, 12, 13, 20]),
          ),
        ),
        qr: $(() =>
          w(
            () => import(`./QueenRacePage-CO_mvWBi.js`),
            __vite__mapDeps([64, 1, 8, 9, 6, 10, 11, 12, 13, 20]),
          ),
        ),
      }),
      (Hd = new Set()));
  }),
  Wd,
  Gd,
  Kd,
  qd = t(() => {
    ((Wd = r(n())),
      (Gd = a()),
      (Kd = class extends Wd.Component {
        constructor(e) {
          (super(e), (this.state = { hasError: !1, error: null }));
        }
        static getDerivedStateFromError(e) {
          return { hasError: !0, error: e };
        }
        componentDidCatch(e, t) {
          console.error(`ErrorBoundary caught:`, e, t);
        }
        render() {
          return this.state.hasError
            ? (0, Gd.jsxs)(`div`, {
                style: {
                  minHeight: `100vh`,
                  display: `flex`,
                  flexDirection: `column`,
                  alignItems: `center`,
                  justifyContent: `center`,
                  background: `var(--bg-canvas)`,
                  color: `var(--text-primary)`,
                  fontFamily: `var(--font-body)`,
                  padding: `20px`,
                  textAlign: `center`,
                },
                children: [
                  (0, Gd.jsx)(`p`, {
                    style: { fontSize: `3rem`, marginBottom: `8px` },
                    children: `⚠️`,
                  }),
                  (0, Gd.jsx)(`h1`, {
                    style: {
                      fontSize: `1.4rem`,
                      fontWeight: 800,
                      marginBottom: `8px`,
                      color: `var(--text-primary)`,
                    },
                    children: `Something went wrong`,
                  }),
                  (0, Gd.jsx)(`p`, {
                    style: {
                      fontSize: `0.9rem`,
                      color: `var(--text-muted)`,
                      marginBottom: `20px`,
                      maxWidth: `400px`,
                    },
                    children: `An unexpected error occurred. Please refresh the page.`,
                  }),
                  (0, Gd.jsx)(`button`, {
                    onClick: () => window.location.reload(),
                    style: {
                      padding: `14px 36px`,
                      borderRadius: `var(--rad-sm)`,
                      border: `1px solid var(--accent-primary)`,
                      background: `var(--accent-primary)`,
                      color: `var(--text-inverse)`,
                      fontWeight: 800,
                      fontSize: `0.9rem`,
                      cursor: `pointer`,
                      fontFamily: `var(--font-body)`,
                      letterSpacing: `0.04em`,
                      textTransform: `uppercase`,
                      boxShadow: `var(--shadow-sm)`,
                    },
                    children: `Refresh Page`,
                  }),
                ],
              })
            : this.props.children;
        }
      }));
  });
function Jd() {
  try {
    document.documentElement.setAttribute(`data-motion`, `on`);
  } catch {}
}
var Yd = t(() => {});
i(() => {
  var e = r(n()),
    t = s();
  (_(), v(), ee(), y(), b(), x(), Ud(), qd(), Ac(), Yd(), Ec());
  var i = a();
  Sc() ||
    (Jd(),
    kc.getState().checkAuth(),
    (0, t.createRoot)(document.getElementById(`root`)).render(
      (0, i.jsx)(e.StrictMode, {
        children: (0, i.jsx)(Kd, { children: (0, i.jsx)(rd, {}) }),
      }),
    ));
})();
export {
  Ic as A,
  tc as B,
  Wc as C,
  Pc as D,
  nl as E,
  pc as F,
  mr as G,
  rc as H,
  cc as I,
  Le as J,
  ar as K,
  bc as L,
  jc as M,
  Ac as N,
  Nc as O,
  kc as P,
  oc as R,
  Xc as S,
  cl as T,
  hr as U,
  ec as V,
  pr as W,
  w as X,
  ze as Y,
  ne as Z,
  Hc as _,
  Tu as a,
  Yc as b,
  hu as c,
  yl as d,
  dl as f,
  tl as g,
  Gc as h,
  wu as i,
  zc as j,
  Fc as k,
  iu as l,
  qc as m,
  Ku as n,
  bu as o,
  Bc as p,
  rr as q,
  qu as r,
  yu as s,
  qd as t,
  ml as u,
  Jc as v,
  Kc as w,
  $c as x,
  el as y,
  ic as z,
};
