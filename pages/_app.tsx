import { Global, ThemeProvider } from '@emotion/react';
import { theme, reset } from '../styles';
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return <>
    <ThemeProvider theme={theme} >
      <Global styles={reset} /><Component {...pageProps} />
    </ThemeProvider >
  </>
}

export default MyApp
