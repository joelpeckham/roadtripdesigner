import '@/styles/globals.css';
import '@/styles/registerForm.css';
import type { AppProps } from 'next/app';

import "primereact/resources/themes/lara-light-blue/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";                                //icons
import "primeflex/primeflex.css";                                  //flexbox

import PrimeReact from 'primereact/api';

PrimeReact.ripple = true;

import initAuth from '../../initAuth';

initAuth()

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
