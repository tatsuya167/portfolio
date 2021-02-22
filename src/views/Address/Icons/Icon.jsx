import React from "react";
import SVG from "./svg.js";
import "./Icon.scss"

const Icon = (prop) => {    
    const icon = SVG[prop.name];
    return (
        <div className="svg-icon">
            {icon}
        </div>
    )
}

export default Icon;