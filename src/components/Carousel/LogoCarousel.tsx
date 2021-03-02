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
    <div className="logo-carousel" data-aos="fade-right">
      <div className="logo-carousel__inner">
        {renderLogoCarousel()}
        {renderLogoCarousel()}
      </div>
    </div>
  );
};

export default LogoCarousel;
