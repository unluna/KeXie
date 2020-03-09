import React from "react";
import "./index.less"
import Header from './Header'
import Body from './Body'

const Layout = () => {
    return (
        <div className="header">
            <Header/>
            <Body/>
        </div>
    );
};

export default Layout;
