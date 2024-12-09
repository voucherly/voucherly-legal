import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Voucherly',
  tagline: 'Il modo migliore per accettare i buoni pasto',
  favicon: 'https://ucarecdn.com/5c304dd8-db4f-471e-a930-04bc0ed961d3/-/preview/100x100/',

  // Set the production url of your site here
  url: 'https://legal.voucherly.it',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'voucherly', // Usually your GitHub org/user name.
  projectName: 'voucherly-legal', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'it',
    locales: ['it'],
  },
  plugins: ['docusaurus-plugin-sass'],
  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: './sidebars.ts',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.scss',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'https://ucarecdn.com/1a50448f-55d8-46ac-bab0-764dee2b9c4f/-/preview/100x100/',
    navbar: {
      logo: {
        alt: 'Voucherly Logo',
        src: 'https://ucarecdn.com/a5e716fc-abcb-4ab2-960a-33a6a1b5446c/-/preview/200x50/',
        srcDark: 'https://ucarecdn.com/cf4a09cb-1f6e-4385-97c8-46ae406fd671/-/preview/200x50/',
      },
      items: [
        {
          href: 'https://dashboard.voucherly.it',
          label: 'Dashboard',
          position: 'right',
        },
      ],
    },
    footer: {
      links: [],
      copyright: `${new Date().getFullYear()} © Voucherly`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
