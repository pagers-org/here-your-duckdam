import { Button, Description, Title } from '@components/common';
import { Bottom } from '@components/layout';
import theme from '@styles/theme';
import Link from 'next/link';

const Custom404 = () => {
    return (
        <>
            <Title>토끼가 찾을 수 없는 곳에 계신 것 같아요.</Title>
            <Description text="하지만 저희가 도움을 드릴게요! 아래 버튼을 클릭해주세요"></Description>

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

export default Custom404;
