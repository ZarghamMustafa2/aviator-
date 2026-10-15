import { i as e } from "./jsx-runtime-tHiRxOvn.js";
import { N as t, P as n } from "./tpstudio-BPQXDLhP.js";
function r() {
  var e = n((e) => e.user)?.bet_presets;
  return {
    stakes:
      e && Array.isArray(e.stakes) && e.stakes.length === 4 ? e.stakes : o,
    plus: e && Array.isArray(e.plus) && e.plus.length === 4 ? e.plus : s,
  };
}
function i() {
  var e = n.getState().user?.bet_presets;
  return {
    stakes:
      e && Array.isArray(e.stakes) && e.stakes.length === 4 ? e.stakes : o,
    plus: e && Array.isArray(e.plus) && e.plus.length === 4 ? e.plus : s,
  };
}
function a(e) {
  return Number(e).toLocaleString();
}
var o,
  s,
  c = e(() => {
    (t(), (o = [1e3, 5e3, 1e4, 25e3]), (s = [1e3, 5e3, 1e4, 25e3]));
  });
export { r as i, i as n, c as r, a as t };
