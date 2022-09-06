import { css } from "@emotion/react";

const animation = css`
  @-webkit-keyframes bounce {
    0% {
      top: 0;
    }
    50% {
      top: -5px;
    }
    70% {
      top: -50px;
    }
    100% {
      top: 0;
    }
  }

  @-moz-keyframes bounce {
    0% {
      top: 0;
    }
    50% {
      top: -5px;
    }
    70% {
      top: -50px;
    }
    100% {
      top: 0;
    }
  }

  @-o-keyframes bounce {
    0% {
      top: 0;
    }
    50% {
      top: -5px;
    }
    70% {
      top: -50px;
    }
    100% {
      top: 0;
    }
  }

  @-ms-keyframes bounce {
    0% {
      top: 0;
    }
    50% {
      top: -5px;
    }
    70% {
      top: -50px;
    }
    100% {
      top: 0;
    }
  }

  @keyframes bounce {
    0% {
      top: 0;
    }
    50% {
      top: -5px;
    }
    70% {
      top: -50px;
    }
    100% {
      top: 0;
    }
  }

  .bounce {
    position: relative;
    -moz-animation: bounce 1s 2 linear;
    -webkit-animation: bounce 1s 2 linear;
    -o-animation: bounce 1s 2 linear;
    animation: bounce 1s 2 linear;
  }

  @keyframes pulse {
    from {
      transform: scale3d(1, 1, 1);
    }

    50% {
      transform: scale3d(1.1, 1.1, 1.1);
    }

    to {
      transform: scale3d(1, 1, 1);
    }
  }
  @-webkit-keyframes pulse {
    from {
      transform: scale3d(1, 1, 1);
    }

    50% {
      transform: scale3d(1.1, 1.1, 1.1);
    }

    to {
      transform: scale3d(1, 1, 1);
    }
  }
  @-moz-keyframes pulse {
    from {
      transform: scale3d(1, 1, 1);
    }

    50% {
      transform: scale3d(1.05, 1.05, 1.05);
    }

    to {
      transform: scale3d(1, 1, 1);
    }
  }

  .pulse {
    animation-name: pulse;
    animation-duration: 500ms;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
  }

  @keyframes fadeInRight {
    from {
      opacity: 0;
      transform: translate3d(100%, 0, 0);
    }

    to {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
  }

  .fadeInRight {
    animation-duration: 1s;
    animation-name: fadeInRight;
  }
`;

export default animation;
