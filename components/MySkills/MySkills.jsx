import React from 'react'


const MySkills = ({skills}) => {


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
                        {skills && skills.webDevelopment.map((i)=><li>{i}</li>)}
                    </ul>
                    <h2 className="skills-secondaryTitle">Other Programming skills</h2>
                    <ul className="skills-list">
                        {skills && skills.otherProgrammingSkills.map((i)=><li>{i}</li>)}
                    </ul>
                </div>
            </div>


            <div className="skills" >
            <h1 className="skills-title">Soft Skills</h1>
                <div>
                    <ul className="skills-list">
                     {skills && skills.softSkills.map((i)=><li>{i}</li>)}
                    </ul>
                <h1 className="skills-title" style={{marginTop:"3vh",marginBottom:"2vh"}}>Other technical Skills</h1>
                    <ul className="skills-list" >
                    {skills && skills.technicalSkills.map((i)=><li>{i}</li>)}
                    </ul>
                </div>
            </div>
            </div>
        </div>
        <div className="toLearn">
            <div className="toLearn-card">
                <h1 className="toLearn-card_title">Things Iam learning</h1>
                <ul className="toLearn-card_list" >
                    {skills && skills.futurePlans.map((i)=><li>{i}</li>)}
                </ul>
            </div>
        </div>
        </>
    )
}

export default MySkills
