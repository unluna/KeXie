import React, {useEffect, useState} from 'react';

import Layout from '@/layouts';
import MsgItem from '@/pages/MsgItem';
import "./index.less";

function FE() {
    // const [aMsgList, setAMsgList] = useState([]);
    const aMsgList = [
        {
            type: "提问",
            user: "ShiYue",
            time: "46分钟前",
            label: "前端",
            title: "前端真好玩~~",
            good: 50,
            comment: 7
        },
        {
            type: "提问",
            user: "ShiYue",
            time: "46分钟前",
            label: "前端",
            title: "前端真好玩~~",
            good: 50,
            comment: 7
        }
    ];
    return (
        <div className="fe">
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

export default FE;
