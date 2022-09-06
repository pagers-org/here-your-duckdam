import { css } from '@emotion/react';
import theme from './theme';
import reset from './reset';
import animation from './animation';

const global = css`
    ${reset}
    ${animation}


  html {
        font-size: 16px;
    }

    /* TODO: dark mode 처리 */
    body {
        /* color: ${theme.color.white}; */
        /* background-color: ${theme.color.dark}; */
    }
`;

export default global;
