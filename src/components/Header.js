import React from 'react';
import { FaUserCircle } from 'react-icons/fa';

import './Header.css';

import Logo from '../assets/fb_logo.png';

export default function Header(){
    return(
        <div className="header">
            <div className="logo">
                <img src={Logo} alt="logo"/>
            </div>           
            <div className="profile">
                <h1>Meu perfil</h1>
                <FaUserCircle color="white" size="1em" />
            </div>           
        </div>
    );
}