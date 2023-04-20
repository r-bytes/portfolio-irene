export default {
    name: 'work',
    title: 'Mijn Werk',
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
        name: 'contentArray',
        title: 'Content',
        type: 'array',
        of: [
            {
                type: 'image',
                name: 'inline',
                fields: [
                    {
                        name: "title",
                        title: "Title",
                        type: "string"
                    },
                    {
                        name: "buttonText",
                        title: "Button Text",
                        type: "string"
                    },
                    {
                        name: 'buttonUrl',
                        title: 'Button Url',
                        type: 'url',
                        description: `Can be a path starting with a '/' or a full Url starting with 'http://' or 'https://'`,
                        validation: (Rule) => Rule.uri({
                            allowRelative: true,
                            scheme: ['http', 'https', 'mailto', 'tel'],
                        }),
                    },
                ]
            },
        ],
      },      
    ],
  }
  