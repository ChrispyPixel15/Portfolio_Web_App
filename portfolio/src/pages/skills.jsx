import React from "react";
import { skillData } from "../data/skillsData";
import SkillItem from "../components/skillItem";

function Skills() {
    return (
        <div className="skills-content">
            <h1>Skills</h1>
            <div className="skill-list">
                {
                    skillData.map((skill, key) => (
                        <div key={key}>
                            <SkillItem name={skill} />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Skills;