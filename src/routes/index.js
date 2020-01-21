import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Home from '../pages/app/home/index';

export default function Routes(){
    return (
        <Switch>
            <Route path="/" exact component={Home} />            
            {/* <Route path="/dashboard" component={Dashboard} isPrivate/> */}

        </Switch>
    );
}