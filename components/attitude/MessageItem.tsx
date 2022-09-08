import { css } from '@emotion/react';
import styled from '@emotion/styled';
import { Keyframe, KeyframeKey } from '@styles/keyframe';
import React from 'react';

type ItemProps = {
    children: React.ReactNode;
    type?: 'default' | 'guest';
};

const MessageItem = ({ type = 'default', children }: ItemProps) => {
    return <Wrapper type={type}> {children}</Wrapper>;
};

export default MessageItem;

const Wrapper = styled.div<{ type: string }>`
    position: relative;
    background-color: ${({ theme, type }) =>
        type === 'guest' ? theme.color.white : theme.color.orange};
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
        border-left-color: ${({ theme, type }) =>
        type === 'guest' ? theme.color.white : theme.color.orange};
        border-right: 0;
        border-bottom: 0;
        margin-top: -10px;
        margin-right: -20px;
    }
`;
