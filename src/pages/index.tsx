import Link from 'next/link';
import ScrollAnimation from 'react-animate-on-scroll';
import HeroSection from '@/components/Sections/HeroSection';
import LogoCarousel from '@/components/Carousel/LogoCarousel';
import ProjectCard from '@/components/Projects/ProjectCard';
import SEO from '@/components/SEO/SEO';
import config from 'config';
import ContactSection from '@/components/Sections/ContactSection';

const Home: React.FC = () => {
  const title = (): JSX.Element => (
    <>
      Creating{' '}
      <span
        style={{
          display: 'inline-block',
          padding: '0.2em 0.2em',
          backgroundColor: 'rgba(35, 154, 59, 0.8)',
          borderRadius: '5px',
        }}
      >
        fresh &amp; fast web apps and sites
      </span>{' '}
      with passion!
    </>
  );

  const desktopButtons = (): JSX.Element => (
    <>
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
          href={config.urls.github}
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
    </>
  );

  const mobileButtons = (): JSX.Element => (
    <>
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
          href={config.urls.github}
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
    </>
  );

  return (
    <div>
      <SEO />
      {/* Hero-Section */}
      <HeroSection
        title={title()}
        subtitle="Frontend Developer &amp; Online-Marketing Expert from Vienna, Austria"
        desktopButtons={desktopButtons()}
        mobileButtons={mobileButtons()}
      />
      {/* Main Content */}
      {/* About-Section */}
      <section className="section about" id="about">
        <div className="container has-text-centered">
          <h2 className="title">About Me</h2>
          <div className="columns level">
            <div className="column level-item has-text-centered profile-img">
              <ScrollAnimation animateIn="fadeInRight">
                <figure className="image">
                  <picture>
                    <source srcSet="./img/profile.webp" type="image/webp" />
                    <img
                      className="is-rounded"
                      loading="lazy"
                      width={200}
                      height={200}
                      src="./img/profile.jpg"
                      alt={config.meta.siteOwnerName}
                    />
                  </picture>
                </figure>
              </ScrollAnimation>
            </div>
            <div className="column is-three-quarters level-item">
              <p className="subtitle has-text-left">
                I&apos;m an experienced front-end developer with a solid background in everything
                related to online-marketing on top. It is my passion to build slick &amp; well
                optimized websites and web apps.
                <br />
                <br />
                I’m very much into gaming and learning to work with new technologies, always
                improving myself to stay on top of my field. Further, I like nature and enjoy doing
                some trekking from time to time. Finally, I&apos;m a good person to have a beer
                with.
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
              <Link href="/resume">
                <a
                  className="button is-secondary is-rounded is-medium gtm-tracked-link secondary-cta"
                  id="resume-about-desktop"
                >
                  <span>View Resume</span>
                </a>
              </Link>
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
            <LogoCarousel />
          </div>
        </div>
      </section>
      {/* Portfolio-Section */}
      <section className="section" id="portfolio">
        <div className="container has-text-centered">
          <h2 className="title">Featured Personal Projects</h2>
          <p className="subtitle">
            Below you can find a selection of personal projects I&apos;ve been working on recently.
            For these you can check out both the code and a live version of the project. If
            you&apos;re interested in my work you&apos;re welcome to check out the other public
            repositories{' '}
            <a
              href={config.urls.github}
              className="gtm-tracked-link"
              target="_blank"
              rel="noopener noreferrer"
              id="github-inline-link"
            >
              on my GitHub profile.
            </a>
            Additionally, you can find an excerpt of my professional work{' '}
            <a href="#work-excerpts" id="goto-work-excerpts-inline" className="gtm-tracked-link">
              in the next section
            </a>
            .
          </p>
          <ScrollAnimation animateIn="fadeInLeft">
            <div className="columns project-cards">
              {config.projects.personal.map((project, index) => {
                if (index >= 3) return null;

                return (
                  <div className="column" key={project.id}>
                    <ProjectCard project={project} />
                  </div>
                );
              })}
            </div>
          </ScrollAnimation>
          <br />
          <ScrollAnimation animateIn="fadeInRight">
            <div className="columns project-cards">
              {config.projects.personal.map((project, index) => {
                if (index < 3) return null;

                return (
                  <div className="column" key={project.id}>
                    <ProjectCard project={project} />
                  </div>
                );
              })}
            </div>
          </ScrollAnimation>
        </div>
      </section>
      {/* Work Excerpts */}
      <section className="section work-excerpts" id="work-excerpts">
        <div className="container has-text-centered">
          <h2 className="title">Professional Work Excerpts</h2>
          <p className="subtitle">
            In this section you can find some excerpts from my day-to-day professional work. Please
            note that the source for these projects is private due to confidentiality.
          </p>
          <ScrollAnimation animateIn="fadeInLeft">
            <div className="columns project-cards">
              {config.projects.work.map((project) => {
                return (
                  <div className="column" key={project.id}>
                    <ProjectCard project={project} />
                  </div>
                );
              })}
            </div>
          </ScrollAnimation>
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
      <ContactSection />
    </div>
  );
};

export default Home;
