import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Keyframe, KeyframeKey } from '@styles/keyframe';
import Image from 'next/image';
import React from 'react';

import moon_rabbit from '../../public/images/moon_rabbit.png';
const Logo = () => {
    return (
        <TransitionBox keyframe="pulse">
            <Image
                src={moon_rabbit}
                alt="moon rabbit"
                width="300px"
                height="300px"
            />
        </TransitionBox>
    );
};

const TransitionBox = styled.div<{
    keyframe: KeyframeKey;
}>`
    border-radius: 12px;
    animation: ${({ keyframe }) =>
        css`
            ${Keyframe[keyframe]}
            .5s cubic-bezier(.17,.67,.83,.67);
            animation-iteration-count: infinite;
        `};
`;

export default Logo;
