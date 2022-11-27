import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <div className='contact-container'>
           <h1>Let’s make 
            something great!</h1>
            <div className='contact-details'>
                <h4>Contact</h4>
                <p>  I’m seeking out opportunities to collaborate with companies, agencis & individuals, <br />
                Hiar me, And take opportunities to work with world most tremendous man.</p>
                <p>Feel free to reach out through any platforms bellow: </p>
                <div className='contact-media'>
                    <a href="https://mail.google.com/" target="_blank" rel="noreferrer"><p>safahim84@gmail.com</p></a>
                    <a href="https://www.facebook.com/fahim.srlsy" target="_blank" rel="noreferrer"><p>Facebook</p></a>
                   <a href="https://www.instagram.com/fahim_vha" target="_blank" rel="noreferrer"> <p>Instagram</p></a>
                    <a href="https://www.linkedin.com/in/saafahim" target="_blank" rel="noreferrer"><p>Linkedin</p></a>
                </div>
            </div>
        </div>
    );
};

export default Contact;