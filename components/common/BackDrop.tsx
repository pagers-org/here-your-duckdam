import styled from '@emotion/styled';
import React from 'react';

const BackDrop = (props: { children: React.ReactNode }) => {
    return <Wrapper>{props.children}</Wrapper>;
};

export default BackDrop;

const Wrapper = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 20;
    background: rgba(255, 255, 255, 1);
    display: flex;
    justify-content: center;
    align-items: center;
`;
