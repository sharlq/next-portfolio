import React from 'react'

const MySkills = () => {

    return (
        <>
        <div id="mySkills" className="mySkills" >
            <h1 className="mySkills-title">My Skills</h1>
            <div className="mySkills-grid">
            <div className="skills">
                <h1 className="skills-title">Programming Skills</h1>
                <div>
                    <h2 className="skills-secondaryTitle">Web Development</h2>
                    <ul className="skills-list">
                        <li>Strong Knowledge in the HTML5, CSS3, JavaScrpt and EcmaScript</li>
                        <li>Experience with REACT</li>
                        <li>React workflow eg: Redux , React-router , NextJS</li>
                        <li>experiance with SASS</li>
                        <li>knowlage of Typescript</li>
                        <li>BootStrap and Material UI</li>
                        <li>Knowledge of webStructure and browser performance</li>
                        <li>Familiarity with software  version control system Git,Github</li>
                        <li>Familiarity with the whole web stack</li>
                        <li>knowladge of NodeJS and express</li>
                        <li>Knowledge of bundling tools webpack,roll up and parcel</li>
                        <li>knowlage of MERN stack mongodb,NodeJS and Express , able to create CRUD APIs and user authentication using httpOnly cookies and JWT</li>
                        <li>UI/UX basics</li>
                    </ul>
                    <h2 className="skills-secondaryTitle">Other Programming skills</h2>
                    <ul className="skills-list">
                        <li>knowladge of python</li>
                        <li>OOP in JavaScrpt and python</li>
                        <li>Knowledge of OpenCV in python</li>
                    </ul>
                </div>
            </div>


            <div className="skills" >
            <h1 className="skills-title">Soft Skills</h1>
                <div>
                    <ul className="skills-list">
                        <li>The ablility to consume knowledge, new information and adapt to new technologies fast </li>
                        <li>Can utilise wed services and interact with their guide lines and API reference</li>
                        <li>self learning</li>
                        <li>Team work and communication skills</li>
                        <li>Working under pressure and optimizing performance to meet deadlines</li>
                        <li>Problem-solving and creating innovative solutions</li>
                        <li>Presentation skills and public speaking</li>
                    </ul>
                <h1 className="skills-title" style={{marginTop:"3vh",marginBottom:"2vh"}}>Other technical Skills</h1>
                    <ul className="skills-list" >
                        <li>knowladge of Photoshope , Illustrator and Adobe XD</li>
                        <li>Experience with microcontrollers such as Raspberry Pi and Arduino</li>
                        <li>Experiance with 3D design programms AutoCAD and SolidWorks</li>
                        <li>Experience with smart home devices and industrial automation</li>
                    </ul>
                </div>
            </div>
            </div>
        </div>
        <div className="toLearn">
            <div className="toLearn-card">
                <h1 className="toLearn-card_title">Things Iam planning to learn</h1>
                <ul className="toLearn-card_list" >
                        <li>React Native</li>
                        <li>to master firebase</li>
                        <li>to learn Fullstack development</li>
                        <li>of course, i will prioritize anything the company requires or any technology it wants to adopt</li>
                </ul>
            </div>
        </div>
        </>
    )
}

export default MySkills
