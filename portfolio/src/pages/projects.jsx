import React from "react";
import ProjectMinimised from "../components/projectMinimised";

function Projects() {
    return (
        <div className="project-content">
            <h1>Projects</h1>
            <h2>Design & Development</h2>
            <ProjectMinimised 
            name="Portfolio" 
            type="Personal Project"
            projectDescription={"This Web App you are currently traversing! It contains my projects, skills and how to contact me."}
            githubLink={"sadasd"}
            projectLink={"sadasdasd"}
            stack={["React", "Vite", "JavaScript", "CSS"]} />
            <ProjectMinimised 
            name="NUDGE Mobile Application" 
            type="University Project"
            projectDescription={"A mobile application meant for individuals that have memory problems. The application contains several means of organisation, reminders and other tools to help keep track of your daily life."}
            githubLink={"sadasd"}
            projectLink={"sadasdasd"}
            stack={["React Native", "TypeScript", "CSS"]} />
            <ProjectMinimised 
            name="The Character Collection" 
            type="University Project"
            projectDescription={"A Dungeons and Dragons Character Creator. Create your character step by step and keep track of all your characters in one place."}
            githubLink={"sadasd"}
            projectLink={"sadasdasd"}
            stack={["React", "JavaScript", "CSS"]} />
            <ProjectMinimised 
            name="Step 1" 
            type="University Project"
            projectDescription={"A simplistic, no fluff recipe website. Skip over having to read a whole article before getting to the recipe, and get to the cooking part faster."}
            githubLink={"sadasd"}
            projectLink={"sadasdasd"}
            stack={["HTML", "JavaScript", "CSS"]} />
            <ProjectMinimised 
            name="First Portfolio Website" 
            type="University Project"
            projectDescription={"The first ever portfolio website I made."}
            githubLink={"sadasd"}
            projectLink={"sadasdasd"}
            stack={["HTML", "JavaScript", "CSS"]} />
        </div>
    )
}

export default Projects;