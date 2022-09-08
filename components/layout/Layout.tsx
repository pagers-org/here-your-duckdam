import styled from '@emotion/styled';
import { KakaoSDK } from 'global';
import Head from 'next/head';
import React, { useEffect } from 'react';

type LayoutProps = {
    children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
    useEffect(() => {
        const { Kakao } = window;
        try {
            if (Kakao) {
                Kakao.init(process.env.NEXT_PUBLIC_KAKAO_API_KEY);
            }
        } catch (error) {
            console.error(error);
        }
    }, []);

    return (
        <>
            <Head>
                <title>여기 덕담이요</title>
                <meta
                    name="description"
                    content="Generated by create next app"
                />
                <link rel="icon" href="/favicon.ico" />
                <meta property="og:type" content="website" />
                <meta
                    property="og:url"
                    content="https://example.com/page.html"
                />
                <meta property="og:title" content="여기 덕담이요!" />
                <meta
                    property="og:description"
                    content="가족, 친구들에게 따뜻한 한마디를 선물해보세요!"
                />
                <meta name="twitter:card" content="summary" />
                <meta name="twitter:title" content="여기 덕담이요!" />
                <meta
                    name="twitter:description"
                    content="가족, 친구들에게 따뜻한 한마디를 선물해보세요!"
                />
            </Head>
            <Wrapper>{children}</Wrapper>
        </>
    );
};

export default Layout;

const Wrapper = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    margin-bottom: 5rem;
    margin: auto;
    max-width: 480px;
    width: 100%;
    height: 100vh;
    background-color: #fcf5e6;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
`;
