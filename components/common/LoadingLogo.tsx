import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Keyframe, KeyframeKey } from '@styles/keyframe';
import Image from 'next/image';
import moon from '../../public/icons/moon.png';
import loading from '../../public/icons/loading.gif';
import React from 'react';

const LoadingLogo = ({ keyframe }: { keyframe?: KeyframeKey }) => {
    return (
        <>
            <StyledImage>
                <Image src={loading} />
                {/* <Image src={moon} /> */}
            </StyledImage>
        </>
    );
};

const StyledImage = styled.div`
    width: 80%;
    height: 80vh;
    position: relative;
`;

export default LoadingLogo;
