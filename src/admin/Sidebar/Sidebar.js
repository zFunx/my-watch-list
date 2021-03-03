import classes from './Sidebar.module.css';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Sidebar extends Component {
    render(){
        return (
            <div class={classes.SidebarContents}>
                <table>
                    <tr><Link to="/admin/movies">All Movies</Link><br/></tr>
                    <tr><Link to="/admin/genres">Genres</Link><br/></tr>
                    <tr><Link to="/admin/countries">Country</Link><br/></tr>
                    <tr><Link to="/admin/platforms">Platforms</Link></tr>
                    <tr><Link to="/admin/contributers">Contributers</Link></tr>
                </table>
            </div>
        )
    }
}

export default Sidebar;