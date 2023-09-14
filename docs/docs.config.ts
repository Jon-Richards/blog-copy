export type Section = {
  title: string;
  slug: string;
  subsections?: Section[];
}

export type Project = {
  title: string;
  copyright: string;
}

export type Config = {
  project: Project;
  sitemap: Section[];
}

const CONFIG: Config = {
  'project': {
    'title': 'Blog Copy',
    'copyright': 'Jon Richards, All rights reserved.'
  },
  'sitemap': [
    {
      'title': 'Documentation',
      'slug': '/docs',
      'subsections': [
        {
          'title': 'Overview',
          'slug': '/overview',
          'subsections': [
            {
              'title': 'Introduction',
              'slug': '/docs/overview/introduction'
            },
            {
              'title': 'Installation',
              'slug': '/docs/overview/installation'
            },
            {
              'title': 'Configuration',
              'slug': '/docs/overview/configuration'
            }
          ]
        },
        {
          'title': 'Style Guide',
          'slug': '/style-guide',
          'subsections': [
            {
              'title': 'Conventions',
              'slug': '/docs/style-guide/conventions'
            },
            {
              'title': 'Page Structure',
              'slug': '/docs/style-guide/page-structure'
            },
            {
              'title': 'Colors',
              'slug': '/docs/style-guide/colors'
            },
            {
              'title': 'Fonts',
              'slug': '/docs/style-guide/fonts'
            },
          ]
        },
        {
          'title': 'HTML Tags',
          'slug': '/html-tags',
          'subsections': [
            {
              'title': 'Anchors &amp; Links',
              'slug': '/docs/html-tags/anchors-and-links'
            }
          ]
        }
      ]
    }
  ]
}

export default CONFIG;
