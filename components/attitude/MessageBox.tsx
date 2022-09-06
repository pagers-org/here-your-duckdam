import React from 'react';
import styled from '@emotion/styled';


const MessageBox = (props: { children: React.ReactNode }) => {
    return (
        <Wrapper>{props.children}</Wrapper>
    )
}

export default MessageBox

const Wrapper = styled.section`
    height: 50%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
    box-sizing: border-box;
    padding: 2rem;
`
