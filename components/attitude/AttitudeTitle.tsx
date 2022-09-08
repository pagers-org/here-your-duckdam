import styled from '@emotion/styled';
import React from 'react';

const AttitudeTitle = (props: { text: string }) => {
    return <StyledTitle>{props.text}</StyledTitle>;
};

export default AttitudeTitle;

const StyledTitle = styled.h2`
    padding: 2rem;
    word-break: keep-all;
`;
