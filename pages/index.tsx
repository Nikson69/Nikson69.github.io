import React from 'react';
import Image from 'next/image'
import profilePic from '../public/images/Nikson69Logo.png'
import bg from '../public/images/background.jpg'
import style from '../public/styles/index.module.scss'

export default function MyApp({ Component, pageProps }) {
  return <HomePage />
}

export function HomePage() {
  return (
    <div className={style.temp} style={{ backgroundImage:`url(${bg.src})`}} >
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