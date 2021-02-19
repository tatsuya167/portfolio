import React from "react";
// import "./About.scss"

const About = () => {

    return (
        <section id="About">

            <ul>
                <li>
                    About
                    <span></span><span></span><span></span><span></span>
                </li>
            </ul>

            <div className="wrap-grid">
                <div className="about-container">
                    <div className="picture">
                        <svg width="197" height="350" viewBox="0 0 197 274" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M131.503 148.458C157.815 135.925 176 109.086 176 78C176 34.9219 141.078 0 98 0C54.9218 0 20 34.9219 20 78C20 109.401 38.5559 136.469 65.3008 148.836L0.206055 274H196.794L131.503 148.458Z" fill="#C4C4C4"/>
                        </svg>
                    </div>

                    <div className="text">
                        <p>About me:<br/></p>
                            
                        <p>
                            I am Tatsuya takarabe.<br/>
                            Japanese Front-end Developer.<br/>
                            currently living in Vancouver, Canada.
                        </p>
                            
                        <p>
                            I used to study for programming for<br/>
                            a year and I try to create nice design<br/>
                            with building website.
                        </p>

                        <p>    
                            And I like to ski, reading and drawing<br/>
                            as much as coding!.
                        </p>
                    </div>

                    <div className="skills">
                        <p>skills:</p>

                        <p>
                            -HTML5,CSS3<br/>
                            -Javascript<br/>
                            -React
                        </p>
                        <p>-SCSS</p>
                    </div>
                    <div className="resume">
                        <a href="#Resume" >Resume</a>
                    </div>
                </div>
            </div>

        </section>
    );
}

export default About