import { AttitudeRange, MessageBox, MessageItem } from '@components/attitude';
import { Button, Description, Title } from '@components/common';
import MetaHead from '@components/common/MetaHead';
import { Bottom } from '@components/layout';
import styled from '@emotion/styled';
import useAttitudeHooks from '@shared/hooks/useAttitudeHooks';
import theme from '@styles/theme';
import { useRouter } from 'next/router';

const Attitude = () => {
    const { message1, message2, askMessage, politeLevel, setPoliteRange } =
        useAttitudeHooks();
    const router = useRouter();

    const addNewDuckDamHandler = () => {
        router.push(`load/?politeLevel=${politeLevel}`);
    };

    return (
        <>
            <MetaHead />
            <Wrapper>
                <SubTitle>다른 토끼들은 이런 덕담을 뽑았어요.</SubTitle>
                <MessageBox>
                    <MessageItem>{message1}</MessageItem>
                    <MessageItem>{message2}</MessageItem>
                    <MessageItem type="guest">{askMessage}</MessageItem>
                </MessageBox>
                <Title>유교 수치를 정해주세요</Title>
                <Description>
                    * 유교 수치에 따라 덕담 강도가 달라집니다
                </Description>
                <AttitudeRange
                    initialValue={50}
                    handleRange={(range) => setPoliteRange(range)}
                />
                <Bottom>
                    <Button
                        onClick={addNewDuckDamHandler}
                        color={theme.light.text.button}
                        backgroundColor={theme.light.bg.button}
                    >
                        유교 수치 정했어! 😋
                    </Button>
                </Bottom>
            </Wrapper>
        </>
    );
};

export default Attitude;

const SubTitle = styled.h2`
    font-size: 20px;
`;
const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 3rem;
`;
