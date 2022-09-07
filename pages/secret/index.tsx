import {
    Button,
    Description,
    shareOtherLinks,
    MessageBox,
    Title,
} from '@components/secret';
import styled from '@emotion/styled';
import { theme } from '@styles';
import Image from 'next/image';

import loadingGif from 'public/images/loading-done.gif';

const Secret = () => {
    return (
        <>
            <Wrapper>
                <Image
                    src={loadingGif}
                    width="188"
                    height="188"
                    alt="이미지를 불러올 수 없습니다"
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
                <Button backgroundColor={theme.color.orange}>
                    카톡 공유하기
                </Button>
                <Button
                    onClick={() => {
                        shareOtherLinks();
                    }}
                    backgroundColor={theme.color.orange}
                >
                    다른 앱으로 공유하기
                </Button>
            </ShareWrapper>
        </>
    );
};

export default Secret;

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
