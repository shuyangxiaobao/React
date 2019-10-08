/**
 * Created by zhqmac on 2018/5/11.
 */
import React from 'react';
import {
    Route,
} from 'react-router-dom';
import Entrance from "./entrance";
import Learn002 from './Learn/002';
import Learn003 from './Learn/003状态机';
import Learn004 from './Learn/004React Props';
import Learn005 from './Learn/005React Propos';
import Learn006 from './Learn/006事件处理';
import Learn007 from './Learn/007React 条件渲染';
import Learn008 from './Learn/008React 条件渲染';
import Learn009 from './Learn/009React 条件渲染(三目 与 运算符)';
import APEX  from "./APEX/Home/Home";
import APEXTabbar from './APEX/APEXTabbar'

import NEWS from './APEX/NEWS/APEXnews'
import NewsDetail from './APEX/Home/newsDetail'

// import Page1 from './Page1';
// import Page2 from './Page2';
/**
 * Routes: https://github.com/reactjs/react-router/blob/master/docs/API.md#route
 *
 * Routes are used to declare your view hierarchy.
 *
 * Say you go to http://material-ui.com/#/components/paper
 * The react router will search for a route named 'paper' and will recursively render its
 * handler and its parent handler like so: Paper > Components > Master
 */
const AppRoutes = (
    <div>
        <Route exact path="/" component={Entrance}/>
        <Route path="/learn002" component={Learn002}/>
        <Route path="/learn003" component={Learn003}/>
        <Route path="/learn004" component={Learn004}/>
        <Route path="/learn005" component={Learn005}/>
        <Route path="/learn006" component={Learn006}/>
        <Route path="/learn007" component={Learn007}/>
        <Route path="/learn008" component={Learn008}/>
        <Route path="/learn009" component={Learn009}/>
        <Route path="/apex" component={APEXTabbar}/>
        <Route path="/news" component={NEWS}/>
        <Route path="/newsdetail" component={NewsDetail}/>
        

        

        

        
    </div>
);

export default AppRoutes;
