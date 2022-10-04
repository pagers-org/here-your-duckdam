import styled from '@emotion/styled';
import Link from 'next/link';

const Select = () => {
    return (
        <>
            <Wrapper>
                <Selection>
                    <Link href="/attitude">토끼의 도움이 필요해</Link>
                </Selection>
                <Selection>
                    <Link href="/custom">난 내가 친구를 직접 놀릴래</Link>
                </Selection>
            </Wrapper>
        </>
    );
};

export default Select;

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 3rem;
`;

const Selection = styled.div`
    width: 90%;
    height: 20%;
`;
