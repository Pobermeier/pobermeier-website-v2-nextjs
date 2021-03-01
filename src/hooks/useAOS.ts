import { useEffect } from 'react';
import { useRouter } from 'next/dist/client/router';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
declare const AOS: any;

const useAOS = (): void => {
  const router = useRouter();

  useEffect(() => {
    AOS.init({
      disable: 'mobile',
    });

    addEventListener('load', () => {
      setTimeout(() => {
        AOS.refresh();
      }, 1000);
    });
  }, []);

  useEffect(() => {
    AOS.refreshHard();
  }, [router.asPath]);
};

export default useAOS;
