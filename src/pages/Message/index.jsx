import React, {useEffect, useState} from 'react';
import ReactMarkdown from 'react-markdown';
import {message} from "antd";
import CodeBlock from './CodeBlock'
import Layout from '@/layouts';
import Aside from '@/pages/Aside';
import {withRouter} from 'react-router-dom';
import {reqMsgInfo} from '@/utils/api';

import "./index.less";

const Message = (props) => {
    const {history, match} = props;
    const [msgMap, setMsgMap] = useState({});

    useEffect(() => {
        const {id} = match.params;

        if (id) {
            reqMsgInfo(id).then((res) => {
                const {data} = res;
                if (data.code === 0) {
                    const {data:{msgContent,msgTitle}} = data;
                    setMsgMap({
                        msgContent:`# ${msgTitle}\n${msgContent}`
                    })
                } else {
                    message.error(data.msg);
                    history.replace("/404")
                }
            })
        } else {
            message.error("无效的路径!");
            history.replace("/404")
        }
    }, []);

    return (
        <div className="msg">
            <Layout nav={false}>
                <div className="write-md">
                    <div className="write-md-hd">
                        <div className="write-md-hd-img"/>
                        <div className="write-md-hd-ctt">
                            <div className="write-md-hd-ctt-top">
                                <div className="write-md-hd-ctt-top-user">镜子大师</div>
                                <div className="write-md-hd-ctt-top-level">Lv2</div>
                            </div>
                            <div className="write-md-hd-ctt-btm">
                                <div className="write-md-hd-ctt-btm-date">2020-03-03</div>
                                <div className="write-md-hd-ctt-btm-edit">编辑</div>
                            </div>
                        </div>
                    </div>
                    <ReactMarkdown
                        source={msgMap.msgContent}
                        escapeHtml={false}
                        renderers={{
                            code: CodeBlock
                        }}
                    />
                </div>
                <Aside rules={{message: true}}/>
            </Layout>
        </div>
    );
}

export default withRouter(Message);
