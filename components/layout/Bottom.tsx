import styled from '@emotion/styled';

const Bottom = ({ children }: { children: React.ReactNode }) => {
    return <Wrapper>{children}</Wrapper>;
};

export default Bottom;

export const Wrapper = styled.div`
    width: 100%;
    position: absolute;
    bottom: calc(env(safe-area-inset-bottom) + 1rem);
`;
