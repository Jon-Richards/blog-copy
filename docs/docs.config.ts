type Section = {
  title: string;
  slug: string;
  subsections?: Section[];
}

type Project = {
  title: string;
  copyright: string;
}

export type Config = {
  project: Project;
  sections: Section[];
}

const config: Config = {
  'project': {
    'title': 'Blog Copy',
    'copyright': 'Jon Richards, All rights reserved.'
  },
  'sections': [
    {
      'title': 'Overview',
      'slug': '/overview',
      'subsections': [
        {
          'title': 'Introduction',
          'slug': '/introduction'
        },
        {
          'title': 'Installation',
          'slug': '/installation'
        },
        {
          'title': 'Configuration',
          'slug': '/configuration'
        }
      ]
    },
    {
      'title': 'Style Guide',
      'slug': '/style-guide',
      'subsections': [
        {
          'title': 'Conventions',
          'slug': '/conventions'
        },
        {
          'title': 'Page Structure',
          'slug': '/page-structure'
        },
        {
          'title': 'Colors',
          'slug': '/colors'
        },
        {
          'title': 'Fonts',
          'slug': '/fonts'
        },
      ]
    },
    {
      'title': 'HTML Tags',
      'slug': '/html-tags',
      'subsections': [
        {
          'title': 'Anchors &amp; Links',
          'slug': '/anchors-and-links'
        }
      ]
    }
  ]
}

export default config;
