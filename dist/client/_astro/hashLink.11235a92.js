import {
  S as j,
  i as A,
  s as q,
  e as b,
  a as g,
  c as v,
  b as _,
  d,
  f as h,
  g as S,
  h as f,
  n as k,
  j as C,
  o as N,
  t as R,
  k as M,
  l as U,
  m as V,
  p,
  q as Y,
} from "./index.644dcf4a.js";
import { g as B } from "./index.0fa819ad.js";
/* empty css                          */ const y = {
  email: "anirdms@gmail.com",
  socialMedia: [
    { name: "GitHub", url: "" },
    { name: "Twitter", url: "" },
    { name: "Linkedin", url: "" },
    { name: "Codepen", url: "" },
    { name: "Leetcode", url: "" },
  ],
  hashLinks: [
    { name: "About", url: "#about" },
    { name: "Experience", url: "#jobs" },
    { name: "Work", url: "#projects" },
    { name: "Contact", url: "#contact" },
  ],
  techs: {
    Language: [
      { id: "golang", title: "Golang" },
      { id: "javascript", title: "Javascript" },
      { id: "typescript", title: "Typescript" },
    ],
    Frontend: [
      { id: "react", title: "React" },
      { id: "nextjs", title: "Nextjs" },
      { id: "vue", title: "Vuejs" },
      { id: "astro", title: "Astro" },
      { id: "svelte", title: "Svelte" },
    ],
    Backend: [{ id: "expressjs", title: "ExpressJs" }],
    Database: [
      { id: "nosql", title: "NoSql" },
      { id: "sql", title: "SQL" },
    ],
    CMS: [
      { id: "sanity", title: "Sanity" },
      { id: "keystatic", title: "Keystatic" },
    ],
  },
  navLinks: [
    { name: "Home", url: "/" },
    { name: "Articles", url: "/articles" },
  ],
};
function L(o, n, s) {
  const a = o.slice();
  return (a[9] = n[s]), a;
}
function x(o) {
  let n,
    s,
    a = o[9].name + "",
    l,
    e,
    r,
    t;
  return {
    c() {
      (n = g("li")), (s = g("a")), (l = R(a)), (r = M()), this.h();
    },
    l(i) {
      n = v(i, "LI", { class: !0 });
      var c = _(n);
      s = v(c, "A", { class: !0, href: !0 });
      var m = _(s);
      (l = U(m, a)), m.forEach(d), (r = V(c)), c.forEach(d), this.h();
    },
    h() {
      h(
        s,
        "class",
        (e =
          p(`${o[1] === o[9].url ? "active" : ""} text-[14px]`) +
          " svelte-6ysv88"),
      ),
        h(s, "href", o[9].url),
        h(
          n,
          "class",
          (t =
            p(`${o[1] === o[9].url ? "bg-active" : ""} px-2 text-light-slate`) +
            " svelte-6ysv88"),
        );
    },
    m(i, c) {
      S(i, n, c), f(n, s), f(s, l), f(n, r);
    },
    p(i, c) {
      c & 2 &&
        e !==
          (e =
            p(`${i[1] === i[9].url ? "active" : ""} text-[14px]`) +
            " svelte-6ysv88") &&
        h(s, "class", e),
        c & 2 &&
          t !==
            (t =
              p(
                `${i[1] === i[9].url ? "bg-active" : ""} px-2 text-light-slate`,
              ) + " svelte-6ysv88") &&
          h(n, "class", t);
    },
    d(i) {
      i && d(n);
    },
  };
}
function F(o) {
  let n,
    s,
    a = b(y.hashLinks),
    l = [];
  for (let e = 0; e < a.length; e += 1) l[e] = x(L(o, a, e));
  return {
    c() {
      (n = g("nav")), (s = g("ul"));
      for (let e = 0; e < l.length; e += 1) l[e].c();
      this.h();
    },
    l(e) {
      n = v(e, "NAV", { class: !0 });
      var r = _(n);
      s = v(r, "UL", {});
      var t = _(s);
      for (let i = 0; i < l.length; i += 1) l[i].l(t);
      t.forEach(d), r.forEach(d), this.h();
    },
    h() {
      h(
        n,
        "class",
        "fixed right-2 z-[1000000] shadow-[0px_1px_2px_0px_rgba(255,255,255,0.75)] top-48 rounded-sm bg-dark-navy py-3",
      );
    },
    m(e, r) {
      S(e, n, r), f(n, s);
      for (let t = 0; t < l.length; t += 1) l[t] && l[t].m(s, null);
      o[4](n);
    },
    p(e, [r]) {
      if (r & 2) {
        a = b(y.hashLinks);
        let t;
        for (t = 0; t < a.length; t += 1) {
          const i = L(e, a, t);
          l[t] ? l[t].p(i, r) : ((l[t] = x(i)), l[t].c(), l[t].m(s, null));
        }
        for (; t < l.length; t += 1) l[t].d(1);
        l.length = a.length;
      }
    },
    i: k,
    o: k,
    d(e) {
      e && d(n), C(l, e), o[4](null);
    },
  };
}
function G(o, n, s) {
  let a = 0,
    l = 0,
    e = null,
    r = null,
    t = null;
  const i = () => {
    s(2, (a = window.scrollY)), m();
  };
  let c = null;
  N(() => {
    const u = window.location.href,
      H = [
        "http://127.0.0.1:4321/",
        "https://aanir.com",
        "http://127.0.0.1:4321",
        "https://aanir.com/",
      ].includes(u);
    return (
      e && (H ? e.classList.remove("hidden") : e.classList.add("hidden")),
      (t = document.querySelectorAll(".main-section")),
      (c = window.innerHeight * 0.5),
      s(3, (l = document.documentElement.scrollHeight - window.innerHeight)),
      window.addEventListener("scroll", i),
      () => {
        window.removeEventListener("scroll", i);
      }
    );
  });
  const m = () => {
    for (const u of t) {
      const w = u.getBoundingClientRect();
      if (w.top > c) break;
      if (!(w.bottom < c)) {
        s(1, (r = "#" + u.id));
        break;
      }
    }
  };
  function E(u) {
    Y[u ? "unshift" : "push"](() => {
      (e = u), s(0, e);
    });
  }
  return (
    (o.$$.update = () => {
      if (o.$$.dirty & 13 && e) {
        s(2, (a = window.scrollY));
        const u = Math.min(
          a / ((l / window.innerHeight) * 3),
          document.documentElement.clientHeight - e.offsetHeight,
        );
        B.to(e, { y: u, duration: 0.3 }), m();
      }
    }),
    [e, r, a, l, E]
  );
}
class W extends j {
  constructor(n) {
    super(), A(this, n, G, F, q, {});
  }
}
export { W as default };
