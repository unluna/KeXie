import React, {useState} from 'react';

import Layout from '@/layouts';
import MsgItem from '@/pages/MsgItem'
import MainNav from '@/pages/MainNav';
import Aside from '@/pages/Aside';
import "./index.less";

const FE = () => {
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
            if (item.name === "前端") {
                setUrlKey([item._id, ...urlKey]);
            }
        });
        setOCategoryType(categoryMap);
    };
    return (
        <div className="fe">
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
                <Aside rules={{fe: true}}/>
            </Layout>
        </div>
    );
};

export default FE;
