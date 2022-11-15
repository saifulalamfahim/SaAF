import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import WebDevDetails from '../WebDevDetails/WebDevDetails';
import './WebDevProject.css';

const  WebDevProject = (props) => {
    const details = props.project;
    const {name, img, github, live_site} = details;
   
    // const [webDetails, setWevDetails] = useState([]);

    // const handlerAddButton = (details) => {
    //         console.log(details)
    //         webDetails.push(details);
    //         setWevDetails(details)
    //         const newWebDetails = [...webDetails, details];
    //         setWevDetails(newWebDetails);
    // };
    return (
        <div className='webDev-container'>
            {/* <h1>Ami to asi kam kn kortasena taile? {webDetails.length}</h1> */}
        {/* {
            webDetails.map(detail => console.log(detail))
        } */}
           <div className='img'>
                <img src={img} alt="" />
                <div className='hoverButton'>
                    <h4>{name}</h4>
                    {/* <Link to="/webDevDetails"><button onClick={handlerAddButton}>Explore</button></Link> */}
                    {/* <Link to="https://www.facebook.com/fahim.srlsy"><button>Explore</button></Link> */}
                    <div className='explore-button'>
                            <a href={github} target="_blank" rel="noreferrer"><button>Github</button></a>
                            <a href={live_site} target="_blank" rel="noreferrer"><button>Live</button></a>
                    </div>
                </div>
           </div>
        </div>
    );
};

export default WebDevProject;