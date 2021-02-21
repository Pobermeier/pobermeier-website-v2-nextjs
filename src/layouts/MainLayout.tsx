import Navbar from '@/components/Navigation/Navbar';
import SEO from '@/components/SEO/SEO';
import { Dispatch, SetStateAction } from 'react';

const MainLayout: React.FC<Props> = ({ children, isNavbarOpen, setIsNavMenuOpen }) => {
  return (
    <>
      <SEO />
      <header>
        <Navbar isNavbarOpen={isNavbarOpen} setIsNavMenuOpen={setIsNavMenuOpen} />
      </header>
      {children}
    </>
  );
};

interface Props {
  isNavbarOpen: boolean;
  setIsNavMenuOpen: Dispatch<SetStateAction<boolean>>;
}

export default MainLayout;
