// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Sinews-Mobile Documentation',
  tagline: 'sinews mobile',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://portaone.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/cloudpbx-portal-docs/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'sinews-mobile', // Usually your GitHub org/user name.
  projectName: 'Sinews-mobile-portal-docs', // Usually your repo name.
  trailingSlash: false,

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/sinews-mobile/sinews-portal-docs-source',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/portaone/cloudpbx-portal-docs-source/tree/development/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        googleTagManager: {
          containerId: 'GTM-M6NJB2D',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Sinews-mobile',
        logo: {
          alt: 'Sinews-Mobile documentation logo',
          src: 'img/PsortaOne-brand-asset--logo-symbol.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Tutorials',
          },
          // {to: '/blog', label: 'News and release notes', position: 'left'},
          {
            href: 'https://github.com/sinews-mobile',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Email',
                href: 'mailto:sinewsmobileng@gmail.com',
             
              },
              {
                label: 'YouTube',
                href: 'https://www.youtube.com/@sinews-mobile',
              },
              {
                label: 'X (formarly Twitter)',
                href: 'https://x.com/@sinewsmobile',
              },
            ],
          },
          {
            title: 'More',
            items: [
              // {
              //   label: 'Blog',
              //   href: 'https://blog.portaone.com/',
              // },
              {
                label: 'GitHub',
                href: 'https://github.com/sinews-mobile',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Sinews-Mobile. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
