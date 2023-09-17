import React from 'react';
import { AppProps } from 'next/app';
import { I18nextProvider } from 'react-i18next';
import i18n from '../i18n';
import Header from '../components/header';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <I18nextProvider i18n={i18n}>
      <Header/>
      <Component {...pageProps} />
    </I18nextProvider>
  );
};

export default MyApp;