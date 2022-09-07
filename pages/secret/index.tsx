import styled from '@emotion/styled';
import {
    Button,
    Description,
    Links,
    MessageBox,
    Title,
} from '@components/secret';
import Image from 'next/image';

import loadingGif from '../../public/images/loading-done.gif';

const Secret = () => {
    return (
        <>
            <Wrapper>
                <Image src={loadingGif} width="188" height="188" />

                <MessageBox>
                    <Title text={'덕담이 만들어졌어요!'}></Title>
                    <Description
                        text={
                            '*남들에게 공유하기 전까지 덕담은 비밀로 유지됩니다!'
                        }
                    ></Description>
                </MessageBox>
                <Button>링크 복사하기</Button>
            </Wrapper>
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
