const v = document.getElementById("navbar"),
  T = document.getElementById("nav-links-cotainer");
let M = 150;
window.addEventListener("scroll", () => {
  const e = window.scrollY;
  e > M ? v.classList.add("nav-shadow") : v.classList.remove("nav-shadow"),
    e > M + 100
      ? (v.classList.remove("scroll-upward"),
        v.classList.add("scroll-downward"),
        T.classList.remove("s-f-nav"),
        T.classList.add("b-f-nav"))
      : (v.classList.remove("scroll-downward"),
        v.classList.add("scroll-upward"),
        T.classList.remove("b-f-nav"),
        T.classList.add("s-f-nav"));
});
const Z = "astro:before-preparation",
  ee = "astro:after-preparation",
  te = "astro:before-swap",
  ne = "astro:after-swap",
  re = (e) => document.dispatchEvent(new Event(e));
class _ extends Event {
  from;
  to;
  direction;
  navigationType;
  sourceElement;
  info;
  newDocument;
  constructor(t, r, n, o, a, l, h, f, i) {
    super(t, r),
      (this.from = n),
      (this.to = o),
      (this.direction = a),
      (this.navigationType = l),
      (this.sourceElement = h),
      (this.info = f),
      (this.newDocument = i),
      Object.defineProperties(this, {
        from: { enumerable: !0 },
        to: { enumerable: !0, writable: !0 },
        direction: { enumerable: !0, writable: !0 },
        navigationType: { enumerable: !0 },
        sourceElement: { enumerable: !0 },
        info: { enumerable: !0 },
        newDocument: { enumerable: !0, writable: !0 },
      });
  }
}
class oe extends _ {
  formData;
  loader;
  constructor(t, r, n, o, a, l, h, f, i) {
    super(Z, { cancelable: !0 }, t, r, n, o, a, l, h),
      (this.formData = f),
      (this.loader = i.bind(this, this)),
      Object.defineProperties(this, {
        formData: { enumerable: !0 },
        loader: { enumerable: !0, writable: !0 },
      });
  }
}
class se extends _ {
  direction;
  viewTransition;
  swap;
  constructor(t, r, n) {
    super(
      te,
      void 0,
      t.from,
      t.to,
      t.direction,
      t.navigationType,
      t.sourceElement,
      t.info,
      t.newDocument,
    ),
      (this.direction = t.direction),
      (this.viewTransition = r),
      (this.swap = n.bind(this, this)),
      Object.defineProperties(this, {
        direction: { enumerable: !0 },
        viewTransition: { enumerable: !0 },
        swap: { enumerable: !0, writable: !0 },
      });
  }
}
async function ie(e, t, r, n, o, a, l, h) {
  const f = new oe(e, t, r, n, o, a, window.document, l, h);
  return (
    document.dispatchEvent(f) &&
      (await f.loader(),
      f.defaultPrevented ||
        (re(ee), f.navigationType !== "traverse" && x({ scrollX, scrollY }))),
    f
  );
}
async function ae(e, t, r) {
  const n = new se(e, t, r);
  return document.dispatchEvent(n), n.swap(), n;
}
const x = (e) => {
    history.state &&
      ((history.scrollRestoration = "manual"),
      history.replaceState({ ...history.state, ...e }, ""));
  },
  P = !!document.startViewTransition,
  I = () => !!document.querySelector('[name="astro-view-transitions-enabled"]'),
  R = (e, t) =>
    e.origin === t.origin && e.pathname === t.pathname && e.search === t.search;
let S,
  b,
  E = !1,
  B;
const U = (e) => document.dispatchEvent(new Event(e)),
  Y = () => U("astro:page-load"),
  ce = () => {
    let e = document.createElement("div");
    e.setAttribute("aria-live", "assertive"),
      e.setAttribute("aria-atomic", "true"),
      (e.className = "astro-route-announcer"),
      document.body.append(e),
      setTimeout(() => {
        let t =
          document.title ||
          document.querySelector("h1")?.textContent ||
          location.pathname;
        e.textContent = t;
      }, 60);
  },
  p = "data-astro-transition-persist",
  V = "data-astro-transition",
  W = "data-astro-transition-fallback";
let H,
  g = 0;
history.state
  ? ((g = history.state.index),
    scrollTo({ left: history.state.scrollX, top: history.state.scrollY }))
  : I() &&
    (history.replaceState({ index: g, scrollX, scrollY }, ""),
    (history.scrollRestoration = "manual"));
