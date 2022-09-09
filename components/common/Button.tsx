import styled from '@emotion/styled';
import React from 'react';
// import { color } from 'styles/theme';

type ButtonType = {
    children: React.ReactNode;
    onClick?: () => void;
    color?: string;
    backgroundColor?: string;
};

const Button = ({ children, ...otherProps }: ButtonType) => {
    return (
        <Wrapper>
            <StyledButton {...otherProps}>{children}</StyledButton>
        </Wrapper>
    );
};

export default Button;

const Wrapper = styled.div`
    width: 100%;
    padding: 9px 0;
    text-align: center;
`;

const StyledButton = styled.button<ButtonType>`
    width: 90%;
    color: ${(props) => props.color};
    background-color: ${(props) => props.backgroundColor};
    border-radius: 10px;
    font-weight: bold;
    font-size: 1em;
    height: 60px;
    margin: auto;
`;
