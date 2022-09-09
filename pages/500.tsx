import { Button, Description, EmojiTitle, Title } from '@components/common';
import { Bottom } from '@components/layout';
import theme from '@styles/theme';
import Link from 'next/link';

const Custom500 = () => {
    return (
        <>
            <EmojiTitle>😢</EmojiTitle>
            <Title>엇! 토끼와의 연결이 끊긴 것 같아요!</Title>
            <Description>잠시 후에 다시 이용해주세요🙇‍♀️</Description>

            <Bottom>
                <Link href="/">
                    <Button
                        color={theme.light.text.button}
                        backgroundColor={theme.light.bg.button}
                    >
                        덕담 만들러 가기
                    </Button>
                </Link>
            </Bottom>
        </>
    );
};

export default Custom500;
