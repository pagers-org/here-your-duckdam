import '@emotion/react';

declare module '@emotion/react' {
    export interface Theme {
        color: {
            buttonYellow: string;
            yellow: string;
            white: string;
            black: string;
            dark: string;
            darkGray: string;
            orange: string;
            brown: string;
        };
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
