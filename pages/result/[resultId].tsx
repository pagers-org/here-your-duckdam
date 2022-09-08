import { Button, Description, MessageBox, Title } from '@components/common';
import {
    shareWithKakao,
    shareWithOthers,
    shareWithTwitter,
} from '@components/result';
import styled from '@emotion/styled';
import { DuckDomWithImg } from '@shared/types/DuckDam';
import { theme } from '@styles/index';
import Image from 'next/image';
import { useRouter } from 'next/router';
import loadingGif from 'public/images/loading-done.gif';
import { useEffect, useState } from 'react';

const LodingImageSize = 188;
const Result = () => {
    const router = useRouter();
    const [duckdam, setDuckdam] = useState<DuckDomWithImg>();

    useEffect(() => {
        const dataFetch = async () => {
            const { result } = router.query;
            const res = await fetch(`/api/duckdam/${result}`);
            const data = await res.json();
            setDuckdam(data);
        };

        dataFetch();
    }, []);

    return (
        <>
            <Wrapper>
                <Image
                    src={loadingGif}
                    width={LodingImageSize}
                    height={LodingImageSize}
                    alt="로딩 완료 이미지"
                />

                <MessageBox>
                    <Title>덕담이 만들어졌어요!</Title>
                    <Description
                        text={
                            '*남들에게 공유하기 전까지 덕담은 비밀로 유지됩니다!'
                        }
                    ></Description>
                </MessageBox>
                <Button>링크 복사하기</Button>
            </Wrapper>
            <ShareWrapper>
                <Button
                    onClick={() => {
                        if (duckdam) {
                            const props = {
                                imageURL: duckdam.img_url,
                            };
                            shareWithKakao(props);
                        }
                    }}
                    backgroundColor={theme.color.orange}
                >
                    카톡 공유하기
                </Button>
                <Button
                    onClick={() => {
                        //TODO 추후 웹사이트 링크로 변경 예정
                        shareWithTwitter('https://www.github.com/');
                    }}
                    backgroundColor={theme.color.orange}
                >
                    다른 앱으로 공유하기
                </Button>
            </ShareWrapper>
        </>
    );
};

export default Result;

const Wrapper = styled.div`
    width: 100%;
    height: 80%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const ShareWrapper = styled.div`
    position: relative;
    width: 60%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
