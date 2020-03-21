import React, {useState, useEffect} from "react";
import {Menu, Dropdown, Modal, Input, message} from "antd";
import "./index.less";
import Icon from "@/components/Icon";
import Button from "@/components/Button";
import {withRouter} from 'react-router-dom';
import {reqLogin} from "@/utils/api"
import Cookies from 'js-cookie' //可以从操作前端cookie的对象 set()/remove()/get()

const Header = (props) => {
    const {history} = props;
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const [isLogin, setIsLogin] = useState(false);
    const [modalDisplay, setModalDisplay] = useState(false);
    const url = history.location.pathname;

    useEffect(() => {
        readIsLogin()
    }, []);

    const readIsLogin = () => {
        const userId = Cookies.get('userId');
        if (userId) {
            setIsLogin(true);
        }
    };

    const handleChange = (value, ajaxType) => {
        value.persist();

        switch (ajaxType) {
            case "username":
                setUsername(value.target.value.trim());
                break;
            case "password":
                setPassword(value.target.value.trim());
                break;
            default:
                break;
        }
    };

    const handleLogin = () => {
        if (!username || !password) {
            message.error("用户名或密码不能为空！");
            return
        }
        reqLogin({username, password}).then((res) => {
            const {data = {}} = res;
            if (data.code === 1) {
                message.error(data.msg);
                return
            }
            if (data.code === 0) {
                message.success(data.msg);
                readIsLogin();
                handleCancelModal();
            }
        })
    };

    const handleCancelModal = () => {
        setUsername();
        setPassword();
        setModalDisplay(false);
    };

    const handleShowModal = () => {
        setModalDisplay(true);
    };

    const handleWrite = () => {
        history.push(`/write`);
    };

    return (
        <header className="header">
            <div className="header-main">
                <div className="header-main-home">
                    <div className="header-main-home-logo"/>
                    <div className="header-main-home-title">
                        数据科协
                    </div>
                </div>
                {
                    isLogin ?
                        <ul className="header-main-list">
                            <li>
                                {
                                    url === '/write'
                                        ?
                                        <Dropdown
                                            overlay={
                                                <Menu className="my-dropdown">
                                                    <div className="my-dropdown-title">发布文章</div>
                                                    <div className="my-dropdown-category">分类</div>
                                                    <ul  className="my-dropdown-category-ul">
                                                        <li className="my-dropdown-category-ul-li my-dropdown-category-ul-li-common">前端</li>
                                                        <li className="my-dropdown-category-ul-li my-dropdown-category-ul-li-common">前端</li>
                                                        <li className="my-dropdown-category-ul-li my-dropdown-category-ul-li-common">前端</li>
                                                        <li className="my-dropdown-category-ul-li my-dropdown-category-ul-li-active">前端</li>
                                                    </ul>
                                                    <div className="my-dropdown-category">标签</div>
                                                    <ul  className="my-dropdown-category-ul">
                                                        <li className="my-dropdown-category-ul-li my-dropdown-category-ul-li-common">提问</li>
                                                        <li className="my-dropdown-category-ul-li my-dropdown-category-ul-li-common">草稿</li>
                                                        <li className="my-dropdown-category-ul-li my-dropdown-category-ul-li-common">文章</li>
                                                        <li className="my-dropdown-category-ul-li my-dropdown-category-ul-li-active">笔记</li>
                                                        <li className="my-dropdown-category-ul-li my-dropdown-category-ul-li-active">讨论</li>
                                                    </ul>
                                                    <div className="my-dropdown-btn">确认并发布</div>
                                                </Menu>
                                            }
                                        >
                                            <a className="header-main-list-send"
                                            >
                                                发布
                                            </a>
                                        </Dropdown>
                                        :
                                        <Button
                                            onClick={() => handleWrite()}
                                            className="header-main-list-btn"
                                        >
                                            写文章
                                        </Button>
                                }


                            </li>
                            <li>
                                <Icon type="BellOutlined"
                                      className="header-main-list-notice-icon"
                                />
                            </li>
                            <li className="header-main-list-li header-main-list-user-icon"
                                style={{
                                    backgroundImage: `url("http://baike.kaiwind.com/jplb/201406/02/W020140602369270434118.png")`
                                }}
                            />
                        </ul>
                        :
                        <p className="header-login"
                           onClick={() => handleShowModal()}
                        >登录</p>
                }

            </div>
            <Modal
                visible={modalDisplay}
                cancelText={"取消"}
                closable={false}
                destroyOnClose={true}
                okText={"确定"}
                title={"登录"}
                width={318}
                onOk={() => handleLogin()}
                onCancel={() => handleCancelModal()}
            >
                <div className="header-model">
                    账号： <Input className="header-model-input"
                               placeholder="请输入账号："
                               value={username}
                               onChange={(ev) => handleChange(ev, "username")}
                />
                    密码： <Input className="header-model-input"
                               placeholder="请输入密码："
                               type="password"
                               value={password}
                               onChange={(ev) => handleChange(ev, "password")}
                />
                </div>
            </Modal>
        </header>
    );
};

export default withRouter(Header);
