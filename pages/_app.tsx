import React from 'react';
import { AppProps } from 'next/app';
import { I18nextProvider } from 'react-i18next';
import i18n from '../i18n';
import Header from '../components/header';
import 'semantic-ui-css/semantic.min.css';
import Head from 'next/head';
import '../public/styles/global.css'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
    <Head>
      <title>Nikson69</title>
      <link href="/favicon.ico" rel="icon" type="image/x-icon"/>
      <link href="/favicon.png" rel="shortcut icon" type="image/x-icon"/>
    </Head>
    <I18nextProvider i18n={i18n}>
      {/* <Header/> */}
      <Component {...pageProps} />
    </I18nextProvider>
    </>
  );
};

export default MyApp;