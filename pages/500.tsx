import { Button, Description, Title } from '@components/common';
import Link from 'next/link';

const Custom500 = () => {
    return (
        <>
            <Title>서버에 잠시 문제가 생겼어요</Title>
            <Description text="잠시 후에 다시 이용해주세요."></Description>
            <Link href="/">
                <Button>덕담 만들러 가기</Button>
            </Link>
        </>
    );
};

export default Custom500;
