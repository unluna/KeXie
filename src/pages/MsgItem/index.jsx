import React, {useEffect, useState} from 'react';

import Icon from "@/components/Icon"
import "./index.less";

function MsgItem(props) {

    const {
        msg: {
            type = "",
            user = "",
            time = "",
            label = "",
            title = "",
            good = 0,
            comment = 0
        }
    } = props;


    return (
        <li className="msg-item">
            <div className="msg-item-hd">
                <div className="msg-item-hd-label">{type}</div>
                <div className="msg-item-hd-info">{user}</div>
                <div className="msg-item-hd-info">{time}</div>
                <div className="msg-item-hd-info">{label}</div>
            </div>
            <div className="msg-item-title">
                {title}
            </div>
            <div className="msg-item-action">
                <div className="msg-item-action-item">
                    <div>
                        <Icon className="msg-item-action-item-icon"
                              type="LikeOutlined"
                        />
                    </div>
                    <div className="msg-item-action-item-num">{good}</div>
                </div>
                <div className="msg-item-action-item">
                    <div>
                        <Icon className="msg-item-action-item-icon"
                              type="FireOutlined"
                        />
                    </div>
                    <div className="msg-item-action-item-num">{comment}</div>
                </div>
            </div>
        </li>
    );
}

export default MsgItem;
