import React from "react";
import { GithubLogoIcon, FolderIcon } from "@phosphor-icons/react"

function ProjectMaximised({smallDescription, gitHubLink, projectLink, stack}) {
    return (
        <div>
            <p className="desc">{smallDescription}</p>
            <div className="stack-container">
                {
                    stack && stack.map((item) => (
                        <p key={item} className="stack-item">{item}</p>
                    ))
                }
            </div>
            <div className="links">
                {
                    gitHubLink ? (
                        <a className="link" href={gitHubLink}>
                            <GithubLogoIcon size={32} className="icon-link" weight="fill" />
                            <p>GitHub Link</p>
                        </a>
                    ) : (
                        <div></div>
                    )
                }
                {
                    projectLink ? (
                        <a className="link" href={projectLink}>
                            <FolderIcon size={32} className="icon-link" weight="fill" />
                            <p>Project Link</p>
                        </a>
                    ) : (
                        <div></div>
                    )
                }
            </div>
            

        </div>
    )
}

export default ProjectMaximised;