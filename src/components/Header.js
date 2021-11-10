import React from 'react'
import {Link} from 'react-scroll'
import './Header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
    return (
        <div className="header">
           
           <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
   <FontAwesomeIcon icon={faBars} style={ {color : "grey" }}/>
  </button>
               < a href="/" className="header-left">
                <h1>Developer<span>Community</span></h1>
                </a>
           
            <div className="header-right collapse">
                
                
               <Link to="about" smooth={true} duration={500}>
                   <h4> About Me</h4>
               </Link>

               <Link to="skills" smooth={true} duration={500}>
                   <h4> Skills</h4>
               </Link>

               <Link to="projects" smooth={true} duration={500}>
                   <h4> Projects</h4>
               </Link>

               <Link to="experience" smooth={true} duration={500}>
                   <h4> Experience</h4>
               </Link>

               <Link to="contact" smooth={true} duration={500}>
                   <h4> Contact </h4>
               </Link>
               <h4 className="header-rightButton">Join with Me</h4>
               </div>
           
        </div>
    )
}

export default Header
