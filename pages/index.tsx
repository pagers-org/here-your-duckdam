import {
    AttitudeRange,
    AttitudeTitle,
    MessageBox,
    MessageItem,
    SplashRabbit,
} from '@components/main';
import { Button } from '@components/common';
import Router from 'next/router';

const Main = () => {
    return (
        <>
            <SplashRabbit />
            <AttitudeTitle text={'다른 토끼들은 이런 메시지를 뽑았어요.'} />
            <MessageBox>
                <MessageItem>친구야, 이거 보면 치킨 사줘야해</MessageItem>
                <MessageItem>친구야, 이거 보면 치킨 사줘야해</MessageItem>
            </MessageBox>
            <AttitudeRange initialValue={50} />
            <Button
                onClick={() => {
                    Router.push('/secret');
                }}
            >
                선택 완료했어!
            </Button>
        </>
    );
};

export default Main;
