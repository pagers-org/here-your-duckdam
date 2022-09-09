import styled from '@emotion/styled';
import Image from 'next/image';
import copyIcon from 'public/images/copy-icon.svg';
import React from 'react';

type LinkCopyButtonProps = {
    children: React.ReactNode;
    ref?: any;
    onClick?: () => void;
};

const LinkCopyButton = (props: LinkCopyButtonProps) => {
    return (
        <Container>
            <Result ref={props.ref}>{props.children}</Result>
            <Btn onClick={props.onClick}>
                <StyledImage src={copyIcon} />
            </Btn>
        </Container>
    );
};

export default LinkCopyButton;

const Container = styled.div`
    background-color: ${({ theme }) => theme.color.white};
    box-sizing: border-box;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    position: relative;
    font-size: 18px;
    letter-spacing: 1px;
    padding: 12px 10px;
    height: 50px;
    width: 80%;
    border-radius: 5px;
`;

const Result = styled.span`
    word-wrap: break-word;
    max-width: calc(100% - 40px);
    overflow-y: scroll;
    height: 100%;
    ::-webkit-scrollbar {
        width: 1rem;
    }
`;

const Btn = styled.button`
    background-color: ${({ theme }) => theme.color.brown};
    border: none;
    color: #fff;
    font-size: 16px;
    padding: 8px 12px;
    cursor: pointer;
    width: 10%;
    height: 80%;
    position: absolute;
    right: 10px;
    border-radius: 5px;
`;

const StyledImage = styled(Image)`
    width: 80%;
    height: 80%;
    color: ${({ theme }) => theme.color.white};
`;
