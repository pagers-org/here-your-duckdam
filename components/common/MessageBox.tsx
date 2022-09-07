import styled from '@emotion/styled';
import React from 'react';

type Box = {
    children: React.ReactNode;
    padding?: string;
};
const MessageBox = ({ children, padding }: Box) => {
    return <Wrapper padding={padding}>{children}</Wrapper>;
};

export default MessageBox;

const Wrapper = styled.section<Box>`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    padding: ${(props) => props.padding || '2rem'} 2rem;
`;
