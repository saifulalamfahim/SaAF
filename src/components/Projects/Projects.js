import React from 'react';
import './Projects.css';
import MidNavber from '../MidNavber/MidNavber';
import { Route, Routes } from 'react-router-dom';
import WebDevelopment from '../WebDevelopment/WebDevelopment';
import GraphicDesign from '../GraphicDesign/GraphicDesign';
import WebDevDetails from '../WebDevDetails/WebDevDetails';
// import WebDevelopment from '../WebDevelopment/WebDevelopment';
// import GraphicDesign from '../GraphicDesign/GraphicDesign';

const Projects = () => {
    return (
        <div className='projects-container'>
            <h1>My Works</h1>
            <MidNavber></MidNavber>
            <Routes>
                <Route path='/' element={<WebDevelopment></WebDevelopment>}></Route>
                <Route path='/webDevelopment' element={<WebDevelopment></WebDevelopment>}></Route>
                <Route path='graphicDesign' element={<GraphicDesign></GraphicDesign>}></Route>
                <Route path='/webDevDetails' element={<WebDevDetails></WebDevDetails>}></Route>
            </Routes>
            {/* <WebDevelopment></WebDevelopment>
            <GraphicDesign></GraphicDesign> */}
        </div>
    );
};

export default Projects;                                                         