const le = (e, t) => {
  let r = !1,
    n = !1;
  return (...o) => {
    if (r) {
      n = !0;
      return;
    }
    e(...o),
      (r = !0),
      setTimeout(() => {
        n && ((n = !1), e(...o)), (r = !1);
      }, t);
  };
};
async function ue(e, t) {
  try {
    const r = await fetch(e, t),
      n = r.headers.get("content-type")?.replace(/;.*$/, "");
    return n !== "text/html" && n !== "application/xhtml+xml"
      ? null
      : {
          html: await r.text(),
          redirected: r.redirected ? r.url : void 0,
          mediaType: n,
        };
  } catch {
    return null;
  }
}
function X() {
  const e = document.querySelector('[name="astro-view-transitions-fallback"]');
  return e ? e.getAttribute("content") : "animate";
}
function fe() {
  let e = Promise.resolve();
  for (const t of Array.from(document.scripts)) {
    if (t.dataset.astroExec === "") continue;
    const r = document.createElement("script");
    r.innerHTML = t.innerHTML;
    for (const n of t.attributes) {
      if (n.name === "src") {
        const o = new Promise((a) => {
          r.onload = a;
        });
        e = e.then(() => o);
      }
      r.setAttribute(n.name, n.value);
    }
    (r.dataset.astroExec = ""), t.replaceWith(r);
  }
  return e;
}
const K = (e, t, r, n) => {
  const o = R(t, e);
  let a = !1;
  if (e.href !== location.href && !n)
    if (r.history === "replace") {
      const l = history.state;
      history.replaceState(
        { ...r.state, index: l.index, scrollX: l.scrollX, scrollY: l.scrollY },
        "",
        e.href,
      );
    } else
      history.pushState(
        { ...r.state, index: ++g, scrollX: 0, scrollY: 0 },
        "",
        e.href,
      );
  (S = e),
    o || (scrollTo({ left: 0, top: 0, behavior: "instant" }), (a = !0)),
    n
      ? scrollTo(n.scrollX, n.scrollY)
      : (e.hash
          ? ((history.scrollRestoration = "auto"), (location.href = e.href))
          : a || scrollTo({ left: 0, top: 0, behavior: "instant" }),
        (history.scrollRestoration = "manual"));
};
function de(e) {
  const t = [];
  for (const r of e.querySelectorAll("head link[rel=stylesheet]"))
    if (
      !document.querySelector(
        `[${p}="${r.getAttribute(
          p,
        )}"], link[rel=stylesheet][href="${r.getAttribute("href")}"]`,
      )
    ) {
      const n = document.createElement("link");
      n.setAttribute("rel", "preload"),
        n.setAttribute("as", "style"),
        n.setAttribute("href", r.getAttribute("href")),
        t.push(
          new Promise((o) => {
            ["load", "error"].forEach((a) => n.addEventListener(a, o)),
              document.head.append(n);
          }),
        );
    }
  return t;
}
async function N(e, t, r, n) {
  const o = (s, d) => {
      const m = s.getAttribute(p),
        w = m && d.head.querySelector(`[${p}="${m}"]`);
      if (w) return w;
      if (s.matches("link[rel=stylesheet]")) {
        const y = s.getAttribute("href");
        return d.head.querySelector(`link[rel=stylesheet][href="${y}"]`);
      }
      return null;
    },
    a = () => {
      const s = document.activeElement;
      if (s?.closest(`[${p}]`)) {
        if (s instanceof HTMLInputElement || s instanceof HTMLTextAreaElement) {
          const d = s.selectionStart,
            m = s.selectionEnd;
          return { activeElement: s, start: d, end: m };
        }
        return { activeElement: s };
      } else return { activeElement: null };
    },
    l = ({ activeElement: s, start: d, end: m }) => {
      s &&
        (s.focus(),
        (s instanceof HTMLInputElement || s instanceof HTMLTextAreaElement) &&
          ((s.selectionStart = d), (s.selectionEnd = m)));
    },
    h = (s) => {
      const d = document.documentElement,
        m = [...d.attributes].filter(
          ({ name: c }) => (d.removeAttribute(c), c.startsWith("data-astro-")),
        );
      [...s.newDocument.documentElement.attributes, ...m].forEach(
        ({ name: c, value: u }) => d.setAttribute(c, u),
      );
      for (const c of document.scripts)
        for (const u of s.newDocument.scripts)
          if (
            (!c.src && c.textContent === u.textContent) ||
            (c.src && c.type === u.type && c.src === u.src)
          ) {
            u.dataset.astroExec = "";
            break;
          }
      for (const c of Array.from(document.head.children)) {
        const u = o(c, s.newDocument);
        u ? u.remove() : c.remove();
      }
      document.head.append(...s.newDocument.head.children);
      const w = document.body,
        y = a();
      document.body.replaceWith(s.newDocument.body);
      for (const c of w.querySelectorAll(`[${p}]`)) {
        const u = c.getAttribute(p),
          D = document.querySelector(`[${p}="${u}"]`);
        D && D.replaceWith(c);
      }
      l(y);
    };
  async function f(s) {
    function d(c) {
      const u = c.effect;
      return !u || !(u instanceof KeyframeEffect) || !u.target
        ? !1
        : window.getComputedStyle(u.target, u.pseudoElement)
            .animationIterationCount === "infinite";
    }
    const m = document.getAnimations();
    document.documentElement.setAttribute(W, s);
    const y = document.getAnimations().filter((c) => !m.includes(c) && !d(c));
    return Promise.all(y.map((c) => c.finished));
  }
  if (!E)
    document.documentElement.setAttribute(V, e.direction),
      n === "animate" && (await f("old"));
  else throw new DOMException("Transition was skipped");
  const i = await ae(e, b, h);
  K(i.to, i.from, t, r),
    U(ne),
    n === "animate" && !E && f("new").then(() => B());
}
async function j(e, t, r, n, o) {
  const a = o ? "traverse" : n.history === "replace" ? "replace" : "push";
  if (R(t, r) && !n.formData) {
    a !== "traverse" && x({ scrollX, scrollY }), K(r, t, n, o);
    return;
  }
  const l = await ie(t, r, e, a, n.sourceElement, n.info, n.formData, f);
  if (l.defaultPrevented) {
    location.href = r.href;
    return;
  }
  function h(i) {
    return (
      i.to.hash === "" ||
      !R(i.from, i.to) ||
      i.sourceElement instanceof HTMLFormElement
    );
  }
  async function f(i) {
    if (h(i)) {
      const s = i.to.href,
        d = {};
      i.formData && ((d.method = "POST"), (d.body = i.formData));
      const m = await ue(s, d);
      if (m === null) {
        i.preventDefault();
        return;
      }
      if (
        (m.redirected && (i.to = new URL(m.redirected)),
        (H ??= new DOMParser()),
        (i.newDocument = H.parseFromString(m.html, m.mediaType)),
        i.newDocument.querySelectorAll("noscript").forEach((y) => y.remove()),
        !i.newDocument.querySelector(
          '[name="astro-view-transitions-enabled"]',
        ) && !i.formData)
      ) {
        i.preventDefault();
        return;
      }
      const w = de(i.newDocument);
      w.length && (await Promise.all(w));
    } else {
      i.newDocument = document;
      return;
    }
  }
  if (((E = !1), P))
    b = document.startViewTransition(async () => await N(l, n, o));
  else {
    const i = (async () => {
      await new Promise((s) => setTimeout(s)), await N(l, n, o, X());
    })();
    b = {
      updateCallbackDone: i,
      ready: i,
      finished: new Promise((s) => (B = s)),
      skipTransition: () => {
        E = !0;
      },
    };
  }
  b.ready.then(async () => {
    await fe(), Y(), ce();
  }),
    b.finished.then(() => {
      document.documentElement.removeAttribute(V),
        document.documentElement.removeAttribute(W);
    }),
    await b.ready;
}
async function F(e, t) {
  if (!I()) {
    location.href = e;
    return;
  }
  await j("forward", S, new URL(e, location.href), t ?? {});
}
function me(e) {
  if (!I() && e.state) {
    location.reload();
    return;
  }
  if (e.state === null) return;
  const t = history.state,
    r = t.index,
    n = r > g ? "forward" : "back";
  (g = r), j(n, S, new URL(location.href), {}, t);
}
const $ = () => {
  x({ scrollX, scrollY });
};
{
  (P || X() !== "none") &&
    ((S = new URL(location.href)),
    addEventListener("popstate", me),
    addEventListener("load", Y),
    "onscrollend" in window
      ? addEventListener("scrollend", $)
      : addEventListener("scroll", le($, 350), { passive: !0 }));
  for (const e of document.scripts) e.dataset.astroExec = "";
}
const G = new Set(),
  A = new WeakSet();
