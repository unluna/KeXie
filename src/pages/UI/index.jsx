import React, {useEffect, useState} from 'react';

import Layout from '@/layouts';
import MsgItem from '@/pages/MsgItem';
import "./index.less";

function UI() {
    const aMsgList = [
        {
            type: "UI",
            user: "ShiYue",
            time: "46分钟前",
            label: "关注",
            title: "前端真好玩~~",
            good: 50,
            comment: 7
        },
        {
            type: "UI",
            user: "ShiYue",
            time: "46分钟前",
            label: "关注",
            title: "前端真好玩~~",
            good: 50,
            comment: 7
        }
    ];
    return (
        <div className="ui">
            <Layout aside={true}>
                <div className="main-page-content">
                    <ul className="main-page-content-header">
                        <li>热门</li>
                        <li>最新</li>
                    </ul>
                    <ul className="main-page-content-main">
                        {
                            aMsgList.map((item, index) =>
                                <MsgItem msg={item} key={index}/>
                            )
                        }
                    </ul>
                </div>
                <aside className="main-page-aside">
                    <div className="main-page-aside-item"/>
                    <div className="main-page-aside-item"/>
                </aside>
            </Layout>
        </div>
    );
}

export default UI;
