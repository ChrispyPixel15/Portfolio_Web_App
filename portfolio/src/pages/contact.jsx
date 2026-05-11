import React from "react";
import { GithubLogoIcon, InstagramLogoIcon, YoutubeLogoIcon, EnvelopeSimpleIcon, LinkedinLogoIcon } from "@phosphor-icons/react"

function Contact() {
    return (
        <div className="contact-content">
            <h1>Contact</h1>
            <div className="icons-contact-holder">
                <a className="social-icon-contact" href="">
                    <GithubLogoIcon size={32} className="icon-contact" weight="fill" />
                    <p>GitHub</p>
                </a>
                <a className="social-icon-contact" href="">
                    <InstagramLogoIcon size={32} className="icon-contact" weight="fill" />
                    <p>Instagram</p>
                </a>
                <a className="social-icon-contact" href="">
                    <YoutubeLogoIcon  size={32} className="icon-contact" weight="fill" />
                    <p>YouTube</p>
                </a>
                <a className="social-icon-contact" href="">
                    <LinkedinLogoIcon  size={32} className="icon-contact" weight="fill" />
                    <p>LinkedIn</p>
                </a>
                <a className="social-icon-contact" href="">
                    <EnvelopeSimpleIcon  size={32} className="icon-contact" weight="fill" />
                    <p>Email</p>
                </a>              
            </div>
        </div>
    )
}

export default Contact;