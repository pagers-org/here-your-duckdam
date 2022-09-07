import type { Keyframes } from '@emotion/react';

export type KeyframeKey =
    | 'slideInLeft'
    | 'slideInRight'
    | 'slideInUp'
    | 'slideInDown'
    | 'pulse'
    | 'fadeInRight';

export type KeyframeType = Record<KeyframeKey, Keyframes>;
