import styled from '@emotion/styled';
import Head from 'next/head';
import React from 'react';

type LayoutProps = {
    children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
    return (
        <>
            <Head>
                <title>여기 덕담이요</title>
                <meta
                    name="description"
                    content="Generated by create next app"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Wrapper>{children}</Wrapper>
        </>
    );
};

export default Layout;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: auto;
    max-width: 480px;
    width: 100%;
    height: 100vh;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
`;
