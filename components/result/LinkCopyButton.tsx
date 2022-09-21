import styled from '@emotion/styled';
import Image from 'next/image';
import copyIcon from 'public/images/copy-icon.svg';
import React, { useRef } from 'react';

type LinkCopyButtonProps = {
    children: React.ReactNode;
};

const LinkCopyButton = (props: LinkCopyButtonProps) => {
    const linkRef = useRef<HTMLSpanElement>(null);

    const handleCopyToClipboard = () => {
        const link = linkRef.current?.innerText as string;
        navigator.clipboard.writeText(link);
        alert('링크가 복사되었습니다!');
    };

    return (
        <Container>
            <Result ref={linkRef}>{props.children}</Result>
            <CopyButton onClick={handleCopyToClipboard}>
                <Image src={copyIcon} />
            </CopyButton>
        </Container>
    );
};

export default LinkCopyButton;

const Container = styled.div`
    background-color: ${({ theme }) => theme.color.white};
    box-shadow: ${({ theme }) => theme.shadow.layout};
    display: flex;
    justify-content: space-between;
    align-items: center;
    letter-spacing: 1px;
    height: 50px;
    width: 85%;
`;

const Result = styled.span`
    color: ${({ theme }) => theme.color.brown};
    padding: 0px 12px;
    line-height: 50px;
    overflow-y: auto;
    font-weight: bold;
    
    ::-webkit-scrollbar{
        display:none;
    }
`;

const CopyButton = styled.button`
    background-color: ${({ theme }) => theme.color.brown};
    font-size: 16px;
    width: 45px;
    height: 100%;
    padding-top: 5px;
`;