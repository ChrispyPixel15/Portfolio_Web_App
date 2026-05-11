import React from "react";

function Experience() {
    return (
        <div className="experience-content">
            <h1>Experience</h1>
            <section className="education-experience">
                <article className="education">
                    <h2>Education</h2>
                    <div>                        
                        <h3>Bachelor of Arts (Digital Arts) - NQF 8</h3>
                        <p className="institution">University of the Witwatersrand</p>
                        <p className="years">2022 - 2025</p>
                    </div>                    
                </article>
                <article className="experience">
                    <h2>Work Experience</h2>
                    <div>
                        <h3>Freelance Designer/Developer</h3>
                        <p className="institution">Chris Designed</p>
                        <p className="years">2026 - Current</p>
                    </div> 
                    <div>
                        <h3>Mathematics Tutor/Administrator</h3>
                        <p className="institution">TutorsInk</p>
                        <p className="years">2021 - 2022</p>
                    </div>                                         
                </article>
            </section>
        </div>
    )
}

export default Experience;