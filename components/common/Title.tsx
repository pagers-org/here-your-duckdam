import styled from '@emotion/styled';
import React from 'react';

const Title = (props: { text: string }) => {
    return <StyledTitle>{props.text}</StyledTitle>;
};

export default Title;

const StyledTitle = styled.div`
    padding: 2rem;
    word-break: keep-all;
`;
