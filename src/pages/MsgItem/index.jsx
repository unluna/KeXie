import React, {useEffect, useState} from 'react';

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
        </li>
    );
}

export default MsgItem;
