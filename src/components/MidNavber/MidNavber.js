import React from 'react';
import { Link } from 'react-router-dom';
import './MidNavber.css';

const MidNavber = () => {
    return (
        <nav className='navber'>
            <Link to="/webDevelopment">Web Development</Link>
            <Link to="/graphicDesign">Graphic Design</Link>
        </nav>
    );
};

export default MidNavber;