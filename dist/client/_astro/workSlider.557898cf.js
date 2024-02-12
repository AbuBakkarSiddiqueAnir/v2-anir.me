import {
  S as ce,
  i as le,
  s as ae,
  e as it,
  a as z,
  c as N,
  b as j,
  d as C,
  f as O,
  g as dt,
  h as T,
  n as Mt,
  j as kt,
  t as vt,
  k as et,
  l as bt,
  m as nt,
  r as Pt,
  u as Ee,
  v as Ie,
  w as we,
  x as Le,
  y as ke,
  z as De,
  A as Te,
  B as Ae,
  C as Oe,
  D as Ce,
  E as Me,
  q as Pe,
  F as Fe,
} from "./index.644dcf4a.js";
/* empty css                       */ function Wt() {
  for (var t = 0, e, n, o = ""; t < arguments.length; )
    (e = arguments[t++]) && (n = ue(e)) && (o && (o += " "), (o += n));
  return o;
}
function ue(t) {
  if (typeof t == "string") return t;
  for (var e, n = "", o = 0; o < t.length; o++)
    t[o] && (e = ue(t[o])) && (n && (n += " "), (n += e));
  return n;
}
function Qt(t, e, n) {
  const o = t.slice();
  return (o[4] = e[n]), o;
}
function Xt(t) {
  let e,
    n = t[4].company + "",
    o,
    i,
    r,
    s,
    c;
  function l() {
    return t[3](t[4]);
  }
  return {
    c() {
      (e = z("button")), (o = vt(n)), (i = et()), this.h();
    },
    l(d) {
      e = N(d, "BUTTON", { "aria-label": !0, class: !0 });
      var g = j(e);
      (o = bt(g, n)), (i = nt(g)), g.forEach(C), this.h();
    },
    h() {
      O(e, "aria-label", "Previous Slide"),
        O(
          e,
          "class",
          (r = Wt(
            "group z-10 overflow-hidden border border-y-green-tint px-3 py-2 text-b-3 font-semibold",
            t[4].index === t[2] && "text-green",
          )),
        );
    },
    m(d, g) {
      dt(d, e, g), T(e, o), T(e, i), s || ((c = Pt(e, "click", l)), (s = !0));
    },
    p(d, g) {
      (t = d),
        g & 2 && n !== (n = t[4].company + "") && Ee(o, n),
        g & 6 &&
          r !==
            (r = Wt(
              "group z-10 overflow-hidden border border-y-green-tint px-3 py-2 text-b-3 font-semibold",
              t[4].index === t[2] && "text-green",
            )) &&
          O(e, "class", r);
    },
    d(d) {
      d && C(e), (s = !1), c();
    },
  };
}
function Ve(t) {
  let e,
    n,
    o = it(t[1]),
    i = [];
  for (let r = 0; r < o.length; r += 1) i[r] = Xt(Qt(t, o, r));
  return {
    c() {
      (e = z("nav")), (n = z("div"));
      for (let r = 0; r < i.length; r += 1) i[r].c();
      this.h();
    },
    l(r) {
      e = N(r, "NAV", { id: !0, class: !0 });
      var s = j(e);
      n = N(s, "DIV", { class: !0 });
      var c = j(n);
      for (let l = 0; l < i.length; l += 1) i[l].l(c);
      c.forEach(C), s.forEach(C), this.h();
    },
    h() {
      O(n, "class", "flex flex-col gap-y-3"),
        O(e, "id", "work-slider-navigation"),
        O(
          e,
          "class",
          "bottom-0 left-[0%] top-8 z-20 order-2 flex min-w-20 gap-y-3 md:order-1",
        );
    },
    m(r, s) {
      dt(r, e, s), T(e, n);
      for (let c = 0; c < i.length; c += 1) i[c] && i[c].m(n, null);
    },
    p(r, [s]) {
      if (s & 7) {
        o = it(r[1]);
        let c;
        for (c = 0; c < o.length; c += 1) {
          const l = Qt(r, o, c);
          i[c] ? i[c].p(l, s) : ((i[c] = Xt(l)), i[c].c(), i[c].m(n, null));
        }
        for (; c < i.length; c += 1) i[c].d(1);
        i.length = o.length;
      }
    },
    i: Mt,
    o: Mt,
    d(r) {
      r && C(e), kt(i, r);
    },
  };
}
function ze(t, e, n) {
  let { scrollToSpecificCompany: o } = e,
    { workExperience: i } = e,
    { activeSlideIndex: r } = e;
  const s = (c) => o(c.index);
  return (
    (t.$$set = (c) => {
      "scrollToSpecificCompany" in c && n(0, (o = c.scrollToSpecificCompany)),
        "workExperience" in c && n(1, (i = c.workExperience)),
        "activeSlideIndex" in c && n(2, (r = c.activeSlideIndex));
    }),
    [o, i, r, s]
  );
}
class Ne extends ce {
  constructor(e) {
    super(),
      le(this, e, ze, Ve, ae, {
        scrollToSpecificCompany: 0,
        workExperience: 1,
        activeSlideIndex: 2,
      });
  }
}
function je(t) {
  return Object.prototype.toString.call(t) === "[object Object]";
}
function $t(t) {
  return je(t) || Array.isArray(t);
}
function Be() {
  return !!(
    typeof window < "u" &&
    window.document &&
    window.document.createElement
  );
}
function Vt(t, e) {
  const n = Object.keys(t),
    o = Object.keys(e);
  if (n.length !== o.length) return !1;
  const i = JSON.stringify(Object.keys(t.breakpoints || {})),
    r = JSON.stringify(Object.keys(e.breakpoints || {}));
  return i !== r
    ? !1
    : n.every((s) => {
        const c = t[s],
          l = e[s];
        return typeof c == "function"
          ? `${c}` == `${l}`
          : !$t(c) || !$t(l)
            ? c === l
            : Vt(c, l);
      });
}
function Yt(t) {
  return t
    .concat()
    .sort((e, n) => (e.name > n.name ? 1 : -1))
    .map((e) => e.options);
}
function He(t, e) {
  if (t.length !== e.length) return !1;
  const n = Yt(t),
    o = Yt(e);
  return n.every((i, r) => {
    const s = o[r];
    return Vt(i, s);
  });
}
function zt(t) {
  return typeof t == "number";
}
function Ft(t) {
  return typeof t == "string";
}
function Nt(t) {
  return typeof t == "boolean";
}
function Zt(t) {
  return Object.prototype.toString.call(t) === "[object Object]";
}
function M(t) {
  return Math.abs(t);
}
function jt(t) {
  return Math.sign(t);
}
function It(t, e) {
  return M(t - e);
}
function Ge(t, e) {
  if (t === 0 || e === 0 || M(t) <= M(e)) return 0;
  const n = It(M(t), M(e));
  return M(n / t);
}
function yt(t) {
  return St(t).map(Number);
}
function q(t) {
  return t[_t(t)];
}
function _t(t) {
  return Math.max(0, t.length - 1);
}
function Bt(t, e) {
  return e === _t(t);
}
function te(t, e = 0) {
  return Array.from(Array(t), (n, o) => e + o);
}
function St(t) {
  return Object.keys(t);
}
function fe(t, e) {
  return [t, e].reduce(
    (n, o) => (
      St(o).forEach((i) => {
        const r = n[i],
          s = o[i],
          c = Zt(r) && Zt(s);
        n[i] = c ? fe(r, s) : s;
      }),
      n
    ),
    {},
  );
}
function de(t, e) {
  return typeof e.MouseEvent < "u" && t instanceof e.MouseEvent;
}
function Re(t, e) {
  const n = { start: o, center: i, end: r };
  function o() {
    return 0;
  }
  function i(l) {
    return r(l) / 2;
  }
  function r(l) {
    return e - l;
  }
  function s(l, d) {
    return Ft(t) ? n[t](l) : t(e, l, d);
  }
  return { measure: s };
}
function xt() {
  let t = [];
  function e(i, r, s, c = { passive: !0 }) {
    let l;
    if ("addEventListener" in i)
      i.addEventListener(r, s, c), (l = () => i.removeEventListener(r, s, c));
    else {
      const d = i;
      d.addListener(s), (l = () => d.removeListener(s));
    }
    return t.push(l), o;
  }
  function n() {
    t = t.filter((i) => i());
  }
  const o = { add: e, clear: n };
  return o;
}
function qe(t, e, n, o) {
  const i = xt(),
    r = 1e3 / 60;
  let s = null,
    c = 0,
    l = 0;
  function d() {
    i.add(t, "visibilitychange", () => {
      t.hidden && p();
    });
  }
  function g() {
    h(), i.clear();
  }
  function a(v) {
    s || (s = v);
    const m = v - s;
    for (s = v, c += m; c >= r; ) n(), (c -= r);
    const b = M(c / r);
    o(b), l && e.requestAnimationFrame(a);
  }
  function f() {
    l || (l = e.requestAnimationFrame(a));
  }
  function h() {
    e.cancelAnimationFrame(l), (s = null), (c = 0), (l = 0);
  }
  function p() {
    (s = null), (c = 0);
  }
  return { init: d, destroy: g, start: f, stop: h, update: n, render: o };
}
function Je(t, e) {
  const n = t === "y" ? "y" : "x",
    o = t === "y" ? "x" : "y",
    i = c(),
    r = l();
  function s(g) {
    const { width: a, height: f } = g;
    return n === "x" ? a : f;
  }
  function c() {
    return n === "y" ? "top" : e === "rtl" ? "right" : "left";
  }
  function l() {
    return n === "y" ? "bottom" : e === "rtl" ? "left" : "right";
  }
  return { scroll: n, cross: o, startEdge: i, endEdge: r, measureSize: s };
}
function at(t = 0, e = 0) {
  const n = M(t - e);
  function o(d) {
    return d < t;
  }
  function i(d) {
    return d > e;
  }
  function r(d) {
    return o(d) || i(d);
  }
  function s(d) {
    return r(d) ? (o(d) ? t : e) : d;
  }
  function c(d) {
    return n ? d - n * Math.ceil((d - e) / n) : d;
  }
  return {
    length: n,
    max: e,
    min: t,
    constrain: s,
    reachedAny: r,
    reachedMax: i,
    reachedMin: o,
    removeOffset: c,
  };
}
function pe(t, e, n) {
  const { constrain: o } = at(0, t),
    i = t + 1;
  let r = s(e);
  function s(f) {
    return n ? M((i + f) % i) : o(f);
  }
  function c() {
    return r;
  }
  function l(f) {
    return (r = s(f)), a;
  }
  function d(f) {
    return g().set(c() + f);
  }
  function g() {
    return pe(t, c(), n);
  }
  const a = { get: c, set: l, add: d, clone: g };
  return a;
}
function Ue(t) {
  const e = t === "rtl" ? -1 : 1;
  function n(i) {
    return i * e;
  }
  return { apply: n };
}
function Ke(t, e, n, o, i, r, s, c, l, d, g, a, f, h, p, u, v, m, b, y) {
  const { cross: x } = t,
    _ = ["INPUT", "SELECT", "TEXTAREA"],
    w = { passive: !1 },
    E = xt(),
    I = xt(),
    k = at(50, 225).constrain(p.measure(20)),
    L = { mouse: 300, touch: 400 },
    D = { mouse: 500, touch: 600 },
    P = u ? 43 : 25;
  let J = !1,
    U = 0,
    X = 0,
    K = !1,
    ot = !1,
    rt = !1,
    $ = !1;
  function pt(S) {
    if (!y) return;
    function A(B) {
      (Nt(y) || y(S, B)) && ht(B);
    }
    const V = n;
    E.add(V, "dragstart", (B) => B.preventDefault(), w)
      .add(V, "touchmove", () => {}, w)
      .add(V, "touchend", () => {})
      .add(V, "touchstart", A)
      .add(V, "mousedown", A)
      .add(V, "touchcancel", H)
      .add(V, "contextmenu", H)
      .add(V, "click", Z, !0);
  }
  function W() {
    E.clear(), I.clear();
  }
  function ut() {
    const S = $ ? o : n;
    I.add(S, "touchmove", G, w)
      .add(S, "touchend", H)
      .add(S, "mousemove", G, w)
      .add(S, "mouseup", H);
  }
  function ft(S) {
    const A = S.nodeName || "";
    return _.includes(A);
  }
  function Y() {
    return (u ? D : L)[$ ? "mouse" : "touch"];
  }
  function gt(S, A) {
    const V = f.add(jt(S) * -1),
      B = a.byDistance(S, !u).distance;
    return u || M(S) < k
      ? B
      : m && A
        ? B * 0.5
        : a.byIndex(V.get(), 0).distance;
  }
  function ht(S) {
    const A = de(S, i);
    ($ = A),
      !(A && S.button !== 0) &&
        (ft(S.target) ||
          ((rt = u && A && !S.buttons && J),
          (J = It(r.get(), c.get()) >= 2),
          (K = !0),
          s.pointerDown(S),
          g.useFriction(0).useDuration(0),
          r.set(c),
          ut(),
          (U = s.readPoint(S)),
          (X = s.readPoint(S, x)),
          h.emit("pointerDown")));
  }
  function G(S) {
    const A = s.readPoint(S),
      V = s.readPoint(S, x),
      B = It(A, U),
      st = It(V, X);
    if (!ot && !$ && (!S.cancelable || ((ot = B > st), !ot))) return H(S);
    const Q = s.pointerMove(S);
    B > v && (rt = !0),
      g.useFriction(0.3).useDuration(1),
      l.start(),
      r.add(e.apply(Q)),
      S.preventDefault();
  }
  function H(S) {
    const V = a.byDistance(0, !1).index !== f.get(),
      B = s.pointerUp(S) * Y(),
      st = gt(e.apply(B), V),
      Q = Ge(B, st),
      ct = P - 10 * Q,
      tt = b + Q / 50;
    (ot = !1),
      (K = !1),
      I.clear(),
      g.useDuration(ct).useFriction(tt),
      d.distance(st, !u),
      ($ = !1),
      h.emit("pointerUp");
  }
  function Z(S) {
    rt && (S.stopPropagation(), S.preventDefault());
  }
  function R() {
    return K;
  }
  return { init: pt, pointerDown: R, destroy: W };
}
function We(t, e) {
  let o, i;
  function r(a) {
    return a.timeStamp;
  }
  function s(a, f) {
    const p = `client${(f || t.scroll) === "x" ? "X" : "Y"}`;
    return (de(a, e) ? a : a.touches[0])[p];
  }
  function c(a) {
    return (o = a), (i = a), s(a);
  }
  function l(a) {
    const f = s(a) - s(i),
      h = r(a) - r(o) > 170;
    return (i = a), h && (o = a), f;
  }
  function d(a) {
    if (!o || !i) return 0;
    const f = s(i) - s(o),
      h = r(a) - r(o),
      p = r(a) - r(i) > 170,
      u = f / h;
    return h && !p && M(u) > 0.1 ? u : 0;
  }
  return { pointerDown: c, pointerMove: l, pointerUp: d, readPoint: s };
}
function Qe() {
  function t(n) {
    const { offsetTop: o, offsetLeft: i, offsetWidth: r, offsetHeight: s } = n;
    return {
      top: o,
      right: i + r,
      bottom: o + s,
      left: i,
      width: r,
      height: s,
    };
  }
  return { measure: t };
}
function Xe(t) {
  function e(o) {
    return t * (o / 100);
  }
  return { measure: e };
}
function $e(t, e, n, o, i, r, s) {
  let c,
    l,
    d = [],
    g = !1;
  function a(u) {
    return i.measureSize(s.measure(u));
  }
  function f(u) {
    if (!r) return;
    (l = a(t)), (d = o.map(a));
    function v(b) {
      for (const y of b) {
        const x = y.target === t,
          _ = o.indexOf(y.target),
          w = x ? l : d[_],
          E = a(x ? t : o[_]);
        if (M(E - w) >= 0.5) {
          n.requestAnimationFrame(() => {
            u.reInit(), e.emit("resize");
          });
          break;
        }
      }
    }
    (c = new ResizeObserver((b) => {
      g || ((Nt(r) || r(u, b)) && v(b));
    })),
      [t].concat(o).forEach((b) => c.observe(b));
  }
  function h() {
    c && c.disconnect(), (g = !0);
  }
  return { init: f, destroy: h };
}
function Ye(t, e, n, o, i) {
  let r = 0,
    s = 0,
    c = o,
    l = i,
    d = t.get(),
    g = 0;
  function a() {
    const _ = n.get() - t.get(),
      w = !c;
    let E = 0;
    return (
      w
        ? ((r = 0), t.set(n), (E = _))
        : ((r += _ / c), (r *= l), (d += r), t.add(r), (E = d - g)),
      (s = jt(E)),
      (g = d),
      x
    );
  }
  function f() {
    const _ = n.get() - e.get();
    return M(_) < 0.001;
  }
  function h() {
    return c;
  }
  function p() {
    return s;
  }
  function u() {
    return r;
  }
  function v() {
    return b(o);
  }
  function m() {
    return y(i);
  }
  function b(_) {
    return (c = _), x;
  }
  function y(_) {
    return (l = _), x;
  }
  const x = {
    direction: p,
    duration: h,
    velocity: u,
    seek: a,
    settled: f,
    useBaseFriction: m,
    useBaseDuration: v,
    useFriction: y,
    useDuration: b,
  };
  return x;
}
function Ze(t, e, n, o, i) {
  const r = i.measure(10),
    s = i.measure(50),
    c = at(0.1, 0.99);
  let l = !1;
  function d() {
    return !(l || !t.reachedAny(n.get()) || !t.reachedAny(e.get()));
  }
  function g(h) {
    if (!d()) return;
    const p = t.reachedMin(e.get()) ? "min" : "max",
      u = M(t[p] - e.get()),
      v = n.get() - e.get(),
      m = c.constrain(u / s);
    n.subtract(v * m),
      !h &&
        M(v) < r &&
        (n.set(t.constrain(n.get())), o.useDuration(25).useBaseFriction());
  }
  function a(h) {
    l = !h;
  }
  return { constrain: g, toggleActive: a };
}
function tn(t, e, n, o, i) {
  const r = at(-e + t, 0),
    s = g(),
    c = d(),
    l = a();
  function d() {
    const h = s[0],
      p = q(s),
      u = s.lastIndexOf(h),
      v = s.indexOf(p) + 1;
    return at(u, v);
  }
  function g() {
    return n
      .map((h, p) => {
        const u = !p,
          v = Bt(n, p);
        return u ? r.max : v ? r.min : r.constrain(h);
      })
      .map((h) => parseFloat(h.toFixed(3)));
  }
  function a() {
    if (e <= t + i) return [r.max];
    if (o === "keepSnaps") return s;
    const { min: h, max: p } = c;
    return s.slice(h, p);
  }
  return { snapsContained: l, scrollContainLimit: c };
}
function en(t, e, n) {
  const o = e[0],
    i = n ? o - t : q(e);
  return { limit: at(i, o) };
}
function nn(t, e, n, o) {
  const r = e.min + 0.1,
    s = e.max + 0.1,
    { reachedMin: c, reachedMax: l } = at(r, s);
  function d(f) {
    return f === 1 ? l(n.get()) : f === -1 ? c(n.get()) : !1;
  }
  function g(f) {
    if (!d(f)) return;
    const h = t * (f * -1);
    o.forEach((p) => p.add(h));
  }
  return { loop: g };
}
function on(t) {
  const { max: e, length: n } = t;
  function o(r) {
    const s = r - e;
    return n ? s / -n : 0;
  }
  return { get: o };
}
function rn(t, e, n, o, i) {
  const { startEdge: r, endEdge: s } = t,
    { groupSlides: c } = i,
    l = a().map(e.measure),
    d = f(),
    g = h();
  function a() {
    return c(o)
      .map((u) => q(u)[s] - u[0][r])
      .map(M);
  }
  function f() {
    return o.map((u) => n[r] - u[r]).map((u) => -M(u));
  }
  function h() {
    return c(d)
      .map((u) => u[0])
      .map((u, v) => u + l[v]);
  }
  return { snaps: d, snapsAligned: g };
}
function sn(t, e, n, o, i, r) {
  const { groupSlides: s } = i,
    { min: c, max: l } = o,
    d = g();
  function g() {
    const f = s(r),
      h = !t || e === "keepSnaps";
    return n.length === 1
      ? [r]
      : h
        ? f
        : f.slice(c, l).map((p, u, v) => {
            const m = !u,
              b = Bt(v, u);
            if (m) {
              const y = q(v[0]) + 1;
              return te(y);
            }
            if (b) {
              const y = _t(r) - q(v)[0] + 1;
              return te(y, q(v)[0]);
            }
            return p;
          });
  }
  return { slideRegistry: d };
}
function cn(t, e, n, o, i) {
  const { reachedAny: r, removeOffset: s, constrain: c } = o;
  function l(p) {
    return p.concat().sort((u, v) => M(u) - M(v))[0];
  }
  function d(p) {
    const u = t ? s(p) : c(p),
      v = e
        .map((b) => b - u)
        .map((b) => g(b, 0))
        .map((b, y) => ({ diff: b, index: y }))
        .sort((b, y) => M(b.diff) - M(y.diff)),
      { index: m } = v[0];
    return { index: m, distance: u };
  }
  function g(p, u) {
    const v = [p, p + n, p - n];
    if (!t) return v[0];
    if (!u) return l(v);
    const m = v.filter((b) => jt(b) === u);
    return m.length ? l(m) : q(v) - n;
  }
  function a(p, u) {
    const v = e[p] - i.get(),
      m = g(v, u);
    return { index: p, distance: m };
  }
  function f(p, u) {
    const v = i.get() + p,
      { index: m, distance: b } = d(v),
      y = !t && r(v);
    if (!u || y) return { index: m, distance: p };
    const x = e[m] - b,
      _ = p + g(x, 0);
    return { index: m, distance: _ };
  }
  return { byDistance: f, byIndex: a, shortcut: g };
}
function ln(t, e, n, o, i, r, s) {
  function c(a) {
    const f = a.distance,
      h = a.index !== e.get();
    r.add(f),
      f && (o.duration() ? t.start() : (t.update(), t.render(1), t.update())),
      h && (n.set(e.get()), e.set(a.index), s.emit("select"));
  }
  function l(a, f) {
    const h = i.byDistance(a, f);
    c(h);
  }
  function d(a, f) {
    const h = e.clone().set(a),
      p = i.byIndex(h.get(), f);
    c(p);
  }
  return { distance: l, index: d };
}
function an(t, e, n, o, i, r) {
  let s = 0;
  function c() {
    r.add(document, "keydown", l, !1), e.forEach(d);
  }
  function l(a) {
    a.code === "Tab" && (s = new Date().getTime());
  }
  function d(a) {
    const f = () => {
      if (new Date().getTime() - s > 10) return;
      t.scrollLeft = 0;
      const u = e.indexOf(a),
        v = n.findIndex((m) => m.includes(u));
      zt(v) && (i.useDuration(0), o.index(v, 0));
    };
    r.add(a, "focus", f, { passive: !0, capture: !0 });
  }
  return { init: c };
}
function wt(t) {
  let e = t;
  function n() {
    return e;
  }
  function o(l) {
    e = s(l);
  }
  function i(l) {
    e += s(l);
  }
  function r(l) {
    e -= s(l);
  }
  function s(l) {
    return zt(l) ? l : l.get();
  }
  return { get: n, set: o, add: i, subtract: r };
}
function ge(t, e, n) {
  const o = t.scroll === "x" ? s : c,
    i = n.style;
  let r = !1;
  function s(f) {
    return `translate3d(${f}px,0px,0px)`;
  }
  function c(f) {
    return `translate3d(0px,${f}px,0px)`;
  }
  function l(f) {
    r || (i.transform = o(e.apply(f)));
  }
  function d(f) {
    r = !f;
  }
  function g() {
    r ||
      ((i.transform = ""),
      n.getAttribute("style") || n.removeAttribute("style"));
  }
  return { clear: g, to: l, toggleActive: d };
}
function un(t, e, n, o, i, r, s, c, l, d) {
  const a = yt(r),
    f = yt(r).reverse(),
    h = b().concat(y());
  function p(I, k) {
    return I.reduce((L, D) => L - r[D], k);
  }
  function u(I, k) {
    return I.reduce((L, D) => (p(L, k) > 0 ? L.concat([D]) : L), []);
  }
  function v(I) {
    return s.map((k, L) => ({
      start: k - i[L] + 0.5 + I,
      end: k + n - 0.5 + I,
    }));
  }
  function m(I, k, L) {
    const D = v(k);
    return I.map((P) => {
      const J = L ? 0 : -o,
        U = L ? o : 0,
        X = L ? "end" : "start",
        K = D[P][X];
      return {
        index: P,
        loopPoint: K,
        slideLocation: wt(-1),
        translate: ge(t, e, d[P]),
        target: () => (l.get() > K ? J : U),
      };
    });
  }
  function b() {
    const I = c[0],
      k = u(f, I);
    return m(k, o, !1);
  }
  function y() {
    const I = n - c[0] - 1,
      k = u(a, I);
    return m(k, -o, !0);
  }
  function x() {
    return h.every(({ index: I }) => {
      const k = a.filter((L) => L !== I);
      return p(k, n) <= 0.1;
    });
  }
  function _() {
    h.forEach((I) => {
      const { target: k, translate: L, slideLocation: D } = I,
        P = k();
      P !== D.get() && (L.to(P), D.set(P));
    });
  }
  function w() {
    h.forEach((I) => I.translate.clear());
  }
  return { canLoop: x, clear: w, loop: _, loopPoints: h };
}
function fn(t, e, n) {
  let o,
    i = !1;
  function r(l) {
    if (!n) return;
    function d(g) {
      for (const a of g)
        if (a.type === "childList") {
          l.reInit(), e.emit("slidesChanged");
          break;
        }
    }
    (o = new MutationObserver((g) => {
      i || ((Nt(n) || n(l, g)) && d(g));
    })),
      o.observe(t, { childList: !0 });
  }
  function s() {
    o && o.disconnect(), (i = !0);
  }
  return { init: r, destroy: s };
}
function dn(t, e, n, o) {
  const i = {};
  let r = null,
    s = null,
    c,
    l = !1;
  function d() {
    (c = new IntersectionObserver(
      (p) => {
        l ||
          (p.forEach((u) => {
            const v = e.indexOf(u.target);
            i[v] = u;
          }),
          (r = null),
          (s = null),
          n.emit("slidesInView"));
      },
      { root: t.parentElement, threshold: o },
    )),
      e.forEach((p) => c.observe(p));
  }
  function g() {
    c && c.disconnect(), (l = !0);
  }
  function a(p) {
    return St(i).reduce((u, v) => {
      const m = parseInt(v),
        { isIntersecting: b } = i[m];
      return ((p && b) || (!p && !b)) && u.push(m), u;
    }, []);
  }
  function f(p = !0) {
    if (p && r) return r;
    if (!p && s) return s;
    const u = a(p);
    return p && (r = u), p || (s = u), u;
  }
  return { init: d, destroy: g, get: f };
}
function pn(t, e, n, o, i, r) {
  const { measureSize: s, startEdge: c, endEdge: l } = t,
    d = n[0] && i,
    g = p(),
    a = u(),
    f = n.map(s),
    h = v();
  function p() {
    if (!d) return 0;
    const b = n[0];
    return M(e[c] - b[c]);
  }
  function u() {
    if (!d) return 0;
    const b = r.getComputedStyle(q(o));
    return parseFloat(b.getPropertyValue(`margin-${l}`));
  }
  function v() {
    return n
      .map((b, y, x) => {
        const _ = !y,
          w = Bt(x, y);
        return _ ? f[y] + g : w ? f[y] + a : x[y + 1][c] - b[c];
      })
      .map(M);
  }
  return { slideSizes: f, slideSizesWithGaps: h, startGap: g, endGap: a };
}
function gn(t, e, n, o, i, r, s, c, l, d) {
  const { startEdge: g, endEdge: a } = t,
    f = zt(o);
  function h(m, b) {
    return yt(m)
      .filter((y) => y % b === 0)
      .map((y) => m.slice(y, y + b));
  }
  function p(m) {
    return m.length
      ? yt(m)
          .reduce((b, y) => {
            const x = q(b) || 0,
              _ = x === 0,
              w = y === _t(m),
              E = r[g] - s[x][g],
              I = r[g] - s[y][a],
              k = !i && _ ? e.apply(c) : 0,
              L = !i && w ? e.apply(l) : 0;
            return (
              M(I - L - (E + k)) > n + d && b.push(y), w && b.push(m.length), b
            );
          }, [])
          .map((b, y, x) => {
            const _ = Math.max(x[y - 1] || 0);
            return m.slice(_, b);
          })
      : [];
  }
  function u(m) {
    return f ? h(m, o) : p(m);
  }
  return { groupSlides: u };
}
function hn(t, e, n, o, i, r, s) {
  const {
      align: c,
      axis: l,
      direction: d,
      startIndex: g,
      loop: a,
      duration: f,
      dragFree: h,
      dragThreshold: p,
      inViewThreshold: u,
      slidesToScroll: v,
      skipSnaps: m,
      containScroll: b,
      watchResize: y,
      watchSlides: x,
      watchDrag: _,
    } = r,
    w = 2,
    E = Qe(),
    I = E.measure(e),
    k = n.map(E.measure),
    L = Ue(d),
    D = Je(l, d),
    P = D.measureSize(I),
    J = Xe(P),
    U = Re(c, P),
    X = !a && !!b,
    K = a || !!b,
    {
      slideSizes: ot,
      slideSizesWithGaps: rt,
      startGap: $,
      endGap: pt,
    } = pn(D, I, k, n, K, i),
    W = gn(D, L, P, v, a, I, k, $, pt, w),
    { snaps: ut, snapsAligned: ft } = rn(D, U, I, k, W),
    Y = -q(ut) + q(rt),
    { snapsContained: gt, scrollContainLimit: ht } = tn(P, Y, ft, b, w),
    G = X ? gt : ft,
    { limit: H } = en(Y, G, a),
    Z = pe(_t(G), g, a),
    R = Z.clone(),
    F = yt(n),
    S = ({
      dragHandler: lt,
      scrollBody: Ot,
      scrollBounds: Ct,
      options: { loop: Et },
    }) => {
      Et || Ct.constrain(lt.pointerDown()), Ot.seek();
    },
    A = (
      {
        scrollBody: lt,
        translate: Ot,
        location: Ct,
        offsetLocation: Et,
        scrollLooper: ve,
        slideLooper: be,
        dragHandler: ye,
        animation: Se,
        eventHandler: Jt,
        options: { loop: xe },
      },
      _e,
    ) => {
      const Ut = lt.velocity(),
        Kt = lt.settled();
      Kt && !ye.pointerDown() && (Se.stop(), Jt.emit("settle")),
        Kt || Jt.emit("scroll"),
        Et.set(Ct.get() - Ut + Ut * _e),
        xe && (ve.loop(lt.direction()), be.loop()),
        Ot.to(Et.get());
    },
    V = qe(
      o,
      i,
      () => S(At),
      (lt) => A(At, lt),
    ),
    B = 0.68,
    st = G[Z.get()],
    Q = wt(st),
    ct = wt(st),
    tt = wt(st),
    mt = Ye(Q, ct, tt, f, B),
    Dt = cn(a, G, Y, H, tt),
    Tt = ln(V, Z, R, mt, Dt, tt, s),
    Gt = on(H),
    Rt = xt(),
    he = dn(e, n, s, u),
    { slideRegistry: qt } = sn(X, b, G, ht, W, F),
    me = an(t, n, qt, Tt, mt, Rt),
    At = {
      ownerDocument: o,
      ownerWindow: i,
      eventHandler: s,
      containerRect: I,
      slideRects: k,
      animation: V,
      axis: D,
      direction: L,
      dragHandler: Ke(
        D,
        L,
        t,
        o,
        i,
        tt,
        We(D, i),
        Q,
        V,
        Tt,
        mt,
        Dt,
        Z,
        s,
        J,
        h,
        p,
        m,
        B,
        _,
      ),
      eventStore: Rt,
      percentOfView: J,
      index: Z,
      indexPrevious: R,
      limit: H,
      location: Q,
      offsetLocation: ct,
      options: r,
      resizeHandler: $e(e, s, i, n, D, y, E),
      scrollBody: mt,
      scrollBounds: Ze(H, Q, tt, mt, J),
      scrollLooper: nn(Y, H, ct, [Q, ct, tt]),
      scrollProgress: Gt,
      scrollSnapList: G.map(Gt.get),
      scrollSnaps: G,
      scrollTarget: Dt,
      scrollTo: Tt,
      slideLooper: un(D, L, P, Y, ot, rt, ut, G, ct, n),
      slideFocus: me,
      slidesHandler: fn(e, s, x),
      slidesInView: he,
      slideIndexes: F,
      slideRegistry: qt,
      slidesToScroll: W,
      target: tt,
      translate: ge(D, L, e),
    };
  return At;
}
function mn() {
  const t = {};
  let e;
  function n(l) {
    e = l;
  }
  function o(l) {
    return t[l] || [];
  }
  function i(l) {
    return o(l).forEach((d) => d(e, l)), c;
  }
  function r(l, d) {
    return (t[l] = o(l).concat([d])), c;
  }
  function s(l, d) {
    return (t[l] = o(l).filter((g) => g !== d)), c;
  }
  const c = { init: n, emit: i, off: s, on: r };
  return c;
}
const vn = {
  align: "center",
  axis: "x",
  container: null,
  slides: null,
  containScroll: "trimSnaps",
  direction: "ltr",
  slidesToScroll: 1,
  inViewThreshold: 0,
  breakpoints: {},
  dragFree: !1,
  dragThreshold: 10,
  loop: !1,
  skipSnaps: !1,
  duration: 25,
  startIndex: 0,
  active: !0,
  watchDrag: !0,
  watchResize: !0,
  watchSlides: !0,
};
function bn(t) {
  function e(r, s) {
    return fe(r, s || {});
  }
  function n(r) {
    const s = r.breakpoints || {},
      c = St(s)
        .filter((l) => t.matchMedia(l).matches)
        .map((l) => s[l])
        .reduce((l, d) => e(l, d), {});
    return e(r, c);
  }
  function o(r) {
    return r
      .map((s) => St(s.breakpoints || {}))
      .reduce((s, c) => s.concat(c), [])
      .map(t.matchMedia);
  }
  return { mergeOptions: e, optionsAtMedia: n, optionsMediaQueries: o };
}
function yn(t) {
  let e = [];
  function n(r, s) {
    return (
      (e = s.filter(({ options: c }) => t.optionsAtMedia(c).active !== !1)),
      e.forEach((c) => c.init(r, t)),
      s.reduce((c, l) => Object.assign(c, { [l.name]: l }), {})
    );
  }
  function o() {
    e = e.filter((r) => r.destroy());
  }
  return { init: n, destroy: o };
}
function Lt(t, e, n) {
  const o = t.ownerDocument,
    i = o.defaultView,
    r = bn(i),
    s = yn(r),
    c = xt(),
    l = mn(),
    { mergeOptions: d, optionsAtMedia: g, optionsMediaQueries: a } = r,
    { on: f, off: h, emit: p } = l,
    u = D;
  let v = !1,
    m,
    b = d(vn, Lt.globalOptions),
    y = d(b),
    x = [],
    _,
    w,
    E;
  function I() {
    const { container: F, slides: S } = y;
    w = (Ft(F) ? t.querySelector(F) : F) || t.children[0];
    const V = Ft(S) ? w.querySelectorAll(S) : S;
    E = [].slice.call(V || w.children);
  }
  function k(F) {
    const S = hn(t, w, E, o, i, F, l);
    if (F.loop && !S.slideLooper.canLoop()) {
      const A = Object.assign({}, F, { loop: !1 });
      return k(A);
    }
    return S;
  }
  function L(F, S) {
    v ||
      ((b = d(b, F)),
      (y = g(b)),
      (x = S || x),
      I(),
      (m = k(y)),
      a([b, ...x.map(({ options: A }) => A)]).forEach((A) =>
        c.add(A, "change", D),
      ),
      y.active &&
        (m.translate.to(m.location.get()),
        m.animation.init(),
        m.slidesInView.init(),
        m.slideFocus.init(),
        m.eventHandler.init(R),
        m.resizeHandler.init(R),
        m.slidesHandler.init(R),
        m.options.loop && m.slideLooper.loop(),
        w.offsetParent && E.length && m.dragHandler.init(R),
        (_ = s.init(R, x))));
  }
  function D(F, S) {
    const A = W();
    P(), L(d({ startIndex: A }, F), S), l.emit("reInit");
  }
  function P() {
    m.dragHandler.destroy(),
      m.eventStore.clear(),
      m.translate.clear(),
      m.slideLooper.clear(),
      m.resizeHandler.destroy(),
      m.slidesHandler.destroy(),
      m.slidesInView.destroy(),
      m.animation.destroy(),
      s.destroy(),
      c.clear();
  }
  function J() {
    v || ((v = !0), c.clear(), P(), l.emit("destroy"));
  }
  function U(F, S, A) {
    !y.active ||
      v ||
      (m.scrollBody.useBaseFriction().useDuration(S === !0 ? 0 : y.duration),
      m.scrollTo.index(F, A || 0));
  }
  function X(F) {
    const S = m.index.add(1).get();
    U(S, F, -1);
  }
  function K(F) {
    const S = m.index.add(-1).get();
    U(S, F, 1);
  }
  function ot() {
    return m.index.add(1).get() !== W();
  }
  function rt() {
    return m.index.add(-1).get() !== W();
  }
  function $() {
    return m.scrollSnapList;
  }
  function pt() {
    return m.scrollProgress.get(m.location.get());
  }
  function W() {
    return m.index.get();
  }
  function ut() {
    return m.indexPrevious.get();
  }
  function ft() {
    return m.slidesInView.get();
  }
  function Y() {
    return m.slidesInView.get(!1);
  }
  function gt() {
    return _;
  }
  function ht() {
    return m;
  }
  function G() {
    return t;
  }
  function H() {
    return w;
  }
  function Z() {
    return E;
  }
  const R = {
    canScrollNext: ot,
    canScrollPrev: rt,
    containerNode: H,
    internalEngine: ht,
    destroy: J,
    off: h,
    on: f,
    emit: p,
    plugins: gt,
    previousScrollSnap: ut,
    reInit: u,
    rootNode: G,
    scrollNext: X,
    scrollPrev: K,
    scrollProgress: pt,
    scrollSnapList: $,
    scrollTo: U,
    selectedScrollSnap: W,
    slideNodes: Z,
    slidesInView: ft,
    slidesNotInView: Y,
  };
  return L(e, n), setTimeout(() => l.emit("init"), 0), R;
}
Lt.globalOptions = void 0;
function Ht(t, e = { options: {}, plugins: [] }) {
  let n = e,
    o;
  return (
    Be() &&
      ((Lt.globalOptions = Ht.globalOptions),
      (o = Lt(t, n.options, n.plugins)),
      o.on("init", () =>
        t.dispatchEvent(new CustomEvent("emblaInit", { detail: o })),
      )),
    {
      destroy: () => {
        o && o.destroy();
      },
      update: (i) => {
        const r = !Vt(n.options, i.options),
          s = !He(n.plugins, i.plugins);
        (!r && !s) || ((n = i), o && o.reInit(n.options, n.plugins));
      },
    }
  );
}
Ht.globalOptions = void 0;
function ee(t, e, n) {
  const o = t.slice();
  return (o[11] = e[n]), o;
}
function ne(t, e, n) {
  const o = t.slice();
  return (o[14] = e[n]), o;
}
function oe(t, e, n) {
  const o = t.slice();
  return (o[17] = e[n]), o;
}
function re(t) {
  let e,
    n = t[17] + "",
    o;
  return {
    c() {
      (e = z("li")), (o = vt(n)), this.h();
    },
    l(i) {
      e = N(i, "LI", { class: !0 });
      var r = j(e);
      (o = bt(r, n)), r.forEach(C), this.h();
    },
    h() {
      O(
        e,
        "class",
        "rounded-lg border border-green px-2 py-[2px] text-[0.8rem]",
      );
    },
    m(i, r) {
      dt(i, e, r), T(e, o);
    },
    p: Mt,
    d(i) {
      i && C(e);
    },
  };
}
function se(t) {
  let e,
    n,
    o = t[14].name + "",
    i,
    r,
    s,
    c,
    l,
    d,
    g,
    a = it(t[14].technologies),
    f = [];
  for (let h = 0; h < a.length; h += 1) f[h] = re(oe(t, a, h));
  return {
    c() {
      (e = z("article")),
        (n = z("h6")),
        (i = vt(o)),
        (r = et()),
        (s = z("a")),
        (c = z("img")),
        (d = et()),
        (g = z("ol"));
      for (let h = 0; h < f.length; h += 1) f[h].c();
      this.h();
    },
    l(h) {
      e = N(h, "ARTICLE", { class: !0 });
      var p = j(e);
      n = N(p, "H6", { class: !0 });
      var u = j(n);
      (i = bt(u, o)), (r = nt(u)), (s = N(u, "A", { href: !0, target: !0 }));
      var v = j(s);
      (c = N(v, "IMG", { class: !0, src: !0, alt: !0 })),
        v.forEach(C),
        u.forEach(C),
        (d = nt(p)),
        (g = N(p, "OL", { class: !0 }));
      var m = j(g);
      for (let b = 0; b < f.length; b += 1) f[b].l(m);
      m.forEach(C), p.forEach(C), this.h();
    },
    h() {
      O(c, "class", "w-4"),
        Fe(c.src, (l = "/icons/externalLink.svg")) || O(c, "src", l),
        O(c, "alt", ""),
        O(s, "href", t[14].link),
        O(s, "target", "_blank"),
        O(n, "class", "mb-2 flex gap-x-2 text-[0.9rem] text-green"),
        O(g, "class", "flex flex-wrap gap-4"),
        O(e, "class", "mb-3");
    },
    m(h, p) {
      dt(h, e, p),
        T(e, n),
        T(n, i),
        T(n, r),
        T(n, s),
        T(s, c),
        T(e, d),
        T(e, g);
      for (let u = 0; u < f.length; u += 1) f[u] && f[u].m(g, null);
    },
    p(h, p) {
      if (p & 8) {
        a = it(h[14].technologies);
        let u;
        for (u = 0; u < a.length; u += 1) {
          const v = oe(h, a, u);
          f[u] ? f[u].p(v, p) : ((f[u] = re(v)), f[u].c(), f[u].m(g, null));
        }
        for (; u < f.length; u += 1) f[u].d(1);
        f.length = a.length;
      }
    },
    d(h) {
      h && C(e), kt(f, h);
    },
  };
}
function ie(t) {
  let e,
    n,
    o,
    i = t[11].position + "",
    r,
    s,
    c,
    l = t[11].period + "",
    d,
    g,
    a,
    f,
    h = "Contributions:",
    p,
    u,
    v,
    m,
    b,
    y = it(t[11].projects),
    x = [];
  for (let _ = 0; _ < y.length; _ += 1) x[_] = se(ne(t, y, _));
  return {
    c() {
      (e = z("article")),
        (n = z("div")),
        (o = z("h3")),
        (r = vt(i)),
        (s = et()),
        (c = z("p")),
        (d = vt(l)),
        (g = et()),
        (a = z("div")),
        (f = z("h4")),
        (f.textContent = h),
        (p = et()),
        (u = z("ul"));
      for (let _ = 0; _ < x.length; _ += 1) x[_].c();
      (v = et()), (m = z("li")), (b = et()), this.h();
    },
    l(_) {
      e = N(_, "ARTICLE", { class: !0 });
      var w = j(e);
      n = N(w, "DIV", { class: !0 });
      var E = j(n);
      o = N(E, "H3", { class: !0 });
      var I = j(o);
      (r = bt(I, i)), I.forEach(C), (s = nt(E)), (c = N(E, "P", { class: !0 }));
      var k = j(c);
      (d = bt(k, l)),
        k.forEach(C),
        E.forEach(C),
        (g = nt(w)),
        (a = N(w, "DIV", {}));
      var L = j(a);
      (f = N(L, "H4", { class: !0, "data-svelte-h": !0 })),
        Me(f) !== "svelte-q6oi03" && (f.textContent = h),
        (p = nt(L)),
        (u = N(L, "UL", { class: !0 }));
      var D = j(u);
      for (let P = 0; P < x.length; P += 1) x[P].l(D);
      (v = nt(D)),
        (m = N(D, "LI", {})),
        j(m).forEach(C),
        D.forEach(C),
        L.forEach(C),
        (b = nt(w)),
        w.forEach(C),
        this.h();
    },
    h() {
      O(o, "class", "text-puple-light mb-3 text-[1.2rem]"),
        O(c, "class", "text-[12px]"),
        O(n, "class", "flex justify-between"),
        O(f, "class", "te mb-2 text-[0.9rem] text-white"),
        O(u, "class", "text-b-3"),
        O(
          e,
          "class",
          "embla__slide mb-12 min-h-[13rem] flex-1 overflow-y-auto border border-green border-y-green-tint p-3 svelte-1seuoqv",
        );
    },
    m(_, w) {
      dt(_, e, w),
        T(e, n),
        T(n, o),
        T(o, r),
        T(n, s),
        T(n, c),
        T(c, d),
        T(e, g),
        T(e, a),
        T(a, f),
        T(a, p),
        T(a, u);
      for (let E = 0; E < x.length; E += 1) x[E] && x[E].m(u, null);
      T(u, v), T(u, m), T(e, b);
    },
    p(_, w) {
      if (w & 8) {
        y = it(_[11].projects);
        let E;
        for (E = 0; E < y.length; E += 1) {
          const I = ne(_, y, E);
          x[E] ? x[E].p(I, w) : ((x[E] = se(I)), x[E].c(), x[E].m(u, v));
        }
        for (; E < x.length; E += 1) x[E].d(1);
        x.length = y.length;
      }
    },
    d(_) {
      _ && C(e), kt(x, _);
    },
  };
}
function Sn(t) {
  let e, n, o, i, r, s, c, l;
  Ie(t[8]),
    (n = new Ne({
      props: {
        workExperience: t[3],
        scrollToSpecificCompany: t[7],
        activeSlideIndex: t[1],
      },
    }));
  let d = it(t[3]),
    g = [];
  for (let a = 0; a < d.length; a += 1) g[a] = ie(ee(t, d, a));
  return {
    c() {
      (e = z("div")),
        we(n.$$.fragment),
        (o = et()),
        (i = z("div")),
        (r = z("div"));
      for (let a = 0; a < g.length; a += 1) g[a].c();
      this.h();
    },
    l(a) {
      e = N(a, "DIV", { id: !0, class: !0 });
      var f = j(e);
      Le(n.$$.fragment, f),
        (o = nt(f)),
        (i = N(f, "DIV", { id: !0, class: !0 }));
      var h = j(i);
      r = N(h, "DIV", { class: !0 });
      var p = j(r);
      for (let u = 0; u < g.length; u += 1) g[u].l(p);
      p.forEach(C), h.forEach(C), f.forEach(C), this.h();
    },
    h() {
      O(r, "class", "embla__container flex h-[16rem] svelte-1seuoqv"),
        O(i, "id", "work-viewport"),
        O(i, "class", "order-1 w-[99%] overflow-hidden md:order-2 md:w-[70%]"),
        O(e, "id", "work_carousel"),
        O(
          e,
          "class",
          "inter relative mx-auto flex w-full flex-col gap-x-3 md:flex-row",
        );
    },
    m(a, f) {
      dt(a, e, f), ke(n, e, null), T(e, o), T(e, i), T(i, r);
      for (let h = 0; h < g.length; h += 1) g[h] && g[h].m(r, null);
      t[9](r),
        (s = !0),
        c ||
          ((l = [
            Pt(window, "resize", t[8]),
            De(Ht.call(null, i, { plugins: t[4], options: t[5] })),
            Pt(i, "emblaInit", t[6]),
          ]),
          (c = !0));
    },
    p(a, [f]) {
      const h = {};
      if ((f & 2 && (h.activeSlideIndex = a[1]), n.$set(h), f & 8)) {
        d = it(a[3]);
        let p;
        for (p = 0; p < d.length; p += 1) {
          const u = ee(a, d, p);
          g[p] ? g[p].p(u, f) : ((g[p] = ie(u)), g[p].c(), g[p].m(r, null));
        }
        for (; p < g.length; p += 1) g[p].d(1);
        g.length = d.length;
      }
    },
    i(a) {
      s || (Te(n.$$.fragment, a), (s = !0));
    },
    o(a) {
      Ae(n.$$.fragment, a), (s = !1);
    },
    d(a) {
      a && C(e), Oe(n), kt(g, a), t[9](null), (c = !1), Ce(l);
    },
  };
}
function xn(t, e, n) {
  const o = [
    {
      index: 0,
      position: "Frontend Developer",
      company: "Otterdev",
      location: "Singapore/Remote",
      period: "01/2023 - 02/2024",
      whatIDid: "",
      projects: [
        {
          name: "Otterdev Official Website",
          technologies: ["Astro", "Svelte", "ReactJS", "Sanity", "GSAP"],
          link: "otterdev.io",
        },
        {
          name: "Anytech Website",
          technologies: ["Astro", "Svelte", "ReactJS", "Sanity"],
          link: "https:anytxn.com",
        },
      ],
    },
    {
      index: 2,
      position: "Software Developer",
      company: "Besnik/Uihut",
      location: "Onsite",
      period: "04/2022 - 01/2023",
      whatIDid: "",
      projects: [
        {
          name: "Ezytor Website Builder",
          technologies: ["Laravel Blade", "ReactJS"],
          link: "",
        },
        {
          name: "Graphicsly WordPress Plugin",
          technologies: ["ReactJS"],
          link: "",
        },
        {
          name: "Flowgiri and Chrome Extension",
          technologies: ["ReactJS"],
          link: "",
        },
        {
          name: "Uihut Website",
          technologies: ["NuxtJS", "AdonisJS"],
          link: "",
        },
        { name: "Console (Web3 Project)", technologies: ["NextJS"], link: "" },
      ],
    },
  ];
  let i = 0,
    r = 0,
    s,
    c = [],
    l = { jump: !0, axis: "y", loop: !0 },
    d = null;
  const g = (p) => {
      d = p.detail;
    },
    a = (p) => {
      n(1, (r = p)), d.scrollTo(p);
    };
  function f() {
    n(0, (i = window.innerWidth));
  }
  function h(p) {
    Pe[p ? "unshift" : "push"](() => {
      (s = p), n(2, s);
    });
  }
  return [i, r, s, o, c, l, g, a, f, h];
}
class In extends ce {
  constructor(e) {
    super(), le(this, e, xn, Sn, ae, {});
  }
}
export { In as default };
