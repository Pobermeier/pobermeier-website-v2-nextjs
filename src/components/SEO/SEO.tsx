import Head from 'next/head';
import config from 'config';
import { useRouter } from 'next/dist/client/router';

const SEO: React.FC<Props> = ({ title, description, keywords }) => {
  const router = useRouter();

  return (
    <Head>
      {/* <!-- General Meta-Tags & SEO--> */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="theme-color" content={config.meta.themeColor} />
      <link rel="canonical" href={`${config.meta.canonicalRootUrl}${router.asPath}`} />

      {/* <!-- Social Media Stuff / Sharing --> */}
      {/* <!-- Open Graph (Facebook) --> */}
      <meta property="og:url" content={`${config.meta.canonicalRootUrl}${router.asPath}`} />
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
      <meta name="twitter:url" content={`${config.meta.canonicalRootUrl}${router.asPath}`} />
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
