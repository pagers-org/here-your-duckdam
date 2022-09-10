import { css, keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import Image from 'next/image';
import { loading, loadingBgWithoutCircle, moon } from 'public/icons/index';

const LoadingLogo = () => {
    return (
        <>
            <StyledImages>
                <span>
                    <Image src={loading} alt="selecting card rabbit" />
                </span>
                <span>
                    <Image src={moon} alt="orange circle background" />
                </span>
            </StyledImages>
        </>
    );
};

const StyledImages = styled.div`
    width: 80%;

    span:nth-of-type(1) {
        position: relative;
        z-index: 20;
    }
    span:nth-of-type(2) {
        position: absolute;
        width: 100%;
        left: 6.5rem;
        top: 28rem;
        z-index: 19;
    }
`;

export default LoadingLogo;
