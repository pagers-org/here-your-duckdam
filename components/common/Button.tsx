import styled from '@emotion/styled';
import React from 'react';
import theme, { color } from 'styles/theme';

type IButton = {
    children: React.ReactNode;
    onClick?: () => void;
    backgroundColor?: typeof color[keyof typeof color];
    padding?: string;
};

const setDefaultButton = ({
    children,
    backgroundColor = color.buttonYellow,
    padding = '16px',
}: IButton) => {
    return (
        <Wrapper>
            <StyledButton padding={padding} backgroundColor={backgroundColor}>
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

const StyledButton = styled.button<IButton>`
    width: 90%;
    background-color: ${(props) => props.backgroundColor};
    border: none;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    font-size: 1em;
    padding: ${(props) => props.padding};
    position: relative;
    right: 0;
    left: 0;
    margin: 0 auto;
`;
