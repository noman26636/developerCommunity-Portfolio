import React from 'react'
import skillimg from "../assests/pexels-tranmautritam-251225.jpg"
import { Element } from 'react-scroll'
import "./SkillContainer.css"
import LinearProgress from "@mui/material/LinearProgress";

const SkillContainer = () => {
    return (
        <Element className="skillcontainer" id="skills">
            <div className="skillcontainer-image">
              <img src={skillimg}  alt=""/>
            </div>
            <div className="skillcontainer-text">
             <h2>SKILLSET</h2>
             <div className="skillcontainer-skillset"> 
                 <h5> React </h5>
                 <div className="skillcontainer-slider skillcontainer-slider1"> 
                   <LinearProgress variant="determinate" value={90} /> 
                 </div>
             </div>

             <div className="skillcontainer-skillset"> 
                 <h5> Node JS </h5>
                 <div className="skillcontainer-slider skillcontainer-slider2"> 
                   <LinearProgress variant="determinate" value={80} /> 
                 </div>
             </div>

             <div className="skillcontainer-skillset"> 
                 <h5> React Native </h5>
                 <div className="skillcontainer-slider skillcontainer-slider3"> 
                   <LinearProgress variant="determinate" value={90} /> 
                 </div>
             </div>
            </div>
        </Element>
    )
}

export default SkillContainer
