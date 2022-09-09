import { Button, Description, MessageBox, Title } from '@components/common';
import { Bottom } from '@components/layout';
import {
    LinkCopyButton,
    shareWithKakao,
    shareWithTwitter,
} from '@components/result';
import styled from '@emotion/styled';
import { DuckDomWithImg } from '@shared/types/DuckDam';
import { theme } from '@styles/index';
import Image from 'next/image';
import { useRouter } from 'next/router';
import loadingGif from 'public/icons/duckdam-package.svg';
import { useEffect, useRef, useState } from 'react';

const Result = () => {
    const router = useRouter();
    const resultId = router.query.resultId as string;
    const resultURL = process.env.NEXT_PUBLIC_SITE_URL + 'secret/' + resultId;
    const urlArea = useRef(null);
    const [duckdam, setDuckdam] = useState<DuckDomWithImg>();

    useEffect(() => {
        const dataFetch = async () => {
            const res = await fetch(`/api/duckdam/${resultId}`);
            const data = await res.json();
            setDuckdam(data);
        };
        dataFetch();
    }, [router.query, resultId]);

    return (
        <>
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
                <LinkCopyButton
                    ref={urlArea}
                    onClick={() => {
                        const t = document.createElement('textarea');
                        document.body.appendChild(t);
                        t.value = resultURL;
                        t.select();
                        document.execCommand('copy');

                        alert('링크가 복사되었습니다!');
                    }}
                >
                    {resultURL}
                </LinkCopyButton>
            </Wrapper>
            <Bottom>
                <Button
                    onClick={() => {
                        if (!duckdam) return;
                        const props = {
                            imageURL: duckdam.img_url,
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

const Wrapper = styled.div`
    width: 100%;
    height: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
    /* justify-content: center;
    align-items: center; */
`;

const ShareWrapper = styled.div`
    position: relative;
    width: 60%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
