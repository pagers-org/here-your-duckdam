import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Keyframe, KeyframeKey } from '@styles/keyframe';
import Image from 'next/image';
import logo_light from 'public/icons/main-logo_light.svg';
import React from 'react';

const Logo = ({ keyframe }: { keyframe?: KeyframeKey }) => {
    return (
        <TransitionBox keyframe={keyframe}>
            <StyledImage src={logo_light} />
        </TransitionBox>
    );
};

const TransitionBox = styled.div<{
    keyframe?: KeyframeKey;
}>`
    animation: ${({ keyframe }) =>
        css`
            ${keyframe && Keyframe[keyframe]}
            .8s cubic-bezier(.17,.67,.83,.67);
            animation-iteration-count: infinite;
        `};
`;

const StyledImage = styled(Image)`
    width: 100%;
    height: 100%;
`;
export default Logo;
