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
    if (!img_url) {
        img_url = process.env.NEXT_PUBLIC_DEFAULT_OG_IMAGE;
    }
    return (
        <Head>
            <title>{tabTitle}</title>
            <meta name="description" content={description} />
            <link rel="icon" href="/favicon.ico" />
            {/* default og */}
            <meta property="og:type" content="website" />
            <meta property="og:image" content={img_url} />
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="600" />
            <meta
                property="og:url"
                content={process.env.NEXT_PUBLIC_SITE_URL}
            />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            {/* twitter og */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={img_url} />
        </Head>
    );
};

export default MetaHead;
