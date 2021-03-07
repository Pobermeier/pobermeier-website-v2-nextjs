import Link from 'next/link';
import HeroSection from '@/components/Sections/HeroSection';
import SEO from '@/components/SEO/SEO';

const NotFound: React.FC = () => {
  const mobileButtons = (): JSX.Element => (
    <p className="control">
      <Link href="/">
        <a className="button is-primary is-fullwidth is-rounded is-medium">
          <span>Back to Homepage</span>
        </a>
      </Link>
    </p>
  );

  const desktopButtons = (): JSX.Element => (
    <p className="control">
      <Link href="/">
        <a className="button is-primary is-rounded is-large">
          <span>Back to Homepage</span>
        </a>
      </Link>
    </p>
  );

  return (
    <>
      <SEO title="404 | Page not found" />
      <HeroSection
        title="Oh noes! A big ol' 404!"
        subtitle="Page not Found. Nothing to see here."
        mobileButtons={mobileButtons()}
        desktopButtons={desktopButtons()}
      />
    </>
  );
};

export default NotFound;
