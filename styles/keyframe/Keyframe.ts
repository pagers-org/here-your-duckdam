import { keyframes } from '@emotion/react';

import type { KeyframeType } from './Keyframe.types';

export const Keyframe: KeyframeType = {
    slideInLeft: keyframes`
      from {
        opacity: 0;
        transform: translateX(-100%);
      }
      to {
        opacity: 1;
        transform: translateX(0);
      }
    `,
    slideInRight: keyframes`
      from {
        opacity: 0;
        transform: translateX(100%);
      }
      to {
        opacity: 1;
        transform: translateX(0);
      }
    `,
    slideInUp: keyframes`
      from {
        opacity: 0;
        transform: translateY(-100%);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    `,
    slideInDown: keyframes`
      from {
        opacity: 0;
        transform: translateY(100%);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    `,
    pulse: keyframes`
      from {
          transform: scale3d(1, 1, 1);
      }
      50% {
          transform: scale3d(1.1, 1.1, 1.1);
      }
      to {
          transform: scale3d(1, 1, 1);
      }
    `,
    fadeInRight: keyframes`
        from {
            opacity: 0;
            transform: translate3d(100%, 0, 0);
        }

        to {
            opacity: 1;
            transform: translate3d(0, 0, 0);
        }
    `,
    fadeIn: keyframes`
        0% {
            opacity: 0;
        }
        50% {
          opacity: 0.5;
        }
        100% {
            opacity: 1;
        }
    `,
};
