import React from "react";
import { GithubLogoIcon, InstagramLogoIcon, YoutubeLogoIcon, EnvelopeSimpleIcon, LinkedinLogoIcon } from "@phosphor-icons/react"

function Home() {
    return (
        <div className="home-content">
            <h1>Christine</h1>
            <p>Designing and Developing Apps, Web Apps and Websites.</p>
            <div className="icons-holder">
                <a className="social-icon" href="https://github.com/ChrispyPixel15" target="_blank">
                    <GithubLogoIcon size={32} className="icon" weight="fill" color="#50586C" />
                </a>
                <a className="social-icon" href="https://www.instagram.com/chris.designed/" target="_blank">
                    <InstagramLogoIcon size={32} className="icon" weight="fill" color="#50586C" />
                </a>
                <a className="social-icon" href="https://www.youtube.com/@ChrispyPixel" target="_blank">
                    <YoutubeLogoIcon  size={32} className="icon" weight="fill" color="#50586C" />
                </a>
                <a className="social-icon" href="https://www.linkedin.com/in/christine-holt-8821252b6" target="_blank">
                    <LinkedinLogoIcon  size={32} className="icon" weight="fill" color="#50586C" />
                </a>
                <a className="social-icon" href="mailto:chris.designed@gmail.com" target="_blank">
                    <EnvelopeSimpleIcon  size={32} className="icon" weight="fill" color="#50586C" />
                </a>                
            </div>
        </div>
    )
}

export default Home;