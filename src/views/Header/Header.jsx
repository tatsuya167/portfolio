import React from "react";
import "./Header.scss"

// import mount_img from "../../assets/"

const Header = () => {
    return (
        <section id="header">
            <div className="header-container">
                <h2>I'm Tatsuya Takarabe</h2>
                <h2>Front-End Developer</h2>
                <h2>Based in Vancouver</h2>
            </div>

            <div className="mount-1">
                <svg width="901" height="690" viewBox="0 0 901 767" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M393.917 393.093L179.5 0L-242.687 774H601.687L600.596 772H900.802L544 118L393.917 393.093Z" fill="#C4C4C4"/>
                </svg>
            </div>
            <div className="mount-2">
                <svg width="455" height="500" viewBox="0 0 455 649" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M357 0L713.802 654H0.19754L357 0Z" fill="#C4C4C4"/>
                </svg>
            </div>

        </section>
    );
};

export default Header;