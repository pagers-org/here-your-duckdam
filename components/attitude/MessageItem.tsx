import styled from '@emotion/styled';
import React from 'react';

type DirectionTypes = 'default' | 'guest';
type ItemProps = {
    children: React.ReactNode;
    type?: DirectionTypes;
};

const MessageItem = ({ type = 'default', children }: ItemProps) => {
    return <Wrapper type={type}>{children}</Wrapper>;
};

export default MessageItem;

const Wrapper = styled.div<{ type: string; direction?: DirectionTypes }>`
    position: relative;
    background-color: ${({ theme, type }) =>
        type === 'guest'
            ? theme.color.background.white
            : theme.color.background.message};
    border-radius: 2rem;
    padding: 1rem;
    margin: 0.3rem;
    color: ${({ theme }) => theme.color.text.black};

    :after {
        content: '';
        position: absolute;
        right: 0.9rem;
        top: 70%;
        width: 0;
        height: 0;
        border: 20px solid transparent;
        border-left-color: ${({ theme, type }) =>
            type === 'guest'
                ? theme.color.background.white
                : theme.color.background.message};
        border-right: 0;
        border-bottom: 0;
        margin-top: -10px;
        margin-right: -20px;
    }
`;
