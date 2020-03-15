import React from "react";
import "./index.less"

const Button = (props) => {

    const {
        type,
        className,
        children,
        onClick
    } = props;

    return (
        <div className={`button ${className}`}
             onClick={onClick}
        >
            {children}
        </div>
    )
};

export default Button;
