import React from "react";
import {BellOutlined, LikeOutlined,FireOutlined} from "@ant-design/icons";

const Icon = (props) => {

    const {
        type
    } = props;
    const oComponent = {
        BellOutlined: <BellOutlined
            {...props}
        />,
        LikeOutlined: <LikeOutlined
            {...props}
        />,
        FireOutlined: <FireOutlined
            {...props}
        />,
    };
    return oComponent[type]
};

export default Icon;
