import type { AppProps } from 'next/app'
import "@/styles/plugins/richjava_about-shad-cn/globals.css"

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}