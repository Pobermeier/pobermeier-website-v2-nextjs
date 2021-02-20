import SEO from '@/components/SEO/SEO';

const MainLayout: React.FC = ({ children }) => {
  return (
    <>
      <SEO />
      {children}
    </>
  );
};

export default MainLayout;
