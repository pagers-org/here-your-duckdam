import { Head, Html, Main, NextScript } from 'next/document';

import { KakaoDeveloper } from '@/components/scripts';

export default function Document() {
    return (
        <Html>
            <Head>
                <KakaoDeveloper />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
