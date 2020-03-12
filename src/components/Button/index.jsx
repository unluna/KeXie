import React from "react";
import "./index.less"

const Button = (props) => {

    const {
        type,
        className,
        children
    } = props;

    return (
        <div className={`button ${className}`}
        >
            {children}
        </div>
    )
};

export default Button;
