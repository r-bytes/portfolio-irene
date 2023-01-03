export default {
    name: 'commissions',
    title: 'Commissions',
    type: 'document',
    fields: [
        {
          name: 'title',
          title: 'Title',
          type: 'string',
        },
        {
          name: 'subtitle',
          title: 'Sub Title',
          type: 'string',
        },
        {
          name: 'intro',
          title: 'Intro',
          type: 'text',
        },
        {
            name: 'carousel',
            title: 'Carousel',
            type: 'boolean',
        },
        {
            name: 'items',
            title: 'Items',
            type: 'image',
            options: {
              hotspot: true,
            },
        },
        {
          name: 'author',
          title: 'Author',
          type: 'reference',
          to: {type: 'author'},
        },
      ],
  }
  