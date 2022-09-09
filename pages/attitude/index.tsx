import { AttitudeRange, MessageBox, MessageItem } from '@components/attitude';
import { Button, Title } from '@components/common';
import { Bottom } from '@components/layout';
import theme from '@styles/theme';
import useAttitudeHooks from 'hooks/useAttitudeHooks';
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
            <Title>다른 토끼들은 이런 메시지를 뽑았어요.</Title>
            <MessageBox>
                <MessageItem>{message1}</MessageItem>
                <MessageItem>{message2}</MessageItem>
                <MessageItem type="guest">{askMessage}</MessageItem>
            </MessageBox>
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
                    예절 수치 정했어!
                </Button>
            </Bottom>
        </>
    );
};

export default Attitude;
