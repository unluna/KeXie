import React, {useEffect, useState} from 'react';
import Aside from '@/pages/Aside';
import Layout from '@/layouts';
import Icon from "@/components/Icon";
import {Input, message} from "antd";
import {reqModeify, reqUserInfo} from "@/utils/api";
import handleSignOut from "@/utils/handleSignOut";
import {withRouter} from 'react-router-dom';

import Cookies from "js-cookie";
import "./index.less";

const UserSetting=()=> {
    const [settingMap, setSettingMap] = useState({
        nickname: true,
        sex: true,
        header: true,
        grade: true,
        department: true,
    });

    const userId = Cookies.get("userId");
    const [inputValueMap, setInputValueMap] = useState({});

    const settingList = [
        {
            name: "昵称",
            content: inputValueMap["nickname"],
            type: "nickname"
        },
        {
            name: "性别",
            content: inputValueMap["sex"],
            type: "sex"
        },
        {
            name: "头像",
            content: inputValueMap["header"],
            type: "header"
        },
        {
            name: "年级",
            content: inputValueMap["grade"],
            type: "grade"
        },
        {
            name: "部门",
            content: inputValueMap["department"],
            type: "department"
        }
    ];

    useEffect(() => {
        getUserInfo();
    }, []);

    const getUserInfo = () => {
        const userId = Cookies.get("userId");
        if (userId) {
            reqUserInfo(userId).then(res => {
                const {data} = res;
                if (data.code === 0) {
                    setInputValueMap(data.data);
                } else {
                    message.error(data.msg)
                }
            })
        } else {
            message.error("登录状态失效，请重新登陆！");
            handleSignOut();
        }
    };

    const handleChangeEditType = (type) => {
        setSettingMap({
            ...settingMap,
            [type]: !settingMap[type]
        })
    };

    const handleChangeInputValue = (ev, type) => {
        ev.persist();
        setInputValueMap({
            ...inputValueMap,
            [type]: ev.target.value.trim()
        })
    };

    const handleInputSave = (type) => {
        reqModeify(userId, type, inputValueMap[type]).then((res) => {
            if (res.data.code === 0) {
                getUserInfo();
                setSettingMap({
                    ...settingMap,
                    [type]: !settingMap[type]
                })
            } else {
                message.error(res.data.msg)
            }

        })
    };

    return (
        <div className="setting">
            <Layout aside={true} nav={true} navType={"setting"}>
                <div className="main-page-content">
                    <h1 className="main-page-content-title">个人资料</h1>
                    <ul className="main-page-content-list">
                        {
                            settingList.map((item, index) =>
                                <li className="main-page-content-list-li" key={index}>
                                    <div className="main-page-content-list-li-tt">{item.name}</div>
                                    <div className="main-page-content-list-li-main">
                                        {
                                            settingMap[item.type] ?
                                                <div className="main-page-content-list-li-main-ctt">
                                                    {item.content}
                                                </div>
                                                :
                                                <div className="main-page-content-list-li-main-ctt">
                                                    <Input
                                                        value={inputValueMap[item.type]}
                                                        onChange={(ev) => handleChangeInputValue(ev, item.type)}
                                                    />
                                                </div>
                                        }
                                        {
                                            settingMap[item.type] ?
                                                <div className="main-page-content-list-li-main-edit"
                                                     onClick={() => handleChangeEditType(item.type)}
                                                >
                                                    <Icon type="Edit"
                                                          className="setting-icon"
                                                    />
                                                    修改
                                                </div> :
                                                <div className="main-page-content-list-li-main-edit">
                                                    <Icon type="CloseCircle"
                                                          className="setting-icon"
                                                          twoToneColor="rgb(242,38,19)"
                                                          onClick={() => handleChangeEditType(item.type)}
                                                    />
                                                    <span onClick={() => handleInputSave(item.type)}
                                                    >保存</span>
                                                </div>
                                        }
                                    </div>
                                </li>
                            )
                        }
                    </ul>
                </div>
                <Aside/>
            </Layout>
        </div>
    );
}

export default withRouter(UserSetting);
