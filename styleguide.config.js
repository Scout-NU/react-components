const path = require('path');

module.exports = {
  title: 'Scout Component Guide',
  require: [path.join(__dirname, 'src/static/fonts/stylesheet.css')],
  sections: [
    {
      name: 'Introduction',
      content: 'README.md',
    },
    {
      name: 'Resources',
      content: 'src/docs/Resources.md',
    },
    {
      name: 'Components',
      components: 'src/components/*/*.{js,jsx,ts,tsx}',
    },
    {
      name: 'Form Components',
      components: 'src/components/form/**/*.{js,jsx,ts,tsx}',
    },
    {
      name: 'Layout',
      components: 'src/layout/**/*.{js,jsx,ts,tsx}',
    },
  ],
  styleguideDir: 'dist',
  assetsDir: 'src/static',
  // template: {
  //   favicon: 'favicon.ico',
  // },
  // theme: {
  //   color: {
  //     sidebarBackground: '#00a1b6',
  //   },
  // },
  // styles: {
  //   StyleGuide: {
  //     logo: {
  //       background: "url('src/static/img/logo.png') 0px 0px no-repeat",
  //     },
  //   },
  // },
};
