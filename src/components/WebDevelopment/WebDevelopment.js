import React, { useEffect, useState } from 'react';
import WebDevProject from '../WebDevProject/WebDevProject';
import './WebDevelopment.css';


const WebDevelopment = () => {
    const [webDevProjects, setWebDevProjects] = useState([]);

    useEffect(() => {
        fetch('products.json')
        .then(res => res.json())
        .then(data => setWebDevProjects(data))
    }, []);

    return (
        <div className='webDevProjects-container'>
            {/* <h1>This is Web development {webDevProjects.length}</h1> */}
            {
                webDevProjects.map(project => <WebDevProject
                key={project.id}
                project={project}
                ></WebDevProject>)
            }
        </div>
    );
};

export default WebDevelopment;