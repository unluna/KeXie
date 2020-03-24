import React, {useEffect, useState} from 'react';
import {reqMsgList} from "@/utils/api"
import {message} from "antd";

import "./index.less";

function MainNav(props) {
    const [navType, setNavType] = useState("hot");

    const {urlType = [], changeMsgList} = props;
    const handleNavClick = (type) => {
        setNavType(type);
        ajaxMsgList(urlType, type)
    };

    const ajaxMsgList = (urlType, navType) => {
        reqMsgList({urlType, navType}).then((res) => {
            const {data} = res;
            if (data.code === 0) {
                changeMsgList(data.data);
            } else if (data.code === 1) {
                message.error(data.msg);
                changeMsgList([]);
            }
        })
    };
    useEffect(() => {
        if(urlType.length===2){
            ajaxMsgList(urlType, navType);
        }
    }, [urlType]);

    return (
        <ul className="main-page-content-header">
            <li className={`${navType === "hot" ? "main-page-content-header-li-active" : ""}`}
                onClick={() => handleNavClick("hot")}>热门
            </li>
            <li className={`${navType === "new" ? "main-page-content-header-li-active" : ""}`}
                onClick={() => handleNavClick("new")}>最新
            </li>
        </ul>
    );
}

export default MainNav;
