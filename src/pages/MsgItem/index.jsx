import React, {useEffect, useState} from 'react';

import Icon from "@/components/Icon"
import "./index.less";

function MsgItem() {

    return (
        <li className="msg-item">
            <div className="msg-item-hd">
                <div className="msg-item-hd-label">专栏</div>
                <div className="msg-item-hd-info">ShiYue</div>
                <div className="msg-item-hd-info">46分钟前</div>
                <div className="msg-item-hd-info">CSS</div>
            </div>
            <div className="msg-item-title">
                CSS中容易被忽视的 position属性sticky
            </div>
            <div className="msg-item-action">
                <div className="msg-item-action-item">
                    <div>
                        <Icon className="msg-item-action-item-icon"
                            type="BellOutlined"
                        />
                    </div>
                    <div className="msg-item-action-item-num">100</div>
                </div>
                <div className="msg-item-action-item">
                    <div>
                        <Icon className="msg-item-action-item-icon"
                              type="BellOutlined"
                        />
                    </div>
                    <div className="msg-item-action-item-num">10</div>
                </div>
            </div>
        </li>
    );
}

export default MsgItem;
