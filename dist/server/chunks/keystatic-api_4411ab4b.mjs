export { renderers } from "../renderers.mjs";
export { onRequest } from "../_empty-middleware.mjs";

const page = () =>
  import("./pages/keystatic-api_409d0c8e.mjs").then((n) => n.k);

export { page };
