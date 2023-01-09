export default {
    name: 'socials',
    title: 'Socials',
    type: 'document',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
      },
      {
        name: 'url',
        title: 'Url',
        type: 'url',
        description: `Path needs to be a full Url starting with 'http://' or 'https://'`,
        validation: (Rule) => Rule.uri({
            allowRelative: false,
            scheme: ['http', 'https', 'mailto', 'tel'],
        }),
      },     
    ],
  }
  