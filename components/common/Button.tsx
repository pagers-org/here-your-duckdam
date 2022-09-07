import styled from '@emotion/styled';
import React from 'react';
import { color } from 'styles/theme';

type Button = {
    children: React.ReactNode;
    onClick?: () => void;
    backgroundColor?: typeof color[keyof typeof color];
    marginTop?: string;
};

const setDefaultButton = ({
    children,
    onClick,
    marginTop,
    backgroundColor = color.buttonYellow,
}: Button) => {
    return (
        <Wrapper>
            <StyledButton
                onClick={onClick}
                marginTop={marginTop}
                backgroundColor={backgroundColor}
            >
                {children}
            </StyledButton>
        </Wrapper>
    );
};

export default setDefaultButton;

const Wrapper = styled.div`
    width: 100%;
    padding: 9px 0;
`;

const StyledButton = styled.button<Button>`
    width: 90%;
    background-color: ${(props) => props.backgroundColor};
    border: none;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    font-size: 1em;
    padding: 16px;
    position: relative;
    right: 0;
    left: 0;
    margin: 0 auto;
    margin-top: ${(props) => props.marginTop};
`;
