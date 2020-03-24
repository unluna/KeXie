import React, {useEffect, useState} from 'react';
import ReactMarkdown from 'react-markdown';
import CodeBlock from './CodeBlock'
import Layout from '@/layouts';
import "./index.less";

function Message() {
    const input = "# haha";

    return (
        <div className="msg">
            <Layout>
                <div className="write-md">
                    <ReactMarkdown
                        source={input}
                        escapeHtml={false}
                        renderers={{
                            code: CodeBlock
                        }}
                    />
                </div>
                <aside className="main-page-aside">
                    <div className="main-page-aside-item"/>
                    <div className="main-page-aside-item"/>
                </aside>
            </Layout>
        </div>
    );
}

export default Message;
