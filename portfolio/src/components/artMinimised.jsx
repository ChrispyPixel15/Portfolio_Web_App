import React, { useState } from "react";
import { CursorClickIcon  } from "@phosphor-icons/react";
import ArtMaximised from "./artMaximised";


function ArtMinimised({name, type, projectDescription, link, itchLink, image, video}) {
    const [open, setOpen] = useState(false);

    return (
        <div onClick={() => {
            setOpen(!open);
        }} className={`artproject-stuff ${open ? "open" : ""}`}>
            <div className="project-min">
                <div className="title-type">
                    <h3>{name}</h3>
                    <p>{type}</p>
                </div>  
                <div>
                    <CursorClickIcon    size={32} className="arrow" />
                </div>        
            </div>
            <ArtMaximised smallDescription={projectDescription} 
                link={link}
                itchLink={itchLink}
                image={image}
                video={video}
            />
        </div>
        
    )
}

export default ArtMinimised;