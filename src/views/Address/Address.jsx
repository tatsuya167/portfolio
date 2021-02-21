import React from "react";
import "./Address.scss"
import Logo from "./logo.jsx";
import Icon from "./Icons/Icon.jsx";

const Address = () => {
    return (
        <section id="address">
            <div className="align-container">
                <ul>
                    <div className="logo">
                        <Logo/>
                    </div>              
                    <li className="social-network">
                        <div className="address">
                            <p>clark.taka16@gmail.com</p>
                        </div>
                        <ul className="align-Icon">
                            <a href="/">
                                {/* LinkedIn */}                                
                                <Icon name="LinkedIn"/>
                            </a>
                            <a href="/">
                                {/* GitHub */}
                                <Icon name="GitHub"/>
                            </a>                        
                            <a href="/">
                                {/* Facebook */}
                                <Icon name="Facebook"/>
                            </a>
                        </ul>    
                    </li>                    
                </ul>
            </div>
        </section>
    )

}

export default Address;