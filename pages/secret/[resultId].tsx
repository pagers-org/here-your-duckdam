import { Button, MessageBox, Title } from '@components/common';
import MetaHead from '@components/common/MetaHead';
import { Card } from '@components/result';
import styled from '@emotion/styled';
import Router from 'next/router';

type ResultProps = {
    data: DuckdamType;
};
type DuckdamType = {
    img_url: string;
    first_word: string;
    second_word: string;
    third_word: string;
};

const ResultDetail = ({ data }: ResultProps) => {
    const { img_url, first_word, second_word, third_word } = data;

    return (
        <>
            <MetaHead
                tabTitle="사실은..."
                title="비밀 덕담이 도착했습니다!"
                description="여기를 눌러 덕담을 확인하세요 💌"
                img_url={img_url}
            />
            <Wrapper>
                <Title>내 진짜 마음은...</Title>
                <MessageBox>
                    <Card>{first_word}</Card>
                    <Card>{second_word}</Card>
                    <Card>{third_word}</Card>
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

export default ResultDetail;

export async function getServerSideProps(context: {
    params: { resultId: string };
}) {
    const { params } = context;

    const res = await fetch(
        `${process.env.NEXT_PUBLIC_SITE_URL}/api/duckdam/${params.resultId}`
    );
    const data = await res.json();

    return {
        props: { data }, // will be passed to the page component as props
    };
}

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