let k,
  z,
  q = !1;
function he(e) {
  q ||
    ((q = !0),
    (k ??= e?.prefetchAll ?? !1),
    (z ??= e?.defaultStrategy ?? "hover"),
    we(),
    pe(),
    ye());
}
function we() {
  for (const e of ["touchstart", "mousedown"])
    document.body.addEventListener(
      e,
      (t) => {
        L(t.target, "tap") &&
          O(t.target.href, { with: "fetch", ignoreSlowConnection: !0 });
      },
      { passive: !0 },
    );
}
function pe() {
  let e;
  document.body.addEventListener(
    "focusin",
    (n) => {
      L(n.target, "hover") && t(n);
    },
    { passive: !0 },
  ),
    document.body.addEventListener("focusout", r, { passive: !0 }),
    Q(() => {
      for (const n of document.getElementsByTagName("a"))
        A.has(n) ||
          (L(n, "hover") &&
            (A.add(n),
            n.addEventListener("mouseenter", t, { passive: !0 }),
            n.addEventListener("mouseleave", r, { passive: !0 })));
    });
  function t(n) {
    const o = n.target.href;
    e && clearTimeout(e),
      (e = setTimeout(() => {
        O(o, { with: "fetch" });
      }, 80));
  }
  function r() {
    e && (clearTimeout(e), (e = 0));
  }
}
function ye() {
  let e;
  Q(() => {
    for (const t of document.getElementsByTagName("a"))
      A.has(t) || (L(t, "viewport") && (A.add(t), (e ??= ve()), e.observe(t)));
  });
}
function ve() {
  const e = new WeakMap();
  return new IntersectionObserver((t, r) => {
    for (const n of t) {
      const o = n.target,
        a = e.get(o);
      n.isIntersecting
        ? (a && clearTimeout(a),
          e.set(
            o,
            setTimeout(() => {
              r.unobserve(o), e.delete(o), O(o.href, { with: "link" });
            }, 300),
          ))
        : a && (clearTimeout(a), e.delete(o));
    }
  });
}
function O(e, t) {
  const r = t?.ignoreSlowConnection ?? !1;
  if (!be(e, r)) return;
  if ((G.add(e), (t?.with ?? "link") === "link")) {
    const o = document.createElement("link");
    (o.rel = "prefetch"), o.setAttribute("href", e), document.head.append(o);
  } else
    fetch(e).catch((o) => {
      console.log(`[astro] Failed to prefetch ${e}`), console.error(o);
    });
}
function be(e, t) {
  if (!navigator.onLine || (!t && J())) return !1;
  try {
    const r = new URL(e, location.href);
    return (
      location.origin === r.origin &&
      (location.pathname !== r.pathname || location.search !== r.search) &&
      !G.has(e)
    );
  } catch {}
  return !1;
}
function L(e, t) {
  if (e?.tagName !== "A") return !1;
  const r = e.dataset.astroPrefetch;
  return r === "false"
    ? !1
    : t === "tap" && (r != null || k) && J()
      ? !0
      : (r == null && k) || r === ""
        ? t === z
        : r === t;
}
function J() {
  if ("connection" in navigator) {
    const e = navigator.connection;
    return e.saveData || /(2|3)g/.test(e.effectiveType);
  }
  return !1;
}
function Q(e) {
  e();
  let t = !1;
  document.addEventListener("astro:page-load", () => {
    if (!t) {
      t = !0;
      return;
    }
    e();
  });
}
function ge() {
  const e = document.querySelector('[name="astro-view-transitions-fallback"]');
  return e ? e.getAttribute("content") : "animate";
}
function C(e) {
  return e.dataset.astroReload !== void 0;
}
(P || ge() !== "none") &&
  (document.addEventListener("click", (e) => {
    let t = e.target;
    if (
      (t instanceof Element && (t = t.closest("a, area")),
      !(t instanceof HTMLAnchorElement) &&
        !(t instanceof SVGAElement) &&
        !(t instanceof HTMLAreaElement))
    )
      return;
    const r = t instanceof HTMLElement ? t.target : t.target.baseVal,
      n = t instanceof HTMLElement ? t.href : t.href.baseVal,
      o = new URL(n, location.href).origin;
    C(t) ||
      t.hasAttribute("download") ||
      !t.href ||
      (r && r !== "_self") ||
      o !== location.origin ||
      e.button !== 0 ||
      e.metaKey ||
      e.ctrlKey ||
      e.altKey ||
      e.shiftKey ||
      e.defaultPrevented ||
      (e.preventDefault(),
      F(n, {
        history: t.dataset.astroHistory === "replace" ? "replace" : "auto",
        sourceElement: t,
      }));
  }),
  document.querySelector('[name="astro-view-transitions-forms"]') &&
    document.addEventListener("submit", (e) => {
      let t = e.target;
      if (t.tagName !== "FORM" || C(t)) return;
      const r = t,
        n = e.submitter,
        o = new FormData(r);
      let a = n?.getAttribute("formaction") ?? r.action ?? location.pathname;
      const l = n?.getAttribute("formmethod") ?? r.method,
        h = { sourceElement: n ?? r };
      if (l === "get") {
        const f = new URLSearchParams(o),
          i = new URL(a);
        (i.search = f.toString()), (a = i.toString());
      } else h.formData = o;
      e.preventDefault(), F(a, h);
    }),
  he({ prefetchAll: !0 }));
