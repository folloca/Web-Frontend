import type {AppProps} from 'next/app'
import {ThemeProvider} from 'styled-components';
import {theme} from '../src/config/style/theme';
import Header from "../src/components/Header";
import GlobalStyle from '../src/config/style/GlobalStyle'

function MyApp({ Component, pageProps }: AppProps) {
  return (
      <ThemeProvider theme={theme}>
          <GlobalStyle/>
          <Header />
        <Component {...pageProps} />
      </ThemeProvider>
  )
}

export default MyApp
