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
        options: {source: 'title'},
        validation: (Rule: Rule) => Rule.required()
      },
      {
        name: 'image',
        title: 'Image',
        type: 'image',
        option: {hotspot: true},
        fields: [{
            name:'alt',
            title: 'Alt',
            type: 'string',

        }]
      },
      {
        name: 'content',
        title: 'Content',
        type: 'array',
        of: [
          {type: 'block',},
          {type: 'image',},
          {
            type: 'code',
          },
        ],
      },
    ],
  }

  export default post