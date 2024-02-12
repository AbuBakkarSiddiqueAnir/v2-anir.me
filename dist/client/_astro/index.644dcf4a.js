function x() {}
function q(e) {
  return e();
}
function C() {
  return Object.create(null);
}
function b(e) {
  e.forEach(q);
}
function A(e) {
  return typeof e == "function";
}
function le(e, n) {
  return e != e
    ? n == n
    : e !== n || (e && typeof e == "object") || typeof e == "function";
}
let $;
function ce(e, n) {
  return e === n
    ? !0
    : ($ || ($ = document.createElement("a")), ($.href = n), e === $.href);
}
function T(e) {
  return Object.keys(e).length === 0;
}
function ue(e) {
  return e ?? "";
}
function fe(e) {
  return e && A(e.destroy) ? e.destroy : x;
}
let w = !1;
function k() {
  w = !0;
}
function z() {
  w = !1;
}
function D(e, n, t, i) {
  for (; e < n; ) {
    const u = e + ((n - e) >> 1);
    t(u) <= i ? (e = u + 1) : (n = u);
  }
  return e;
}
function F(e) {
  if (e.hydrate_init) return;
  e.hydrate_init = !0;
  let n = e.childNodes;
  if (e.nodeName === "HEAD") {
    const r = [];
    for (let l = 0; l < n.length; l++) {
      const o = n[l];
      o.claim_order !== void 0 && r.push(o);
    }
    n = r;
  }
  const t = new Int32Array(n.length + 1),
    i = new Int32Array(n.length);
  t[0] = -1;
  let u = 0;
  for (let r = 0; r < n.length; r++) {
    const l = n[r].claim_order,
      o =
        (u > 0 && n[t[u]].claim_order <= l
          ? u + 1
          : D(1, u, (y) => n[t[y]].claim_order, l)) - 1;
    i[r] = t[o] + 1;
    const s = o + 1;
    (t[s] = r), (u = Math.max(s, u));
  }
  const a = [],
    c = [];
  let f = n.length - 1;
  for (let r = t[u] + 1; r != 0; r = i[r - 1]) {
    for (a.push(n[r - 1]); f >= r; f--) c.push(n[f]);
    f--;
  }
  for (; f >= 0; f--) c.push(n[f]);
  a.reverse(), c.sort((r, l) => r.claim_order - l.claim_order);
  for (let r = 0, l = 0; r < c.length; r++) {
    for (; l < a.length && c[r].claim_order >= a[l].claim_order; ) l++;
    const o = l < a.length ? a[l] : null;
    e.insertBefore(c[r], o);
  }
}
function H(e, n) {
  if (w) {
    for (
      F(e),
        (e.actual_end_child === void 0 ||
          (e.actual_end_child !== null &&
            e.actual_end_child.parentNode !== e)) &&
          (e.actual_end_child = e.firstChild);
      e.actual_end_child !== null && e.actual_end_child.claim_order === void 0;

    )
      e.actual_end_child = e.actual_end_child.nextSibling;
    n !== e.actual_end_child
      ? (n.claim_order !== void 0 || n.parentNode !== e) &&
        e.insertBefore(n, e.actual_end_child)
      : (e.actual_end_child = n.nextSibling);
  } else (n.parentNode !== e || n.nextSibling !== null) && e.appendChild(n);
}
function ae(e, n, t) {
  w && !t
    ? H(e, n)
    : (n.parentNode !== e || n.nextSibling != t) &&
      e.insertBefore(n, t || null);
}
function P(e) {
  e.parentNode && e.parentNode.removeChild(e);
}
function se(e, n) {
  for (let t = 0; t < e.length; t += 1) e[t] && e[t].d(n);
}
function R(e) {
  return document.createElement(e);
}
function I(e) {
  return document.createTextNode(e);
}
function oe() {
  return I(" ");
}
function de(e, n, t, i) {
  return e.addEventListener(n, t, i), () => e.removeEventListener(n, t, i);
}
function _e(e, n, t) {
  t == null
    ? e.removeAttribute(n)
    : e.getAttribute(n) !== t && e.setAttribute(n, t);
}
function he(e) {
  return e.dataset.svelteH;
}
function U(e) {
  return Array.from(e.childNodes);
}
function V(e) {
  e.claim_info === void 0 &&
    (e.claim_info = { last_index: 0, total_claimed: 0 });
}
function L(e, n, t, i, u = !1) {
  V(e);
  const a = (() => {
    for (let c = e.claim_info.last_index; c < e.length; c++) {
      const f = e[c];
      if (n(f)) {
        const r = t(f);
        return (
          r === void 0 ? e.splice(c, 1) : (e[c] = r),
          u || (e.claim_info.last_index = c),
          f
        );
      }
    }
    for (let c = e.claim_info.last_index - 1; c >= 0; c--) {
      const f = e[c];
      if (n(f)) {
        const r = t(f);
        return (
          r === void 0 ? e.splice(c, 1) : (e[c] = r),
          u
            ? r === void 0 && e.claim_info.last_index--
            : (e.claim_info.last_index = c),
          f
        );
      }
    }
    return i();
  })();
  return (
    (a.claim_order = e.claim_info.total_claimed),
    (e.claim_info.total_claimed += 1),
    a
  );
}
function W(e, n, t, i) {
  return L(
    e,
    (u) => u.nodeName === n,
    (u) => {
      const a = [];
      for (let c = 0; c < u.attributes.length; c++) {
        const f = u.attributes[c];
        t[f.name] || a.push(f.name);
      }
      a.forEach((c) => u.removeAttribute(c));
    },
    () => i(n),
  );
}
function me(e, n, t) {
  return W(e, n, t, R);
}
function G(e, n) {
  return L(
    e,
    (t) => t.nodeType === 3,
    (t) => {
      const i = "" + n;
      if (t.data.startsWith(i)) {
        if (t.data.length !== i.length) return t.splitText(i.length);
      } else t.data = i;
    },
    () => I(n),
    !0,
  );
}
function pe(e) {
  return G(e, " ");
}
function ye(e, n) {
  (n = "" + n), e.data !== n && (e.data = n);
}
let p;
function m(e) {
  p = e;
}
function J() {
  if (!p) throw new Error("Function called outside component initialization");
  return p;
}
function $e(e) {
  J().$$.on_mount.push(e);
}
const _ = [],
  B = [];
