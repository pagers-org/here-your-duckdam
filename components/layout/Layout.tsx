import MetaHead from '@components/common/MetaHead';
import styled from '@emotion/styled';
import { KakaoSDK } from 'global';
import Image from 'next/image';
import { loadingBgWithoutCircle } from 'public/icons/index';
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
            <Wrapper>
                <div>{children}</div>
                <span>
                    <Image
                        src={loadingBgWithoutCircle}
                        alt="cloud and stars background"
                    />
                </span>
            </Wrapper>
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
    background-color: #fcf5e6;
    box-shadow: ${({ theme }) => theme.shadow.layout};
    > div {
        z-index: 10;
    }
    > span {
        position: absolute;
        z-index: 3;
    }
`;

const StyledSpan = styled.span``;
