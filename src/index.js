import React from 'react';
import ReactDOM from 'react-dom';

import * as serviceWorker from './serviceWorker';
import 'antd/dist/antd.css';
import "@/assets/styles/reset.css";
import Route from './Route';

ReactDOM.render(
    <Route/>,
    document.getElementById('root')
);

serviceWorker.unregister();
