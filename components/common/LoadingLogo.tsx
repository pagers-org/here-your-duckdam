import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Keyframe, KeyframeKey } from '@styles/keyframe';
import Image from 'next/image';
import React from 'react';

import loading from '../../public/icons/loading.gif';
import moon from '../../public/icons/moon.png';

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
