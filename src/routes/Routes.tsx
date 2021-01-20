import React from 'react';
import {Switch, Route} from 'react-router-dom';

import {Error404} from '../components/Error404/Error404';
import Employees from '../components/Employees/Employees';
import {Home} from '../components/Home/Home';

export const Path = {
    EMPLOYEES: '/employeess',
    HOME: '/',
};

const Routes = () => {
    return (
        <div>
            <Switch>
                <Route exact path={'/'} component={Home}/>
                <Route exact path={Path.HOME} component={Home}/>
                <Route path={Path.EMPLOYEES} component={Employees}/>
                <Route component={Error404}/>

            </Switch>
        </div>
    );
}

export default Routes;
