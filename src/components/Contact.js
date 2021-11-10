import { IconButton } from '@mui/material'
import React from 'react'
import "./Contact.css"
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Element } from 'react-scroll';


const Contact = () => {
    return (
        <Element className="contact" id="contact"> 
            <h1>Contact</h1>
            <div className="contact-container">
            <p>
                Email : <span>manu26636@gmail.com</span>
            </p>

            <p> Github Username : <span>noman26636</span></p>

            <div className="contact-icon">
                <a href="https://google.com">
                    <IconButton>
                        <LinkedInIcon/>
                    </IconButton>
                </a>

                <a href="google.com" >
                    <IconButton>
                        <InstagramIcon />
                    </IconButton>
                </a>

                <a href="google.com" >
                    <IconButton>
                        <FacebookIcon />
                    </IconButton>
                </a>

                </div>
            </div>
        </Element>
    )
}

export default Contact
