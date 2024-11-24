// src/pages/_app.tsx
import type { AppProps } from 'next/app'
import '../styles/reset.css';
import '../styles/colors.css';
import '../styles/fonts.css';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
