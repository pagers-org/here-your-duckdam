import styled from '@emotion/styled';
import React from 'react';

const MessageBox = (props: { children: React.ReactNode }) => {
    return <Wrapper>{props.children}</Wrapper>;
};

export default MessageBox;

const Wrapper = styled.section`
    height: 50%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    padding: 2rem;
`;
