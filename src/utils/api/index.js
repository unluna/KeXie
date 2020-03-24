/*
* 包含了n个接口请求的模块
* */

import ajax from './ajax'

//注册接口
export const reqRegister = (user) => ajax('/apis/register', user, 'POST');

// 登录接口
export const reqLogin = ({username, password}) => ajax('/login',
    {username, password}, 'POST');

// 文章发布时 获取选择标签接口
export const reqMsgType = () => ajax('/msgtype');

// 发布文章
export const reqMsg = ({msgAuthorId,msgAuthorName, departments, labels, msgContent,msgTitle}) => ajax('/msg', {msgAuthorId,msgAuthorName,departments, labels, msgContent,msgTitle}, 'POST');

// 获取文章列表
export const reqMsgList = ({urlType, navType}) => ajax('/msglist', {urlType, navType}, 'POST');
//获取用户列表
export const reqUserList = (type) => ajax('/apis/userlist', {type});

//获取当前用户的聊天列表
export const reqChatMsgList = () => ajax('/apis/msglist');

//修改指定消息为已读
export const reqReadMsg = (from) => ajax('/apis/readmsg', {from}, 'POST');
