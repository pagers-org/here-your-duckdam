import {
    Button,
    EmojiTitle,
    MessageBox,
    MetaHead,
    Title,
} from '@components/common';
import { Bottom } from '@components/layout';
import { Card } from '@components/result';
import styled from '@emotion/styled';
import type { DuckDamWithImg } from '@shared/types/DuckDam';
import { theme } from '@styles/index';
import axios from 'axios';
import Router, { useRouter } from 'next/router';

type ResultProps = {
    data: DuckDamWithImg;
};

const ResultDetail = ({ data }: ResultProps) => {
    const { img_url, first_word, second_word, third_word } = data;
    const router = useRouter();
    const resultId = router.query.resultId as string;
    const resultURL = process.env.NEXT_PUBLIC_SITE_URL + 'secret/' + resultId;

    return (
        <>
            <MetaHead
                tabTitle="사실은..."
                title="비밀 덕담이 도착했습니다!"
                description="여기를 눌러 덕담을 확인하세요 💌"
                url={resultURL}
                img_url={img_url}
            />
            <Wrapper>
                <EmojiTitle>😝</EmojiTitle>
                <Title>내 진짜 마음은...</Title>
                <MessageBox>
                    <Card>{first_word}</Card>
                    <Card>{second_word}</Card>
                    <Card>{third_word}</Card>
                </MessageBox>
                <Bottom>
                    <Button
                        onClick={() => {
                            Router.push('/');
                        }}
                        color={theme.light.text.button}
                        backgroundColor={theme.light.bg.button}
                    >
                        나도 덕담 나눌래!
                    </Button>
                </Bottom>
            </Wrapper>
        </>
    );
};

export default ResultDetail;

export async function getServerSideProps(context: {
    params: { resultId: string };
}) {
    const { params } = context;

    // const res = await fetch(
    //     `${process.env.NEXT_PUBLIC_SITE_URL}/api/duckdam/${params.resultId}`
    // );
    // const data = await res.json();

    let result;
    const url = `${process.env.NEXT_PUBLIC_SITE_URL}/api/duckdam/${params.resultId}`;
    axios.get(url).then(({ data }) => (result = data));

    return {
        props: { result, id: params.resultId }, // will be passed to the page component as props
    };
}

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 3rem;
`;
