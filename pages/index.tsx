import Logo from '@components/common/Logo';
import styled from '@emotion/styled';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';

const Main = () => {
    const router = useRouter();

    useEffect(() => {
        setTimeout(() => router.push('/attitude'), 3000);
    }, [router]);

    return (
        <Wrapper>
            <Logo />
        </Wrapper>
    );
};

export default Main;

const Wrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 100%;
`;
