import type { Keyframes } from '@emotion/react';

export type KeyframeKey =
    | 'slideInLeft'
    | 'slideInRight'
    | 'slideInUp'
    | 'slideInDown'
    | 'pulse'
    | 'fadeInRight'
    | 'fadeIn';

export type KeyframeType = Record<KeyframeKey, Keyframes>;
