interface Props {
  technologyName: string;
  imgSrc: string;
  width: number;
  height: number;
}

const TechnologyLogo: React.FC<Props> = ({ width, height, imgSrc, technologyName }) => {
  return (
    <>
      <img
        loading="lazy"
        width={width}
        height={height}
        src={imgSrc}
        alt={technologyName}
        title={technologyName}
      />
      <span className="is-sr-only">{technologyName}</span>
    </>
  );
};

export default TechnologyLogo;
