import styled from '@emotion/styled';
import Link from 'next/link';

import { Description, Title } from '@/components/common';

const Select = () => {
    return (
        <>
            <Wrapper>
                <Title>원하는 말장난 유형을 골라봐...</Title>
                <Link href="/attitude">
                    <Selection>
                        <Title>토끼의 도움이 필요해...</Title>
                        <Description>
                            (토끼가 랜덤으로 말장난을 만들어줄게요!)
                        </Description>
                    </Selection>
                </Link>
                <Link href="/custom">
                    <Selection>
                        <Title>난 내가 친구를 놀려볼래!</Title>
                        <Description>
                            ((토끼가 당신을 전적으로 믿을게요! 직접
                            생성해보세요!))
                        </Description>
                    </Selection>
                </Link>
            </Wrapper>
        </>
    );
};

export default Select;

const Wrapper = styled.div`
    width: 100%;
    height: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
`;

const Selection = styled.button`
    width: 90%;
    height: 40%;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 1.2rem;
    font-weight: bold;
    word-break: break-all;
    background-color: ${({ theme }) => theme.color.background.white};
    box-shadow: ${({ theme }) => theme.shadow.dp_16};
`;
