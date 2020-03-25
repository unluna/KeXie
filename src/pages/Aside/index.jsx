import React, {useState, useEffect} from 'react';
import Cookies from 'js-cookie';
import {Modal, Input, Radio, message} from "antd";
import handleSignOut from "@/utils/handleSignOut";
import {reqSignUp} from "@/utils/api";
import imgUrl from "@/assets/images";
import {withRouter} from 'react-router-dom';

import "./index.less";

const Aside = (props) => {

    const {history} = props;

    const {asideRootImg} = imgUrl;
    const [root, setRoot] = useState(false);
    const [rootModalDisplay, setRootModalDisplay] = useState(false);
    const [checkboxSelected, setCheckboxSelected] = useState("student");
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    useEffect(() => {
        const userType = Cookies.get('userType');
        if (userType === "root") {
            setRoot(true);
        }
    }, []);

    const handleShowRootModel = () => {
        setRootModalDisplay(true);
    };

    const handleChange = (ev, value) => {

        switch (value) {
            case "username":
                ev.persist();
                setUsername(ev.target.value.trim());
                break;
            case "password":
                ev.persist();
                setPassword(ev.target.value.trim());
                break;
            case "student":
            case "teacher":
            case "root":
                setCheckboxSelected(value);
            default:
                break;
        }
    };

    const handleSignUp = () => {
        if (!username || username.length > 8 || !(/^\d+$/.test(username))) {
            message.error("账号不能超过8位，且只能为数字！");
            return
        }
        if (!password || password.length > 20 || !(/^[A-Za-z0-9]+$/.test(password))) {
            message.error("密码不能超过20位，且只能为数字和英文！");
            return
        }

        const userId = Cookies.get('userId');

        if (userId) {
            reqSignUp(userId, username, password, checkboxSelected).then(res => {
                const {data} = res;
                if (data.code === 0) {
                    message.success(data.msg);
                    handleCancelRootModal();
                } else if (data.code === 1) {
                    message.error(data.msg);
                }
            });
        } else {
            handleSignOut(true);
        }
    };


    const handleCancelRootModal = () => {
        setUsername();
        setPassword();
        setCheckboxSelected("student");
        setRootModalDisplay(false);
    };


    return (
        <aside className="main-page-aside">
            {
                root ?
                    <div className="main-page-aside-item main-page-aside-root"
                         onClick={() => handleShowRootModel()}
                    >
                        <div className="main-page-aside-root-font">加入我们</div>
                        <div className="main-page-aside-root-img"
                             style={{backgroundImage: `url('${asideRootImg}')`}}
                        >
                        </div>
                    </div>
                    : null
            }
            <div className="main-page-aside-item"/>
            <Modal
                visible={rootModalDisplay}
                cancelText={"取消"}
                closable={false}
                destroyOnClose={true}
                okText={"确定"}
                title={"注册"}
                width={318}
                onOk={() => handleSignUp()}
                onCancel={() => handleCancelRootModal()}
            >
                <div className="root-model">
                    账号：
                    <Input
                        className="root-model-item"
                        placeholder="请输入要注册的账号："
                        value={username}
                        onChange={(ev) => handleChange(ev, "username")}
                    />
                    密码：
                    <Input
                        className="root-model-item"
                        placeholder="请输入要注册的账号密码："
                        value={password}
                        onChange={(ev) => handleChange(ev, "password")}
                    />
                    <div className="root-model-item">
                        <Radio
                            checked={checkboxSelected === "student"}
                            onChange={(ev) => handleChange(ev, "student")}
                        >
                            学生
                        </Radio>
                        <Radio
                            checked={checkboxSelected === "teacher"}
                            onChange={(ev) => handleChange(ev, "teacher")}
                        >
                            教师
                        </Radio>
                        <Radio
                            checked={checkboxSelected === "root"}
                            onChange={(ev) => handleChange(ev, "root")}
                        >
                            管理员
                        </Radio>
                    </div>
                </div>
            </Modal>
        </aside>
    );
};

export default withRouter(Aside);
