import React, {useState} from 'react';

import Layout from '@/layouts';
import MsgItem from '@/pages/MsgItem'
import MainNav from '@/pages/MainNav';
import "./index.less";

function RD() {
    const [aMsgList, setAMsgList] = useState([]);
    const [oLabelType, setOLabelType] = useState({});
    const [oCategoryType, setOCategoryType] = useState({});
    const [urlKey, setUrlKey] = useState(["department"]);
    const changeMsgList = (msg) => {
        setAMsgList(msg)
    };

    const getLabelType = (label, category) => {
        const labelMap = {};
        label.forEach(item => {
            labelMap[item._id] = item.name;
        });
        setOLabelType(labelMap);

        const categoryMap = {};
        category.forEach(item => {
            categoryMap[item._id] = item.name;
            if (item.name === "后台") {
                setUrlKey([item._id, ...urlKey]);
            }
        });
        setOCategoryType(categoryMap);
    };
    return (
        <div className="rd">
            <Layout aside={true} getLabelType={getLabelType}>
                <div className="main-page-content">
                    <MainNav changeMsgList={changeMsgList}
                             urlType={urlKey}/>
                    <ul className="main-page-content-main">
                        {
                            aMsgList.map((item, index) =>
                                <MsgItem
                                    msg={item}
                                    key={index}
                                    oLabelType={oLabelType}
                                    oCategoryType={oCategoryType}
                                />
                            )
                        }
                    </ul>
                </div>
                <aside className="main-page-aside">
                    <div className="main-page-aside-item"/>
                    <div className="main-page-aside-item"/>
                </aside>
            </Layout>
        </div>
    );
}

export default RD;
