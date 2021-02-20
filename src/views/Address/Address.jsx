import React from "react";
import "./Address.scss"
import Logo from "./logo.jsx";

const Address = () => {
    return (
        <section id="footer">
            <div className="wrap-grid">
                <ul>
                    <li>
                        <Logo/>
                    </li>                    
                    <li>                        
                        <ul className="social-network">
                            <div className="address">
                                <p>clark.taka16@gmai.com</p>
                            </div>
                            <li className="Icon">
                                <a href="/">
                                    LinkedIn
                                    {/* <Icon/> */}
                                </a>
                            </li>
                            <li className="Icon">
                                <a href="/">
                                    Github
                                    {/* <Icon/> */}
                                </a>
                            </li>
                            <li className="Icon">
                                <a href="/">
                                    Facboock
                                    {/* <Icon/> */}
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <div className="copyright">
                            <p>copyright&copy;</p>
                        </div>                        
                    </li>

                </ul>
            </div>
            
        </section>
    )

}

export default Address;