import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
    return (
        <Html>
            <Head>
                <script
                    defer
                    src="https://developers.kakao.com/sdk/js/kakao.min.js"
                ></script>
            </Head>
            <body>
                <Main />
                <div id="portal" />
                <NextScript />
            </body>
        </Html>
    );
}
