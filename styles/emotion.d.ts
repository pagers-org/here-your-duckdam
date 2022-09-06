import "@emotion/react";

declare module "@emotion/react" {
  export interface Theme {
    color: {
      yellow: string;
      white: string;
      black: string;
      dark: string;
    };
  }
}
