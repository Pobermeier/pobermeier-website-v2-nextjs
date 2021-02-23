import { Dispatch, SetStateAction } from 'react';
import Footer from '@/components/Footer/Footer';
import Navbar from '@/components/Navigation/Navbar';
import SEO from '@/components/SEO/SEO';

const MainLayout: React.FC<Props> = ({ children, isNavbarOpen, setIsNavMenuOpen }) => {
  return (
    <>
      <SEO />
      <header>
        <Navbar isNavbarOpen={isNavbarOpen} setIsNavMenuOpen={setIsNavMenuOpen} />
      </header>
      {children}

      <Footer />
    </>
  );
};

interface Props {
  isNavbarOpen: boolean;
  setIsNavMenuOpen: Dispatch<SetStateAction<boolean>>;
}

export default MainLayout;
