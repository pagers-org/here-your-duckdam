import '@emotion/react';

import { color, shadow } from '../../styles/theme';
declare module '@emotion/react' {
    export interface Theme {
        color: Record<keyof typeof color, string>;
        shadow: Record<keyof typeof shadow, string>;
    }
    export interface ThemeMode {
        bg: {
            primary: string;
            button: string;
            message: string;
        };
        text: {
            primary: string;
            link: string;
            button: string;
        };
    }
}
