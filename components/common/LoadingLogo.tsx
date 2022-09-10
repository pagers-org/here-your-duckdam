import styled from '@emotion/styled';
import Image from 'next/image';
import { loading, moon } from 'public/icons/index';

const LoadingLogo = () => {
    return (
        <StyledImages>
            <span>
                <Image src={loading} alt="selecting card rabbit" />
            </span>
            <span>
                <Image src={moon} alt="orange circle background" />
            </span>
        </StyledImages>
    );
};

const StyledImages = styled.div`
    margin: auto;

    span:nth-of-type(1) {
        position: relative;
        z-index: 20;
    }
    span:nth-of-type(2) {
        width: 100%;
        position: relative;
        top: -12rem;
        left: 2rem;
        width: 100%;
        z-index: 19;
    }
`;

export default LoadingLogo;
