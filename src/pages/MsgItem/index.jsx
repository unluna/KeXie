import React from 'react';
import moment from 'moment';
import Icon from "@/components/Icon"
import {withRouter} from 'react-router-dom';
import "./index.less";

const MsgItem = (props) => {

    const {
        oCategoryType = {},
        oLabelType = {},
        msg: {
            _id: id,
            departments: types = [],
            msgAuthorName: user = "",
            dateTime: time = "",
            labels = [],
            msgTitle: title = "",
            goodNum: good = 0,
            commentNum: comment = 0,
        },
        history
    } = props;

    const handleToDetail = () => {
        history.push(`/message/${id}`)
    };

    return (
        <li className="msg-item"
            onClick={() => handleToDetail()}
        >
            <div className="msg-item-hd">
                {
                    types.map((item, index) => <div className="msg-item-hd-label"
                                                    key={index}>{oCategoryType[item]}</div>)
                }
                <div className="msg-item-hd-info">{user}</div>
                <div className="msg-item-hd-info">{moment(time).startOf('hour').fromNow()}</div>
                {
                    labels.map((item, index) => {
                        return <div className="msg-item-hd-info"
                                    key={index}>{oLabelType[item]}</div>
                    })
                }
            </div>
            <div className="msg-item-title">
                {title}
            </div>
            <div className="msg-item-action">
                <div className="msg-item-action-item">
                    <div>
                        <Icon className="msg-item-action-item-icon"
                              type="Like"
                        />
                    </div>
                    <div className="msg-item-action-item-num">{good}</div>
                </div>
                <div className="msg-item-action-item">
                    <div>
                        <Icon className="msg-item-action-item-icon"
                              type="Fire"
                        />
                    </div>
                    <div className="msg-item-action-item-num">{comment}</div>
                </div>
            </div>
        </li>
    );
}

export default withRouter(MsgItem);
