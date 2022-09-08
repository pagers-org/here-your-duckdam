import styled from '@emotion/styled';
import React from 'react';

const MessageBox = (props: { children: React.ReactNode }) => {
    return <Wrapper>{props.children}</Wrapper>;
};

export default MessageBox;

const Wrapper = styled.section`
    width: 100%;
    height: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
    box-sizing: border-box;
    padding: 2rem;
`;
