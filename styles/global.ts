import { css } from '@emotion/react';

import reset from './reset';
import theme from './theme';

const global = css`
    ${reset}

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
