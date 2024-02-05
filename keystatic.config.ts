import { config, fields, collection } from "@keystatic/core";

export default config({
  ui: {
    brand: { name: "Anir.me" },
  },
  // storage: {
  //   kind: "github",
  //   repo: `${"AbuBakkarSiddiqueAnir"}/${"v2-anir.me"}`,
  //   branchPrefix: "anirApp",
  // },
  storage: {
    kind: "local",
  },
  collections: {
    articles: collection({
      label: "articles",
      slugField: "title",
      path: "src/content/articles/*",
      format: { contentField: "content" },
      schema: {
        title: fields.slug({ name: { label: "Title" } }),
        date: fields.date({
          label: "Article date",
          description: "The date of the article published",
        }),
        heroImage: fields.image({
          label: "HeroImage",
          directory: "public/images/hero",
          publicPath: "/images/hero/",
        }),

        tags: fields.array(fields.text({ label: "Tag" }), {
          label: "Tag",
          itemLabel: (props) => props.value,
        }),
        content: fields.document({
          label: "Content",
          formatting: {
            alignment: {
              center: true,
              end: true,
            },
            inlineMarks: {
              keyboard: true,
              subscript: true,
              superscript: true,
              underline: true,
            },
          },

          dividers: true,
          links: true,
          images: true,
        }),
      },
    }),
  },
});
