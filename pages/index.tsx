import React from 'react';
import Image from 'next/image'
import profilePic from '../public/images/Nikson69Logo.png'
import bg from '../public/images/background.jpg'
import style from '../public/styles/index.module.scss'
import Head from 'next/head';

export default function MyApp() {

  return <React.Fragment>
    <Head>
      <title>Nikson69</title>
      <link href="/favicon.ico" rel="icon" type="image/x-icon"/>
      <link href="/favicon.png" rel="shortcut icon" type="image/x-icon"/>
    </Head>
    <HomePage />
  </React.Fragment>
}

export function HomePage() {
  return (
    <div className={style.temp} style={{ backgroundImage: `url(${bg.src})` }} >
      <div className={style.image}>
        <Image
          layout='responsive'
          src={profilePic}
          alt="Picture of the author"
        />
      </div>
    </div>
  );
}