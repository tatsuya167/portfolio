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
                        <a href="https://icons8.com/icon/104390/mountain">
                            {/* Mountain icon by Icons8 */}
                            <img src="https://img.icons8.com/wired/64/000000/mountain.png" width="96" height="96"/>
                        </a>
                        {/* <Logo/> */}
                    </div>              
                    <li className="social-network">
                        <div className="address">
                            <ul>
                                <p>Contact:&nbsp;&nbsp;</p>
                                <p>clark.taka16@gmail.com</p>
                            </ul>                            
                        </div>
                        <ul className="align-Icon">
                            <a href="https://www.linkedin.com/in/tatsuya-takarabe-2a5548194/" target="_blank">
                                {/* LinkedIn */}                                
                                <Icon name="LinkedIn"/>
                            </a>
                            <a href="https://github.com/tatsuya167" target="_blank">
                                {/* GitHub */}
                                <Icon name="GitHub"/>
                            </a>                        
                            <a href="/" target="_blank">
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