import React from "react";
import "./index.less"

const Body = (props) => {
    const {
        children
    } = props;
    return (
        <main className="body">
            <div  className="body-main">
                {children}
            </div>
        </main>
    );
};

export default Body;
