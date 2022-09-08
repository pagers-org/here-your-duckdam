import { Button } from '@components/common';
import {
    AttitudeRange,
    AttitudeTitle,
    MessageBox,
    MessageItem,
} from '@components/main';
import useAttitudeHooks from 'hooks/useAttitudeHooks';
import Link from 'next/link';

const Attitude = () => {
    const { message1, message2, setPoliteRange } = useAttitudeHooks();

    return (
        <>
            <AttitudeTitle text={'다른 토끼들은 이런 메시지를 뽑았어요.'} />
            <MessageBox>
                <MessageItem>{message1}</MessageItem>
                <MessageItem>{message2}</MessageItem>
                <MessageItem>...?</MessageItem>
            </MessageBox>
            <AttitudeRange
                initialValue={50}
                handleRange={(range) => setPoliteRange(range)}
            />
            <Link href="secret">
                <Button>예절 수치 정했어!</Button>
            </Link>
        </>
    );
};

export default Attitude;
