import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// import WebDevDetails from '../WebDevDetails/WebDevDetails';
import './WebDevProject.css';

const WebDevProject = (props) => {
    const details = props.project;
    const {name, img} = details;
   
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
                    <Link to=""><button>Explore</button></Link>
                </div>
           </div>
        </div>
    );
};

export default WebDevProject;