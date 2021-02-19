import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Movies from '../Movies/Movies';
import Genres from '../Genres/Genres';
import Login from '../Login/Login';

import Sidebar from '../Sidebar/Sidebar';

// import Platforms from './Platforms/Platforms';
// import Countries from './Countries/Countries';

class Home extends Component {
    render() {
        return (
            <div>
                <div style={{width:"50%", display: "inline-block"}}>
                    <Sidebar />
                </div>
                {/* <Movies /> */}
                <div style={{width:"50%", display: "inline-block"}}>
                    <Route path="/admin/movies" component={Movies} />
                    <Route path="/admin/genres">
						<Genres />
					</Route>
					<Route path="/admin/login">
						<Login />
					</Route>
                    {/* <Route path="/admin/genres" component={Genres} />
                    <Route path="/admin/platforms" component={Platforms} />
                    <Route path="/admin/countries" component={Countries} /> */}
                </div>
            </div>
        );
    }
}

export default Home;