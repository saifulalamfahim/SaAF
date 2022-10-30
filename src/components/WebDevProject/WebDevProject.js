import React from 'react';
import './WebDevProject.css';

const WebDevProject = (props) => {
    const {name, img} = props.project;
    return (
        <div className='webDev-container'>
           <div className='img'>
                <img src={img} alt="" />
                <div className='hoverButton'>
                    <h4>{name}</h4>
                    <a href="https://github.com/"><button>Explore</button></a>
                </div>
           </div>
        </div>
    );
};

export default WebDevProject;