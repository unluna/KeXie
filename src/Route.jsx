import React from 'react';
import {HashRouter, Redirect, Route as ReactRoute, Switch} from 'react-router-dom';
import Recommend from "@/pages/Recommend";
import Follow from "@/pages/Follow";
import FE from "@/pages/FE";
import RD from "@/pages/RD";
import Game from "@/pages/Game";
import UI from "@/pages/UI";
import Read from "@/pages/Read";
import Write from "@/pages/Write";
import Message from "@/pages/Message";
import UserSetting from "@/pages/UserSetting";
import NotFound from "@/pages/NotFound";

const Route = () => {
    return (
        <HashRouter>

            <Switch>
                <ReactRoute path="/recommend" component={Recommend}/>
                <ReactRoute path="/follow" component={Follow}/>
                <ReactRoute path="/fe" component={FE}/>
                <ReactRoute path="/rd" component={RD}/>
                <ReactRoute path="/game" component={Game}/>
                <ReactRoute path="/ui" component={UI}/>
                <ReactRoute path="/read" component={Read}/>
                <ReactRoute path="/write" component={Write}/>
                <ReactRoute path="/message/:id" component={Message}/>
                <ReactRoute path="/usersetting" component={UserSetting}/>
                {/*<ReactRoute path="/passwordsetting" component={Setting}/>*/}
                <Redirect path="/" to="/recommend" exact/>
                <ReactRoute component={NotFound}/>
            </Switch>
        </HashRouter>
    );
};

export default Route;
