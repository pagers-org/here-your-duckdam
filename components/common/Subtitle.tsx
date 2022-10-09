import styled from '@emotion/styled';
import React from 'react';

const Subtitle = (props: { children: React.ReactNode }) => {
    return <StyledSubtitle>{props.children}</StyledSubtitle>;
};

export default Subtitle;

export const StyledSubtitle = styled.div`
    position: absolute;
    top: 10%;
    word-break: keep-all;
    font-size: 18px;
    font-weight: bold;
    letter-spacing: -0.29px;
`;
