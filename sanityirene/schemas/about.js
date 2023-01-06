export default {
    name: 'about',
    title: 'About Me',
    type: 'document',
    fields: [
        {
          name: 'name',
          title: 'Name',
          type: 'string',
        },
        {
          name: 'bio',
          title: 'Bio',
          type: 'text',
        },
        {
          name: 'image',
          title: 'Image',
          type: 'image',
          options: {
            hotspot: true,
          },
        },
      ],
      preview: {
        select: {
          title: 'name',
          media: 'image',
        },
      },
  }
  