import '@/styles/globals.css'
import '@/styles/registerForm.css';
import type { AppProps } from 'next/app'

import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";                                //icons
import "primeflex/primeflex.css";                                  //flexbox

import PrimeReact from 'primereact/api';

PrimeReact.ripple = true;

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
