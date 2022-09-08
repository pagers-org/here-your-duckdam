import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Keyframe, KeyframeKey } from '@styles/keyframe';
import React from 'react';

const MessageItem = (props: { children: React.ReactNode }) => {
    return (
        <TransitionBox keyframe="fadeIn">
            <Wrapper>{props.children}</Wrapper>
        </TransitionBox>
    );
};

export default MessageItem;

const TransitionBox = styled.div<{
    keyframe: KeyframeKey;
}>`
    border-radius: 12px;
    animation: ${({ keyframe }) =>
        css`
            ${Keyframe[keyframe]};
            animation-delay: 1.5s;
            animation-duration: 1s;
        `};
`;

const Wrapper = styled.div`
    position: relative;
    background: ${({ theme }) => theme.color.yellow};
    border-radius: 0.4em;
    padding: 1.3rem;
    margin: 0.3rem;
    color: ${({ theme }) => theme.color.black};
    :after {
        content: '';
        position: absolute;
        right: 0;
        top: 50%;
        width: 0;
        height: 0;
        border: 20px solid transparent;
        border-left-color: ${({ theme }) => theme.color.yellow};
        border-right: 0;
        border-bottom: 0;
        margin-top: -10px;
        margin-right: -20px;
    }
`;
