import Link from 'next/link';
import SEO from '@/components/SEO/SEO';

const NotFound: React.FC = () => (
  <>
    <SEO title="404 | Page not found" />
    <section className="hero is-fullheight-with-navbar is-large" id="hero">
      <div className="hero-body lazy-background enhanced">
        <div className="container">
          <h1 className="title has-text-white is-size-1 is-size-2-tablet is-size-3-mobile">
            Oh noes! A big ol&apos; 404!
          </h1>
          <h2 className="subtitle has-text-white is-size-3 is-size-4-tablet is-size-5-mobile">
            Page not Found. Nothing to see here.
          </h2>
          <div className="field is-grouped is-hidden-touch">
            <p className="control">
              <Link href="/">
                <a className="button is-primary is-rounded is-large">
                  <span>Back to Homepage</span>
                </a>
              </Link>
            </p>
          </div>
          <div className="field is-hidden-desktop">
            <p className="control">
              <Link href="/">
                <a className="button is-primary is-fullwidth is-rounded is-medium">
                  <span>Back to Homepage</span>
                </a>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  </>
);

export default NotFound;
