import {
    Button,
    Description,
    MessageBox,
    MetaHead,
    Title,
} from '@components/common';
import { Bottom } from '@components/layout';
import {
    LinkCopyButton,
    shareWithKakao,
    shareWithTwitter,
} from '@components/result';
import styled from '@emotion/styled';
import type { DuckDamWithImg } from '@shared/types/DuckDam';
import { theme } from '@styles/index';
import Image from 'next/image';
import { useRouter } from 'next/router';
import loadingGif from 'public/icons/duckdam-package.svg';
import React, { useEffect } from 'react';

type ResultProps = {
    data: DuckDamWithImg;
};

const Result = ({ data }: ResultProps) => {
    const { img_url } = data;
    const router = useRouter();
    const resultId = router.query.resultId as string;
    const resultURL = process.env.NEXT_PUBLIC_SITE_URL + 'secret/' + resultId;

    useEffect(() => {
        const { Kakao } = window;
        try {
            if (Kakao) {
                Kakao.init(process.env.NEXT_PUBLIC_KAKAO_API_KEY);
            }
        } catch (error) {
            console.error(error);
        }
    }, []);

    return (
        <>
            <MetaHead />
            <Wrapper>
                <Image src={loadingGif} alt="로딩 완료 이미지" />

                <MessageBox>
                    <Title>덕담이 만들어졌어요!</Title>
                    <Description>
                        * 남들에게 공유하기 전까지
                        <br />
                        덕담은 비밀로 유지됩니다! 🤫
                    </Description>
                </MessageBox>
                <LinkCopyButton>{resultURL}</LinkCopyButton>
            </Wrapper>
            <Bottom>
                <Button
                    onClick={() => {
                        const props = {
                            imageURL: img_url,
                            resultURL,
                        };
                        shareWithKakao(props);
                    }}
                    color={theme.light.text.button}
                    backgroundColor={theme.light.bg.button}
                >
                    카톡으로 비밀덕담 나누기
                </Button>
                <Button
                    onClick={() => {
                        shareWithTwitter(resultURL);
                    }}
                    color={theme.light.text.button}
                    backgroundColor={theme.light.bg.button}
                >
                    트위터로 비밀덕담 나누기
                </Button>
            </Bottom>
        </>
    );
};

export default Result;

export async function getServerSideProps(context: {
    params: { resultId: string };
}) {
    const { params } = context;

    const res = await fetch(
        `${process.env.NEXT_PUBLIC_SITE_URL}/api/duckdam/${params.resultId}`
    );
    const data = await res.json();

    return {
        props: { data, id: params.resultId }, // will be passed to the page component as props
    };
}

const Wrapper = styled.div`
    width: 100%;
    height: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;
