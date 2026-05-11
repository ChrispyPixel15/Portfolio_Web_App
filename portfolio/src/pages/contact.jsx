import React from "react";
import { GithubLogoIcon, InstagramLogoIcon, YoutubeLogoIcon, EnvelopeSimpleIcon, LinkedinLogoIcon } from "@phosphor-icons/react"

function Contact() {
    return (
        <div className="contact-content">
            <h1>Contact</h1>
            <div className="icons-contact-holder">
                <a className="social-icon-contact" href="https://github.com/ChrispyPixel15" target="_blank">
                    <GithubLogoIcon size={32} className="icon-contact" weight="fill" />
                    <p>GitHub</p>
                </a>
                <a className="social-icon-contact" href="https://www.instagram.com/chris.designed/" target="_blank">
                    <InstagramLogoIcon size={32} className="icon-contact" weight="fill" />
                    <p>Instagram</p>
                </a>
                <a className="social-icon-contact" href="https://www.youtube.com/@chris.designed" target="_blank">
                    <YoutubeLogoIcon  size={32} className="icon-contact" weight="fill" />
                    <p>YouTube</p>
                </a>
                <a className="social-icon-contact" href="https://www.linkedin.com/in/christine-holt-8821252b6" target="_blank">
                    <LinkedinLogoIcon  size={32} className="icon-contact" weight="fill" />
                    <p>LinkedIn</p>
                </a>
                <a className="social-icon-contact" href="mailto:chris.designed@gmail.com" target="_blank">
                    <EnvelopeSimpleIcon  size={32} className="icon-contact" weight="fill" />
                    <p>Email</p>
                </a>              
            </div>
        </div>
    )
}

export default Contact;