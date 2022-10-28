import '../assets/main.css';

import type { AppProps } from 'next/app';

import { AppLayout, Layout } from '@packages/ui';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Layout>
        <AppLayout>
          <Component {...pageProps} />
        </AppLayout>
      </Layout>
    </>
  );
}
