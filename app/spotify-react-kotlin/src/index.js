import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { ApplicationRouter } from './routes/application.router';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <ApplicationRouter/>
    ,
    document.getElementById('root')
);
registerServiceWorker();
