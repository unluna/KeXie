import React from "react";
import {
    BellTwoTone,
    LikeTwoTone,
    FireTwoTone,
    EditTwoTone,
    BankTwoTone,
    SettingTwoTone,
    ApiTwoTone
} from "@ant-design/icons";
import {getTwoToneColor, setTwoToneColor} from '@ant-design/icons';

setTwoToneColor('#54C28F');
getTwoToneColor();

const Icon = (props) => {

    const {
        type
    } = props;
    const oComponent = {
        Bell: <BellTwoTone {...props} />,
        Like: <LikeTwoTone twoToneColor="rgb(147,224,255)" {...props} />,
        LikeOwn: <LikeTwoTone {...props} />,
        Fire: <FireTwoTone twoToneColor="rgb(248,147,29)" {...props} />,
        Edit: <EditTwoTone {...props} />,
        Bank: <BankTwoTone {...props} />,
        Setting: <SettingTwoTone {...props} />,
        Api: <ApiTwoTone {...props} />
    };
    return oComponent[type]
};

export default Icon;
