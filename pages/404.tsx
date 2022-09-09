import { Button, Description, Title } from '@components/common';
import Link from 'next/link';

const Custom404 = () => {
    return (
        <>
            <Title>404 Page</Title>
            <Description text="잘못된 접근이에요."></Description>
            <Link href="/">
                <Button>덕담 만들러 가기</Button>
            </Link>
        </>
    );
};

export default Custom404;
