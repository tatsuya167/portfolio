import React from "react";
import "./Address.scss"
// import Logo from "./Logo.jsx";

const Address = () => {
    return (
        <section id="footer">
            <div className="wrap-grid">
                <ul>
                    <div className="cpright-logo">
                        LOGO
                        {/* <Logo/> */}
                    </div>
                    <li>
                        <div className="address">
                            <p>clark.taka16@gmai.com</p>
                        </div>
                        <ul className="social-network">
                            <div className="Icon">
                                <a href="/">
                                    LinkedIn
                                    <Icon/>
                                </a>
                            </div>
                            <div className="Icon">
                                <a href="/">
                                    LinkedIn
                                    <Icon/>
                                </a>
                            </div>
                            <div className="Icon">
                                <a href="/">
                                    LinkedIn
                                    <Icon/>
                                </a>
                            </div>
                        </ul>
                    </li>
                    <div className="copyright">
                        <p>copyright&copy;</p>
                    </div>

                </ul>
            </div>
            
        </section>
    )

}

export default Address;