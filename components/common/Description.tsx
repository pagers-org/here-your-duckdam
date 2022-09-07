import styled from '@emotion/styled';
import React from 'react';

const Description = (props: { text: string }) => {
    return <StyledDescription>{props.text}</StyledDescription>;
};

export default Description;

const StyledDescription = styled.div`
    padding: 21px 34px;
    word-break: break-all;
    font-size: 14px;
    color: ${({ theme }) => theme.color.darkGray};
    width: 150px;
    line-height: 150%;
    letter-spacing: -0.29px;
    text-align: center;
`;
