import { Button } from '@components/common';
import {
    AttitudeRange,
    AttitudeTitle,
    MessageBox,
    MessageItem,
} from '@components/main';
import Link from 'next/link';

const Main = () => {
    return (
        <>
            <AttitudeTitle text={'다른 토끼들은 이런 메시지를 뽑았어요.'} />
            <MessageBox>
                <MessageItem>친구야, 이거 보면 치킨 사줘야해</MessageItem>
                <MessageItem>친구야, 이거 보면 치킨 사줘야해</MessageItem>
            </MessageBox>
            <AttitudeRange initialValue={50} />
            <Link href="secret">
                <Button>예절 수치 정했어!</Button>
            </Link>
        </>
    );
};

export default Main;
