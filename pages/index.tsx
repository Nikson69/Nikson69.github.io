// components/MyComponent.tsx
import React from 'react';
import { useTranslation } from 'react-i18next';
import bg from '../public/images/background.jpg'
import style from '../public/styles/index.module.scss'
import Image from 'next/image'
import profilePic from '../public/images/Nikson69.png'
import { useRouter } from 'next/router';
import { Button } from 'semantic-ui-react';

const HomePage: React.FC = () => {
  const router = useRouter();

  return (
    <div className={style.main} style={{ backgroundImage: `url(${bg.src})` }} >
      <div className={style.image}>
        <Image
          layout='responsive'
          src={profilePic}
          alt=""
          onClick={() => router.push('/posts')}
        />
      </div>
    </div>
  );
};

export default HomePage;