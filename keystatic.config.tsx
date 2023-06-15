import { collection, component, config, fields, LocalConfig, GitHubConfig } from '@keystatic/core'

const storage: LocalConfig['storage'] | GitHubConfig['storage'] =
  process.env.NODE_ENV === 'development'
    ? { kind: 'local' }
    : {
        kind: 'github',
        repo: {
          owner: process.env.NEXT_PUBLIC_GIT_REPO_OWNER!,
          name: process.env.NEXT_PUBLIC_GIT_REPO_SLUG!,
        },
      }

export default config({
  storage,
  collections: {
    posts: collection({
      label: 'Posts',
      path: 'content/posts/*/',
      slugField: 'title',
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        content: fields.document({
          label: 'Content',
          formatting: true,
          dividers: true,
          links: true,
          layouts: [
            [1, 1],
            [1, 1, 1],
            [2, 1],
            [1, 2, 1],
          ],
          componentBlocks: {
            something: component({
              label: 'Some Component',
              preview: () => null,
              schema: {},
            }),
          },
        }),
        authors: fields.array(fields.text({ label: 'Name' }), {
          label: 'Authors',
          itemLabel: (props) => props.value,
        }),
      },
    }),
  },
})