let h = [];
const O = [],
  K = Promise.resolve();
let E = !1;
function Q() {
  E || ((E = !0), K.then(M));
}
function N(e) {
  h.push(e);
}
const v = new Set();
let d = 0;
function M() {
  if (d !== 0) return;
  const e = p;
  do {
    try {
      for (; d < _.length; ) {
        const n = _[d];
        d++, m(n), X(n.$$);
      }
    } catch (n) {
      throw ((_.length = 0), (d = 0), n);
    }
    for (m(null), _.length = 0, d = 0; B.length; ) B.pop()();
    for (let n = 0; n < h.length; n += 1) {
      const t = h[n];
      v.has(t) || (v.add(t), t());
    }
    h.length = 0;
  } while (_.length);
  for (; O.length; ) O.pop()();
  (E = !1), v.clear(), m(e);
}
function X(e) {
  if (e.fragment !== null) {
    e.update(), b(e.before_update);
    const n = e.dirty;
    (e.dirty = [-1]),
      e.fragment && e.fragment.p(e.ctx, n),
      e.after_update.forEach(N);
  }
}
function Y(e) {
  const n = [],
    t = [];
  h.forEach((i) => (e.indexOf(i) === -1 ? n.push(i) : t.push(i))),
    t.forEach((i) => i()),
    (h = n);
}
const g = new Set();
let Z;
function ee(e, n) {
  e && e.i && (g.delete(e), e.i(n));
}
function ge(e, n, t, i) {
  if (e && e.o) {
    if (g.has(e)) return;
    g.add(e),
      Z.c.push(() => {
        g.delete(e), i && (t && e.d(1), i());
      }),
      e.o(n);
  } else i && i();
}
function xe(e) {
  return e?.length !== void 0 ? e : Array.from(e);
}
function be(e) {
  e && e.c();
}
function we(e, n) {
  e && e.l(n);
}
function ne(e, n, t) {
  const { fragment: i, after_update: u } = e.$$;
  i && i.m(n, t),
    N(() => {
      const a = e.$$.on_mount.map(q).filter(A);
      e.$$.on_destroy ? e.$$.on_destroy.push(...a) : b(a), (e.$$.on_mount = []);
    }),
    u.forEach(N);
}
function te(e, n) {
  const t = e.$$;
  t.fragment !== null &&
    (Y(t.after_update),
    b(t.on_destroy),
    t.fragment && t.fragment.d(n),
    (t.on_destroy = t.fragment = null),
    (t.ctx = []));
}
function ie(e, n) {
  e.$$.dirty[0] === -1 && (_.push(e), Q(), e.$$.dirty.fill(0)),
    (e.$$.dirty[(n / 31) | 0] |= 1 << n % 31);
}
function ve(e, n, t, i, u, a, c = null, f = [-1]) {
  const r = p;
  m(e);
  const l = (e.$$ = {
    fragment: null,
    ctx: [],
    props: a,
    update: x,
    not_equal: u,
    bound: C(),
    on_mount: [],
    on_destroy: [],
    on_disconnect: [],
    before_update: [],
    after_update: [],
    context: new Map(n.context || (r ? r.$$.context : [])),
    callbacks: C(),
    dirty: f,
    skip_bound: !1,
    root: n.target || r.$$.root,
  });
  c && c(l.root);
  let o = !1;
  if (
    ((l.ctx = t
      ? t(e, n.props || {}, (s, y, ...S) => {
          const j = S.length ? S[0] : y;
          return (
            l.ctx &&
              u(l.ctx[s], (l.ctx[s] = j)) &&
              (!l.skip_bound && l.bound[s] && l.bound[s](j), o && ie(e, s)),
            y
          );
        })
      : []),
    l.update(),
    (o = !0),
    b(l.before_update),
    (l.fragment = i ? i(l.ctx) : !1),
    n.target)
  ) {
    if (n.hydrate) {
      k();
      const s = U(n.target);
      l.fragment && l.fragment.l(s), s.forEach(P);
    } else l.fragment && l.fragment.c();
    n.intro && ee(e.$$.fragment), ne(e, n.target, n.anchor), z(), M();
  }
  m(r);
}
class Ee {
  $$ = void 0;
  $$set = void 0;
  $destroy() {
    te(this, 1), (this.$destroy = x);
  }
  $on(n, t) {
    if (!A(t)) return x;
    const i = this.$$.callbacks[n] || (this.$$.callbacks[n] = []);
    return (
      i.push(t),
      () => {
        const u = i.indexOf(t);
        u !== -1 && i.splice(u, 1);
      }
    );
  }
  $set(n) {
    this.$$set &&
      !T(n) &&
      ((this.$$.skip_bound = !0), this.$$set(n), (this.$$.skip_bound = !1));
  }
}
const re = "4";
typeof window < "u" &&
  (window.__svelte || (window.__svelte = { v: new Set() })).v.add(re);
export {
  ee as A,
  ge as B,
  te as C,
  b as D,
  he as E,
  ce as F,
  Ee as S,
  R as a,
  U as b,
  me as c,
  P as d,
  xe as e,
  _e as f,
  ae as g,
  H as h,
  ve as i,
  se as j,
  oe as k,
  G as l,
  pe as m,
  x as n,
  $e as o,
  ue as p,
  B as q,
  de as r,
  le as s,
  I as t,
  ye as u,
  N as v,
  be as w,
  we as x,
  ne as y,
  fe as z,
};
