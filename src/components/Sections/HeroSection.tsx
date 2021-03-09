import React from 'react';
import ScrollAnimation from 'react-animate-on-scroll';

interface Props {
  desktopButtons?: JSX.Element;
  mobileButtons?: JSX.Element;
  subtitle: string | JSX.Element;
  title: string | JSX.Element;
}

const HeroSection: React.FC<Props> = ({ desktopButtons, mobileButtons, subtitle, title }) => {
  return (
    <section className="hero is-fullheight-with-navbar is-large " id="hero">
      <div className="hero-body lazy-background enhanced">
        <div className="container">
          <ScrollAnimation animateIn="fadeInLeft" scrollableParentSelector=".navbar">
            <h1 className="title has-text-white is-size-1 is-size-2-tablet is-size-3-mobile ">
              {title}
            </h1>
          </ScrollAnimation>

          <ScrollAnimation animateIn="fadeInRight" scrollableParentSelector=".navbar">
            <h2 className="subtitle has-text-white is-size-3 is-size-4-tablet is-size-5-mobile ">
              {subtitle}
            </h2>
          </ScrollAnimation>

          <ScrollAnimation animateIn="fadeInLeft" scrollableParentSelector=".navbar">
            <div className="field is-grouped is-hidden-touch ">{desktopButtons}</div>
            <div className="field is-hidden-desktop ">{mobileButtons}</div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
