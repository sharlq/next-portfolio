import React,{useEffect,useState} from 'react'
import axios from 'axios'
const NavBar = () => {
    const [resumeLink,setResumeLink] = useState("");
    const fetchResume = async()=>{ 
        const response = await axios.get("/api/resume")
        setResumeLink(response.data[0].link)
    }

    useEffect(()=>{
        fetchResume()
    },[])
    return (
        <div className="navBar" >
            <div className="navBar-list">
                <a herf="" className="navBar-list_name">Shehab</a>
                <a href="#myProjects">My Projects</a>
                <a href="#mySkills">My Skills</a>
                <a href="#aboutMe">About Me</a>
                <a href="#contactMe">Contact Me</a>
                <a href="https://github.com/sharlq/myPortfolio">Portfolio Code</a>
            </div>
                
                <a href={resumeLink} className="resume">Resume</a>
        </div>
    )
}

 export default NavBar
