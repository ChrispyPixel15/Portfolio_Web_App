import React from "react";
import { GithubLogoIcon, InstagramLogoIcon, YoutubeLogoIcon, EnvelopeSimpleIcon, LinkedinLogoIcon } from "@phosphor-icons/react"

function Home() {
    return (
        <div className="home-content">
            <h1>Christine</h1>
            <p>Designing and Developing Apps, Web Apps and Websites.</p>
            <div className="icons-holder">
                <a className="social-icon" href="">
                    <GithubLogoIcon size={32} className="icon" weight="fill" color="#50586C" />
                </a>
                <a className="social-icon" href="">
                    <InstagramLogoIcon size={32} className="icon" weight="fill" color="#50586C" />
                </a>
                <a className="social-icon" href="">
                    <YoutubeLogoIcon  size={32} className="icon" weight="fill" color="#50586C" />
                </a>
                <a className="social-icon" href="">
                    <LinkedinLogoIcon  size={32} className="icon" weight="fill" color="#50586C" />
                </a>
                <a className="social-icon" href="">
                    <EnvelopeSimpleIcon  size={32} className="icon" weight="fill" color="#50586C" />
                </a>                
            </div>
        </div>
    )
}

export default Home;