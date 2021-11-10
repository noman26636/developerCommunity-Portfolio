import React from 'react'
import "./ExperienceContainer.css"
import Experience from './Experience'
import { Element } from 'react-scroll'

const ExperienceContainer = () => {
    return (
        <Element className="experience-container" id="exp">
            <div className="experince-textData">
            <h1> Experience </h1>
            </div>
            <div className="experience-text">
                <div className="experience-box">
                <Experience number="+4" title="Clients" />
                <Experience number="+10" title="Projects" style={{backgroundColor:"#f64c08"}}/>
               </div>
            </div>
        </Element>
    )
}

export default ExperienceContainer
