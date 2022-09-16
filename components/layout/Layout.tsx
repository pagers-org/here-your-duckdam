import styled from '@emotion/styled';
import { KakaoSDK } from 'global';
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
    justify-content: center;
    margin: auto;
    max-width: 480px;
    width: 100%;
    height: 100vh;
    box-shadow: ${({ theme }) => theme.shadow.layout};
    background: url('https://firebasestorage.googleapis.com/v0/b/here-your-duckdam.appspot.com/o/images%2FloadingBgWithoutCircle.png?alt=media&token=38d0bbc0-aba5-4146-9fb9-dc7c8c8368fb')
        no-repeat center center #fcf5e5;
    background-size: cover;
`;
