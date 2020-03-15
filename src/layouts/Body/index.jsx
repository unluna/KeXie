import React from "react";
import "./index.less"

const Body = (props) => {
    const {
        children,
        aside,
        nav
    } = props;
    return (
        <main
            className={`body ${nav
                ? "body-has-nav"
                : "body-not-nav"
                }`
            }
        >
            <div
                className={
                    `${aside
                        ? "body-short-main"
                        : "body-long-main"}`
                }
            >
                {children}
            </div>
        </main>
    );
};

export default Body;
