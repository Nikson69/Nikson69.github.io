import React from 'react';
import ReactDOM from 'react-dom';
import logo from './images/Nikson69Logo.png';
import './index.css';
 
const title = 'Привет, скоро тут что-нибудь должно быть (:';
 
ReactDOM.render(
  <div className="temp" >
    <img class="loader-img" src={logo}/>
    {title}
    </div>,
  document.getElementById('app')
);