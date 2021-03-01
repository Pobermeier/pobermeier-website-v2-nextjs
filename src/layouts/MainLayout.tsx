import { Dispatch, SetStateAction } from 'react';
import Footer from '@/components/Footer/Footer';
import Navbar from '@/components/Navigation/Navbar';

const MainLayout: React.FC<Props> = ({ children, isNavbarOpen, setIsNavMenuOpen }) => {
  return (
    <>
      <header>
        <Navbar isNavbarOpen={isNavbarOpen} setIsNavMenuOpen={setIsNavMenuOpen} />
      </header>
      <main>{children}</main>

      <Footer />
    </>
  );
};

interface Props {
  isNavbarOpen: boolean;
  setIsNavMenuOpen: Dispatch<SetStateAction<boolean>>;
}

export default MainLayout;
