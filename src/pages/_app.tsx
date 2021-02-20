import { ComponentClass } from 'react';
import { AppProps } from 'next/app';
import 'styles/scss/styles.scss';
import MainLayout from 'layouts/MainLayout';

const MyApp: React.FC<Props> = ({ Component, pageProps }) => {
  return (
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  );
};

interface Props {
  Component: ComponentClass;
  pageProps: AppProps;
}

export default MyApp;
