import styled from '@emotion/styled';
import { Button, Title, MessageBox } from '@components/common';
import { MessageItem } from '@components/[resultId]';
import Router, { useRouter } from 'next/router';

const Result = () => {
    const router = useRouter();
    return (
        <>
            <Wrapper>
                <Title>내 진짜 마음은...</Title>
                <MessageBox>
                    <MessageItem>1</MessageItem>
                    <MessageItem>2</MessageItem>
                    <MessageItem>3</MessageItem>
                </MessageBox>
                <Button
                    onClick={() => {
                        Router.push('/');
                    }}
                >
                    나도 덕담 나눌래!
                </Button>
            </Wrapper>
        </>
    );
};

export default Result;

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
