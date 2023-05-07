import React from 'react';
import './Services.css';
import {Tilt} from 'react-tilt';
// import { Link } from 'react-router-dom';



const Services = () => {

    return (
        <div className='services-container'>
            <h1>My Services</h1>
           <div className='allCard'>
           
            <div className='card'>
                <Tilt>
                <div className='content'>
                    <h2>01</h2>
                    <h3>Front-End</h3>
                    <p>Need to improve your website's appearance and performance? My front-end development services can help.
                    I specialize in creating custom interfaces that match your brand identity and enhance the user experience. With our expertise, you can expect a faster website with smoother navigation and better engagement.
                    By improving your website's front-end development, you can attract and retain more customers, build trust, and increase conversions. Let me help you take your website to the next level and achieve your business goals.</p>
                    <p><span className='tech'>Technologies:</span>  
                        <span>HTML</span>
                        <span>CSS</span>
                        <span>SASS</span>
                        <span>Bootstrap</span>
                        <span>Tailwind</span>
                        <span>Material-UI</span>
                        <span>JavaScript</span>
                        <span>TypeScript</span>
                        <span>React</span>
                        <span>Next.Js</span>
                        </p>
                </div>
                </Tilt>
                <Tilt>
                <div className='content'>
                    <h2>03</h2>
                    <h3>UI/UX Design</h3>
                    <p>Creating a website or app that stands out and engages your target audience is crucial for the success of your business. As a UI/UX designer, I can help you achieve this goal. My custom designs will reflect your brand identity and resonate with your audience. By investing in my UI/UX design service, you can differentiate your business, create a memorable user experience, and increase customer engagement. Let me help you create a design that drives business growth.</p>
                    <p><span className='tech'>Technologies:</span>   
                    <span>Figma</span>
                    <span>Adobe xd</span>
                    <span>Adobe Photoshop</span>
                    <span>Adobe  Express</span>
                    <span>Canva</span>
                    </p>
                </div>
                </Tilt>
            </div>

            <div className='card'>
            <Tilt>
                <div className='content'>
                    <h2>02</h2>
                    <h3>Website Design</h3>
                    <p>Whether you're an artist, photographer, writer, or any other professional, a portfolio website is essential for showcasing your work and attracting new clients. As a web designer, I can create a custom website that showcases your work in the best possible light. I can design a website that reflects your unique style and brand, and that effectively communicates your skills and services to potential clients. With my portfolio website service, you can increase your visibility, build credibility, and ultimately land more clients. </p>
                    <p><span className='tech'>Technologies:</span>  
                        <span>HTML</span>
                        <span>CSS</span>
                        <span>SASS</span>
                        <span>Bootstrap</span>
                        <span>Tailwind</span>
                        <span>Material-UI</span>
                        <span>JavaScript</span>
                        <span>TypeScript</span>
                        <span>React</span>
                        <span>Next.Js</span>
                        </p>
                </div>
                </Tilt>
                <Tilt>
                <div className='content'>
                    <h2>04</h2>
                    <h3>Presentation Design</h3>
                    <p>Do you struggle with creating presentations that effectively communicate your ideas and engage your audience? As a presentation designer, I can help you create visually stunning and engaging presentations that effectively communicate your message. I can help you design a presentation that reflects your brand identity, and that effectively communicates your message in a clear and concise manner. With my presentation design service, you can create a lasting impression on your audience and effectively communicate your ideas.</p>
                    <p><span className='tech'>Technologies:</span>  
                    <span>PowerPoint</span>
                    <span>Google Slide</span>
                    <span>Adobe  Express</span>
                    <span>Canva</span>
                    </p>
                </div>
                </Tilt>
            </div>
           </div>
        </div>
    );
};

export default Services;