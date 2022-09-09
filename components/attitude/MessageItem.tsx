import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Keyframe, KeyframeKey } from '@styles/keyframe';
import React from 'react';

type DirectionTypes = 'default' | 'guest';
type ItemProps = {
    children: React.ReactNode;
    type?: DirectionTypes;
};

const MessageItem = ({ type = 'default', children }: ItemProps) => {
    return (
        <TransitionBox keyframe={'fadeIn'}>
            <Wrapper type={type}>{children}</Wrapper>
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
            animation-duration: 1s;
        `};
`;

const Wrapper = styled.div<{ type: string; direction?: DirectionTypes }>`
    position: relative;
    background-color: ${({ theme, type }) =>
        type === 'guest' ? theme.color.white : theme.color.orange};
    border-radius: 2rem;
    padding: 1.3rem;
    margin: 0.3rem;
    color: ${({ theme }) => theme.color.black};
    :after {
        content: '';
        position: absolute;
        right: 0.9rem;
        top: 70%;
        width: 0;
        height: 0;
        border: 20px solid transparent;
        border-left-color: ${({ theme, type }) =>
            type === 'guest' ? theme.color.white : theme.color.orange};
        border-right: 0;
        border-bottom: 0;
        margin-top: -10px;
        margin-right: -20px;
    }
`;
