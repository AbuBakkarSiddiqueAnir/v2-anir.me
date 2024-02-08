import { config, fields, collection } from "@keystatic/core";

export default config({
  ui: {
    brand: { name: "aanir.com" },
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
          links: true,
          layouts: [[1], [1, 1]],
          images: {
            directory: "public/content/images",
            publicPath: "/content/images/",

            schema: {
              title: fields.text({
                label: "Caption",
                description:
                  "The text to display under the image in a caption.",
              }),
            },
          },
          dividers: true,
          formatting: {
            alignment: true,
            blockTypes: true,
            headingLevels: true,
            inlineMarks: {
              code: true,
              bold: true,
              italic: true,
              underline: true,
              strikethrough: true,
            },
            listTypes: true,
          },
          tables: true,
        }),
      },
    }),
  },
});
