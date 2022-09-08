import { Button, MessageBox, Title } from '@components/common';
import { Card } from '@components/result';
import styled from '@emotion/styled';
import Head from 'next/head';
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
            <Head>
                <title>사실은...</title>
                <meta
                    name="description"
                    content="토끼가 만들어준 덕담을 확인해보세요! 장난꾸러기 토끼와 재밌고 즐거운 한가위 보내시길 바랍니다🐰"
                />
                <meta name="keyword" content="즐거운, 토끼" />
                <meta property="og:image" content={img_url} />
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="630" />
                <meta property="og:title" content="비밀 덕담이 도착했습니다!" />
                <meta
                    property="og:description"
                    content="여기를 눌러 덕담을 확인하세요 💌"
                />
                <meta name="twitter:card" content="summary" />
                <meta
                    name="twitter:title"
                    content="비밀 덕담이 도착했습니다!"
                />
                <meta
                    name="twitter:description"
                    content="여기를 눌러 덕담을 확인하세요 💌"
                />
                <meta name="twitter:image" content={img_url} />
            </Head>
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
    console.log(data);

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
