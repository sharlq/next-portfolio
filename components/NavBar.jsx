import React from 'react'

const NavBar = ({resume}) => {

    return (
        <div className="navBar" >
            <div className="navBar-list">
                <a herf="" className="navBar-list_name">Shehab</a>
                <a href="#myProjects">My Projects</a>
                <a href="#mySkills">My Skills</a>
                <a href="#aboutMe">About Me</a>
                <a href="#contactMe">Contact Me</a>
                <a href="https://github.com/sharlq/next-portfolio">Portfolio Code</a>
            </div>
                
                <a href={resume} className="resume">Resume</a>
        </div>
    )
}

 export default NavBar
