import type { CollectionConfig } from 'payload'

export const Chapters: CollectionConfig = {
  slug: 'chapters',
  labels: { singular: 'Chapter', plural: 'Chapters' },
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'arc', 'scrapeIndex', 'description', 'publishedAt', 'revisionAt', '_status'],
    group: 'Web Novel',
  },
  defaultSort: 'order',
  fields: [
    {
      name: 'arc',
      type: 'relationship',
      relationTo: 'arcs',
      required: true,
      index: true,
    },

    { name: 'title', type: 'text', required: true, localized: true },
    { name: 'slug', type: 'text', required: true, unique: true, localized: true, },
    { name: 'content', type: 'textarea', localized: true },
    { name: "description", type: "textarea", localized: true, maxLength: 200 },

    { name: "thumbnail", label: 'Thumbnail', type: "upload", relationTo: "media" },

    { name: 'order', type: 'number', min: 0, admin: { position: 'sidebar' } },

    { name: 'publishedAt', type: 'date', admin: { position: 'sidebar' } },
    { name: 'revisionAt', type: 'date', admin: { position: 'sidebar' } },
    { name: 'scrapeIndex', type: 'text', unique: true, admin: { position: 'sidebar' } },
    { name: 'sourceUrl', type: 'text', admin: { position: 'sidebar' } },

  ],
  timestamps: true,
  access: {
    read: () => true,
    create: ({ req: { user } }) => {return Boolean(user)},
    update: ({ req: { user } }) => {return Boolean(user)},
    delete: ({ req: { user } }) => {return Boolean(user)},
  },
}
