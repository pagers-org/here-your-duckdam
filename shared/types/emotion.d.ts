import '@emotion/react';
import { color, shadow } from '@/styles/theme';

export interface CustomTheme {
    color: typeof color;
    shadow: typeof shadow;
}
declare module '@emotion/react' {
    export interface Theme extends CustomTheme {}
}
