import styled from '@emotion/styled';
import Image from 'next/image';
import copyIcon from 'public/images/copy-icon.svg';
import React, { useRef } from 'react';

type LinkCopyButtonProps = {
    children: React.ReactNode;
};

const LinkCopyButton = (props: LinkCopyButtonProps) => {
    const linkRef = useRef<HTMLSpanElement>(null);
    const copyToClipboard = () => {
        const link = linkRef.current?.innerText as string;
        navigator.clipboard.writeText(link);
        alert('링크가 복사되었습니다!');
    };

    return (
        <Container>
            <Result ref={linkRef}>{props.children}</Result>
            <CopyButton onClick={copyToClipboard}>
                <StyledImage src={copyIcon} />
            </CopyButton>
        </Container>
    );
};

export default LinkCopyButton;

const Container = styled.div`
    background-color: ${({ theme }) => theme.color.white};
    display: flex;
    justify-content: space-between;
    /* justify-content: flex-start; */
    align-items: center;
    position: relative;
    font-size: 18px;
    letter-spacing: 1px;
    height: 50px;
    width: 80%;
    border-radius: 5px;
`;

const Result = styled.span`
    word-wrap: break-word;
    padding: 0px 7px;
    max-width: calc(100% - 40px);
    display: inline-block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-size: 14px;
    ::-webkit-scrollbar {
        width: 1rem;
    }
`;

const CopyButton = styled.button`
    background-color: ${({ theme }) => theme.color.brown};
    font-size: 16px;
    max-width: 12%;
    width: 9%;
    height: 100%;
`;

const StyledImage = styled(Image)`
    width: 80%;
    height: 80%;
    color: ${({ theme }) => theme.color.white};
`;
