import styled from '@emotion/styled';

type Item = {
    children: React.ReactNode;
};
const MessageItem = ({ children }: Item) => {
    return <StyledMessageItem>{children}</StyledMessageItem>;
};

export default MessageItem;

const StyledMessageItem = styled.div`
    width: 100%;
    min-height: 140px;
    margin: 20px 0px;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.2em;
    font-weight: bold;
    word-break: break-all;
    background-color: ${({ theme }) => theme.color.orange};
`;
