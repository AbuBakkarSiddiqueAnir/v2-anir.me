import { g as o } from "./index.0fa819ad.js";
import { c as a, f as i } from "./gsap.a3fcdeb7.js";
import "./hoisted.b8edc7a3.js";
import "./_commonjsHelpers.725317a4.js";
o.utils.toArray(".blog-card").forEach((r, t) => {
  a(r).add(i(r, 300, (0.5 * (t + 1)) / 2));
});
