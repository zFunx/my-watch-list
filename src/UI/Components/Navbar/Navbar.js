import React, { Component } from 'react';

import classes from './Navbar.module.css';

class Navbar extends Component {
    render() {
        return (
            <div class={classes.topnav}>
                <b href="#home"><u>MOVIE PAGE</u></b>
                <a href="#home">Home</a>
                <a href="#trending">Trending</a>
                <a href="#New In">New In</a>
                <a href="#contact">About us</a>
                <div class={classes.searchContainer}>
                    <form action="/action_page.php">
                        <input type="text" placeholder="Search Here." name="search" />
                        <button type="submit">Search</button>
                    </form>
                </div>
                <l href="login"><b>Login</b></l>
            </div>
        )
    }
}

export default Navbar;