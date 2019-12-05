import React from 'react';
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';
import Index from './Pages/Index';
import List from './Pages/List';
import Home from './Pages/Home';

//路由传值分四布:设置规则-->传递值-->接受值-->显示内容

function AppRouter() {
    return (
        <Router>
            {/* UI */}
            <ul>
                <li><Link to="/">首页</Link></li>
                <li><Link to="/list/">列表</Link></li>
            </ul>
            {/* 路由配置 */}
            <Route path="/" exact component={Index} />
            {/* /list/后加:就代表可以传值 */}
            <Route path="/list/:id" component={List} />
            <Route path="/home/" component={Home} />
        </Router>
    )
}

export default AppRouter;

