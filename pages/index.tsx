import * as React from "react";
import Image from 'next/image'
import profilePic from '../public/images/ava.jpg'
import style from './style.module.scss'
import Facebook from '../public/svg/facebook.svg'

export default function MainPage ()  {   
        return (
          // <div className={style.temp} >

          //   <Image src={profilePic} alt="Picture of the author" />
          // hello
          // </div>
          <React.Fragment>
            <div>
              <div>Hello!</div>
              <div>My name is Nikita.</div>
              <div><Facebook/></div>
            </div>
          </React.Fragment>
        );
    
}