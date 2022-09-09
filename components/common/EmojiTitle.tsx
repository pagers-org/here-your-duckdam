import styled from '@emotion/styled';

const EmojiTitle = (props: { children: React.ReactNode }) => {
    return <Title>{props.children}</Title>;
};

export default EmojiTitle;

const Title = styled.h1`
    font-size: 60px;
    margin-bottom: 10px;
`;
