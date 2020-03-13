import React from 'react';
import {HashRouter, Redirect, Route as ReactRoute, Switch} from 'react-router-dom';
import Recommend from "@/pages/Recommend";
import Follow from "@/pages/Follow";
import FE from "@/pages/FE";
import RD from "@/pages/RD";
import Game from "@/pages/Game";
import UI from "@/pages/UI";
import Read from "@/pages/Read";
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
                <Redirect path="/" to="/recommend" exact/>
                <ReactRoute component={NotFound}/>
            </Switch>
        </HashRouter>
    );
};

export default Route;
