import React, {useEffect, useState} from 'react';
import ReactMarkdown from 'react-markdown';
import Cookies from 'js-cookie'
import {message, Input, Button} from "antd";
import CodeBlock from './CodeBlock'
import Layout from '@/layouts';
import Aside from '@/pages/Aside';
import {withRouter} from 'react-router-dom';
import {reqMsgInfo, reqUserInfo} from '@/utils/api';
import {releaseTime} from '../../utils/dateUtils'
import "./index.less";

const Message = (props) => {
    const {history, match} = props;
    const userId = Cookies.get('userId');
    const [msgMap, setMsgMap] = useState({});
    const [userInfo, setUserInfo] = useState({});
    const [hashComments, setComments] = useState(new Map());

    useEffect(() => {
        const {id} = match.params;
        if (id) {
            reqMsgInfo(id).then((res) => {
                const {data} = res;
                if (data.code === 0) {
                    const {data: {msgContent, msgTitle}} = data;
                    setMsgMap({
                        msgContent: `# ${msgTitle}\n${msgContent}`
                    })
                } else {
                    message.error(data.msg);
                    history.replace("/404")
                }
            });
            reqUserInfo(userId).then((res) => {
                const {data} = res;
                console.log(data);
                if (data.code === 0) {

                    const {
                        data: {header, nickname, _id, type}
                    } = data;
                    setUserInfo({header, nickname, _id, type})
                }

            })
        } else {
            message.error("无效的路径!");
            history.replace("/404")
        }

        setComments(hashMapComments(null))
    }, []);

    const res = {
        code: 0, "msg": "success", "data": {
            "count": 36,
            "targetId": "5e82acbb6fb9a03c5a7a8b85",
            comments: [{
                "id": "5e835b9b5188256aac7bac2e",
                "content": "【騰訊雲】云产品采购季，助力行业复工。 \n只需99一年 \nhttp://suo.im/5NSjhy",
                "userId": "5e83580ef265da47e6490c74",
                "respUser": "58e4b9b261ff4b006b3227f4",
                "respComment": "",
                "userInfo": {
                    "objectId": "5e83580ef265da47e6490c74",
                    "username": "高级程序员paaaad",
                    "avatarLarge": "",
                    "selfDescription": "",
                    "jobTitle": "",
                    "company": "",
                    "viewedEntriesCount": 39,
                    "collectedEntriesCount": 0,
                    "level": 0,
                    "isFollow": false
                },
                "respUserInfo": {
                    "objectId": "58e4b9b261ff4b006b3227f4",
                    "username": "冴羽",
                    "avatarLarge": "https://mirror-gold-cdn.xitu.io/168e084832fd5ec238f",
                    "selfDescription": "创作力 Max",
                    "jobTitle": "前端",
                    "company": "淘宝",
                },
                "likesCount": 0,
                "createdAt": "2020-04-01T17:58:25.184Z",
                "updatedAt": "2020-04-01T17:58:25.184Z",
                "subCount": 0,
                "replyCount": 0,
                "topComment": [],
                "isLiked": false
            }, {
                "id": "5e82f3295188256aac7babca",
                "content": "很多东西都知道，面试的时候就是说不出来，面试完了就反应过来了",
                "userId": "5e6617cf51882549380c9e01",
                "respUser": "58e4b9b261ff4b006b3227f4",
                "respComment": "",
                "userInfo": {
                    "objectId": "5e6617cf51882549380c9e01",
                    "username": "水深难堪",
                    "avatarLarge": "",
                    "selfDescription": "",
                    "jobTitle": "",
                    "company": "",
                    "viewedEntriesCount": 7,
                    "collectedEntriesCount": 0,
                    "level": 0,
                    "isFollow": false
                },
                "respUserInfo": {
                    "objectId": "58e4b9b261ff4b006b3227f4",
                    "username": "冴羽",
                    "avatarLarge": "https://mirror-gold-cdn.xitu.io/168e084832fd5ec238f",
                    "selfDescription": "创作力 Max",
                    "jobTitle": "前端",
                    "company": "淘宝",
                    "viewedEntriesCount": 9857,
                    "collectedEntriesCount": 116,
                    "level": 6,
                    "isFollow": false
                },
                "likesCount": 1,
                "picList": [],
                "createdAt": "2020-03-31T07:37:13.065Z",
                "updatedAt": "2020-03-31T07:37:13.065Z",
                "subCount": 0,
                "replyCount": 0,
                "topComment": [],
                "isLiked": false
            }, {
                "id": "5e82e948e51d451d323674e8",
                "content": "👏",
                "userId": "5c0864b56fb9a049e701e5e1",
                "respUser": "58e4b9b261ff4b006b3227f4",
                "respComment": "",
                "userInfo": {
                    "objectId": "5c0864b56fb9a049e701e5e1",
                    "username": "ClarenceKong",
                    "avatarLarge": "https://user-gold-cdn.xitu.io/2019/3/28/169c22af7764af15?w=1236\u0026h=1197\u0026f=png\u0026s=1525712",
                    "selfDescription": "前端脑残粉",
                    "jobTitle": "学生",
                    "company": "黑龙江大学",
                    "viewedEntriesCount": 266,
                    "collectedEntriesCount": 53,
                    "level": 0,
                    "isFollow": false
                },
                "respUserInfo": {
                    "objectId": "58e4b9b261ff4b006b3227f4",
                    "username": "冴羽",
                    "avatarLarge": "https://mirror-gold-cdn.xitu.io/168e084832fd5ec238f",
                    "selfDescription": "创作力 Max",
                    "jobTitle": "前端",
                    "company": "淘宝",
                    "viewedEntriesCount": 9857,
                    "collectedEntriesCount": 116,
                    "level": 6,
                    "isFollow": false
                },
                "likesCount": 0,
                "picList": [],
                "createdAt": "2020-03-31T06:55:04.006Z",
                "updatedAt": "2020-03-31T06:55:04.006Z",
                "subCount": 2,
                "replyCount": 2,
                "topComment": [{
                    "id": "5e832374e51d451d3236752c",
                    "content": "👏",
                    "userId": "5c0864b56fb9a049e701e5e1",
                    "respUser": "5c0864b56fb9a049e701e5e1",
                    "respComment": "5e82e948e51d451d323674e8",
                    "userInfo": {
                        "objectId": "5c0864b56fb9a049e701e5e1",
                        "username": "ClarenceKong",
                        "avatarLarge": "https://user-gold-cdn.xitu.io/2019/3/28/169c22af7764af15?w=1236\u0026h=1197\u0026f=png\u0026s=1525712",
                        "selfDescription": "前端脑残粉",
                        "jobTitle": "学生",
                        "company": "黑龙江大学",
                        "viewedEntriesCount": 266,
                        "collectedEntriesCount": 53,
                        "level": 0,
                        "isFollow": false
                    },
                    "respUserInfo": {
                        "objectId": "5c0864b56fb9a049e701e5e1",
                        "username": "ClarenceKong",
                        "avatarLarge": "https://user-gold-cdn.xitu.io/2019/3/28/169c22af7764af15?w=1236\u0026h=1197\u0026f=png\u0026s=1525712",
                        "selfDescription": "前端脑残粉",
                        "jobTitle": "学生",
                        "company": "黑龙江大学",
                        "viewedEntriesCount": 266,
                        "collectedEntriesCount": 53,
                        "level": 0,
                        "isFollow": false
                    },
                    "likesCount": 0,
                    "picList": [],
                    "createdAt": "2020-03-31T11:03:16.727Z",
                    "updatedAt": "2020-03-31T11:03:16.727Z",
                    "subCount": 0,
                    "replyCount": 0,
                    "topComment": null,
                    "isLiked": false
                }, {
                    "id": "5e835d7a6fb9a07227a38342",
                    "content": "👏",
                    "userId": "5c0864b56fb9a049e701e5e1",
                    "respUser": "5c0864b56fb9a049e701e5e1",
                    "respComment": "5e832374e51d451d3236752c",
                    "userInfo": {
                        "objectId": "5c0864b56fb9a049e701e5e1",
                        "username": "ClarenceKong",
                        "avatarLarge": "https://user-gold-cdn.xitu.io/2019/3/28/169c22af7764af15?w=1236\u0026h=1197\u0026f=png\u0026s=1525712",
                        "selfDescription": "前端脑残粉",
                        "jobTitle": "学生",
                        "company": "黑龙江大学",
                        "viewedEntriesCount": 266,
                        "collectedEntriesCount": 53,
                        "level": 0,
                        "isFollow": false
                    },
                    "respUserInfo": {
                        "objectId": "5c0864b56fb9a049e701e5e1",
                        "username": "ClarenceKong",
                        "avatarLarge": "https://user-gold-cdn.xitu.io/2019/3/28/169c22af7764af15?w=1236\u0026h=1197\u0026f=png\u0026s=1525712",
                        "selfDescription": "前端脑残粉",
                        "jobTitle": "学生",
                        "company": "黑龙江大学",
                        "viewedEntriesCount": 266,
                        "collectedEntriesCount": 53,
                        "level": 0,
                        "isFollow": false
                    },
                    "likesCount": 0,
                    "picList": [],
                    "createdAt": "2020-03-31T15:10:50.259Z",
                    "updatedAt": "2020-03-31T15:10:50.259Z",
                    "subCount": 0,
                    "replyCount": 0,
                    "topComment": null,
                    "isLiked": false
                }],
                "isLiked": false
            }, {
                "id": "5e82d84af265da7550d26fc3",
                "content": "👍",
                "userId": "57b5796d165abd0065d0d0c7",
                "respUser": "58e4b9b261ff4b006b3227f4",
                "respComment": "",
                "userInfo": {
                    "objectId": "57b5796d165abd0065d0d0c7",
                    "username": "离否",
                    "avatarLarge": "https://user-gold-cdn.xitu.io/2020/3/24/1710d03e821fba87?w=640\u0026h=640\u0026f=png\u0026s=335002",
                    "selfDescription": "",
                    "jobTitle": "",
                    "company": "",
                    "viewedEntriesCount": 316,
                    "collectedEntriesCount": 33,
                    "level": 0,
                    "isFollow": false
                },
                "respUserInfo": {
                    "objectId": "58e4b9b261ff4b006b3227f4",
                    "username": "冴羽",
                    "avatarLarge": "https://mirror-gold-cdn.xitu.io/168e084832fd5ec238f",
                    "selfDescription": "创作力 Max",
                    "jobTitle": "前端",
                    "company": "淘宝",
                    "viewedEntriesCount": 9857,
                    "collectedEntriesCount": 116,
                    "level": 6,
                    "isFollow": false
                },
                "likesCount": 0,
                "picList": [],
                "createdAt": "2020-03-31T05:42:34.863Z",
                "updatedAt": "2020-03-31T05:42:34.863Z",
                "subCount": 0,
                "replyCount": 0,
                "topComment": [],
                "isLiked": false
            }, {
                "id": "5e82d0fd6fb9a07227a382b9",
                "content": "正准备面试，这些真是太及时了，哈哈，感谢感谢",
                "userId": "59441f88da2f6000676abc48",
                "respUser": "58e4b9b261ff4b006b3227f4",
                "respComment": "",
                "userInfo": {
                    "objectId": "59441f88da2f6000676abc48",
                    "username": "海阔天空1122",
                    "avatarLarge": "",
                    "selfDescription": "",
                    "jobTitle": "",
                    "company": "",
                    "viewedEntriesCount": 2639,
                    "collectedEntriesCount": 75,
                    "level": 0,
                    "isFollow": false
                },
                "respUserInfo": {
                    "objectId": "58e4b9b261ff4b006b3227f4",
                    "username": "冴羽",
                    "avatarLarge": "https://mirror-gold-cdn.xitu.io/168e084832fd5ec238f",
                    "selfDescription": "创作力 Max",
                    "jobTitle": "前端",
                    "company": "淘宝",
                    "viewedEntriesCount": 9857,
                    "collectedEntriesCount": 116,
                    "level": 6,
                    "isFollow": false
                },
                "likesCount": 0,
                "picList": [],
                "createdAt": "2020-03-31T05:11:25.759Z",
                "updatedAt": "2020-03-31T05:11:25.759Z",
                "subCount": 0,
                "replyCount": 0,
                "topComment": [],
                "isLiked": false
            }, {
                "id": "5e82cb36f265da7550d26fb9",
                "content": "像个没有感情的发文章机器😂",
                "userId": "5a0428c76fb9a0450d108707",
                "respUser": "58e4b9b261ff4b006b3227f4",
                "respComment": "",
                "userInfo": {
                    "objectId": "5a0428c76fb9a0450d108707",
                    "username": "改名字好难",
                    "avatarLarge": "https://mirror-gold-cdn.xitu.io/168e08b4726f32560e1",
                    "selfDescription": "I am a Web Developer, focus on JavaScript/Node.js",
                    "jobTitle": "",
                    "company": "",
                    "viewedEntriesCount": 611,
                    "collectedEntriesCount": 33,
                    "level": 0,
                    "isFollow": false
                },
                "respUserInfo": {
                    "objectId": "58e4b9b261ff4b006b3227f4",
                    "username": "冴羽",
                    "avatarLarge": "https://mirror-gold-cdn.xitu.io/168e084832fd5ec238f",
                    "selfDescription": "创作力 Max",
                    "jobTitle": "前端",
                    "company": "淘宝",
                    "viewedEntriesCount": 9857,
                    "collectedEntriesCount": 116,
                    "level": 6,
                    "isFollow": false
                },
                "likesCount": 0,
                "picList": [],
                "createdAt": "2020-03-31T04:46:46.052Z",
                "updatedAt": "2020-03-31T04:46:46.052Z",
                "subCount": 4,
                "replyCount": 4,
                "topComment": [{
                    "id": "5e82cd74e51d451d323674d7",
                    "content": "哈哈哈哈，春招期间我的账号相当于半个淘系前端官方账号😂\u0000\u0000\u0000\u0000",
                    "userId": "58e4b9b261ff4b006b3227f4",
                    "respUser": "5a0428c76fb9a0450d108707",
                    "respComment": "5e82cb36f265da7550d26fb9",
                    "userInfo": {
                        "objectId": "58e4b9b261ff4b006b3227f4",
                        "username": "冴羽",
                        "avatarLarge": "https://mirror-gold-cdn.xitu.io/168e084832fd5ec238f",
                        "selfDescription": "创作力 Max",
                        "jobTitle": "前端",
                        "company": "淘宝",
                        "viewedEntriesCount": 9857,
                        "collectedEntriesCount": 116,
                        "level": 6,
                        "isFollow": false
                    },
                    "respUserInfo": {
                        "objectId": "5a0428c76fb9a0450d108707",
                        "username": "改名字好难",
                        "avatarLarge": "https://mirror-gold-cdn.xitu.io/168e08b4726f32560e1",
                        "selfDescription": "I am a Web Developer, focus on JavaScript/Node.js",
                        "jobTitle": "",
                        "company": "",
                        "viewedEntriesCount": 611,
                        "collectedEntriesCount": 33,
                        "level": 0,
                        "isFollow": false
                    },
                    "likesCount": 0,
                    "picList": [],
                    "createdAt": "2020-03-31T04:56:20.907Z",
                    "updatedAt": "2020-03-31T04:56:20.907Z",
                    "subCount": 0,
                    "replyCount": 0,
                    "topComment": null,
                    "isLiked": false
                }, {
                    "id": "5e82d314f265da7550d26fc0",
                    "content": "后面还排了好多篇呢😂\u0000\u0000\u0000\u0000😂\u0000\u0000\u0000\u0000😂\u0000\u0000\u0000\u0000 不过现在也正值春招，那就把面试相关的内容大发特发一遍，希望对正在面试的同学们有帮助",
                    "userId": "58e4b9b261ff4b006b3227f4",
                    "respUser": "5a0428c76fb9a0450d108707",
                    "respComment": "5e82cb36f265da7550d26fb9",
                    "userInfo": {
                        "objectId": "58e4b9b261ff4b006b3227f4",
                        "username": "冴羽",
                        "avatarLarge": "https://mirror-gold-cdn.xitu.io/168e084832fd5ec238f",
                        "selfDescription": "创作力 Max",
                        "jobTitle": "前端",
                        "company": "淘宝",
                        "viewedEntriesCount": 9857,
                        "collectedEntriesCount": 116,
                        "level": 6,
                        "isFollow": false
                    },
                    "respUserInfo": {
                        "objectId": "5a0428c76fb9a0450d108707",
                        "username": "改名字好难",
                        "avatarLarge": "https://mirror-gold-cdn.xitu.io/168e08b4726f32560e1",
                        "selfDescription": "I am a Web Developer, focus on JavaScript/Node.js",
                        "jobTitle": "",
                        "company": "",
                        "viewedEntriesCount": 611,
                        "collectedEntriesCount": 33,
                        "level": 0,
                        "isFollow": false
                    },
                    "likesCount": 0,
                    "picList": [],
                    "createdAt": "2020-03-31T05:20:20.220Z",
                    "updatedAt": "2020-03-31T05:20:20.220Z",
                    "subCount": 0,
                    "replyCount": 0,
                    "topComment": null,
                    "isLiked": false
                }],
                "isLiked": false
            }]
        }
    };
    const levelImg = {
        0: 'none',
        1: 'https://b-gold-cdn.xitu.io/v3/static/img/lv-6.74bd93a.svg',
        2: 'https://b-gold-cdn.xitu.io/v3/static/img/lv-2.f597b88.svg',
        3: 'https://b-gold-cdn.xitu.io/v3/static/img/lv-3.e108c68.svg',
        4: 'https://b-gold-cdn.xitu.io/v3/static/img/lv-4.2c3fafd.svg',
        5: 'https://b-gold-cdn.xitu.io/v3/static/img/lv-5.f8d5198.svg',
        6: 'https://b-gold-cdn.xitu.io/v3/static/img/lv-6.74bd93a.svg',

    };
    const comments = res.data.comments;
    const userDefaultHeader = userInfo.header;
    const hashMapComments = (id) => {
        let mapComments = hashComments.id === undefined ? new Map() : hashComments;
        for (let comment of comments) {
            for (let subComment of comment.topComment)
                mapComments.set(subComment.id, subComment.id === id ? "block" : "none")
            mapComments.set(comment.id, comment.id === id ? "block" : "none")
        }
        return mapComments
    };

    const setReply = (id) => {
        setComments(hashMapComments(id));
        console.log(hashComments)
    };
    const initComments = (comment, index) => {

        const {id, content, userInfo: {username, avatarLarge, level}, likesCount, createdAt, updateAt, topComment} = comment;
        return (
            <li className={'comment'} key={id}>
                <img className={"avatar"} src={avatarLarge || userDefaultHeader} alt="avatar"/>
                <div className={"comment-contentBox"}>
                    <h5>{username} <img style={{display: levelImg[level]}} src={levelImg[level]}
                                        alt={`lv-${level}`}/></h5>
                    <p className={"comment-content"}>{content}</p>

                    <div className={"comment-date"}>
                        <time>{releaseTime(updateAt || createdAt)}</time>

                        <div className={"comment-date-action"}>
                            <div className="action-like action">
                                <svg data-v-0f270e9c="" aria-hidden="true" width="16" height="16" viewBox="0 0 20 20"
                                     className="icon like-icon">
                                    <g data-v-0f270e9c="" fill="none" fillRule="evenodd">
                                        <path data-v-0f270e9c="" d="M0 0h20v20H0z"/>
                                        <path data-v-0f270e9c="" stroke="#8A93A0" strokeLinejoin="round"
                                              d="M4.58 8.25V17h-1.4C2.53 17 2 16.382 2 15.624V9.735c0-.79.552-1.485 1.18-1.485h1.4zM11.322 2c1.011.019 1.614.833 1.823 1.235.382.735.392 1.946.13 2.724-.236.704-.785 1.629-.785 1.629h4.11c.434 0 .838.206 1.107.563.273.365.363.84.24 1.272l-1.86 6.513A1.425 1.425 0 0 1 14.724 17H6.645V7.898C8.502 7.51 9.643 4.59 9.852 3.249A1.47 1.47 0 0 1 11.322 2z"/>
                                    </g>
                                </svg>
                                <span className={"action-title"}> {likesCount > 0 ? likesCount : undefined}</span>

                            </div>
                            <Button onClick={() => setReply(id)} className={"action-reply"} type={"link"}>回复</Button>
                        </div>


                    </div>
                    <div className="reply-form" style={{display: hashComments.get(id)}}>
                        <Input placeholder={`回复${username}:`}/>
                        <div className={"reply-form-commit"}><Button type={"primary"}>评论</Button>
                        </div>
                    </div>
                    <div className={"comment-subComment"}>
                        {topComment.map((comment) => {
                            const {id, likesCount, userInfo: {username, level, avatarLarge}, content, respUserInfo: {username: respUsername}} = comment;

                            return (
                                <div className={"comment subComment "} key={id}>
                                    <img className={"avatar"} src={avatarLarge || userDefaultHeader} alt="avatar"/>
                                    <div className={"comment-contentBox subContent-contentBox"}>
                                        <h5>{username}
                                            <img style={{display: levelImg[level]}} src={levelImg[level]}
                                                 alt={`lv-${level}`}/>
                                        </h5>
                                        <h5>
                                            回复:{respUsername}
                                        </h5>
                                        <p className={"comment-content"}>{content}</p>
                                        <div className={"comment-date"}>
                                            <time>{releaseTime(updateAt || createdAt)}</time>

                                            <div className={"comment-date-action"}>
                                                <div className="action-like action">
                                                    <svg data-v-0f270e9c="" aria-hidden="true" width="16" height="16"
                                                         viewBox="0 0 20 20"
                                                         className="icon like-icon">
                                                        <g data-v-0f270e9c="" fill="none" fillRule="evenodd">
                                                            <path data-v-0f270e9c="" d="M0 0h20v20H0z"/>
                                                            <path data-v-0f270e9c="" stroke="#8A93A0"
                                                                  strokeLinejoin="round"
                                                                  d="M4.58 8.25V17h-1.4C2.53 17 2 16.382 2 15.624V9.735c0-.79.552-1.485 1.18-1.485h1.4zM11.322 2c1.011.019 1.614.833 1.823 1.235.382.735.392 1.946.13 2.724-.236.704-.785 1.629-.785 1.629h4.11c.434 0 .838.206 1.107.563.273.365.363.84.24 1.272l-1.86 6.513A1.425 1.425 0 0 1 14.724 17H6.645V7.898C8.502 7.51 9.643 4.59 9.852 3.249A1.47 1.47 0 0 1 11.322 2z"/>
                                                        </g>
                                                    </svg>
                                                    <span
                                                        className={"action-title"}> {likesCount > 0 ? likesCount : undefined}</span>

                                                </div>
                                                <Button onClick={() => setReply(id)} className={"action-reply"}
                                                        type={"link"}>回复</Button>
                                            </div>


                                        </div>
                                        <div className="reply-form subComment-reply"
                                             style={{display: hashComments.get(id)}}>
                                            <Input placeholder={`回复${username}:`}/>
                                            <div className={"reply-form-commit"}><Button
                                                type={"primary"}>评论</Button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </li>
        )
    }


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
                    <div className={"comment-box"}>
                        <h4 className={"comment-box-title"}>评论</h4>
                        <div className={"comment-box-form"}>
                            <img src={userInfo.header} className="avatar" alt={"avatar"}/>
                            <Input placeholder={"输入评论..."}/>
                            <Button type={"primary"}>评论</Button>
                        </div>
                        <ul className="comment-box-list">

                            {
                                comments.map((comment, index
                                ) => initComments(comment))
                            }
                        </ul>
                    </div>
                </div>

                <Aside rules={{message: true}}/>

            </Layout>
        </div>
    );
}

export default withRouter(Message);
