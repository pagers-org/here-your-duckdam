import styled from '@emotion/styled';
import Image from 'next/image';
import loading from 'public/icons/loading.gif';
import moon from 'public/icons/moon.png';

const LoadingLogo = () => {
    return (
        <>
            <StyledImage>
                <Image src={loading} alt="selecting card rabbit" />
                <Image src={moon} alt="orange background" />
            </StyledImage>
        </>
    );
};

const StyledImage = styled.div`
    width: 80%;
    position: relative;
    Image:nth-of-type(1) {
        position: absolute;
    }
    Image:nth-of-type(2) {
        top: -10rem;
        position: absolute;
    }
`;

export default LoadingLogo;
