import React, {useEffect} from 'react';

function NotFound() {
    useEffect(() => {
        const s = document.querySelector("#notfound");
        s && s.parentNode.removeChild(s);
        const script = document.createElement("script");
        script.id = "notfound";
        script.src = '//qzonestyle.gtimg.cn/qzone/hybrid/app/404/search_children.js';
        script.homePageUrl="http://localhost:3000/#/recommend";
        script.homePageName="返回数据科协";
        document.body.appendChild(script);

        return ()=>{
            if (s) {
                s.parentNode.removeChild(s);
            }
        }
    }, []);


    return (
        <div className="App">
            NotFound
        </div>
    );
}

export default NotFound;
