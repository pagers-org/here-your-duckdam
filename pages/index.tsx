import {
    AttitudeRange,
    AttitudeTitle,
    MessageBox,
    MessageItem,
    SplashRabbit,
} from '@components/attitude';

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
        </>
    );
};

export default Main;
