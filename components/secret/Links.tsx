import styled from '@emotion/styled';
import React from 'react';

const Links = (props: { src?: string }) => {
    return <>
        <StyledLinks>
            <StyledLink>{props.src}</StyledLink>
        </StyledLinks>
    </>
    
};

export default Links;

const StyledLinks = styled.div`
    padding: 2rem;
    width: 80%;
    height: 20px;
    display: flex;
    justify-content: space-around;
    background-color: lightgray;
`;
const StyledLink = styled.img`
    padding: 2rem;
    width: 100px;
    height: 100px;
    border-radius: 10px;
`;
