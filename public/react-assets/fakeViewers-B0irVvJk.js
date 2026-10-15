import { i as e } from "./jsx-runtime-tHiRxOvn.js";
function t(e) {
  for (var t = 2166136261, n = 0; n < e.length; n++)
    ((t ^= e.charCodeAt(n)), (t = Math.imul(t, 16777619)));
  return t >>> 0;
}
function n(e, n) {
  var r = 180 + (t(String(e || `x`)) % 141),
    i = Number(n) || 0;
  return r + (t(String(e || `x`) + `|` + Math.floor(i / 3)) % 7);
}
var r = e(() => {});
export { r as n, n as t };
