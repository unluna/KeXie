import React from "react";
import "./index.less";
import Icon from "@/components/Icon";
import Button from "@/components/Button";

const Header = () => {
    return (
        <header className="header">
            <div className="header-main">
                <div className="header-main-home">
                    <div className="header-main-home-logo"/>
                    <div className="header-main-home-title">
                        数据科协
                    </div>
                </div>
                <ul className="header-main-list">
                    <li>
                        <Button className="header-main-list-btn">
                            写文章
                        </Button>
                    </li>
                    <li>
                        <Icon type="BellOutlined"
                              className="header-main-list-notice-icon"
                        />
                    </li>
                    <li className="header-main-list-li header-main-list-user-icon"
                        style={{
                            backgroundImage:`url("http://baike.kaiwind.com/jplb/201406/02/W020140602369270434118.png")`
                        }}
                    />
                </ul>
            </div>
        </header>
    );
};

export default Header;
