import React, {useState, useEffect} from "react";
import "./index.less"
import {withRouter} from 'react-router-dom';

const Nav = (props) => {
    const {history, match, navType = "msg"} = props;

    const [routeMap, setRouteMap] = useState({});



    const route = match.path;
    const oMsgRouteMap = {
        recommend: "推荐",
        follow: "关注",
        fe: "前端",
        rd: "后台",
        game: "游戏",
        ui: "媒体",
        read: "杂谈",
    };
    const oSettingRouteMap = {
        usersetting: "个人资料",
        passwordsetting: "修改密码"
    };
    useEffect(() => {
        if(navType==="msg"){
            setRouteMap(oMsgRouteMap);
        }else {
            setRouteMap(oSettingRouteMap);
        }
    }, [navType]);


    const handleNavClick = (route) => {
        history.push(`/${route}`);
    };
    return (
        <nav className="nav">
            <ul className="nav-list">
                {
                    Object.keys(routeMap).map((item, index) =>
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
                            {routeMap[item]}
                        </li>
                    )
                }
            </ul>
        </nav>
    );
};

export default withRouter(Nav);
