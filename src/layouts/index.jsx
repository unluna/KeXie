import React from "react";
import "./index.less"
import Header from './Header'
import Body from './Body'
import Nav from './Nav'

const Layout = (props) => {
    const {
        children,
        aside = true,
        nav = true
    } = props;
    return (
        <>
            <Header/>
            {
                nav ? <Nav/> : null
            }
            <Body aside={aside} nav={nav}>
                {children}
            </Body>
        </>
    );
};

export default Layout;
