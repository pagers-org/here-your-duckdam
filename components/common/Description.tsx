import styled from '@emotion/styled';
import React from 'react';

const Description = (props: { text: string }) => {
    return <StyledDescription>{props.text}</StyledDescription>;
};

export default Description;

const StyledDescription = styled.div`
    padding: 2rem;
    word-break: keep-all;
    font-size: 0.8em;
    color: gray;
`;
