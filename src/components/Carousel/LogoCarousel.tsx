import ScrollAnimation from 'react-animate-on-scroll';
import LogoCarouselItem from './LogoCarouselItem';
import config from 'config';

const LogoCarousel: React.FC = () => {
  const renderLogoCarousel = (): JSX.Element => (
    <ul>
      {config.technologies.map((tech, index) => (
        <LogoCarouselItem
          height={60}
          width={60}
          imgSrc={tech.imgSrc}
          technologyName={tech.name}
          key={index}
        />
      ))}
    </ul>
  );

  return (
    <ScrollAnimation animateIn="fadeInRight">
      <div className="logo-carousel" style={{ opacity: '1 !important' }}>
        <div className="logo-carousel__inner">
          {renderLogoCarousel()}
          {renderLogoCarousel()}
        </div>
      </div>
    </ScrollAnimation>
  );
};

export default LogoCarousel;
