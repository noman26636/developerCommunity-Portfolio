import React from 'react'
import Project from './Project'
import "./ProjectContainer.css"


import { Element } from 'react-scroll'

const ProjectContainer = () => {

const client_project= [
    {
   img : "https://images.pexels.com/photos/169573/pexels-photo-169573.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
   title : "Facebook",
   description : " Hi this is NOMAN",
   link : "www.google.com",
},

{
    img : "https://images.pexels.com/photos/169573/pexels-photo-169573.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    title : "Facebook",
    description : " Hi this is NOMAN",
    link : "www.google.com",
 },

 {
    img : "https://images.pexels.com/photos/169573/pexels-photo-169573.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    title : "Facebook",
    description : " Hi this is NOMAN",
    link : "www.google.com",
 } ,

 {
    img : "https://images.pexels.com/photos/169573/pexels-photo-169573.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    title : "Facebook",
    description : " Hi this is NOMAN",
    link : "www.google.com",
 } ,


]

    return (
        <Element className="projectcontainer" id="projects">
            <h1>Projects</h1>
            <p> Here are some projects which I've done for Clients and Personally</p>
            <div className="projectcontainer-projects">
                 {
                     client_project.map((project,index)=> {
                               return (
                                   <Project key={index} img={project.img} title={project.title} description={project.description} link={project.link}/>
                               )
                     })
                     
                    }
            </div>
        </Element>
    )
}

export default ProjectContainer
