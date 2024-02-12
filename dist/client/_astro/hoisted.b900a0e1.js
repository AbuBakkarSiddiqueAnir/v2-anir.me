import "./hoisted.b8edc7a3.js";
import { c as a, a as t, f as e } from "./gsap.a3fcdeb7.js";
import { g as n } from "./index.0fa819ad.js";
import "./_commonjsHelpers.725317a4.js";
const s = a("#text-1"),
  r = a("#text-1"),
  i = a("#text-1"),
  l = a("#text-1");
s.add(t("#text-1", 150));
r.add(t("#text-2", 200));
i.add(t("#text-3", 350));
l.add(t("#text-4", 450));
l.add(t("#contact-linkedin-button", 100));
const o = a("#about"),
  p = a("#techs");
o.add(t("#about-title-1", 100));
o.add(t("#about-p-1", 150));
o.add(t("#about-image-1", 250));
n.utils.toArray(".tech-area").forEach((d, c) => {
  p.add(e(d, 100, 0.1 * c));
});
const m = a("#jobs");
m.add(e("#jobs", 150));
const x = a("#project-title-1");
x.add(t("#project-title-1", 100));
n.utils.toArray(".project-card-xl").forEach((d) => {
  a(d).add(t(d, 100, 0.4));
});
const b = a("#contact"),
  f = a("#contact");
b.add(t("#contact", 250));
f.add(t("#whatsapp", 500, 0.6));
