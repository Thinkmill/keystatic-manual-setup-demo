import { collection, component, config, fields, makePage } from "keystatic";

export default makePage(
  config({
    repo: { owner: "Thinkmill", name: "keystatic-template" },
    collections: {
      posts: collection({
        label: "Posts",
        directory: "content/posts",
        getItemSlug: (data) => data.slug,
        schema: {
          title: fields.text({ label: "Title" }),
          slug: fields.text({
            label: "Slug",
            validation: { length: { min: 4 } },
          }),
          content: fields.document({
            label: "Content",
            componentBlocks: {
              something: component({
                label: "Some Component",
                preview: () => null,
                schema: {},
              }),
            },
          }),
          authors: fields.array(fields.text({ label: "Name" }), {
            label: "Authors",
            itemLabel: (props) => props.value,
          }),
        },
      }),
    },
  })
);
