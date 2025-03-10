import projects from 'data/projects';
import technologies from 'data/technologies';

const siteOwnerName = 'Patrick Obermeier';

export default {
  gtm: {
    id: 'GTM-TLPT94R',
  },
  meta: {
    bingValidationId: 'D5238646980530643F5FC0FFBF63FB97',
    canonicalRootUrl: 'https://www.patrickobermeier.dev',
    defaultTitle: `${siteOwnerName} | Frontend Developer & Online-Marketing Expert`,
    defaultDescription: `${siteOwnerName} is an experienced front-end developer and online-marketing expert from Vienna, Austria. Creating web apps and websites using latest technologies like React & the MERN-Stack with passion!`,
    defaultKeywords:
      'frontend developer, front-end developer, web developer, webdesign, web designer, html5, css, javascript, react, redux, mern-stack, node, mongodb, express, docker, linux, portfolio, projects, coder, programmer, web apps, websites, marketing sites, landing pages',
    siteOwnerName,
    twitterHandle: '@Pobermeier87',
    socialShareImgUrl:
      'https://images.ctfassets.net/2hiw8js7vnar/2lp32wEzpzwoRKSEgpj5k4/ab48007f6d160cfc6b26e087206d1840/large_image.png',
    themeColor: '#f5f5f5',
  },
  projects: {
    personal: projects.filter((project) => project.data.project_type === 'Personal'),
    work: projects.filter((project) => project.data.project_type === 'Work'),
  },
  technologies: [...Object.values(technologies)],
  urls: {
    email: 'patrick.obermeier@outlook.com',
    linkedIn: 'https://www.linkedin.com/in/patrickobermeier/',
    github: 'https://github.com/Pobermeier',
    twitter: 'https://twitter.com/pobermeier87',
    websiteRepo: 'https://github.com/Pobermeier/pobermeier-website-v2-nextjs',
  },
};
