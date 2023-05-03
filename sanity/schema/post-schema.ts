import { Rule } from "sanity"

const post = {
  title: 'Post',
  name: 'post',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule: Rule) => Rule.required()
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'title' },
      validation: (Rule: Rule) => Rule.required()
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      option: { hotspot: true },
      fields: [{
        name: 'alt',
        title: 'Alt',
        type: 'string',

      }]
    },
    {
      name: 'description',
      title: 'Description',
      type: 'string'
    },
    {
      title: 'Tags',
      name: 'tags',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        layout: 'tags'
      }
    },
    {
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [
        { type: 'block', },
        {
          type: 'image', fields: [{
            name: 'alt',
            title: 'Alt',
            type: 'string',

          }]
        },
        { type: 'code', },
      ],
    },
  ],
}

export default post