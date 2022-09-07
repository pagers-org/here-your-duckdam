import '@emotion/react';

declare module '@emotion/react' {
    export interface Theme {
        color: {
            buttonYellow: Interpolation<
                {
                    theme?: Theme | undefined;
                    as?: ElementType<any> | undefined;
                } & ClassAttributes<HTMLButtonElement> &
                    ButtonHTMLAttributes<HTMLButtonElement> &
                    IButton & { theme: Theme }
            >;
            buttonYellow: string;
            yellow: string;
            white: string;
            black: string;
            dark: string;
            darkGray: string;
            orange: string;
        };
    }
}
