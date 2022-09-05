import { Global, ThemeProvider } from '@emotion/react';
import { theme, global } from '@styles';
import type { AppProps } from 'next/app'
import Layout from '@components/layout/Layout';

function MyApp({ Component, pageProps }: AppProps) {
  return <>
    <ThemeProvider theme={theme} >
      <Global styles={global} />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider >
  </>
}

export default MyApp
