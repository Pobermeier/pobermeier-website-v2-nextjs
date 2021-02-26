const Home: React.FC = () => {
  return (
    <>
      <div>
        {/* Hero-Section */}
        <section className="hero is-fullheight-with-navbar is-large" id="hero">
          <div id="bg-parallax" data-speed={1} className="hero-body lazy-background enhanced">
            <div className="container">
              <h1 className="title has-text-white is-size-1 is-size-2-tablet is-size-3-mobile">
                Creating <span className="cta-text">fresh &amp; fast web apps and sites</span> with
                passion!
              </h1>
              <h1 className="subtitle has-text-white is-size-3 is-size-4-tablet is-size-5-mobile">
                Frontend Developer &amp; Online-Marketing Expert from Vienna, Austria
              </h1>
              <div className="field is-grouped is-hidden-touch cta-desktop">
                <p className="control">
                  <a
                    className="button is-primary is-rounded is-large gtm-tracked-link primary-cta"
                    href="#portfolio"
                    id="cta-desktop"
                  >
                    <span className="icon is-medium">
                      <svg
                        width={48}
                        height={32}
                        viewBox="0 0 48 32"
                        fill="#fff"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M17.3928 15.5021C17.3928 16.9146 18.0342 18.2693 19.1759 19.2681C20.3176 20.2669 21.8661 20.828 23.4808 20.828C25.0954 20.828 26.6439 20.2669 27.7856 19.2681C28.9273 18.2693 29.5687 16.9146 29.5687 15.5021C29.5687 14.0896 28.9273 12.735 27.7856 11.7362C26.6439 10.7374 25.0954 10.1762 23.4808 10.1762C21.8661 10.1762 20.3176 10.7374 19.1759 11.7362C18.0342 12.735 17.3928 14.0896 17.3928 15.5021V15.5021ZM47.0825 14.2753C41.9295 4.77903 34.1402 0 23.6982 0C13.2508 0 5.46692 4.77903 0.313885 14.28C0.107195 14.6629 0 15.0811 0 15.5045C0 15.9279 0.107195 16.3461 0.313885 16.729C5.46692 26.2252 13.2563 31.0043 23.6982 31.0043C34.1456 31.0043 41.9295 26.2252 47.0825 16.7242C47.5011 15.9539 47.5011 15.0599 47.0825 14.2753V14.2753ZM23.4808 23.8714C18.1973 23.8714 13.914 20.1242 13.914 15.5021C13.914 10.88 18.1973 7.13288 23.4808 7.13288C28.7643 7.13288 33.0476 10.88 33.0476 15.5021C33.0476 20.1242 28.7643 23.8714 23.4808 23.8714Z" />
                      </svg>
                    </span>
                    <span>View My Work</span>
                  </a>
                </p>
                <p className="control">
                  <a
                    className="button is-secondary is-rounded is-large gtm-tracked-link secondary-cta"
                    href="https://github.com/Pobermeier"
                    target="_blank"
                    rel="noopener noreferrer"
                    id="github-hero-desktop"
                  >
                    <span className="icon is-medium">
                      <svg
                        width={25}
                        height={25}
                        viewBox="0 0 25 25"
                        fill="#4a4a4a"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M12.5014 1.07431e-06C5.59435 -0.00286787 0 5.74076 0 12.8299C0 18.4359 3.49961 23.2012 8.37337 24.9512C9.02972 25.1205 8.92917 24.6414 8.92917 24.3143V22.0909C5.13909 22.5471 4.98548 19.9707 4.73131 19.5404C4.21741 18.6395 3.00246 18.41 3.36555 17.9797C4.22858 17.5235 5.10837 18.0944 6.12781 19.6408C6.86515 20.7626 8.30354 20.5732 9.03251 20.3867C9.19171 19.7125 9.53245 19.1101 10.0017 18.6424C6.07474 17.9194 4.43805 15.4579 4.43805 12.5316C4.43805 11.1114 4.89331 9.80606 5.78706 8.75316C5.21729 7.01744 5.84013 5.53133 5.92392 5.31042C7.54664 5.16124 9.2336 6.5039 9.36487 6.61005C10.2866 6.35472 11.3395 6.21988 12.5182 6.21988C13.7024 6.21988 14.7581 6.36046 15.6882 6.61866C16.0038 6.37193 17.5679 5.21861 19.0761 5.35919C19.1571 5.5801 19.7659 7.03179 19.2297 8.74455C20.1346 9.80032 20.5955 11.1172 20.5955 12.5402C20.5955 15.4722 18.9476 17.9367 15.0095 18.6482C15.3468 18.9889 15.6146 19.3953 15.7973 19.8435C15.98 20.2918 16.074 20.7729 16.0736 21.2589V24.4865C16.096 24.7447 16.0736 25 16.4926 25C21.4389 23.2872 25 18.4875 25 12.8328C25 5.74076 19.4029 1.07431e-06 12.5014 1.07431e-06Z" />
                      </svg>
                    </span>
                    <span>GitHub Profile</span>
                  </a>
                </p>
              </div>
              <div className="field is-hidden-desktop">
                <p className="control">
                  <a
                    className="button is-primary is-fullwidth is-rounded is-medium gtm-tracked-link primary-cta"
                    href="#portfolio"
                    id="cta-mobile"
                  >
                    <span className="icon is-small">
                      <svg
                        width={48}
                        height={32}
                        viewBox="0 0 48 32"
                        fill="#fff"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M17.3928 15.5021C17.3928 16.9146 18.0342 18.2693 19.1759 19.2681C20.3176 20.2669 21.8661 20.828 23.4808 20.828C25.0954 20.828 26.6439 20.2669 27.7856 19.2681C28.9273 18.2693 29.5687 16.9146 29.5687 15.5021C29.5687 14.0896 28.9273 12.735 27.7856 11.7362C26.6439 10.7374 25.0954 10.1762 23.4808 10.1762C21.8661 10.1762 20.3176 10.7374 19.1759 11.7362C18.0342 12.735 17.3928 14.0896 17.3928 15.5021V15.5021ZM47.0825 14.2753C41.9295 4.77903 34.1402 0 23.6982 0C13.2508 0 5.46692 4.77903 0.313885 14.28C0.107195 14.6629 0 15.0811 0 15.5045C0 15.9279 0.107195 16.3461 0.313885 16.729C5.46692 26.2252 13.2563 31.0043 23.6982 31.0043C34.1456 31.0043 41.9295 26.2252 47.0825 16.7242C47.5011 15.9539 47.5011 15.0599 47.0825 14.2753V14.2753ZM23.4808 23.8714C18.1973 23.8714 13.914 20.1242 13.914 15.5021C13.914 10.88 18.1973 7.13288 23.4808 7.13288C28.7643 7.13288 33.0476 10.88 33.0476 15.5021C33.0476 20.1242 28.7643 23.8714 23.4808 23.8714Z" />
                      </svg>
                    </span>
                    <span>View My Work</span>
                  </a>
                </p>
                <p className="control">
                  <a
                    className="button is-secondary is-fullwidth is-rounded is-medium gtm-tracked-link secondary-cta"
                    href="https://github.com/Pobermeier"
                    target="_blank"
                    rel="noopener noreferrer"
                    id="github-hero-mobile"
                  >
                    <span className="icon is-small">
                      <svg
                        width={25}
                        height={25}
                        viewBox="0 0 25 25"
                        fill="#4a4a4a"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M12.5014 1.07431e-06C5.59435 -0.00286787 0 5.74076 0 12.8299C0 18.4359 3.49961 23.2012 8.37337 24.9512C9.02972 25.1205 8.92917 24.6414 8.92917 24.3143V22.0909C5.13909 22.5471 4.98548 19.9707 4.73131 19.5404C4.21741 18.6395 3.00246 18.41 3.36555 17.9797C4.22858 17.5235 5.10837 18.0944 6.12781 19.6408C6.86515 20.7626 8.30354 20.5732 9.03251 20.3867C9.19171 19.7125 9.53245 19.1101 10.0017 18.6424C6.07474 17.9194 4.43805 15.4579 4.43805 12.5316C4.43805 11.1114 4.89331 9.80606 5.78706 8.75316C5.21729 7.01744 5.84013 5.53133 5.92392 5.31042C7.54664 5.16124 9.2336 6.5039 9.36487 6.61005C10.2866 6.35472 11.3395 6.21988 12.5182 6.21988C13.7024 6.21988 14.7581 6.36046 15.6882 6.61866C16.0038 6.37193 17.5679 5.21861 19.0761 5.35919C19.1571 5.5801 19.7659 7.03179 19.2297 8.74455C20.1346 9.80032 20.5955 11.1172 20.5955 12.5402C20.5955 15.4722 18.9476 17.9367 15.0095 18.6482C15.3468 18.9889 15.6146 19.3953 15.7973 19.8435C15.98 20.2918 16.074 20.7729 16.0736 21.2589V24.4865C16.096 24.7447 16.0736 25 16.4926 25C21.4389 23.2872 25 18.4875 25 12.8328C25 5.74076 19.4029 1.07431e-06 12.5014 1.07431e-06Z" />
                      </svg>
                    </span>
                    <span>GitHub Profile</span>
                  </a>
                </p>
              </div>
            </div>
            <div id="scroll-to-about" className="scroll-to-arrow">
              <div className="nav-text">
                <p className="is-size-6">About Me</p>
              </div>
              <div className="nav-arrow">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  width="36px"
                  height="18px"
                  viewBox="0 0 36 18"
                  zoomAndPan="disable"
                  preserveAspectRatio="none"
                >
                  <style
                    type="text/css"
                    dangerouslySetInnerHTML={{
                      __html:
                        '\n                  line {\n                    stroke: #fff;\n                    stroke-width: 1;\n                  }\n\n                ',
                    }}
                  />
                  <line x1={0} y1={0} x2={18} y2={18} />
                  <line x1={36} y1={0} x2={18} y2={18} />
                </svg>
              </div>
            </div>
          </div>
        </section>
        {/* Main Content */}
        <main>
          {/* About-Section */}
          <section className="section about" id="about">
            <div className="container has-text-centered">
              <h2 className="title">About Me</h2>
              <div className="columns level">
                <div
                  className="column level-item has-text-centered profile-img"
                  data-aos="fade-left"
                >
                  <figure className="image">
                    <picture>
                      <source srcSet="./img/profile.webp" type="image/webp" />
                      <img
                        className="is-rounded"
                        loading="lazy"
                        width={200}
                        height={200}
                        src="./img/profile.jpg"
                        alt="Patrick Obermeier"
                      />
                    </picture>
                  </figure>
                </div>
                <div className="column is-three-quarters level-item">
                  <p className="subtitle has-text-left">
                    I&apos;m an experienced front-end developer with a solid background in
                    everything related to online-marketing on top. It is my passion to build slick
                    &amp; well optimized websites and web apps.
                    <br />
                    <br />
                    I’m very much into gaming and learning to work with new technologies, always
                    improving myself to stay on top of my field. Further, I like nature and enjoy
                    doing some trekking from time to time. Finally, I&apos;m a good person to have a
                    beer with.
                  </p>
                </div>
              </div>
              <div className="columns level is-hidden-touch">
                <p className="control level-item column is-half has-text-right">
                  <a
                    className="button is-primary is-rounded is-medium gtm-tracked-link primary-cta"
                    href="#portfolio"
                    id="cta-about-desktop"
                  >
                    <span className="icon is-medium">
                      <svg
                        width={48}
                        height={32}
                        viewBox="0 0 48 32"
                        fill="#fff"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M17.3928 15.5021C17.3928 16.9146 18.0342 18.2693 19.1759 19.2681C20.3176 20.2669 21.8661 20.828 23.4808 20.828C25.0954 20.828 26.6439 20.2669 27.7856 19.2681C28.9273 18.2693 29.5687 16.9146 29.5687 15.5021C29.5687 14.0896 28.9273 12.735 27.7856 11.7362C26.6439 10.7374 25.0954 10.1762 23.4808 10.1762C21.8661 10.1762 20.3176 10.7374 19.1759 11.7362C18.0342 12.735 17.3928 14.0896 17.3928 15.5021V15.5021ZM47.0825 14.2753C41.9295 4.77903 34.1402 0 23.6982 0C13.2508 0 5.46692 4.77903 0.313885 14.28C0.107195 14.6629 0 15.0811 0 15.5045C0 15.9279 0.107195 16.3461 0.313885 16.729C5.46692 26.2252 13.2563 31.0043 23.6982 31.0043C34.1456 31.0043 41.9295 26.2252 47.0825 16.7242C47.5011 15.9539 47.5011 15.0599 47.0825 14.2753V14.2753ZM23.4808 23.8714C18.1973 23.8714 13.914 20.1242 13.914 15.5021C13.914 10.88 18.1973 7.13288 23.4808 7.13288C28.7643 7.13288 33.0476 10.88 33.0476 15.5021C33.0476 20.1242 28.7643 23.8714 23.4808 23.8714Z" />
                      </svg>
                    </span>
                    <span>View My Work</span>
                  </a>
                </p>
                <p className="control level-item column is-half has-text-left">
                  <a
                    className="button is-secondary is-rounded is-medium gtm-tracked-link secondary-cta"
                    href="./resume.html"
                    id="resume-about-desktop"
                  >
                    <span>View Resume</span>
                  </a>
                </p>
              </div>
              <div className="field is-hidden-desktop">
                <p className="control">
                  <a
                    className="button is-primary is-fullwidth is-rounded is-medium gtm-tracked-link primary-cta"
                    href="#portfolio"
                    id="cta-about-mobile"
                  >
                    <span className="icon is-small">
                      <svg
                        width={48}
                        height={32}
                        viewBox="0 0 48 32"
                        fill="#fff"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M17.3928 15.5021C17.3928 16.9146 18.0342 18.2693 19.1759 19.2681C20.3176 20.2669 21.8661 20.828 23.4808 20.828C25.0954 20.828 26.6439 20.2669 27.7856 19.2681C28.9273 18.2693 29.5687 16.9146 29.5687 15.5021C29.5687 14.0896 28.9273 12.735 27.7856 11.7362C26.6439 10.7374 25.0954 10.1762 23.4808 10.1762C21.8661 10.1762 20.3176 10.7374 19.1759 11.7362C18.0342 12.735 17.3928 14.0896 17.3928 15.5021V15.5021ZM47.0825 14.2753C41.9295 4.77903 34.1402 0 23.6982 0C13.2508 0 5.46692 4.77903 0.313885 14.28C0.107195 14.6629 0 15.0811 0 15.5045C0 15.9279 0.107195 16.3461 0.313885 16.729C5.46692 26.2252 13.2563 31.0043 23.6982 31.0043C34.1456 31.0043 41.9295 26.2252 47.0825 16.7242C47.5011 15.9539 47.5011 15.0599 47.0825 14.2753V14.2753ZM23.4808 23.8714C18.1973 23.8714 13.914 20.1242 13.914 15.5021C13.914 10.88 18.1973 7.13288 23.4808 7.13288C28.7643 7.13288 33.0476 10.88 33.0476 15.5021C33.0476 20.1242 28.7643 23.8714 23.4808 23.8714Z" />
                      </svg>
                    </span>
                    <span>View My Work</span>
                  </a>
                </p>
                <p className="control">
                  <a
                    className="button is-secondary is-fullwidth is-rounded is-medium gtm-tracked-link secondary-cta"
                    href="./resume.html"
                    id="resume-about-mobile"
                  >
                    <span>View Resume</span>
                  </a>
                </p>
              </div>
              <div className="technologies">
                <h2 className="subtitle">
                  <strong>Tools &amp; Technologies I Use</strong>
                </h2>
                <div className="logo-carousel" data-aos="fade-right">
                  <div className="logo-carousel__inner">
                    <ul>
                      <li className="logo-carousel__item">
                        <img
                          loading="lazy"
                          width={60}
                          height={60}
                          src="./img/logos/html5.svg"
                          alt="HTML"
                          title="HTML"
                        />
                        <span className="is-sr-only">HTML</span>
                      </li>
                      <li className="logo-carousel__item">
                        <img
                          loading="lazy"
                          width={60}
                          height={60}
                          src="./img/logos/css3.svg"
                          alt="CSS"
                          title="CSS"
                        />
                        <span className="is-sr-only">CSS</span>
                      </li>
                      <li className="logo-carousel__item">
                        <img
                          loading="lazy"
                          width={60}
                          height={60}
                          src="./img/logos/sass.svg"
                          alt="Sass"
                          title="Sass"
                        />
                        <span className="is-sr-only">Sass</span>
                      </li>
                      <li className="logo-carousel__item">
                        <img
                          loading="lazy"
                          width={60}
                          height={60}
                          src="./img/logos/javascript.svg"
                          alt="JavaScript"
                          title="JavaScript"
                        />
                        <span className="is-sr-only">JavaScript</span>
                      </li>
                      <li className="logo-carousel__item">
                        <img
                          loading="lazy"
                          width={60}
                          height={60}
                          src="./img/logos/react.svg"
                          alt="React"
                          title="React"
                        />
                        <span className="is-sr-only">React</span>
                      </li>
                      <li className="logo-carousel__item">
                        <img
                          loading="lazy"
                          width={60}
                          height={60}
                          src="./img/logos/next-dot-js.svg"
                          alt="Next.JS"
                          title="Next.JS"
                        />
                        <span className="is-sr-only">Next.JS</span>
                      </li>
                      <li className="logo-carousel__item">
                        <img
                          loading="lazy"
                          width={60}
                          height={60}
                          src="./img/logos/redux.svg"
                          alt="Redux"
                          title="Redux"
                        />
                        <span className="is-sr-only">Redux</span>
                      </li>
                      <li className="logo-carousel__item">
                        <img
                          loading="lazy"
                          width={60}
                          height={60}
                          src="./img/logos/node-dot-js.svg"
                          alt="Node.js"
                          title="Node.js"
                        />
                        <span className="is-sr-only">Node.js</span>
                      </li>
                      <li className="logo-carousel__item">
                        <img
                          loading="lazy"
                          width={60}
                          height={60}
                          src="./img/logos/csharp.svg"
                          alt="C#"
                          title="C#"
                        />
                        <span className="is-sr-only">C#</span>
                      </li>
                      <li className="logo-carousel__item">
                        <img
                          loading="lazy"
                          width={60}
                          height={60}
                          src="./img/logos/php.svg"
                          alt="PHP"
                          title="PHP"
                        />
                        <span className="is-sr-only">PHP</span>
                      </li>
                      <li className="logo-carousel__item">
                        <img
                          loading="lazy"
                          width={60}
                          height={60}
                          src="./img/logos/grunt.svg"
                          alt="Grunt"
                          title="Grunt"
                        />
                        <span className="is-sr-only">Grunt</span>
                      </li>
                      <li className="logo-carousel__item">
                        <img
                          loading="lazy"
                          width={60}
                          height={60}
                          src="./img/logos/gulp.svg"
                          alt="Gulp"
                          title="Gulp"
                        />
                        <span className="is-sr-only">Gulp</span>
                      </li>
                      <li className="logo-carousel__item">
                        <img
                          loading="lazy"
                          width={60}
                          height={60}
                          src="./img/logos/webpack.svg"
                          alt="Webpack"
                          title="Webpack"
                        />
                        <span className="is-sr-only">Webpack</span>
                      </li>
                      <li className="logo-carousel__item">
                        <img
                          loading="lazy"
                          width={60}
                          height={60}
                          src="./img/logos/bootstrap.svg"
                          alt="Bootstrap"
                          title="Bootstrap"
                        />
                        <span className="is-sr-only">Bootstrap</span>
                      </li>
                      <li className="logo-carousel__item">
                        <img
                          loading="lazy"
                          width={60}
                          height={60}
                          src="./img/logos/bulma.svg"
                          alt="Bulma"
                          title="Bulma"
                        />
                        <span className="is-sr-only">Bulma</span>
                      </li>
                      <li className="logo-carousel__item">
                        <img
                          loading="lazy"
                          width={60}
                          height={60}
                          src="./img/logos/github.svg"
                          alt="Git & GitHub"
                          title="Git & GitHub"
                        />
                        <span className="is-sr-only">Git &amp; GitHub</span>
                      </li>
                      <li className="logo-carousel__item">
                        <img
                          loading="lazy"
                          width={60}
                          height={60}
                          src="./img/logos/docker.svg"
                          alt="Docker"
                          title="Docker"
                        />
                        <span className="is-sr-only">Docker</span>
                      </li>
                      <li className="logo-carousel__item">
                        <img
                          loading="lazy"
                          width={60}
                          height={60}
                          src="./img/logos/figma.svg"
                          alt="Figma"
                          title="Figma"
                        />
                        <span className="is-sr-only">Figma</span>
                      </li>
                      <li className="logo-carousel__item">
                        <img
                          loading="lazy"
                          width={60}
                          height={60}
                          src="./img/logos/jira.svg"
                          alt="Jira"
                          title="Jira"
                        />
                        <span className="is-sr-only">Jira</span>
                      </li>
                      <li className="logo-carousel__item">
                        <img
                          loading="lazy"
                          width={60}
                          height={60}
                          src="./img/logos/unity.svg"
                          alt="Unity"
                          title="Unity"
                        />
                        <span className="is-sr-only">Unity</span>
                      </li>
                    </ul>
                    <ul>
                      <li className="logo-carousel__item">
                        <img
                          loading="lazy"
                          width={60}
                          height={60}
                          src="./img/logos/html5.svg"
                          alt="HTML"
                          title="HTML"
                        />
                        <span className="is-sr-only">HTML</span>
                      </li>
                      <li className="logo-carousel__item">
                        <img
                          loading="lazy"
                          width={60}
                          height={60}
                          src="./img/logos/css3.svg"
                          alt="CSS"
                          title="CSS"
                        />
                        <span className="is-sr-only">CSS</span>
                      </li>
                      <li className="logo-carousel__item">
                        <img
                          loading="lazy"
                          width={60}
                          height={60}
                          src="./img/logos/sass.svg"
                          alt="Sass"
                          title="Sass"
                        />
                        <span className="is-sr-only">Sass</span>
                      </li>
                      <li className="logo-carousel__item">
                        <img
                          loading="lazy"
                          width={60}
                          height={60}
                          src="./img/logos/javascript.svg"
                          alt="JavaScript"
                          title="JavaScript"
                        />
                        <span className="is-sr-only">JavaScript</span>
                      </li>
                      <li className="logo-carousel__item">
                        <img
                          loading="lazy"
                          width={60}
                          height={60}
                          src="./img/logos/react.svg"
                          alt="React"
                          title="React"
                        />
                        <span className="is-sr-only">React</span>
                      </li>
                      <li className="logo-carousel__item">
                        <img
                          loading="lazy"
                          width={60}
                          height={60}
                          src="./img/logos/next-dot-js.svg"
                          alt="Next.JS"
                          title="Next.JS"
                        />
                        <span className="is-sr-only">Next.JS</span>
                      </li>
                      <li className="logo-carousel__item">
                        <img
                          loading="lazy"
                          width={60}
                          height={60}
                          src="./img/logos/redux.svg"
                          alt="Redux"
                          title="Redux"
                        />
                        <span className="is-sr-only">Redux</span>
                      </li>
                      <li className="logo-carousel__item">
                        <img
                          loading="lazy"
                          width={60}
                          height={60}
                          src="./img/logos/node-dot-js.svg"
                          alt="Node.js"
                          title="Node.js"
                        />
                        <span className="is-sr-only">Node.js</span>
                      </li>
                      <li className="logo-carousel__item">
                        <img
                          loading="lazy"
                          width={60}
                          height={60}
                          src="./img/logos/csharp.svg"
                          alt="C#"
                          title="C#"
                        />
                        <span className="is-sr-only">C#</span>
                      </li>
                      <li className="logo-carousel__item">
                        <img
                          loading="lazy"
                          width={60}
                          height={60}
                          src="./img/logos/php.svg"
                          alt="PHP"
                          title="PHP"
                        />
                        <span className="is-sr-only">PHP</span>
                      </li>
                      <li className="logo-carousel__item">
                        <img
                          loading="lazy"
                          width={60}
                          height={60}
                          src="./img/logos/grunt.svg"
                          alt="Grunt"
                          title="Grunt"
                        />
                        <span className="is-sr-only">Grunt</span>
                      </li>
                      <li className="logo-carousel__item">
                        <img
                          loading="lazy"
                          width={60}
                          height={60}
                          src="./img/logos/gulp.svg"
                          alt="Gulp"
                          title="Gulp"
                        />
                        <span className="is-sr-only">Gulp</span>
                      </li>
                      <li className="logo-carousel__item">
                        <img
                          loading="lazy"
                          width={60}
                          height={60}
                          src="./img/logos/webpack.svg"
                          alt="Webpack"
                          title="Webpack"
                        />
                        <span className="is-sr-only">Webpack</span>
                      </li>
                      <li className="logo-carousel__item">
                        <img
                          loading="lazy"
                          width={60}
                          height={60}
                          src="./img/logos/bootstrap.svg"
                          alt="Bootstrap"
                          title="Bootstrap"
                        />
                        <span className="is-sr-only">Bootstrap</span>
                      </li>
                      <li className="logo-carousel__item">
                        <img
                          loading="lazy"
                          width={60}
                          height={60}
                          src="./img/logos/bulma.svg"
                          alt="Bulma"
                          title="Bulma"
                        />
                        <span className="is-sr-only">Bulma</span>
                      </li>
                      <li className="logo-carousel__item">
                        <img
                          loading="lazy"
                          width={60}
                          height={60}
                          src="./img/logos/github.svg"
                          alt="Git & GitHub"
                          title="Git & GitHub"
                        />
                        <span className="is-sr-only">Git &amp; GitHub</span>
                      </li>
                      <li className="logo-carousel__item">
                        <img
                          loading="lazy"
                          width={60}
                          height={60}
                          src="./img/logos/docker.svg"
                          alt="Docker"
                          title="Docker"
                        />
                        <span className="is-sr-only">Docker</span>
                      </li>
                      <li className="logo-carousel__item">
                        <img
                          loading="lazy"
                          width={60}
                          height={60}
                          src="./img/logos/figma.svg"
                          alt="Figma"
                          title="Figma"
                        />
                        <span className="is-sr-only">Figma</span>
                      </li>
                      <li className="logo-carousel__item">
                        <img
                          loading="lazy"
                          width={60}
                          height={60}
                          src="./img/logos/jira.svg"
                          alt="Jira"
                          title="Jira"
                        />
                        <span className="is-sr-only">Jira</span>
                      </li>
                      <li className="logo-carousel__item">
                        <img
                          loading="lazy"
                          width={60}
                          height={60}
                          src="./img/logos/unity.svg"
                          alt="Unity"
                          title="Unity"
                        />
                        <span className="is-sr-only">Unity</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Portfolio-Section */}
          <section className="section" id="portfolio">
            <div className="container has-text-centered">
              <h2 className="title">Featured Personal Projects</h2>
              <p className="subtitle">
                Below you can find a selection of personal projects I&apos;ve been working on
                recently. For these you can check out both the code and a live version of the
                project. If you&apos;re interested in my work you&apos;re welcome to check out the
                other public repositories{' '}
                <a
                  href="https://github.com/Pobermeier"
                  className="gtm-tracked-link"
                  target="_blank"
                  rel="noopener noreferrer"
                  id="github-inline-link"
                >
                  on my GitHub profile.
                </a>
                Additionally, you can find an excerpt of my professional work{' '}
                <a
                  href="#work-excerpts"
                  id="goto-work-excerpts-inline"
                  className="gtm-tracked-link"
                >
                  in the next section
                </a>
                .
              </p>
              <div className="columns project-cards" data-aos="fade-left">
                <div className="column">
                  <div className="card">
                    <div className="card-image">
                      <figure className="image is-4by3">
                        <a
                          href="https://www.vintagepoker.net/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="gtm-tracked-link"
                          id="project-personal1-img"
                        >
                          <picture>
                            <source
                              srcSet="./img/project_personal_vintagepoker.webp"
                              type="image/webp"
                            />
                            <img
                              loading="lazy"
                              width={1280}
                              height={960}
                              src="./img/project_personal_vintagepoker.jpg"
                              alt="Poker platform built with MERN-Stack"
                            />
                          </picture>
                        </a>
                      </figure>
                    </div>
                    <div className="card-content has-text-justified">
                      <div className="media">
                        <div className="media-left">
                          <figure className="image is-48x48 small-logo">
                            <img
                              src="./img/logo.svg"
                              alt="Patrick Obermeier"
                              loading="lazy"
                              width={48}
                              height={48}
                            />
                          </figure>
                        </div>
                        <div className="media-content">
                          <h3 className="title is-5">Vintage Poker</h3>
                          <h4 className="subtitle is-6">Poker Platform</h4>
                        </div>
                      </div>
                      <div className="content">
                        <p>
                          Vintage Poker is a poker platform built with the MERN-stack and Socket.io.
                          The &quot;Styled Components&quot;-library was used to build a UI with a
                          custom look &amp; feel. Localized content (DE &amp; EN) is being managed
                          &amp; loaded from the Headless-CMS Contentful.
                        </p>
                      </div>
                      <div className="my-card-footer">
                        <h4 className="subtitle is-6 has-text-centered">
                          <strong>Technologies Used</strong>
                        </h4>
                        <div className="technologies-used">
                          <ul>
                            <li>
                              <img
                                loading="lazy"
                                width={40}
                                height={40}
                                src="./img/logos/html5.svg"
                                alt="HTML"
                                title="HTML"
                              />
                              <span className="sr-only">HTML</span>
                            </li>
                            <li>
                              <img
                                loading="lazy"
                                width={40}
                                height={40}
                                src="./img/logos/css3.svg"
                                alt="CSS"
                                title="Custom CSS"
                              />
                              <span className="sr-only">Styled Components</span>
                            </li>
                            <li>
                              <img
                                loading="lazy"
                                width={40}
                                height={40}
                                src="./img/logos/javascript.svg"
                                alt="JavaScript"
                                title="JavaScript"
                              />
                              <span className="sr-only">JavaScript</span>
                            </li>
                            <li>
                              <img
                                loading="lazy"
                                width={40}
                                height={40}
                                src="./img/logos/react.svg"
                                alt="React"
                                title="React"
                              />
                              <span className="sr-only">React</span>
                            </li>
                            <li>
                              <img
                                loading="lazy"
                                width={40}
                                height={40}
                                src="./img/logos/node-dot-js.svg"
                                alt="Node.js + Express + Socket.io"
                                title="Node.js + Express + Socket.io"
                              />
                              <span className="sr-only">Node.js + Express + Socket.io</span>
                            </li>
                            <li>
                              <img
                                loading="lazy"
                                width={40}
                                height={40}
                                src="./img/logos/webpack.svg"
                                alt="Webpack"
                                title="Webpack"
                              />
                              <span className="sr-only">Webpack</span>
                            </li>
                          </ul>
                        </div>
                        <div className="field is-grouped">
                          <p className="control">
                            <a
                              className="button is-primary is-rounded gtm-tracked-link"
                              href="https://www.vintagepoker.net/"
                              target="_blank"
                              rel="noopener noreferrer"
                              id="project-personal1-btn"
                            >
                              <span>Live Project</span>
                            </a>
                          </p>
                          <p className="control">
                            <a
                              className="button is-outlined is-rounded gtm-tracked-link"
                              href="https://github.com/Pobermeier/vintage-poker"
                              target="_blank"
                              rel="noopener noreferrer"
                              id="project-personal1-gh"
                            >
                              <span>Code</span>
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="column">
                  <div className="card">
                    <div className="card-image">
                      <figure className="image is-4by3">
                        <a
                          href="https://www.devmeetup.net/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="gtm-tracked-link"
                          id="project-personal2-img"
                        >
                          <picture>
                            <source
                              srcSet="./img/project_personal_devmeetup.webp"
                              type="image/webp"
                            />
                            <img
                              loading="lazy"
                              width={1280}
                              height={960}
                              src="./img/project_personal_devmeetup.jpg"
                              alt="DevMeetup Social Network built with MERN-Stack"
                            />
                          </picture>
                        </a>
                      </figure>
                    </div>
                    <div className="card-content has-text-justified">
                      <div className="media">
                        <div className="media-left">
                          <figure className="image is-48x48 small-logo">
                            <img
                              src="./img/logo.svg"
                              alt="Patrick Obermeier"
                              loading="lazy"
                              width={48}
                              height={48}
                            />
                          </figure>
                        </div>
                        <div className="media-content">
                          <h3 className="title is-5">DevMeetup</h3>
                          <h4 className="subtitle is-6">Social Network</h4>
                        </div>
                      </div>
                      <div className="content">
                        <p>
                          A social network for developers built with the MERN-stack. Backend-API is
                          set-up with Node.js and Express including authentication using JWT web
                          tokens. The app uses Redux for client-side state management.
                        </p>
                      </div>
                      <div className="my-card-footer">
                        <h4 className="subtitle is-6 has-text-centered">
                          <strong>Technologies Used</strong>
                        </h4>
                        <div className="technologies-used">
                          <ul>
                            <li>
                              <img
                                loading="lazy"
                                width={40}
                                height={40}
                                src="./img/logos/html5.svg"
                                alt="HTML"
                                title="HTML"
                              />
                              <span className="sr-only">HTML</span>
                            </li>
                            <li>
                              <img
                                loading="lazy"
                                width={40}
                                height={40}
                                src="./img/logos/css3.svg"
                                alt="CSS"
                                title="Custom CSS"
                              />
                              <span className="sr-only">CSS</span>
                            </li>
                            <li>
                              <img
                                loading="lazy"
                                width={40}
                                height={40}
                                src="./img/logos/javascript.svg"
                                alt="JavaScript"
                                title="JavaScript"
                              />
                              <span className="sr-only">JavaScript</span>
                            </li>
                            <li>
                              <img
                                loading="lazy"
                                width={40}
                                height={40}
                                src="./img/logos/react.svg"
                                alt="React"
                                title="React"
                              />
                              <span className="sr-only">React</span>
                            </li>
                            <li>
                              <img
                                loading="lazy"
                                width={40}
                                height={40}
                                src="./img/logos/redux.svg"
                                alt="Redux"
                                title="Redux"
                              />
                              <span className="sr-only">Redux</span>
                            </li>
                            <li>
                              <img
                                loading="lazy"
                                width={40}
                                height={40}
                                src="./img/logos/node-dot-js.svg"
                                alt="Node.js"
                                title="Node.js"
                              />
                              <span className="sr-only">Node.js</span>
                            </li>
                            <li>
                              <img
                                loading="lazy"
                                width={40}
                                height={40}
                                src="./img/logos/webpack.svg"
                                alt="Webpack"
                                title="Webpack"
                              />
                              <span className="sr-only">Webpack</span>
                            </li>
                          </ul>
                        </div>
                        <div className="field is-grouped">
                          <p className="control">
                            <a
                              className="button is-primary is-rounded gtm-tracked-link"
                              href="https://www.devmeetup.net/"
                              target="_blank"
                              rel="noopener noreferrer"
                              id="project-personal2-btn"
                            >
                              <span>Live Project</span>
                            </a>
                          </p>
                          <p className="control">
                            <a
                              className="button is-outlined is-rounded gtm-tracked-link"
                              href="https://github.com/Pobermeier/devmeetup"
                              target="_blank"
                              rel="noopener noreferrer"
                              id="project-personal2-gh"
                            >
                              <span>Code</span>
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="column">
                  <div className="card">
                    <div className="card-image">
                      <figure className="image is-4by3">
                        <a
                          href="https://www.simplysticky.net/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="gtm-tracked-link"
                          id="project-personal3-img"
                        >
                          <picture>
                            <source srcSet="./img/simplysticky.webp" type="image/webp" />
                            <img
                              loading="lazy"
                              width={1280}
                              height={960}
                              src="./img/simplysticky.png"
                              alt="Note-taking App built with React"
                            />
                          </picture>
                        </a>
                      </figure>
                    </div>
                    <div className="card-content has-text-justified">
                      <div className="media">
                        <div className="media-left">
                          <figure className="image is-48x48 small-logo">
                            <img
                              src="./img/logo.svg"
                              alt="Patrick Obermeier"
                              loading="lazy"
                              width={48}
                              height={48}
                            />
                          </figure>
                        </div>
                        <div className="media-content">
                          <h3 className="title is-5">SimplySticky</h3>
                          <h4 className="subtitle is-6">Note-taking App</h4>
                        </div>
                      </div>
                      <div className="content">
                        <p>
                          SimplySticky is a full-CRUD Note-taking App build with React which is
                          utilizing cloud functions to perform any of its backend functionality.
                          Uses Netlify Identity as an external auth provider &amp; Redux for
                          internal state management.
                        </p>
                      </div>
                      <div className="my-card-footer">
                        <h4 className="subtitle is-6 has-text-centered">
                          <strong>Technologies Used</strong>
                        </h4>
                        <div className="technologies-used">
                          <ul>
                            <li>
                              <img
                                loading="lazy"
                                width={40}
                                height={40}
                                src="./img/logos/html5.svg"
                                alt="HTML"
                                title="HTML"
                              />
                              <span className="sr-only">HTML</span>
                            </li>
                            <li>
                              <img
                                loading="lazy"
                                width={40}
                                height={40}
                                src="./img/logos/css3.svg"
                                alt="Materialize CSS"
                                title="Materialize CSS"
                              />
                              <span className="sr-only">Materialize CSS</span>
                            </li>
                            <li>
                              <img
                                loading="lazy"
                                width={40}
                                height={40}
                                src="./img/logos/javascript.svg"
                                alt="JavaScript"
                                title="JavaScript"
                              />
                              <span className="sr-only">JavaScript</span>
                            </li>
                            <li>
                              <img
                                loading="lazy"
                                width={40}
                                height={40}
                                src="./img/logos/react.svg"
                                alt="React"
                                title="React"
                              />
                              <span className="sr-only">React</span>
                            </li>
                            <li>
                              <img
                                loading="lazy"
                                width={40}
                                height={40}
                                src="./img/logos/redux.svg"
                                alt="Redux"
                                title="Redux"
                              />
                              <span className="sr-only">Redux</span>
                            </li>
                            <li>
                              <img
                                loading="lazy"
                                width={40}
                                height={40}
                                src="./img/logos/node-dot-js.svg"
                                alt="Cloud Functions"
                                title="Cloud Functions"
                              />
                              <span className="sr-only">Cloud Functions</span>
                            </li>
                            <li>
                              <img
                                loading="lazy"
                                width={40}
                                height={40}
                                src="./img/logos/webpack.svg"
                                alt="Webpack"
                                title="Webpack"
                              />
                              <span className="sr-only">Webpack</span>
                            </li>
                          </ul>
                        </div>
                        <div className="field is-grouped">
                          <p className="control">
                            <a
                              className="button is-primary is-rounded gtm-tracked-link"
                              href="https://www.simplysticky.net/"
                              target="_blank"
                              rel="noopener noreferrer"
                              id="project-personal3-btn"
                            >
                              <span>Live Project</span>
                            </a>
                          </p>
                          <p className="control">
                            <a
                              className="button is-outlined is-rounded gtm-tracked-link"
                              href="https://github.com/Pobermeier/simply-sticky"
                              target="_blank"
                              rel="noopener noreferrer"
                              id="project-personal3-gh"
                            >
                              <span>Code</span>
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <br />
              <div className="columns project-cards" data-aos="fade-right">
                <div className="column">
                  <div className="card">
                    <div className="card-image">
                      <figure className="image is-4by3">
                        <a
                          href="https://battleship-websockets-game.herokuapp.com/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="gtm-tracked-link"
                          id="project-personal4-img"
                        >
                          <picture>
                            <source
                              srcSet="./img/project_personal_battleship.webp"
                              type="image/webp"
                            />
                            <img
                              loading="lazy"
                              width={1280}
                              height={960}
                              src="./img/project_personal_battleship.jpg"
                              alt="Would you rather...?"
                            />
                          </picture>
                        </a>
                      </figure>
                    </div>
                    <div className="card-content has-text-justified">
                      <div className="media">
                        <div className="media-left">
                          <figure className="image is-48x48 small-logo">
                            <img
                              src="./img/logo.svg"
                              alt="Patrick Obermeier"
                              loading="lazy"
                              width={48}
                              height={48}
                            />
                          </figure>
                        </div>
                        <div className="media-content">
                          <h3 className="title is-5">Battleship!</h3>
                          <h4 className="subtitle is-6">Multiplayer Game</h4>
                        </div>
                      </div>
                      <div className="content">
                        <p>
                          A multiplayer variant of the famous game &quot;Battleship&quot;
                          implemented with Node.js, Express &amp; Socket.io. Notable features are a
                          game lobby to create &amp; join games, in-game chat &amp; 2-player
                          multiplayer.
                        </p>
                      </div>
                      <div className="my-card-footer">
                        <h4 className="subtitle is-6 has-text-centered">
                          <strong>Technologies Used</strong>
                        </h4>
                        <div className="technologies-used">
                          <ul>
                            <li>
                              <img
                                loading="lazy"
                                width={40}
                                height={40}
                                src="./img/logos/html5.svg"
                                alt="HTML"
                                title="HTML"
                              />
                              <span className="sr-only">HTML</span>
                            </li>
                            <li>
                              <img
                                loading="lazy"
                                width={40}
                                height={40}
                                src="./img/logos/css3.svg"
                                alt="CSS"
                                title="Custom CSS"
                              />
                              <span className="sr-only">CSS</span>
                            </li>
                            <li>
                              <img
                                loading="lazy"
                                width={40}
                                height={40}
                                src="./img/logos/javascript.svg"
                                alt="JavaScript"
                                title="JavaScript"
                              />
                              <span className="sr-only">JavaScript</span>
                            </li>
                            <li>
                              <img
                                loading="lazy"
                                width={40}
                                height={40}
                                src="./img/logos/node-dot-js.svg"
                                alt="Node.js"
                                title="Node.js + Express + Socket.io"
                              />
                              <span className="sr-only">Node.js + Express + Socket.io</span>
                            </li>
                          </ul>
                        </div>
                        <div className="field is-grouped">
                          <p className="control">
                            <a
                              className="button is-primary is-rounded gtm-tracked-link"
                              href="https://battleship-websockets-game.herokuapp.com/"
                              target="_blank"
                              rel="noopener noreferrer"
                              id="project-personal4-btn"
                            >
                              <span>Live Project</span>
                            </a>
                          </p>
                          <p className="control">
                            <a
                              className="button is-outlined is-rounded gtm-tracked-link"
                              href="https://github.com/Pobermeier/battleship-websockets-game"
                              id="project-personal4-gh"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <span>Code</span>
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="column">
                  <div className="card">
                    <div className="card-image">
                      <figure className="image is-4by3">
                        <a
                          href="https://snack.expo.io/@git/github.com/Pobermeier/reactnd-mobile-flashcards"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="gtm-tracked-link"
                          id="project-personal5-img"
                        >
                          <picture>
                            <source
                              srcSet="./img/project_personal_flashcards.webp"
                              type="image/webp"
                            />
                            <img
                              loading="lazy"
                              width={1280}
                              height={960}
                              src="./img/project_personal_flashcards.jpg"
                              alt="Mobile Flashcards"
                            />
                          </picture>
                        </a>
                      </figure>
                    </div>
                    <div className="card-content has-text-justified">
                      <div className="media">
                        <div className="media-left">
                          <figure className="image is-48x48 small-logo">
                            <img
                              src="./img/logo.svg"
                              width={48}
                              height={48}
                              alt="Patrick Obermeier"
                              loading="lazy"
                            />
                          </figure>
                        </div>
                        <div className="media-content">
                          <h3 className="title is-5">Flashcards</h3>
                          <h4 className="subtitle is-6">Productivity App</h4>
                        </div>
                      </div>
                      <div className="content">
                        <p>
                          This is a productivity app created using React Native. Users can create
                          virtual decks of flashcards, build a library of questions and answers for
                          a specific topic and challenge themselves by taking quizzes and
                          documenting their learning progress.
                        </p>
                      </div>
                      <div className="my-card-footer">
                        <h4 className="subtitle is-6 has-text-centered">
                          <strong>Technologies Used</strong>
                        </h4>
                        <div className="technologies-used">
                          <ul>
                            <li>
                              <img
                                loading="lazy"
                                width={40}
                                height={40}
                                src="./img/logos/javascript.svg"
                                alt="JavaScript"
                                title="JavaScript"
                              />
                              <span className="sr-only">JavaScript</span>
                            </li>
                            <li>
                              <img
                                loading="lazy"
                                width={40}
                                height={40}
                                src="./img/logos/css3.svg"
                                alt="CSS"
                                title="Custom CSS"
                              />
                              <span className="sr-only">CSS</span>
                            </li>
                            <li>
                              <img
                                loading="lazy"
                                width={40}
                                height={40}
                                src="./img/logos/react.svg"
                                alt="React"
                                title="React Native"
                              />
                              <span className="sr-only">React Native</span>
                            </li>
                          </ul>
                        </div>
                        <div className="field is-grouped">
                          <p className="control">
                            <a
                              className="button is-primary is-rounded gtm-tracked-link"
                              href="https://snack.expo.io/@git/github.com/Pobermeier/reactnd-mobile-flashcards"
                              target="_blank"
                              rel="noopener noreferrer"
                              id="project-personal5-btn"
                            >
                              <span>Live Project</span>
                            </a>
                          </p>
                          <p className="control">
                            <a
                              className="button is-outlined is-rounded gtm-tracked-link"
                              href="https://github.com/Pobermeier/mobile-flashcards"
                              target="_blank"
                              rel="noopener noreferrer"
                              id="project-personal5-gh"
                            >
                              <span>Code</span>
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="column">
                  <div className="card">
                    <div className="card-image">
                      <figure className="image is-4by3">
                        <a
                          href="https://would-you-rather-2020.netlify.app/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="gtm-tracked-link"
                          id="project-personal6-img"
                        >
                          <picture>
                            <source
                              srcSet="./img/project_personal_wouldyourather.webp"
                              type="image/webp"
                            />
                            <img
                              loading="lazy"
                              width={1280}
                              height={960}
                              src="./img/project_personal_wouldyourather.jpg"
                              alt="Would you rather...?"
                            />
                          </picture>
                        </a>
                      </figure>
                    </div>
                    <div className="card-content has-text-justified">
                      <div className="media">
                        <div className="media-left">
                          <figure className="image is-48x48 small-logo">
                            <img
                              src="./img/logo.svg"
                              alt="Patrick Obermeier"
                              loading="lazy"
                              width={48}
                              height={48}
                            />
                          </figure>
                        </div>
                        <div className="media-content">
                          <h3 className="title is-5">Would you rather...?</h3>
                          <h4 className="subtitle is-6">Quiz App</h4>
                        </div>
                      </div>
                      <div className="content">
                        <p>
                          An implementation of the popular &quot;Would you rather...&quot;game that
                          uses React for the UI-part and Redux for state management. The
                          &quot;backend&quot; is implemented as an in-client DB + fake API
                          endpoints.
                        </p>
                      </div>
                      <div className="my-card-footer">
                        <h4 className="subtitle is-6 has-text-centered">
                          <strong>Technologies Used</strong>
                        </h4>
                        <div className="technologies-used">
                          <ul>
                            <li>
                              <img
                                loading="lazy"
                                width={40}
                                height={40}
                                src="./img/logos/html5.svg"
                                alt="HTML"
                                title="HTML"
                              />
                              <span className="sr-only">HTML</span>
                            </li>
                            <li>
                              <img
                                loading="lazy"
                                width={40}
                                height={40}
                                src="./img/logos/css3.svg"
                                alt="CSS"
                                title="Custom CSS"
                              />
                              <span className="sr-only">CSS</span>
                            </li>
                            <li>
                              <img
                                loading="lazy"
                                width={40}
                                height={40}
                                src="./img/logos/javascript.svg"
                                alt="JavaScript"
                                title="JavaScript"
                              />
                              <span className="sr-only">JavaScript</span>
                            </li>
                            <li>
                              <img
                                loading="lazy"
                                width={40}
                                height={40}
                                src="./img/logos/react.svg"
                                alt="React"
                                title="React"
                              />
                              <span className="sr-only">React</span>
                            </li>
                            <li>
                              <img
                                loading="lazy"
                                width={40}
                                height={40}
                                src="./img/logos/redux.svg"
                                alt="Redux"
                                title="Redux"
                              />
                              <span className="sr-only">Redux</span>
                            </li>
                            <li>
                              <img
                                loading="lazy"
                                width={40}
                                height={40}
                                src="./img/logos/bootstrap.svg"
                                alt="Bootstrap"
                                title="Bootstrap"
                              />
                              <span className="sr-only">Bootstrap</span>
                            </li>
                            <li>
                              <img
                                loading="lazy"
                                width={40}
                                height={40}
                                src="./img/logos/webpack.svg"
                                alt="Webpack"
                                title="Webpack"
                              />
                              <span className="sr-only">Webpack</span>
                            </li>
                          </ul>
                        </div>
                        <div className="field is-grouped">
                          <p className="control">
                            <a
                              className="button is-primary is-rounded gtm-tracked-link"
                              href="https://would-you-rather-2020.netlify.app/"
                              target="_blank"
                              rel="noopener noreferrer"
                              id="project-personal6-btn"
                            >
                              <span>Live Project</span>
                            </a>
                          </p>
                          <p className="control">
                            <a
                              className="button is-outlined is-rounded gtm-tracked-link"
                              href="https://github.com/Pobermeier/would-you-rather"
                              id="project-personal6-gh"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <span>Code</span>
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="columns">
                <div className="column">
                  <p className="control has-text-right" style={{ marginTop: '2rem' }}>
                    <a
                      className="button is-primary is-rounded is-medium gtm-tracked-link primary-cta"
                      href="#work-excerpts"
                      id="goto-work-excerpts-btn"
                    >
                      <span className="icon is-small">
                        <svg
                          width={48}
                          height={32}
                          viewBox="0 0 48 32"
                          fill="#fff"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M17.3928 15.5021C17.3928 16.9146 18.0342 18.2693 19.1759 19.2681C20.3176 20.2669 21.8661 20.828 23.4808 20.828C25.0954 20.828 26.6439 20.2669 27.7856 19.2681C28.9273 18.2693 29.5687 16.9146 29.5687 15.5021C29.5687 14.0896 28.9273 12.735 27.7856 11.7362C26.6439 10.7374 25.0954 10.1762 23.4808 10.1762C21.8661 10.1762 20.3176 10.7374 19.1759 11.7362C18.0342 12.735 17.3928 14.0896 17.3928 15.5021V15.5021ZM47.0825 14.2753C41.9295 4.77903 34.1402 0 23.6982 0C13.2508 0 5.46692 4.77903 0.313885 14.28C0.107195 14.6629 0 15.0811 0 15.5045C0 15.9279 0.107195 16.3461 0.313885 16.729C5.46692 26.2252 13.2563 31.0043 23.6982 31.0043C34.1456 31.0043 41.9295 26.2252 47.0825 16.7242C47.5011 15.9539 47.5011 15.0599 47.0825 14.2753V14.2753ZM23.4808 23.8714C18.1973 23.8714 13.914 20.1242 13.914 15.5021C13.914 10.88 18.1973 7.13288 23.4808 7.13288C28.7643 7.13288 33.0476 10.88 33.0476 15.5021C33.0476 20.1242 28.7643 23.8714 23.4808 23.8714Z" />
                        </svg>
                      </span>
                      <span>Work Excerpts</span>
                    </a>
                  </p>
                </div>
                <div className="column">
                  <p className="control has-text-left" style={{ marginTop: '2rem' }}>
                    <a
                      className="button is-secondary is-rounded is-medium gtm-tracked-link secondary-cta"
                      href="https://github.com/Pobermeier?tab=repositories"
                      target="_blank"
                      rel="noopener noreferrer"
                      id="github-section-btn"
                    >
                      <span className="icon is-small">
                        <svg
                          width={25}
                          height={25}
                          viewBox="0 0 25 25"
                          fill="#4a4a4a"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M12.5014 1.07431e-06C5.59435 -0.00286787 0 5.74076 0 12.8299C0 18.4359 3.49961 23.2012 8.37337 24.9512C9.02972 25.1205 8.92917 24.6414 8.92917 24.3143V22.0909C5.13909 22.5471 4.98548 19.9707 4.73131 19.5404C4.21741 18.6395 3.00246 18.41 3.36555 17.9797C4.22858 17.5235 5.10837 18.0944 6.12781 19.6408C6.86515 20.7626 8.30354 20.5732 9.03251 20.3867C9.19171 19.7125 9.53245 19.1101 10.0017 18.6424C6.07474 17.9194 4.43805 15.4579 4.43805 12.5316C4.43805 11.1114 4.89331 9.80606 5.78706 8.75316C5.21729 7.01744 5.84013 5.53133 5.92392 5.31042C7.54664 5.16124 9.2336 6.5039 9.36487 6.61005C10.2866 6.35472 11.3395 6.21988 12.5182 6.21988C13.7024 6.21988 14.7581 6.36046 15.6882 6.61866C16.0038 6.37193 17.5679 5.21861 19.0761 5.35919C19.1571 5.5801 19.7659 7.03179 19.2297 8.74455C20.1346 9.80032 20.5955 11.1172 20.5955 12.5402C20.5955 15.4722 18.9476 17.9367 15.0095 18.6482C15.3468 18.9889 15.6146 19.3953 15.7973 19.8435C15.98 20.2918 16.074 20.7729 16.0736 21.2589V24.4865C16.096 24.7447 16.0736 25 16.4926 25C21.4389 23.2872 25 18.4875 25 12.8328C25 5.74076 19.4029 1.07431e-06 12.5014 1.07431e-06Z" />
                        </svg>
                      </span>
                      <span>View More</span>
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </section>
          {/* Work Excerpts */}
          <section className="section work-excerpts" id="work-excerpts">
            <div className="container has-text-centered">
              <h2 className="title">Professional Work Excerpts</h2>
              <p className="subtitle">
                In this section you can find some excerpts from my day-to-day professional work.
                Please note that the source for these projects is private due to confidentiality.
              </p>
              <div className="columns project-cards" data-aos="fade-left">
                <div className="column">
                  <div className="card">
                    <div className="card-image">
                      <figure className="image is-4by3">
                        <a
                          href="https://lp.gametwist.com/landingpages/"
                          className="gtm-tracked-link"
                          id="project-work1-img"
                          target="_blank"
                          rel="noopener noreferrer"
                          referrerPolicy="no-referrer"
                        >
                          <picture>
                            <source
                              srcSet="./img/project_work_lpgametwist.webp"
                              type="image/webp"
                            />
                            <img
                              loading="lazy"
                              src="./img/project_work_lpgametwist.jpg"
                              width={1280}
                              height={960}
                              alt="Social Casino Marketing Website"
                            />
                          </picture>
                        </a>
                      </figure>
                    </div>
                    <div className="card-content has-text-justified">
                      <div className="media">
                        <div className="media-left">
                          <figure className="image is-48x48 small-logo">
                            <a
                              href="https://www.greentube.com/"
                              referrerPolicy="no-referrer"
                              rel="noreferrer noopener external nofollow"
                              target="_blank"
                            >
                              <img
                                src="./img/Greentube_Icon_96x96.svg"
                                width={48}
                                height={48}
                                alt="Greentube IES GmbH"
                                loading="lazy"
                              />
                            </a>
                          </figure>
                        </div>
                        <div className="media-content">
                          <h3 className="title is-5">Social Casino Website</h3>
                          <h4 className="subtitle is-6">Marketing Website</h4>
                        </div>
                      </div>
                      <div className="content">
                        <p>
                          An example of a landing page for our reknown social casino brand. A PHP
                          template engine and a headless CMS in the backend enable us to avoid code
                          duplication and make marketing content editable by anybody. Combined with
                          a focus on best-in-class loading speed optimizations this gives us a
                          cutting edge over our competitors.
                        </p>
                      </div>
                      <div className="my-card-footer">
                        <h4 className="subtitle is-6 has-text-centered">
                          <strong>Technologies Used</strong>
                        </h4>
                        <div className="technologies-used">
                          <ul>
                            <li>
                              <img
                                loading="lazy"
                                width={40}
                                height={40}
                                src="./img/logos/html5.svg"
                                alt="HTML"
                                title="HTML"
                              />
                              <span className="sr-only">HTML</span>
                            </li>
                            <li>
                              <img
                                loading="lazy"
                                width={40}
                                height={40}
                                src="./img/logos/css3.svg"
                                alt="CSS"
                                title="CSS"
                              />
                              <span className="sr-only">CSS</span>
                            </li>
                            <li>
                              <img
                                loading="lazy"
                                width={40}
                                height={40}
                                src="./img/logos/javascript.svg"
                                alt="JavaScript"
                                title="JavaScript"
                              />
                              <span className="sr-only">JavaScript</span>
                            </li>
                            <li>
                              <img
                                loading="lazy"
                                width={40}
                                height={40}
                                src="./img/logos/php.svg"
                                alt="PHP"
                                title="PHP"
                              />
                              <span className="sr-only">PHP</span>
                            </li>
                            <li>
                              <img
                                loading="lazy"
                                width={40}
                                height={40}
                                src="./img/logos/sass.svg"
                                alt="Sass"
                                title="Sass"
                              />
                              <span className="sr-only">Sass</span>
                            </li>
                            <li>
                              <img
                                loading="lazy"
                                width={40}
                                height={40}
                                src="./img/logos/bootstrap.svg"
                                alt="Bootstrap"
                                title="Bootstrap"
                              />
                              <span className="sr-only">Bootstrap</span>
                            </li>
                            <li>
                              <img
                                loading="lazy"
                                width={40}
                                height={40}
                                src="./img/logos/gulp.svg"
                                alt="Gulp"
                                title="Gulp"
                              />
                              <span className="sr-only">Gulp</span>
                            </li>
                          </ul>
                        </div>
                        <div className="field">
                          <p className="control">
                            <a
                              className="button is-primary is-rounded gtm-tracked-link"
                              href="https://lp.gametwist.com/landingpages/"
                              referrerPolicy="no-referrer"
                              rel="noreferrer noopener external nofollow"
                              target="_blank"
                              id="project-work1-btn"
                            >
                              <span>Live Project</span>
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="column">
                  <div className="card">
                    <div className="card-image">
                      <figure className="image is-4by3">
                        <a
                          href="https://lp.stargames.de/mobile-app/en/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="gtm-tracked-link"
                          id="project-work2-img"
                        >
                          <picture>
                            <source
                              srcSet="./img/project_work_lpstargames.webp"
                              type="image/webp"
                            />
                            <img
                              loading="lazy"
                              width={1280}
                              height={960}
                              src="./img/project_work_lpstargames.jpg"
                              alt="Cash Casino Android-App Landingpage"
                            />
                          </picture>
                        </a>
                      </figure>
                    </div>
                    <div className="card-content has-text-justified">
                      <div className="media">
                        <div className="media-left">
                          <figure className="image is-48x48 small-logo">
                            <a
                              href="https://www.greentube.com/"
                              referrerPolicy="no-referrer"
                              rel="noreferrer noopener external nofollow"
                              target="_blank"
                            >
                              <img
                                src="./img/Greentube_Icon_96x96.svg"
                                width={48}
                                height={48}
                                alt="Greentube IES GmbH"
                                loading="lazy"
                              />
                            </a>
                          </figure>
                        </div>
                        <div className="media-content">
                          <h3 className="title is-5">Cash Casino Website</h3>
                          <h4 className="subtitle is-6">Mobile-App Landingpage</h4>
                        </div>
                      </div>
                      <div className="content">
                        <p>
                          Due to the restrictive Google Play store policies regarding gambling apps
                          we had to create separate landing pages, where users can download an
                          APK-file instead, for all of our casino platforms. The most important
                          aspect of this site is explaining the download- and installation
                          instructions in a simple and concise manner.
                        </p>
                      </div>
                      <div className="my-card-footer">
                        <h4 className="subtitle is-6 has-text-centered">
                          <strong>Technologies Used</strong>
                        </h4>
                        <div className="technologies-used">
                          <ul>
                            <li>
                              <img
                                loading="lazy"
                                width={40}
                                height={40}
                                src="./img/logos/html5.svg"
                                alt="HTML"
                                title="HTML"
                              />
                              <span className="sr-only">HTML</span>
                            </li>
                            <li>
                              <img
                                loading="lazy"
                                width={40}
                                height={40}
                                src="./img/logos/css3.svg"
                                alt="CSS"
                                title="CSS"
                              />
                              <span className="sr-only">CSS</span>
                            </li>
                            <li>
                              <img
                                loading="lazy"
                                width={40}
                                height={40}
                                src="./img/logos/javascript.svg"
                                alt="JavaScript"
                                title="JavaScript"
                              />
                              <span className="sr-only">JavaScript</span>
                            </li>
                            <li>
                              <img
                                loading="lazy"
                                width={40}
                                height={40}
                                src="./img/logos/sass.svg"
                                alt="Sass"
                                title="Sass"
                              />
                              <span className="sr-only">Sass</span>
                            </li>
                            <li>
                              <img
                                loading="lazy"
                                width={40}
                                height={40}
                                src="./img/logos/bootstrap.svg"
                                alt="Bootstrap"
                                title="Bootstrap"
                              />
                              <span className="sr-only">Bootstrap</span>
                            </li>
                            <li>
                              <img
                                loading="lazy"
                                width={40}
                                height={40}
                                src="./img/logos/grunt.svg"
                                alt="Grunt"
                                title="Grunt"
                              />
                              <span className="sr-only">Grunt</span>
                            </li>
                          </ul>
                        </div>
                        <div className="field">
                          <p className="control">
                            <a
                              className="button is-primary is-rounded gtm-tracked-link"
                              href="https://lp.stargames.de/mobile-app/en/"
                              target="_blank"
                              rel="noopener noreferrer"
                              referrerPolicy="no-referrer"
                              id="project-work2-btn"
                            >
                              <span>Live Project</span>
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="column">
                  <div className="card">
                    <div className="card-image">
                      <figure className="image is-4by3">
                        <a
                          href="https://hamsterrat.com/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="gtm-tracked-link"
                          id="project-work3-img"
                        >
                          <picture>
                            <source srcSet="./img/project_work_hamsterrat.webp" type="image/webp" />
                            <img
                              loading="lazy"
                              width={1280}
                              height={960}
                              src="./img/project_work_hamsterrat.jpg"
                              alt="HamsterRat Brochure Website"
                            />
                          </picture>
                        </a>
                      </figure>
                    </div>
                    <div className="card-content has-text-justified">
                      <div className="media">
                        <div className="media-left">
                          <figure className="image is-48x48 small-logo">
                            <a
                              href="https://hamsterrat.com/"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <img
                                src="./img/HamsterRat_Icon_96x96.jpg"
                                width={48}
                                height={48}
                                alt="HamsterRat"
                                loading="lazy"
                              />
                            </a>
                          </figure>
                        </div>
                        <div className="media-content">
                          <h3 className="title is-5">HamsterRat</h3>
                          <h4 className="subtitle is-6">Business Website</h4>
                        </div>
                      </div>
                      <div className="content">
                        <p>
                          I created this brochure website for my father who is running a consulting
                          business. The main purpose of this site is to serve as a digital business
                          card and FPOC for any potential clients. Optimizing keywords &amp; other
                          aspects related to SEO and optimizing loading speed were the most
                          important considerations during the creation of this site.
                        </p>
                      </div>
                      <div className="my-card-footer">
                        <h4 className="subtitle is-6 has-text-centered">
                          <strong>Technologies Used</strong>
                        </h4>
                        <div className="technologies-used">
                          <ul>
                            <li>
                              <img
                                loading="lazy"
                                width={40}
                                height={40}
                                src="./img/logos/html5.svg"
                                alt="HTML"
                                title="HTML"
                              />
                              <span className="sr-only">HTML</span>
                            </li>
                            <li>
                              <img
                                loading="lazy"
                                width={40}
                                height={40}
                                src="./img/logos/css3.svg"
                                alt="CSS"
                                title="CSS"
                              />
                              <span className="sr-only">CSS</span>
                            </li>
                            <li>
                              <img
                                loading="lazy"
                                width={40}
                                height={40}
                                src="./img/logos/javascript.svg"
                                alt="JavaScript"
                                title="JavaScript"
                              />
                              <span className="sr-only">JavaScript</span>
                            </li>
                            <li>
                              <img
                                loading="lazy"
                                width={40}
                                height={40}
                                src="./img/logos/sass.svg"
                                alt="Sass"
                                title="Sass"
                              />
                              <span className="sr-only">Sass</span>
                            </li>
                          </ul>
                        </div>
                        <div className="field">
                          <p className="control">
                            <a
                              className="button is-primary is-rounded gtm-tracked-link"
                              id="project-work3-btn"
                              href="https://hamsterrat.com/"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <span>Live Project</span>
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="columns">
                <div className="column">
                  <p className="control has-text-centered" style={{ marginTop: '2rem' }}>
                    <a
                      className="button is-primary is-rounded is-large gtm-tracked-link"
                      href="#contact"
                      id="goto-contact-btn"
                    >
                      <span>Contact Me</span>
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </section>
          {/* Contact Form */}
          <section className="section" id="contact">
            <div className="container has-text-centered">
              <h2 className="title">Get In Touch</h2>
              <p className="subtitle">
                Whether you are interested in hiring me, to work on a project together or to discuss
                any other proposal, feel free to contact me anytime. I am very much looking forward
                to your message!
              </p>
              <div className="form-container">
                <form
                  action="/success"
                  className="control"
                  id="contact-form"
                  name="contact-form"
                  data-netlify="true"
                  method="POST"
                >
                  <div className="field is-horizontal">
                    <div className="field-body">
                      <div className="field">
                        <div className="control">
                          <input
                            className="input"
                            type="text"
                            name="firstName"
                            id="firstName"
                            placeholder=" "
                            required
                          />
                          <label className="label floating-label" htmlFor="firstName">
                            First Name
                          </label>
                        </div>
                      </div>
                      <div className="field">
                        <div className="control">
                          <input
                            className="input"
                            type="text"
                            name="lastName"
                            id="lastName"
                            placeholder=" "
                            required
                          />
                          <label className="label floating-label" htmlFor="lastName">
                            Last Name
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="field">
                    <div className="control">
                      <input
                        className="input"
                        type="email"
                        id="email"
                        name="email"
                        placeholder=" "
                        required
                      />
                      <label className="label floating-label" htmlFor="email">
                        Email
                      </label>
                    </div>
                  </div>
                  <div className="field">
                    <div className="control">
                      <input
                        className="input"
                        type="text"
                        name="subject"
                        id="subject"
                        placeholder=" "
                        required
                      />
                      <label className="label floating-label" htmlFor="subject">
                        Subject
                      </label>
                    </div>
                  </div>
                  {/* <div class="field is-hidden">
          <label class="label" for="telnr">Telnr</label>
          <div class="control">
            <input class="input" type="text" name="telnr" id="telnr">
          </div>
        </div> */}
                  <div className="field">
                    <div className="control">
                      <textarea
                        className="textarea"
                        name="message"
                        id="message"
                        placeholder=" "
                        required
                        defaultValue={''}
                      />
                      <label className="label floating-label" htmlFor="message">
                        Message
                      </label>
                    </div>
                  </div>
                  {/* <div data-netlify-recaptcha="true"></div> */}
                  <div className="field is-grouped is-hidden-touch">
                    <div className="control">
                      <input
                        type="submit"
                        className="button is-primary is-rounded is-medium"
                        defaultValue="Send Message"
                      />
                    </div>
                    <div className="control">
                      <input
                        type="reset"
                        className="button is-secondary is-rounded is-medium"
                        defaultValue="Reset Form"
                      />
                    </div>
                  </div>
                  <div className="field is-hidden-desktop">
                    <div className="control">
                      <input
                        type="submit"
                        className="button is-primary is-rounded is-fullwidth is-medium"
                        defaultValue="Send Message"
                      />
                    </div>
                    <div className="control">
                      <input
                        type="reset"
                        className="button is-secondary is-outlined is-rounded is-fullwidth is-medium"
                        defaultValue="Reset Form"
                      />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default Home;
