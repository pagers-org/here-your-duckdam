import { Button, Logo } from '@components/common';
import Link from 'next/link';

const Main = () => {
    return (
        <>
            <Logo />
            <Link href="/attitude">
                <Button>덕담 만들러 가자!</Button>
            </Link>
        </>
    );
};

export default Main;
