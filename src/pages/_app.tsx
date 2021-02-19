import { ComponentClass } from 'react';
import { AppProps } from 'next/app';
import 'styles/scss/styles.scss';

const MyApp: React.FC<Props> = ({ Component, pageProps }) => {
  return <Component {...pageProps} />;
};

interface Props {
  Component: ComponentClass;
  pageProps: AppProps;
}

export default MyApp;
