import React from 'react';
import './Header.css';
import { Icon } from '@iconify/react';

const Header = () => {
    return (
        <div className='header-section'>
            <div className='social-media'>
            <a href="https://www.linkedin.com/in/saafahim"><Icon className='icon' icon="bi:linkedin" /></a>
            <a href="https://www.facebook.com/fahim.srlsy"> <Icon className='icon' icon="brandico:facebook-rect" /></a>
           <a href="https://github.com/saifulalamfahim"> <Icon className='icon1' icon="fa-brands:github-square" /></a>
           <a href="https://www.instagram.com/fahim_vha"><Icon className='icon1' icon="fa-brands:instagram-square" /></a>
            </div>
            <div className='saaf'>
                <h1>SaAF</h1>
                <p>is here for you</p>
            </div>
            <div className='saaf-details'>
                <p>Hey! I’m Saiful Alam, people call me Fahim. I’m a<br /> self-made “ <span>Web developer & Designer</span> ”</p>
            </div>
            <a href=""><button>My Resume</button></a>
        </div>
    );
};


export default Header;