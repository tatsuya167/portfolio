import React from "react";
import "./Works.scss"

const Works = () => {
    return (
        <section id="works">
            
            <ul>
                <li>
                    Works
                    <span></span><span></span><span></span><span></span>
                </li>
            </ul>
            
            <div className="wrap-grid">
                <div className="works-container">                                        
                    <div className="one">
                        <a href="https://lucid-benz-f12be9.netlify.com/" target="_blank">
                            <img src="tri-tech.png" alt="tri-tech" width="646" height="316"/>
                        </a>                        
                    </div>
                    <div className="two"></div>
                    <div className="three"></div>
                    <div className="four"></div>
                    <div className="five"></div>
                </div>
            </div>
        </section>
    )
}

export default Works;