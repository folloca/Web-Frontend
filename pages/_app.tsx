import type { AppProps } from 'next/app'
import {useLocationStore} from "../src/states/zustandTestState";

function MyApp({ Component, pageProps }: AppProps) {
    const {location} = useLocationStore()
  return (
      <>
          {location}
        <Component {...pageProps} />
      </>
  )
}

export default MyApp
