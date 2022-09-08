import { Button, Logo } from '@components/common';
import { Bottom } from '@components/layout';
import Link from 'next/link';

const Main = () => {
    return (
        <>
            <Logo />
            <Bottom>
                <Link href="/attitude">
                    <Button>덕담 만들러 가자!</Button>
                </Link>
            </Bottom>
        </>
    );
};

export default Main;
