import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components';
import { theme } from '../src/config/style/theme';
import {useLocationStore} from "../src/states/zustandTestState";

function MyApp({ Component, pageProps }: AppProps) {
    const {location} = useLocationStore()
  return (
      <ThemeProvider theme={theme}>
          {location}
        <Component {...pageProps} />
      </ThemeProvider>
  )
}

export default MyApp
