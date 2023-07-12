import React from 'react'
import "./Skills.css"
import Skill from "./Skill"
import Interests from "./interests"
import Others from "./others"

function Skills() {
  return (
    <>
        <div className="skills">
            <h2 className="h2">Compétences</h2>
            <Skill title="HTML" rating="5"/>
            <Skill title="CSS" rating="4"/>
            <Skill title="JAVASCRIPT" rating="4"/>
            <Skill title="C#" rating="3"/>
            <Skill title="MYSQL" rating="4"/>
        </div>

        <div className="skills">
            <h2 className="h2">Langues</h2>
            <Skill title="Anglais" rating="3"/>
            <Skill title="Allemand" rating="1"/>
        </div>
        <Interests/>
        <Others/>
    </>
    )
}

export default Skills