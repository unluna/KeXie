import React, {useEffect, useState} from 'react';
import Editor from 'for-editor';

import Layout from '@/layouts';
import MsgItem from '@/pages/MsgItem';
import "./index.less";

function Recommend() {
    const [value, setValue] = useState("");
    const handleChange = (value) => {
        setValue(value)
    };
    return (
        <div className="App">
            <Layout aside={true}>
                <div className="main-page-content">
                    <ul className="main-page-content-header">
                        <li>热门</li>
                        <li>最新</li>
                    </ul>
                    <ul className="main-page-content-main">
                        <MsgItem/>
                        <MsgItem/>
                        <MsgItem/>
                        <MsgItem/>
                        <MsgItem/>
                        <MsgItem/>
                        <MsgItem/>
                    </ul>
                </div>
                <aside className="main-page-aside">
                    <div className="main-page-aside-item"/>
                    <div className="main-page-aside-item"/>
                </aside>
            </Layout>
            {/*<Editor value={value} onChange={(value) => handleChange(value)}/>*/}
        </div>
    );
}

export default Recommend;
