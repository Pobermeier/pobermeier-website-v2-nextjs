import Head from 'next/head';
import config from 'config';

const SEO: React.FC<Props> = ({ title, description, keywords }) => {
  return (
    <Head>
      {/* <!-- General Meta-Tags & SEO--> */}
      <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="msvalidate.01" content="D5238646980530643F5FC0FFBF63FB97" />
      <title>{title}</title>
      <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="theme-color" content={config.meta.themeColor} />
      <meta name="copyright" content="2020 Patrick Obermeier. All Rights reserved." />
      <meta name="author" content="Patrick Obermeier" />
      <meta name="publisher" content="Patrick Obermeier" />
      <meta name="creator" content="Patrick Obermeier" />
      <link rel="canonical" href="https://www.patrickobermeier.dev/" />
      <link rel="manifest" href="site.webmanifest"></link>

      {/* <!-- DNS Prefetch / Preconnect to GA & Google Fonts --> */}
      <link rel="preconnect" href="https://www.google-analytics.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="dns-prefetch" href="https://www.google-analytics.com" />
      <link rel="dns-prefetch" href="https://fonts.googleapis.com" />

      {/* <!-- Icons --> */}
      <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
      <link rel="icon" href="/favicon.ico" type="image/x-icon" />
      <link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png" />
      <link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png" />
      <link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png" />
      <link rel="apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.png" />
      <link rel="apple-touch-icon" sizes="114x114" href="/apple-icon-114x114.png" />
      <link rel="apple-touch-icon" sizes="120x120" href="/apple-icon-120x120.png" />
      <link rel="apple-touch-icon" sizes="144x144" href="/apple-icon-144x144.png" />
      <link rel="apple-touch-icon" sizes="152x152" href="/apple-icon-152x152.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="192x192" href="/android-icon-192x192.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png" />
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />

      {/* <!-- Social Media Stuff / Sharing --> */}
      {/* <!-- Open Graph (Facebook) --> */}
      <meta property="og:url" content="https://www.patrickobermeier.dev" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta
        property="og:image"
        content="https://images.ctfassets.net/2hiw8js7vnar/2lp32wEzpzwoRKSEgpj5k4/ab48007f6d160cfc6b26e087206d1840/large_image.png"
      />
      <meta property="og:description" content={description} />
      <meta property="og:site_name" content="Patrick Obermeier Portfolio" />
      <meta property="article:author" content="Patrick Obermeier" />

      {/* <!-- Twitter Cards --> */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content="https://www.patrickobermeier.dev" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:site" content="@Pobermeier87" />
      <meta name="twitter:creator" content="@Pobermeier87" />
      <meta name="twitter:description" content={description} />
      <meta
        name="twitter:image"
        content="https://images.ctfassets.net/2hiw8js7vnar/2lp32wEzpzwoRKSEgpj5k4/ab48007f6d160cfc6b26e087206d1840/large_image.png"
      ></meta>
    </Head>
  );
};

SEO.defaultProps = {
  title: config.meta.defaultTitle,
  description: config.meta.defaultDescription,
  keywords: config.meta.defaultKeywords,
};

interface Props {
  title?: string;
  description?: string;
  keywords?: string;
}

export default SEO;
