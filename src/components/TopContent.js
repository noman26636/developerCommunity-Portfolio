import React from 'react'
import { Link } from 'react-scroll'
import './TopContent.css'
import Typed from 'react-typed'

const TopContent = () => {
    return (
        <div className="topContent">
            
            <Typed className="typed"
              strings={["Mr. Noman Monis" ]}
              typeSpeed={60}
              backSpeed={60}
              loop
              />
                <div className="topContent-container" >
                <p>A Web and App Developer</p>
                <a>
                    <button className="topContent-buttondownload">Download CV</button>

                </a>
                <Link to="projects" smooth={true} duration={400}>
                    <button className="topContent-buttonWork"> My Work</button>
                </Link>
            </div>
        </div>
    )
}

export default TopContent
