import { Button, Logo } from '@components/common';
import MetaHead from '@components/common/MetaHead';
import { Bottom } from '@components/layout';
import theme from '@styles/theme';
import Image from 'next/image';
import Link from 'next/link';
import cloud1 from 'public/icons/cloud1.svg';

const Main = () => {
    return (
        <>
            <MetaHead />
            <Logo />
            <Image src={cloud1} />
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
