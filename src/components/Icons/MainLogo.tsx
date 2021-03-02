import config from 'config';
import React from 'react';

const MainLogoImg: React.FC<Props> = ({ width, height }) => {
  return (
    <img
      src="img/logo.svg"
      className="main-logo"
      width={width}
      height={height}
      alt={config.meta.siteOwnerName}
      title="Back to top"
    />
  );
};

MainLogoImg.defaultProps = {
  width: 50,
  height: 50,
};

interface Props {
  width?: number;
  height?: number;
}

export default MainLogoImg;
