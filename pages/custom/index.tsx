import { Button } from '@components/common';
import styled from '@emotion/styled';
import Link from 'next/link';

const Custom = () => {
    return (
        <>
            <Wrapper>
                <Button>
                    <Link href="/load">놀릴 준비 됐어😋</Link>
                </Button>
            </Wrapper>
        </>
    );
};

export default Custom;

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 3rem;
`;
