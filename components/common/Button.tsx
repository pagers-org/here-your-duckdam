import styled from '@emotion/styled';
import React from 'react';

const Button = (props: { text: string }) => {
    return <StyledButton>{props.text}</StyledButton>;
};

export default Button;

const StyledButton = styled.button`
    width: 250px;
    height: 50px;
    background-color: #F3DB00;
    border: none;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    font-size: 1em;
    padding: 1.5rem;
`;