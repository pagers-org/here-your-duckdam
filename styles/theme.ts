export const color = {
    buttonYellow: '#FFDC61',
    yellow: '#FBE54D',
    white: '#fff',
    black: '#000',
    dark: '#222',
    darkGray: '#3A3A3A',
    orange: '#FFCC8E',
    brown: '#6B584B',
} as const;

export const shadow = {
    layout: `rgba(149, 157, 165, 0.2) 0px 8px 24px`,
    range: `0 0 5px rgba(0, 0, 0, 0.4)`,
    ball: `0 0 5px rgba(0, 0, 0, 0.4)`,
} as const;

type ThemeTypes = 'primary' | 'button' | 'message' | 'link';
export interface ThemeMode {
    bg: Partial<Record<ThemeTypes, string>>;
    text: Partial<Record<ThemeTypes, string>>;
}

export const light: ThemeMode = {
    bg: {
        primary: '#fdf5e6',
        button: '#6b584B',
        message: '#FFC075',
    },
    text: {
        primary: '#493F37',
        link: '#493F37',
        button: '#f8f8f8',
    },
} as const;

export const dark: ThemeMode = {
    bg: {
        primary: '#1c184e',
        button: '#ffdc61',
        message: '#ffc075',
    },
    text: {
        primary: '#f8f8f8',
        link: '#1c184e',
        button: '#1c184e',
    },
} as const;

export const theme = {
    color,
    light,
    dark,
    shadow,
};

export default theme;
