import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Movies from '../Movies/Movies';
import Genres from '../Genres/Genres';
import Login from '../Login/Login';

import Sidebar from '../Sidebar/Sidebar';
import Platforms from '../Platforms/Platforms';
import Countries from '../Countries/Countries';
import classes from './Home.module.css';
import Contributers from '../Contributers/Contributers';
// import Countries from './Countries/Countries';

class Home extends Component {
    render() {
        return (
            <div class={classes.HomePage}>
                <Switch>
                    <Route path="/admin/login">
                        <Login />
                    </Route>
                    <Route path="/admin">
                        <div class={classes.Side} style={{ display: "inline-block" }}>
                            <Sidebar />
                        </div>
                        {/* <Movies /> */}

                        <div class={classes.Main} style={{ display: "inline-block" }}>
                            <Route path="/admin/movies">
                                <Movies />
                            </Route>
                            <Route path="/admin/genres">
                                <Genres />
                            </Route>

                            <Route path="/admin/countries">
                                <Countries />
                            </Route>
                            <Route path="/admin/platforms">
                                <Platforms />
                            </Route>
                            <Route path="/admin/contributers">
                                <Contributers />
                            </Route>
                        </div>
                    </Route>
                </Switch>
            </div>
        );
    }
}

export default Home;