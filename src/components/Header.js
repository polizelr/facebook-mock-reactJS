import React from 'react';
import { FaUser } from 'react-icons/fa';

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
                <FaUser color="white" size="0.8em" />
            </div>           
        </div>
    );
}