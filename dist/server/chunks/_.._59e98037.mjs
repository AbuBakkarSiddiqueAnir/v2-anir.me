export { renderers } from "../renderers.mjs";
export { onRequest } from "../_empty-middleware.mjs";

const page = () => import("./prerender_b6749fa1.mjs").then((n) => n._);

export { page };
