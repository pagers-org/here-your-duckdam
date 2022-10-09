import { css } from '@emotion/react';

import reset from './reset';

const global = css`
    ${reset}

    html {
        font-size: 16px;
    }
`;

export default global;
