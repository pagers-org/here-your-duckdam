import styled from '@emotion/styled';
import Image from 'next/image';
import loading from 'public/icons/loading.gif';
import moon from 'public/icons/moon.png';

const LoadingLogo = () => {
    return (
        <>
            <StyledImages>
                <span>
                    <Image src={loading} alt="selecting card rabbit" />
                </span>
                <span>
                    <Image src={moon} alt="orange background" />
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
        z-index: 10;
        position: relative;
        top: -12rem;
        left: 2.4rem;
    }
`;

export default LoadingLogo;
