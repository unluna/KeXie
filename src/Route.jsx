import React from 'react';
import {HashRouter,Redirect, Route as ReactRoute, Switch} from 'react-router-dom';
import Recommend from "@/pages/Recommend";
import NotFound from "@/pages/NotFound";

const Route = () => {
    return (
        <HashRouter>
            <Switch>
                <ReactRoute path="/recommend" component={Recommend}/>
                <Redirect path="/" to="/recommend" exact />
                <ReactRoute component={NotFound}/>
            </Switch>
        </HashRouter>
    );
};

export default Route;
