import React from "react";
import { GithubLogoIcon, FolderIcon, YoutubeLogoIcon, GameControllerIcon } from "@phosphor-icons/react"

function ArtMaximised({smallDescription, link, itchLink, image, video}) {
    return (
        <div>
            <p className="desc">{smallDescription}</p>
            {
                image !== "" && ( 
                    <div className="art-content"> 
                        <img src={image} width={400} /> 
                    </div> )
            }
            {
                video != "" && (
                    <iframe width="420" height="315"
                        src={video}>
                    </iframe>
                )
            }
            <div className="links">
                {
                    link != "" && (
                        <a className="link" href={link}>
                            <YoutubeLogoIcon size={32} className="icon-link" weight="fill" />
                            <p>YouTube Link</p>
                        </a>
                    ) 
                }
                {
                    itchLink != "" ? (
                        <a className="link" href={itchLink}>
                            <GameControllerIcon size={32} className="icon-link" weight="fill" />
                            <p>itch.io Link</p>
                        </a>
                    ) : (
                        <div></div>
                    )
                }
            </div>
            

        </div>
    )
}

export default ArtMaximised;