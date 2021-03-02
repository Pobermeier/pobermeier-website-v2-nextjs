import TechnologyLogo from '../Icons/TechnologyLogo';

interface Props {
  technologyName: string;
  imgSrc: string;
  width: number;
  height: number;
}

const LogoCarouselItem: React.FC<Props> = (props) => {
  return (
    <li className="logo-carousel__item">
      <TechnologyLogo {...props} />
    </li>
  );
};

export default LogoCarouselItem;
