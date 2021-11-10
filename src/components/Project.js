import React from 'react'
import "./Project.css"
import { useState } from 'react'



const Project = ({img,title,description,link}) => {
       const [show, setshow] = useState(false)

    return (
        <a href={link}>
           <div className="project" onMouseEnter={()=> setshow(true)} onMouseLeave={()=>setshow(false)} >
               {
                   show ? (
                   <div className="project-content">  
                       <h4> {title}</h4> 
                       <p> {description}</p>
                   </div> 
                   ) : (
                       <img src={img} alt="" />
                   )
               }
            </div> 
        </a>
    )
}

export default Project
