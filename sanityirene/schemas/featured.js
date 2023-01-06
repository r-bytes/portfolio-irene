export default {
    name: 'featured',
    title: 'Featured',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string',
        },
        {
            name: 'subtitle',
            title: 'Subtitle',
            type: 'string',
        },
        {
            name: 'description',
            title: 'Description',
            type: 'string',
            validation: Rule => Rule.required().min(10).max(250)
        },
        {
            name: 'hotspot',
            title: 'Hotspot',
            type: 'boolean'
        },
        {
            name: 'image',
            title: 'Image',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
        {
            name: 'tags',
            title: 'Tags',
            type: 'array',
            of: [{type: 'reference', to: {type: 'tags'}}],
        },
        {
            name: 'buttonText',
            title: 'Button Text',
            type: 'string'
        },
        {
            name: 'buttonUrl',
            title: 'Button Url',
            type: 'url',
            description: `Can be a path starting with a '/' or a full Url starting with 'http://' or 'https://'`,
            validation: (Rule) =>
              Rule.uri({
                allowRelative: true,
                scheme: ['http', 'https', 'mailto', 'tel'],
              }),
          },
    ],
  }
  