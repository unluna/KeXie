import React from "react";
import {BellOutlined} from "@ant-design/icons";

const Icon = (props) => {

    const {
        type
    } = props;
    const oComponent = {
        BellOutlined: <BellOutlined
            {...props}
        />,
    };
    return oComponent[type]
};

export default Icon;
