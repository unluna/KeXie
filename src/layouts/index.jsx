import React from "react";
import "./index.less"
import Header from './Header'
import Body from './Body'
import Nav from './Nav'

const Layout = (props) => {
    const {
        children
    } = props;
    return (
        <>
            <Header/>
            <Nav/>
            <Body>
                {children}
            </Body>
        </>
    );
};

export default Layout;
