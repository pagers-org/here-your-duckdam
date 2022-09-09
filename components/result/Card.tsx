import styled from '@emotion/styled';

type Item = {
    children: React.ReactNode;
};
const Card = ({ children }: Item) => {
    return <StyledCard>{children}</StyledCard>;
};

export default Card;

const StyledCard = styled.div`
    width: 100%;
    min-height: 100px;
    margin: 15px 0px;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.2rem;
    font-weight: bold;
    word-break: break-all;
    background-color: ${({ theme }) => theme.color.orange};
`;
