import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Voucherly',
  titleDelimiter: '—',
  tagline: 'Il modo migliore per accettare i buoni pasto',
  favicon: 'img/voucherly-favicon.ico',

  url: 'https://legal.voucherly.it',
  baseUrl: '/',
  organizationName: 'voucherly',
  projectName: 'voucherly-legal',

  onBrokenLinks: 'throw',

  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'throw',
    },
  },

  trailingSlash: true,

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
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    image: 'img/voucherly-logo-square.png',
    navbar: {
      logo: {
        href: 'https://voucherly.it',
        alt: 'Voucherly Logo',
        src: 'img/voucherly-logo.png',
        srcDark: 'img/voucherly-logo-white.png',
      },
      items: [
        // {
        //   href: 'https://dashboard.voucherly.it',
        //   label: 'Dashboard',
        //   position: 'right',
        // },
      ],
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
