import styled from '@emotion/styled';
import React from 'react';

type Title = {
    children: React.ReactNode;
};
const Title = ({ children }: Title) => {
    return <StyledTitle>{children}</StyledTitle>;
};

export default Title;

const StyledTitle = styled.div`
    word-break: keep-all;
    font-size: 22px;
    font-weight: bold;
    letter-spacing: -0.29px;
`;
