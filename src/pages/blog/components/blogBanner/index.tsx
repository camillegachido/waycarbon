import HeaderImage from '../../../../assets/images/header-image.jpg';
import { Banner } from './index.styled';

export const BlogBanner = () => {
  return (
    <Banner
      src={HeaderImage}
      alt="Palmeiras altas ao amanhecer com céu azul e algumas nuvens"
    />
  );
};
