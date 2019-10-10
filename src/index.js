// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import  AppRoutes  from "./AppRoutes";
// import * as serviceWorker from './serviceWorker';
// import {
//     BrowserRouter,
// } from 'react-router-dom';

// // const element = <h1>2345678</h1>
// // ReactDOM.render(element, document.getElementById('root'));
// ReactDOM.render(<BrowserRouter>
//     {AppRoutes}
// </BrowserRouter>, document.getElementById('root'));



import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import  AppRoutes  from "./AppRoutes";
import * as serviceWorker from './serviceWorker';
import {
    HashRouter,
} from 'react-router-dom';

// const element = <h1>2345678</h1>
// ReactDOM.render(element, document.getElementById('root'));
ReactDOM.render(<HashRouter>
    {AppRoutes}
</HashRouter>, document.getElementById('root'));
