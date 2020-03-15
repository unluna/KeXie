import React, {useEffect, useState} from 'react';
import ReactMarkdown from 'react-markdown';
import htmlParser from 'react-markdown/plugins/html-parser';

import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter';
import {dark} from 'react-syntax-highlighter/dist/esm/styles/prism';
import CodeBlock from './CodeBlock'
import Layout from '@/layouts';
import "./index.less";

function Message() {

    const input = "# 一、准备工作\n" +
        "## 安装 koa、热更新用的 supervisor" +
        "\n" +
        "> PS：安装 Node.js 就不介绍了，最新版本就 ok" +
        "\n" +
        "```" +
        "\n" +
        "npm init -y\n" +
        "cnpm i koa --save\n" +
        "cnpm i supervisor --save-dev\n" +
        "```\n" +
        "## 建立入口文件 app.js\n" +
        "\n" +
        "./app.js\n" +
        "\n" +
        "```\n" +
        "const Koa = require(\"koa\");\n" +
        "const app = new Koa();\n" +
        "\n" +
        "app.listen(3000,()=>{\n" +
        "    console.log(\"server is running..\")\n" +
        "});\n" +
        "```\n" +
        "\n" +
        "./package.json\n" +
        "\n" +
        "```\n" +
        "···\n" +
        "  \"scripts\": {\n" +
        "    \"start\": \"npm run dev\",\n" +
        "    \"dev\": \"supervisor -i ./node_modules ./app.js\"\n" +
        "  },\n" +
        "···\n" +
        "```\n" +
        "\n" +
        "<font style=\"color:red\">\n" +
        "注意 supervisor -i ./node_modules ./app.js 这条命令！\n" +
        "</font>\n" +
        "要是不把 ./node_modules 排除掉的话，supervisor 会吃光你的内存，风扇狂转！\n" +
        "\n" +
        "\n" +
        "# 二、建立 controller\n" +
        "\n" +
        "## 建立如图所示目录结构\n" +
        "\n" +
        "![](https://user-gold-cdn.xitu.io/2020/3/2/17099eff663e1523?w=470&h=390&f=png&s=33720)\n" +
        "\n" +
        "> controller 么，先对路由下手就完了 ~\n" +
        "\n" +
        "## 所以，继续下和路由有关的包吧~\n" +
        "\n" +
        "```\n" +
        " cnpm i koa-simple-router --save\n" +
        "```\n" +
        "\n" +
        "## ok，我们可以愉快的写 controller 的父类了\n" +
        "\n" +
        "./controllers/indexControllers.js\n" +
        "\n" +
        "```\n" +
        "class IndexControllers {\n" +
        "    constructor() {\n" +
        "\n" +
        "    }\n" +
        "\n" +
        "    actionIndex(ctx, next) {\n" +
        "        ctx.body = \"koa2 is running~~\";\n" +
        "    }\n" +
        "}\n" +
        "\n" +
        "module.exports = IndexControllers;\n" +
        "```\n" +
        "\n" +
        "## 继承父类的 controller\n" +
        "\n" +
        "./controllers/index.js\n" +
        "\n" +
        "```\n" +
        "const router = require(\"koa-simple-router\");\n" +
        "const IndexController = require(\"./indexControllers\");\n" +
        "const indexController = new IndexController();\n" +
        "\n" +
        "module.exports = app => {\n" +
        "    app.use(router(_ => {\n" +
        "        _.get(\"/\", indexController.actionIndex);\n" +
        "        _.get('/index.html', indexController.actionIndex);\n" +
        "    }))\n" +
        "};\n" +
        "```\n" +
        "\n" +
        "> _.get(\"/\", indexController.actionIndex);\\\n" +
        "_.get('/index.html', indexController.actionIndex); `伪静态`\n" +
        "\n" +
        "## 回到入口文件 app.js 注册路由\n" +
        "\n" +
        "```\n" +
        "const Koa = require(\"koa\");\n" +
        "const app = new Koa();\n" +
        "// 注册路由\n" +
        "require(\"./controllers/index\")(app);\n" +
        "\n" +
        "app.listen(3000,()=>{\n" +
        "    console.log(\"server is running..\")\n" +
        "});\n" +
        "\n" +
        "```\n" +
        "> OK! 我们现在应可以启动服务了，`npm start` 之后[访问本地服务](http://localhost:3000/)，就可以看到效果了，是不是还有点儿小激动？\n" +
        "\n" +
        "\n" +
        "![](https://user-gold-cdn.xitu.io/2020/3/2/1709a10bbab00c1a?w=816&h=534&f=png&s=31102)\n" +
        "\n" +
        "---\n" +
        "\n" +
        "# 三、建立配置文件优化项目\n" +
        "\n" +
        "> app.js 里面的`app.listen(3000,()=>{console.log(\"server is running..\")});`的`3000`扔到入口文件不伦不类，我们可以把它放到另外的位置\n" +
        "\n" +
        "## 项目根目录建立 config 相关文件，如图所示\n" +
        "![](https://user-gold-cdn.xitu.io/2020/3/2/1709a1add5358f14?w=494&h=508&f=png&s=41503)\n" +
        "\n" +
        "./config/index.js\n" +
        "\n" +
        "```\n" +
        "const config={\n" +
        "    port:3000\n" +
        "};\n" +
        "\n" +
        "module.exports(config);\n" +
        "```\n" +
        "./app.js\n" +
        "\n" +
        "```\n" +
        "const Koa = require(\"koa\");\n" +
        "const app = new Koa();\n" +
        "const config = require(\"./config\");\n" +
        "// 注册路由\n" +
        "require(\"./controllers/index\")(app);\n" +
        "\n" +
        "app.listen(config.port, () => {\n" +
        "    console.log(\"server is running..\")\n" +
        "});\n" +
        "```\n" +
        "> 既然要优化端口，不如把`生产环境的 80 端口`和`开发环境的 3000 端口`分开吧\n" +
        "\n" +
        "## 安装 cross-env\n" +
        "\n" +
        "```\n" +
        "cnpm i cross-env --save-dev\n" +
        "```\n" +
        "## 改造 package.json 和 config.js\n" +
        "\n" +
        "./package.json\n" +
        "```\n" +
        "···\n" +
        "  \"scripts\": {\n" +
        "    \"start\": \"npm run dev\",\n" +
        "    \"dev\": \"cross-env NODE_ENV=development supervisor -i ./node_modules ./app.js\"\n" +
        "  },\n" +
        "···\n" +
        "```\n" +
        "\n" +
        "\n" +
        "\n" +
        "./config/index.js\n" +
        "```\n" +
        "const config = {};\n" +
        "\n" +
        "if (process.env.NODE_ENV === \"development\") {\n" +
        "    config.port = 3000;\n" +
        "} else if (process.env.NODE_ENV === \"production\") {\n" +
        "    config.port = 80;\n" +
        "}\n" +
        "\n" +
        "module.exports = config;\n" +
        "```\n" +
        "# 四、实现 view 层\n" +
        "\n" +
        "## 老规矩，先建立目录吧\n" +
        "\n" +
        "\n" +
        "![](https://user-gold-cdn.xitu.io/2020/3/2/1709a5ae9266001f?w=544&h=1004&f=png&s=73338)\n" +
        "\n" +
        "> 那么问题来了，这些静态文件我们得把它们加载进来呀\n" +
        "\n" +
        "## 安装 koa-static\n" +
        "```\n" +
        "cnpm i koa-static --save\n" +
        "```\n" +
        "## 继续改造 config.js\n" +
        "\n" +
        "./config/index.js\n" +
        "```\n" +
        "const path = require(\"path\");\n" +
        "\n" +
        "const config = {\n" +
        "    staticDir: path.join(__dirname, \"..\", \"assets\")\n" +
        "};\n" +
        "\n" +
        "if (process.env.NODE_ENV === \"development\") {\n" +
        "    config.port = 3000;\n" +
        "} else if (process.env.NODE_ENV === \"production\") {\n" +
        "    config.port = 80;\n" +
        "}\n" +
        "\n" +
        "module.exports = config;\n" +
        "```\n" +
        "## 把静态文件加载进来\n" +
        "./app.js\n" +
        "```\n" +
        "const Koa = require(\"koa\");\n" +
        "const app = new Koa();\n" +
        "const config = require(\"./config\");\n" +
        "const serve = require(\"koa-static\");\n" +
        "// 注册路由\n" +
        "require(\"./controllers/index\")(app);\n" +
        "// 加载静态文件\n" +
        "app.use(serve(config.staticDir));\n" +
        "\n" +
        "app.listen(config.port, () => {\n" +
        "    console.log(\"server is running..\")\n" +
        "});\n" +
        "```\n" +
        "\n" +
        "# 五、实现 Model 层\n" +
        "\n" +
        "> 在这里，我们的模板引擎用的是 koa-swig.js\n" +
        "\n" +
        "## 安装模板引擎\n" +
        "\n" +
        "```\n" +
        "cnpm i koa-swig --save\n" +
        "cnpm i co --save\n" +
        "```\n" +
        "> 注：`co`是历史遗留问题，用来把`koa1`编译成`koa2`\n" +
        "\n" +
        "## 完善 view 层\n" +
        "\n" +
        "./views/layouts/layout.html\n" +
        "> 这个将会是所有模板的“祖宗”\n" +
        "\n" +
        "```\n" +
        "<!DOCTYPE html>\n" +
        "<html lang=\"en\">\n" +
        "<head>\n" +
        "    <meta charset=\"UTF-8\">\n" +
        "    <title>{% block title %}{% endblock %}</title>\n" +
        "\n" +
        "    {% block head %}\n" +
        "    {% endblock %}\n" +
        "\n" +
        "    {% block link %}\n" +
        "    {% endblock %}\n" +
        "</head>\n" +
        "<body>\n" +
        "{% block content %}\n" +
        "{% endblock %}\n" +
        "\n" +
        "{% block script %}\n" +
        "{% endblock %}\n" +
        "</body>\n" +
        "</html>\n" +
        "```\n" +
        "\n" +
        "./views/index.html\n" +
        "> 继承了 layout.html\n" +
        "\n" +
        "```\n" +
        "{% extends './layout.html' %}\n" +
        "{% block title %} 图书管理首页 {% endblock %}\n" +
        "\n" +
        "{% block link %}\n" +
        "<link rel=\"stylesheet\" href=\"/styles/index.css\">\n" +
        "{% endblock %}\n" +
        "\n" +
        "{% block content %}\n" +
        "<div>\n" +
        "    <h1>{{content}}</h1>\n" +
        "</div>\n" +
        "{% endblock %}\n" +
        "\n" +
        "{% block script %}\n" +
        "<script src=\"/scripts/index.js\"></script>\n" +
        "{% endblock %}\n" +
        "```\n" +
        "\n" +
        "./assets/styles/index.css\n" +
        "> css \n" +
        "\n" +
        "```\n" +
        "body{\n" +
        "    background: #000;\n" +
        "}\n" +
        "h1{\n" +
        "    color:greenyellow;\n" +
        "}\n" +
        "p{\n" +
        "    color:yellow;\n" +
        "}\n" +
        "```\n" +
        "\n" +
        "./assets/scripts/index.js\n" +
        "> js \n" +
        "\n" +
        "```\n" +
        "const content = \"你好koa~~\";\n" +
        "console.log(content);\n" +
        "```\n" +
        "\n" +
        "## 完善 controller 层\n" +
        "./controllers/index.js\n" +
        "```\n" +
        "class IndexControllers {\n" +
        "    constructor() {\n" +
        "\n" +
        "    }\n" +
        "\n" +
        "    async actionIndex(ctx, next) {\n" +
        "        ctx.body = await ctx.render('index.html',{\n" +
        "            content:\"hello node!\"\n" +
        "        });\n" +
        "    }\n" +
        "}\n" +
        "\n" +
        "module.exports = IndexControllers;\n" +
        "```\n" +
        "\n" +
        "## 在入口文件注册模板引擎\n" +
        "\n" +
        "./config/index.js\n" +
        "\n" +
        "```\n" +
        "const path = require(\"path\");\n" +
        "\n" +
        "const config = {\n" +
        "    viewDir: path.join(__dirname, \"..\", \"views\"), // 把视图层加载引来\n" +
        "    staticDir: path.join(__dirname, \"..\", \"assets\")\n" +
        "};\n" +
        "\n" +
        "if (process.env.NODE_ENV === \"development\") {\n" +
        "    config.port = 3000;\n" +
        "} else if (process.env.NODE_ENV === \"production\") {\n" +
        "    config.port = 80;\n" +
        "}\n" +
        "\n" +
        "module.exports = config;\n" +
        "```\n" +
        "\n" +
        "./app.js\n" +
        "```\n" +
        "const Koa = require(\"koa\");\n" +
        "const app = new Koa();\n" +
        "const config = require(\"./config\");\n" +
        "const serve = require(\"koa-static\");\n" +
        "const render = require(\"koa-swig\");\n" +
        "const co = require(\"co\");\n" +
        "// 注册路由\n" +
        "require(\"./controllers/index\")(app);\n" +
        "// 加载静态文件\n" +
        "app.use(serve(config.staticDir));\n" +
        "// 配置模板引擎\n" +
        "app.context.render = co.wrap(render({\n" +
        "    root: config.viewDir, // 把视图层加载引来\n" +
        "    autoescape: true,\n" +
        "    cache: false, // 缓存\n" +
        "    ext: 'html',\n" +
        "    writeBody: false\n" +
        "}));\n" +
        "app.listen(config.port, () => {\n" +
        "    console.log(\"server is running..\")\n" +
        "});\n" +
        "```\n" +
        "> OK，我们现在再看下\n" +
        "\n" +
        "![](https://user-gold-cdn.xitu.io/2020/3/2/1709a95463ac7eec?w=1188&h=802&f=png&s=58209)\n" +
        "\n" +
        "> 如果你做到这步了，那么胜利的曙光就要降了！\n" +
        "\n" +
        "# 六、安装 babel \n" +
        "\n" +
        "> 有人会问，现在的代码有什么问题吗？，有，而且不少。\n" +
        "\n" +
        "大家回到 `./assets/scripts/index.js`文件，如果我新增了一行如下代码，那会怎样呢？\n" +
        "\n" +
        "```\n" +
        "const content = \"你好koa~~\";\n" +
        "console.log(content);\n" +
        "\n" +
        "export default content;\n" +
        "```\n" +
        "\n" +
        "![](https://user-gold-cdn.xitu.io/2020/3/2/1709a9995d927b8d?w=1470&h=866&f=png&s=74200)\n" +
        "\n" +
        "> 很正常么，因为它不认识啊，另外如果浏览器不支持`es6`语法怎么办？\n" +
        "\n" +
        "## 安装 babel\n" +
        "```\n" +
        "cnpm i babel @babel-cli --save-dev\n" +
        "cnpm i babel @babel-core --save-dev\n" +
        "cnpm i babel @babel-preset-env --save-dev\n" +
        "```\n" +
        "## 项目根目录新建 .babelrc 文件\n" +
        "\n" +
        "./.babelrc\n" +
        "```\n" +
        "{\n" +
        "  \"presets\": [\n" +
        "    [\n" +
        "      \"@babel/preset-env\",\n" +
        "      {\n" +
        "        \"modules\": \"systemjs\"\n" +
        "      }\n" +
        "    ]\n" +
        "  ]\n" +
        "}\n" +
        "```\n" +
        "## 完善 package.json\n" +
        "\n" +
        "```\n" +
        "···\n" +
        "  \"scripts\": {\n" +
        "    \"start\": \"npm run dev\",\n" +
        "    \"dev\": \"cross-env NODE_ENV=development supervisor -i ./node_modules ./app.js\",\n" +
        "    \"build\": \"babel ./assets/scripts/index.js -o ./assets/scripts/index-bundle.js\"\n" +
        "  },\n" +
        "···\n" +
        "```\n" +
        "\n" +
        "## npm run build 一下\n" +
        "\n" +
        "![](https://user-gold-cdn.xitu.io/2020/3/2/1709aa903bf67404?w=2252&h=1354&f=png&s=254045)\n" +
        "\n" +
        "\n" +
        "## 完善 views/index.html\n" +
        "```\n" +
        "{% extends './layouts/layout.html' %}\n" +
        "{% block title %} 图书管理首页 {% endblock %}\n" +
        "\n" +
        "{% block link %}\n" +
        "<link rel=\"stylesheet\" href=\"/styles/index.css\">\n" +
        "{% endblock %}\n" +
        "\n" +
        "{% block content %}\n" +
        "<div>\n" +
        "    <h1>{{content}}</h1>\n" +
        "</div>\n" +
        "{% endblock %}\n" +
        "\n" +
        "{% block script %}\n" +
        "<script type=\"module\">\n" +
        "    import (\"/scripts/index.js\").then((_) => {\n" +
        "        console.log(_.default);\n" +
        "    })\n" +
        "</script>\n" +
        "<script type=\"nomodule\" src=\"https://cdn.bootcss.com/systemjs/6.2.5/system.min.js\"></script>\n" +
        "<script type=\"nomodule\">\n" +
        "    System.import(\"/scripts/index-bundle.js\").then((_) => {\n" +
        "        console.log(_.default);\n" +
        "    })\n" +
        "</script>\n" +
        "{% endblock %}\n" +
        "```\n" +
        "> 在这里我们引入了万能木块加载器 `systemjs`\n" +
        "\n" +
        "## OK，现在我们的第一阶段学习完成了~\n" +
        "\n" +
        "![](https://user-gold-cdn.xitu.io/2020/3/2/1709aab4696b0d18?w=1046&h=624&f=png&s=68365)\n" +
        "\n" +
        "# 七、CSR + SSR\n" +
        "> 比如我们可以把`vue`当`jQuery`用\n" +
        "\n" +
        "./views/layouts/layout.html\n" +
        "\n" +
        "```\n" +
        "<!DOCTYPE html>\n" +
        "<html lang=\"en\">\n" +
        "<head>\n" +
        "    <meta charset=\"UTF-8\">\n" +
        "    <title>{% block title %}{% endblock %}</title>\n" +
        "\n" +
        "    {% block head %}\n" +
        "    {% endblock %}\n" +
        "\n" +
        "    {% block link %}\n" +
        "    {% endblock %}\n" +
        "</head>\n" +
        "<body>\n" +
        "{% block content %}\n" +
        "{% endblock %}\n" +
        "<script src=\"https://cdn.bootcss.com/vue/2.6.11/vue.min.js\"></script>\n" +
        "{% block script %}\n" +
        "{% endblock %}\n" +
        "</body>\n" +
        "</html>\n" +
        "```\n" +
        "\n" +
        "./assets/scripts/index.js\n" +
        "```\n" +
        "const content = \"你好koa~~\";\n" +
        "console.log(content);\n" +
        "const app6 = new Vue({\n" +
        "    el: '#app-6',\n" +
        "    data: {\n" +
        "        message: 'Hello Vue!'\n" +
        "    }\n" +
        "});\n" +
        "export default content;\n" +
        "```\n" +
        "\n" +
        "./views/index.html\n" +
        "\n" +
        "```\n" +
        "{% extends './layouts/layout.html' %}\n" +
        "{% block title %} 图书管理首页 {% endblock %}\n" +
        "\n" +
        "{% block link %}\n" +
        "<link rel=\"stylesheet\" href=\"/styles/index.css\">\n" +
        "{% endblock %}\n" +
        "\n" +
        "{% block content %}\n" +
        "<div>\n" +
        "    <h1>[[content]]</h1> // 注意！\n" +
        "</div>\n" +
        "<div id=\"app-6\">\n" +
        "    <p>{{ message }}</p>\n" +
        "    <input v-model=\"message\">\n" +
        "</div>\n" +
        "{% endblock %}\n" +
        "\n" +
        "{% block script %}\n" +
        "<script type=\"module\">\n" +
        "    import (\"/scripts/index.js\").then((_) => {\n" +
        "        console.log(_.default);\n" +
        "    })\n" +
        "</script>\n" +
        "<script type=\"nomodule\" src=\"https://cdn.bootcss.com/systemjs/6.2.5/system.min.js\"></script>\n" +
        "<script type=\"nomodule\">\n" +
        "    System.import(\"/scripts/index-bundle.js\").then((_) => {\n" +
        "        console.log(_.default);\n" +
        "    })\n" +
        "</script>\n" +
        "{% endblock %}\n" +
        "\n" +
        "```\n" +
        "<font color=\"red\">\n" +
        "注意！vue 和 swig 的模板引擎的标识符不能冲突\n" +
        "</font>\n" +
        "\n" +
        "所以我们还要改下配置文件\n" +
        "\n" +
        "./app.js\n" +
        "- 第一项\n" +
        "- 第二项\n" +
        "- 第三项\n" +
        "    - dsadas \n" +
        "        - dsadas \n" +
        "    - dsadas \n" +
        "        - dsadas \n" +
        "\n" +
        "- 第三项\n" +
        "    - dsadas \n" +
        "        - dsadas \n" +
        "    - dsadas \n" +
        "        - dsadas \n" +
        "\n"+"\n"+"\n" +
        "|  表头   | 表头  |  表头   | 表头  |  表头   | 表头  |  表头   | 表头  |  表头   | 表头  |\n" +
        "|  ----  | ----  |  ----  | ----  |  ----  | ----  |  ----  | ----  |  ----  | ----  |  \n" +
        "| 单元格  | 单元格 | 单元格  | 单元格 | 单元格  | 单元格 | 单元格  | 单元格 | 单元格  | 单元格 | \n" +
        "| 单元格  | 单元格 | 单元格  | 单元格 | 单元格  | 单元格 | 单元格  | 单元格 | 单元格  | 单元格 | "+"\n"+"```!\n" +
        "注意\n" +
        "```"+"\n" +
        "***ss***";

    // useEffect(()=>{
    //     SyntaxHighlighter.registerLanguage("jsx", jsx);
    //     SyntaxHighlighter.registerLanguage("javascript", javascript);
    // },[]);
    const code = 'const haha = () => {};';

    const Light =
        <SyntaxHighlighter language="javascript" style={dark}>
            {code}
        </SyntaxHighlighter>;
    const parseHtml = htmlParser({
        isValidNode: node => node.type !== 'script',
        processingInstructions: [/* ... */]
    });
    return (
        <div className="msg">
            <Layout>
                <div className="write-md">
                    <ReactMarkdown
                        source={input}
                        // astPlugins={[parseHtml]}
                        escapeHtml={false}
                        renderers={{
                            code: CodeBlock
                        }}
                        // renderers={{
                        //     // code: <SyntaxHighlighter language="javascript" style={dark}/>,
                        //     // heading: HeadingBlock
                        // }}
                    />
                    {/*{Light}*/}
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
