import React from 'react';
import {HashRouter, Route as ReactRoute, Switch} from 'react-router-dom';
import Home from "./pages/Home";

const Route = () => {
    return (
        <HashRouter>
            <Switch>
                <ReactRoute path="/" component={Home}/>
                {/*<ReactRoute path="/" component={App}/>*/}
            </Switch>
        </HashRouter>
    );
};

export default Route;
