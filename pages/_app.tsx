import Layout from '@components/layout/Layout';
import { useEffect } from 'react'
import Script from 'next/script'
import { useRouter } from 'next/router'
import { Global, ThemeProvider } from '@emotion/react';
import { global, theme } from '@styles/index';
import type { AppProps } from 'next/app';
import {GA_TRACKING_ID, pageview} from '@shared/utils/gtag';

function MyApp({ Component, pageProps }: AppProps) {
    const router = useRouter();
    useEffect(() => {
        const handleRouteChange = (url: string) => {
            pageview(url);
        }
        router.events.on('routeChangeComplete', handleRouteChange);

        return () => {
            router.events.off('routeChangeComplete', handleRouteChange);
        }
    }, [router.events])

    return (
        <>
            {/* Global Site Tag (gtag.js) - Google Analytics */}
            <Script
                strategy="afterInteractive"
                src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
            />
            <Script
                id="gtag-init"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                __html: `
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${GA_TRACKING_ID}', {
                    page_path: window.location.pathname,
                    });
                `,
                }}
            />
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
