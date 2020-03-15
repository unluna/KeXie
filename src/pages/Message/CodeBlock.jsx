import React, {useState, useEffect} from "react";
import {PrismLight as SyntaxHighlighter} from "react-syntax-highlighter";
// import {base16AteliersulphurpoolLight} from 'react-syntax-highlighter/dist/esm/styles/prism';
// import {funky} from 'react-syntax-highlighter/dist/esm/styles/prism';
// import {pojoaque} from 'react-syntax-highlighter/dist/esm/styles/prism';
import {prism} from 'react-syntax-highlighter/dist/esm/styles/prism';
// import {xonokai} from 'react-syntax-highlighter/dist/esm/styles/prism';

// import {tomorrow} from 'react-syntax-highlighter/dist/esm/styles/prism';

import {
    jsx,
    javascript,
    java,
    docker,
    css,
    c,
    go,
    git,
    less,
    markdown,
    php,
    r,
    sql
} from "react-syntax-highlighter/dist/esm/languages/prism";

const CodeBlock = (props) => {

    const {
        value,
        lan = "javascript"
    } = props;

    useEffect(() => {
        SyntaxHighlighter.registerLanguage("jsx", jsx);
        SyntaxHighlighter.registerLanguage("javascript", javascript);
        SyntaxHighlighter.registerLanguage("java", java);
        SyntaxHighlighter.registerLanguage("docker", docker);
        SyntaxHighlighter.registerLanguage("css", css);
        SyntaxHighlighter.registerLanguage("c", c);
        SyntaxHighlighter.registerLanguage("go", go);
        SyntaxHighlighter.registerLanguage("git", git);
        SyntaxHighlighter.registerLanguage("less", less);
        SyntaxHighlighter.registerLanguage("markdown", markdown);
        SyntaxHighlighter.registerLanguage("php", php);
        SyntaxHighlighter.registerLanguage("r", r);
        SyntaxHighlighter.registerLanguage("sql", sql);
    }, []);

    return (
        <SyntaxHighlighter
            language={lan}
            // style={base16AteliersulphurpoolLight}
            // style={funky}
            // style={pojoaque}
            style={prism}
            // style={tomorrow}
            // style={xonokai}
        >
            {value}
        </SyntaxHighlighter>
    );
};

export default CodeBlock;
