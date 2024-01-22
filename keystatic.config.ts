import { config, fields, collection } from "@keystatic/core";

export default config({
  ui: {
    brand: { name: "Anir.me" },
  },
  storage: {
    kind: "github",
    repo: `${"AbuBakkarSiddiqueAnir"}/${"v2-anir.me"}`,
    branchPrefix: "anirApp",
  },
  collections: {
    posts: collection({
      label: "Posts",
      slugField: "title",
      path: "src/content/posts/*",
      format: { contentField: "content" },
      schema: {
        title: fields.slug({ name: { label: "Title" } }),

        content: fields.document({
          label: "Content",
          formatting: true,
          dividers: true,
          links: true,
          images: true,
        }),
      },
    }),
  },
});
