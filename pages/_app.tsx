import Layout from '@components/layout/Layout';
import { Global, ThemeProvider } from '@emotion/react';
import { pageview } from '@shared/utils/gtag';
import { global, theme } from '@styles/index';
import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { GoogleAnalytics } from '@components/scripts';

function MyApp({ Component, pageProps }: AppProps) {
    const router = useRouter();
    useEffect(() => {
        const handleRouteChange = (url: URL) => {
            pageview(url);
        };
        router.events.on('routeChangeComplete', handleRouteChange);

        return () => {
            router.events.off('routeChangeComplete', handleRouteChange);
        };
    }, [router.events]);

    return (
        <>
            <GoogleAnalytics />

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
