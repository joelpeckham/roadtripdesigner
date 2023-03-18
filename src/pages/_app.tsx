import '@/styles/globals.css'
import type { AppProps } from 'next/app'
// 1. import `NextUIProvider` component
import { NextUIProvider } from '@nextui-org/react';

function MyApp({ Component, pageProps } : AppProps) {
  return (
    // 2. Use at the root of your app
    <NextUIProvider>
      <Component {...pageProps} />
    </NextUIProvider>
  );
}

export default MyApp;

