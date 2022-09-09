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
                <span>
                    <div className="bg" css={bgCss}>
                        <Image
                            src={loadingBgWithoutCircle}
                            alt="cloud and stars background"
                        />
                    </div>
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
    span:nth-of-type(3) {
        position: absolute;
        z-index: 0;
        width: 100%;
        height: 100%;
        left: 1rem;
        top: 3rem;
        width: 95%;
        height: 100%;
    }
`;

const bgAnimation = keyframes`
    0% {
        transform: translateY(0); 
    }
    50%{
        transform: translateY(-5px); 
    }
    100%{
        transform: translateY(0); 
    }
`;

const bgCss = css`
    animation: ${bgAnimation} 1.9s ease infinite;
`;

export default LoadingLogo;
