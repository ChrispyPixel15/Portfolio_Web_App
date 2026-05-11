import React, { useState } from "react";
import { CursorClickIcon  } from "@phosphor-icons/react";
import ProjectMaximised from "./projectMaximised";


function ProjectMinimised({name, type, projectDescription, githubLink, projectLink, stack}) {
    const [open, setOpen] = useState(false);

    return (
        <div onClick={() => {
            setOpen(!open);
            console.log(stack);
        }} className={`project-stuff ${open ? "open" : ""}`}>
            <div className="project-min">
                <div className="title-type">
                    <h3>{name}</h3>
                    <p>{type}</p>
                </div>  
                <div>
                    <CursorClickIcon    size={32} className="arrow" />
                </div>        
            </div>
            <ProjectMaximised smallDescription={projectDescription} 
                gitHubLink={githubLink}
                projectLink={projectLink}
                stack={stack} />
        </div>
        
    )
}

export default ProjectMinimised;