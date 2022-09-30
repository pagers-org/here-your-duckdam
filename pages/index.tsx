import Link from 'next/link';

import { Button, Logo } from '@/components/common';
import { Bottom } from '@/components/layout';
import theme from '@/styles/theme';

const Main = () => {
    return (
        <>
            <Logo />
            <Bottom>
                <Link href="/attitude">
                    <Button
                        color={theme.light.text.button}
                        backgroundColor={theme.light.bg.button}
                    >
                        덕담 만들러 가자!
                    </Button>
                </Link>
            </Bottom>
        </>
    );
};

export default Main;
