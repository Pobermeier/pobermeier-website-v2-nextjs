# Portfolio Website v2 - Next.js

This is the second version of my personal portfolio website created using Next.js & TypeScript. Optimizing loading speed and accessibility were my highest priority during the realization of this project. The website is PWA-ready and can be installed / added to home screen on compatible devices.

You can check out the live project by clicking [here](https://www.patrickobermeier.dev/).

## Technologies & Tools Used

- Next.js Static Export
- TypeScript
- Docker for deployment as hosted Node.js-Server
- __Animation Libraries:__
  - React Animate-On-Scroll
  - Animate.css
- __Styling:__
  - Sass
  - CSS Framework: Bulma
  - Post CSS Plugins: Autoprefixer, PurgeCSS
- ESLint & Prettier
- Husky (Simple Git Hooks)
- Next plugins: next-pwa, next-sitemap

## Quick Start

### Development

After cloning / downloading this repository first install the dev-depencies with NPM by using the following CLI-command:

```
npm install
```

You can then launch a dev server with the following command:

```
npm run dev
```

### Deployment

You can build the static assets needed for deployment with the following CLI-command:

```
npm run cicd:static
```

The files will be build and bundled into the "out" folder. These files can then be deployed to any static web server or a PaaS like Netlify.