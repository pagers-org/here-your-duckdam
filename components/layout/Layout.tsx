import React from 'react'
import { css, SerializedStyles } from '@emotion/react';


type LayoutProps = {
    children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
    return (
        <div css={css`
            display: flex;
            flex-direction: column;
            margin: auto;
            max-width:480px ;
            width: 100%;
            height: 100vh;
            background-color:#999;
        `}>
            {children}
        </div>
    )
}

export default Layout

