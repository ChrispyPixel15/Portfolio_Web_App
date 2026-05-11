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
            githubLink={"https://github.com/ChrispyPixel15/Portfolio_Web_App"}
            projectLink={"https://chrisdesigned.netlify.app/"}
            stack={["React", "Vite", "JavaScript", "CSS"]} />
            <ProjectMinimised 
            name="NUDGE Mobile Application" 
            type="University Project"
            projectDescription={"A mobile application meant for individuals that have memory problems. The application contains several means of organisation, reminders and other tools to help keep track of your daily life."}
            githubLink={"https://github.com/ChrispyPixel15/Nudge-Mobile-App"}
            stack={["React Native", "TypeScript", "CSS"]} />
            <ProjectMinimised 
            name="The Character Collection" 
            type="University Project"
            projectDescription={"A Dungeons and Dragons Character Creator. Create your character step by step and keep track of all your characters in one place."}
            githubLink={"https://github.com/ChrispyPixel15/DIGA4015A_2615283_ChristineHolt_ExamWebApp"}
            stack={["React", "JavaScript", "CSS"]} />
            <ProjectMinimised 
            name="Step 1" 
            type="University Project"
            projectDescription={"A simplistic, no fluff recipe website. Skip over having to read a whole article before getting to the recipe, and get to the cooking part faster."}
            githubLink={"https://github.com/ChrispyPixel15/WSOA3029A_2615283_ChristineHolt_CommercialWebsite"}
            projectLink={"https://chrispypixel15.github.io/WSOA3029A_2615283_ChristineHolt_CommercialWebsite/"}
            stack={["HTML", "JavaScript", "CSS"]} />
            <ProjectMinimised 
            name="First Portfolio Website" 
            type="University Project"
            projectDescription={"The first ever portfolio website I made."}
            githubLink={"https://github.com/Wits-Digital-Arts-Interactive-Media/WSOA3028A_2615283"}
            projectLink={"https://wits-digital-arts-interactive-media.github.io/WSOA3028A_2615283/essays/index.html"}
            stack={["HTML", "JavaScript", "CSS"]} />
        </div>
    )
}

export default Projects;