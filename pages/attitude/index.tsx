import { Button } from '@components/common';
import {
    AttitudeRange,
    AttitudeTitle,
    MessageBox,
    MessageItem,
} from '@components/main';
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
            <AttitudeTitle text={'다른 토끼들은 이런 메시지를 뽑았어요.'} />
            <MessageBox>
                <MessageItem>{message1}</MessageItem>
                <MessageItem>{message2}</MessageItem>
                <MessageItem type="guest">{askMessage}</MessageItem>
            </MessageBox>
            <AttitudeRange
                initialValue={50}
                handleRange={(range) => setPoliteRange(range)}
            />
            <Button onClick={addNewDuckDamHandler}>예절 수치 정했어!</Button>
        </>
    );
};

export default Attitude;
