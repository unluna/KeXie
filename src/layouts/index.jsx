import React, {useState, useEffect} from "react";
import "./index.less"
import Header from './Header'
import Body from './Body'
import Nav from './Nav'
import {reqMsgType} from "@/utils/api";
import {message} from "antd";

const Layout = (props) => {
    const {
        children,
        aside = true,
        nav = true,
        markdownValue = "",
        getLabelType,
        navType
    } = props;
    const [aLabelType, setALabelType] = useState([]);
    const [aCategoryType, setACategoryType] = useState([]);

    // 获取文章标签 api
    useEffect(() => {
        reqMsgType().then((res) => {
            const {data: resData} = res;
            const categoryType = [];
            const labelType = [];
            if (resData) {
                const {code = 1, msg = "后台服务出错，请联系管理员！", data = []} = resData;
                if (code === 0) {
                    data.forEach(item => {
                        if (item.type === "label") {
                            labelType.push(item);
                        } else if (item.type === "department") {
                            categoryType.push(item);
                        }
                    });
                    setALabelType(labelType);
                    setACategoryType(categoryType);
                    if (getLabelType) {
                        getLabelType(labelType, categoryType)
                    }
                } else if (code === 1) {
                    message.error(msg);
                }
            }
        })
    }, []);

    return (
        <>
            <Header
                markdownValue={markdownValue}
                aLabelType={aLabelType}
                aCategoryType={aCategoryType}
            />
            {
                nav ? <Nav navType={navType}/> : null
            }
            <Body aside={aside} nav={nav}>
                {children}
            </Body>
        </>
    );
};

export default Layout;
