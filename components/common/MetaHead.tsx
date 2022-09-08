import Head from 'next/head';

type MetaHeadProps = {
    tabTitle: string;
    title: string;
    description: string;
    img_url: string;
};
type OptionalMetaHeadProps = Partial<MetaHeadProps>;

const MetaHead = ({
    tabTitle = '여기 덕담이요!',
    title = '여기 덕담이요!',
    description = '가족, 친구들에게 따뜻한 한마디를 선물해보세요!',
    img_url,
}: OptionalMetaHeadProps) => {
    return (
        <Head>
            <title>{tabTitle}</title>
            <meta name="description" content={description} />
            <link rel="icon" href="/favicon.ico" />
            <meta property="og:type" content="website" />
            <meta property="og:image" content={img_url} />
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="630" />
            {/* TODO url 변경 */}
            <meta property="og:url" content="https://example.com/page.html" />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta name="twitter:card" content="summary" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={img_url} />
        </Head>
    );
};

export default MetaHead;
