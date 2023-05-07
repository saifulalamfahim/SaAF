import React from 'react';
import Marquee from "react-fast-marquee";
import './Animation.css'

const Animation = () => {
    return (
        <div>
            <div className=''>
                        <div className='animation'>
                        <Marquee>
                             Contact me today to discuss your needs and get a quote for my services.
                        </Marquee>
                        </div>
                </div>
        </div>
    );
};

export default Animation;