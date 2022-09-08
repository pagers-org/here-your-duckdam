import Layout from '@components/layout/Layout';
import { Global, ThemeProvider } from '@emotion/react';
import { global, theme } from '@styles/index';
import type { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <ThemeProvider theme={theme}>
                <Global styles={global} />
                <Layout>
                    <Component {...pageProps} />
                </Layout>
            </ThemeProvider>
        </>
    );
}

export default MyApp;
