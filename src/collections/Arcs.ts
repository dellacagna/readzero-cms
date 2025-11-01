import type { CollectionConfig } from 'payload'

export const Arcs: CollectionConfig = {
  slug: 'arcs',
  labels: { singular: 'Arc', plural: 'Arcs' },
  admin: {
    useAsTitle: 'title',
    defaultColumns: ['title', 'order', 'description', '_status'],
    group: 'Web Novel',
  },
  defaultSort: 'order',
  fields: [
    { name: 'title', type: 'text', required: true, localized: true },
    { name: 'slug', type: 'text', required: true, unique: true, localized: true },
    { name: 'description', type: 'textarea', localized: true, maxLength: 200 },
    { name: 'thumbnail', label: 'Thumbnail', type: 'upload', relationTo: 'media' },
    { name: 'order', type: 'number', min: 0, admin: { position: 'sidebar' } },
    { name: 'scrapeIndex', type: 'number', unique: true, admin: { position: 'sidebar' } },
  ],
  timestamps: true,
  access: {
    read: () => true,
    create: ({ req: { user } }) => {return Boolean(user)},
    update: ({ req: { user } }) => {return Boolean(user)},
    delete: ({ req: { user } }) => {return Boolean(user)},
  },
}
