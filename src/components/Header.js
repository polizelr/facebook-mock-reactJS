import React from 'react';
import { FaUserCircle } from 'react-icons/fa';

import './Header.css';

import Logo from '../assets/fb_logo.png';

export default function Header(){
    return(
        <header>
            <nav>
                <img src={Logo} alt="logo"/>
                <div className="profile">
                    <h1>Meu perfil</h1>
                    <FaUserCircle color="white" size="1em" />
                </div>
            </nav>                     
        </header>
    );
}