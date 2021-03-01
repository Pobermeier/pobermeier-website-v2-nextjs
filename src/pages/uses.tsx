import SEO from '@/components/SEO/SEO';

const Uses: React.FC = () => {
  return (
    <>
      <SEO title="Thank you for your message!" />

      <section className="section about" id="about" style={{ marginTop: '3.8rem' }}>
        <div className="container">
          <h1 className="title">/uses</h1>
          <p>
            A list of technologies that were used to build this site &amp; tech that I personally
            use. Check out{' '}
            <a href="https://uses.tech/" target="_blank" rel="noopener noreferrer">
              this site
            </a>{' '}
            created by{' '}
            <a href="https://wesbos.com/" target="_blank" rel="noopener noreferrer">
              Wes Bos
            </a>{' '}
            for a comprehensive list of /uses pages.
          </p>
          <h2 className="subtitle" style={{ marginTop: '1rem' }}>
            The Technologies &amp; Tools I used to build this site:
          </h2>
          <ul>
            <li>
              <a
                href="https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5"
                target="_blank"
                rel="noopener noreferrer"
              >
                HTML5
              </a>
            </li>
            <li>
              Custom{' '}
              <a
                href="https://developer.mozilla.org/en-US/docs/Web/css"
                target="_blank"
                rel="noopener noreferrer"
              >
                CSS
              </a>{' '}
              +{' '}
              <a href="https://bulma.io/" target="_blank" rel="noopener noreferrer">
                Bulma
              </a>
            </li>
            <li>
              <a href="https://sass-lang.com/" target="_blank" rel="noopener noreferrer">
                Sass
              </a>{' '}
              via{' '}
              <a
                href="https://www.npmjs.com/package/node-sass"
                target="_blank"
                rel="noopener noreferrer"
              >
                node-sass package
              </a>
            </li>
            <li>
              {' '}
              <a
                href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
                target="_blank"
                rel="noopener noreferrer"
              >
                Vanilla JS
              </a>{' '}
              w/{' '}
              <a href="https://babeljs.io/" target="_blank" rel="noopener noreferrer">
                Babel
              </a>
            </li>
            <li>
              <a href="https://github.com/michalsnik/aos" target="_blank" rel="noopener noreferrer">
                AOS Animation Library
              </a>
            </li>
            <li>
              <a href="https://parceljs.org/" target="_blank" rel="noopener noreferrer">
                Parcel Bundler
              </a>{' '}
              w/
              <a
                href="https://www.npmjs.com/package/parcel-plugin-imagemin"
                target="_blank"
                rel="noopener noreferrer"
              >
                imagemin-
              </a>{' '}
              &amp;{' '}
              <a
                href="https://purgecss.com/plugins/grunt.html#installation"
                target="_blank"
                rel="noopener noreferrer"
              >
                purgecss-plugin
              </a>
            </li>
            <li>
              <a href="https://gruntjs.com/" target="_blank" rel="noopener noreferrer">
                Grunt
              </a>{' '}
              with{' '}
              <a
                href="https://www.npmjs.com/package/grunt-critical"
                target="_blank"
                rel="noopener noreferrer"
              >
                critical-css plugin
              </a>
            </li>
            <li>
              <a
                href="https://developers.google.com/web/tools/workbox/guides/generate-service-worker/cli"
                target="_blank"
                rel="noopener noreferrer"
              >
                Google Workbox CLI
              </a>
            </li>
          </ul>
          <br />
          <p>
            The code for this website is available{' '}
            <a
              href="https://github.com/Pobermeier/pobermeier-website-v1"
              target="_blank"
              rel="noopener noreferrer"
            >
              here
            </a>
            . This site is deployed and hosted using{' '}
            <a href="https://www.netlify.com/" target="_blank" rel="noopener noreferrer">
              Netlify.
            </a>
          </p>
          <h2 className="subtitle" style={{ marginTop: '1rem' }}>
            And, I also really{' '}
            <span role="img" aria-label="heart-emoji">
              💓
            </span>{' '}
            to use all of this stuff:
          </h2>
          <ul>
            <li>
              <strong>Editor:</strong>{' '}
              <a href="https://code.visualstudio.com/" target="_blank" rel="noopener noreferrer">
                Visual Studio Code
              </a>{' '}
              with a whole bunch of{' '}
              <a
                href="https://gist.github.com/Pobermeier/8247fed2ab7e7ece869f41f64f2dfbd3"
                target="_blank"
                rel="noopener noreferrer"
              >
                extensions
              </a>
            </li>
            <li>
              <strong>OS:</strong> Windows 10 +{' '}
              <a
                href="https://github.com/microsoft/WSL2-Linux-Kernel"
                target="_blank"
                rel="noopener noreferrer"
              >
                WSL2
              </a>
            </li>
            <li>
              <strong>CLI:</strong> git bash &amp;{' '}
              <a
                href="https://github.com/microsoft/terminal"
                target="_blank"
                rel="noopener noreferrer"
              >
                new Windows Terminal (Preview)
              </a>{' '}
            </li>
            <li>
              <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">
                React{' '}
              </a>
            </li>
            <li>
              <a href="https://redux.js.org/" target="_blank" rel="noopener noreferrer">
                Redux
              </a>
            </li>
            <li>
              <a href="https://nextjs.org/" target="_blank" rel="noopener noreferrer">
                Next.js
              </a>
            </li>
            <li>
              <a href="https://www.gatsbyjs.org/" target="_blank" rel="noopener noreferrer">
                Gatsby
              </a>
            </li>
            <li>
              <a href="https://getbootstrap.com/" target="_blank" rel="noopener noreferrer">
                Bootstrap
              </a>
            </li>
            <li>
              <a href="https://git-scm.com/" target="_blank" rel="noopener noreferrer">
                git
              </a>{' '}
              +{' '}
              <a href="https://www.github.com/" target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </li>
            <li>
              <a href="https://dotnet.microsoft.com/" target="_blank" rel="noopener noreferrer">
                C# &amp; dot.net
              </a>
            </li>
            <li>
              <a href="https://vercel.com" target="_blank" rel="noopener noreferrer">
                Vercel
              </a>
            </li>
            <li>
              <a href="https://www.digitalocean.com/" target="_blank" rel="noopener noreferrer">
                Digital Ocean
              </a>
            </li>
            <li>
              <a href="https://www.docker.com/" target="_blank" rel="noopener noreferrer">
                Docker
              </a>
            </li>
            <li>
              <a href="https://www.contentful.com/" target="_blank" rel="noopener noreferrer">
                Contentful
              </a>
            </li>
            <li>
              <a href="https://www.figma.com/" target="_blank" rel="noopener noreferrer">
                Figma
              </a>
            </li>
            <li>
              <a href="https://unity.com/" target="_blank" rel="noopener noreferrer">
                Unity
              </a>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default Uses;
