import React from "react";
import "./index.less"

const Nav = (props) => {
    const {children} = props;
    return (
        <nav className="nav">
            <ul className="nav-list">
                <li>推荐</li>
                <li>关注</li>
                <li>前端</li>
                <li>后台</li>
                <li>游戏</li>
                <li>媒体</li>
                <li>杂谈</li>
            </ul>
        </nav>
    );
};

export default Nav;
