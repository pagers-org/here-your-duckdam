import Link from 'next/link';

import { Button, Description, EmojiTitle, Title } from '@/components/common';
import { Bottom } from '@/components/layout';
import theme from '@/styles/theme';

const Custom500 = () => {
    return (
        <>
            <EmojiTitle>😢</EmojiTitle>
            <Title>엇! 토끼와의 연결이 끊긴 것 같아요!</Title>
            <Description>잠시 후에 다시 이용해주세요🙇‍♀️</Description>

            <Bottom>
                <Link href="/">
                    <Button
                        color={theme.color.text.white}
                        backgroundColor={theme.color.background.button}
                    >
                        덕담 만들러 가기
                    </Button>
                </Link>
            </Bottom>
        </>
    );
};

export default Custom500;
