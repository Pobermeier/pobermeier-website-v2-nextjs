import Fade from 'react-reveal/Fade';
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
    <Fade right duration={500}>
      <div className="logo-carousel slide-right">
        <div className="logo-carousel__inner">
          {renderLogoCarousel()}
          {renderLogoCarousel()}
        </div>
      </div>
    </Fade>
  );
};

export default LogoCarousel;
