import Cookies from "js-cookie";
import {message} from "antd";

const handleSignOut=(history,err)=>{
    if(err){
        message.error("登录已失效，请重新登陆！");
    }
    Cookies.remove("userId");
    Cookies.remove("userName");
    Cookies.remove("userHeader");
    Cookies.remove("userType");
    history.push("/");
};

export default handleSignOut;
