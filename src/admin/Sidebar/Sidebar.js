import classes from './Sidebar.module.css';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Sidebar extends Component {
    render(){
        return (
            <div class={classes.SidebarContents}>
                <Link to="/admin/movies">All Movies</Link><br/>
                <Link to="/admin/genres">Genres</Link><br/>
                <Link to="/admin/countries">Country</Link><br/>
                <Link to="/admin/platforms">Platforms</Link>
            </div>
        )
    }
}

export default Sidebar;