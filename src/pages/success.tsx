import Link from 'next/link';
import HeroSection from '@/components/Sections/HeroSection';
import SEO from '@/components/SEO/SEO';

const Success: React.FC = () => {
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
      <SEO title="Thank you for your message!" />
      <HeroSection
        title="Thank you for your message!"
        subtitle="I will try to get back to you as soon as possible."
        desktopButtons={desktopButtons()}
        mobileButtons={mobileButtons()}
      />
    </>
  );
};

export default Success;
