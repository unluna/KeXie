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
export const reqMsg = ({msgAuthorId, msgAuthorName, departments, labels, msgContent, msgTitle}) => ajax('/msg', {
    msgAuthorId,
    msgAuthorName,
    departments,
    labels,
    msgContent,
    msgTitle
}, 'POST');

// 获取文章列表
export const reqMsgList = ({urlType, navType}) => ajax('/msglist', {urlType, navType}, 'POST');

// 注册
export const reqSignUp = (rootId, sendUsername, sendPassword, sendType) => ajax('/signup', {
    rootId,
    sendUsername,
    sendPassword,
    sendType
}, 'POST');
// modeify

// 修改个人信息
export const reqModeify = (userId, modifyType, modifyValue) => ajax('/modify', {
    userId, modifyType, modifyValue
}, 'POST');

// 获取个人信息
export const reqUserInfo = (userId) => ajax('/userinfo',{userId},'POST');

