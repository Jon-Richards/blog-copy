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
            }
          ]
        },
        {
          'title': 'Style Guide',
          'slug': '/style-guide',
          'subsections': [
            {
              'title': 'Color Schemes',
              'slug': '/docs/style-guide/color-schemes'
            }
          ]
        },
        {
          'title': 'HTML Tags',
          'slug': '/html-tags',
          'subsections': [
            {
              'title': 'Anchors &amp; Links',
              'slug': '/docs/html-tags/anchors-and-links'
            },
            {
              'title': 'Aside',
              'slug': '/docs/html-tags/aside'
            },
            {
              'title': 'Blockquote',
              'slug': '/docs/html-tags/blockquote'
            },
            {
              'title': 'Code Snippets',
              'slug': '/docs/html-tags/code-snippets'
            },
            {
              'title': 'Headings',
              'slug': '/docs/html-tags/headings'
            },
            {
              'title': 'Horizontal Rule',
              'slug': '/docs/html-tags/hr'
            },
            {
              'title': 'Lists',
              'slug': '/docs/html-tags/lists'
            },
            {
              'title': 'Text',
              'slug': '/docs/html-tags/text'
            }
          ]
        }
      ]
    }
  ]
}

export default CONFIG;
