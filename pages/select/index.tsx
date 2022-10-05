import styled from '@emotion/styled';
import Link from 'next/link';

const Select = () => {
    return (
        <>
            <Wrapper>
                <Selection>
                    <Link href="/attitude">토끼의 도움이 필요해🐰</Link>
                </Selection>
                <Selection>
                    <Link href="/custom">난 내가 친구를 직접 놀릴래😆</Link>
                </Selection>
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

const Selection = styled.div`
    width: 90%;
    height: 40%;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.2rem;
    font-weight: bold;
    word-break: break-all;
    background-color: ${({ theme }) => theme.color.orange};
    box-shadow: ${({ theme }) => theme.shadow.layout};
`;
