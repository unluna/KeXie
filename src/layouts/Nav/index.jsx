import React, {useState, useEffect} from "react";
import "./index.less"
import {withRouter} from 'react-router-dom';

const Nav = (props) => {
    const {history, match} = props;
    const [route, setRoute] = useState("");

    useEffect(() => {
        setRoute(match.path)
    }, []);

    const oRouteMap = {
        recommend: "推荐",
        follow: "关注",
        fe: "前端",
        rd: "后台",
        game: "游戏",
        ui: "媒体",
        read: "杂谈",
    };
    const handleNavClick = (route) => {
        history.push(`/${route}`);
    };
    return (
        <nav className="nav">
            <ul className="nav-list">
                {
                    Object.keys(oRouteMap).map((item, index) =>
                        <li key={index}
                            className={
                                route === `/${item}`
                                    ? "nav-list-li-active"
                                    : "nav-list-li-common"
                            }
                            onClick={() =>
                                handleNavClick(item)
                            }
                        >
                            {oRouteMap[item]}
                        </li>
                    )
                }
            </ul>
        </nav>
    );
};

export default withRouter(Nav);
