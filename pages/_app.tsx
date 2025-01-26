import type { AppProps } from 'next/app'
import "@/styles/plugins/richjava_about-shadcn/globals.css"

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}