import React, {useEffect, useState} from 'react';
import ReactMarkdown from 'react-markdown';
import CodeBlock from './CodeBlock'
import Layout from '@/layouts';
import Aside from '@/pages/Aside';
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
                <Aside rules={{message: true}}/>
            </Layout>
        </div>
    );
}

export default Message;
