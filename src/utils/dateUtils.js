/**
 * @fileoverview 时间转换
 * @param recordTime 需要转换的时间
 * @return displayTime 转换后的时间（多少分 秒，超过一天返回日期）
 * @author clarencekong<clarencekong@163.com>
 * Copyright 2020. All Rights Reserved.
 */
export  const releaseTime = (recordTime) => {
    // console.log(+new Date())
    const duration = (+new Date() - Date.parse(recordTime)) / 1000;
    let displayTime = '';
    if (duration < 60) {
        displayTime = `${Math.round(Math.max(duration, 1))} 秒前`;
    }else if (duration < 60*60) {
        displayTime = `${Math.round(duration / 60)} 分钟前`;
    }else if (duration < 60*60*24) {
        displayTime = `${Math.round(duration / 60 / 60)} 小时前`;
    }else {
        displayTime = dateTime(recordTime);
    }
    return displayTime;
};
// 超过一天后显示发布日期
export const dateTime = (time) => {
    const times = new Date(time);
    const Y = times.getFullYear();
    let M = times.getMonth() + 1;
    M = M < 10 ? '0' + M : M;
    let D = times.getDate();
    D = D < 10 ? '0' + D : D;
    return `${Y}年-${M}月-${D}日`;
}