import React from 'react';
import styled from "@emotion/styled";

const MessageItem = (props: { children: React.ReactNode }) => {
    return (
        <Wrapper className="fadeInRight">
            {props.children}
        </Wrapper >
    )
}

export default MessageItem

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

`