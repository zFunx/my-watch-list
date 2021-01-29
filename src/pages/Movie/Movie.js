import React, { Component } from 'react';

import Footer from '../../UI/Components/Footer/Footer.js'

import classes from './Movie.module.css';

class Movie extends Component {
    render() {   
        return (

            <React.Fragment>
                <div class={classes.topnav}>
                    <a class="active" href="#home">Movie Page</a>
                    <a href="#contact">Home</a>
                    <a href="#about">Trending</a>
                    <a href="#contact">New In</a>
                    <a href="#contact">Home</a>
                    <div class="searchContainer">
                        <form action="/action_page.php">
                        <input type="text" placeholder="Search Here." name="search"/>
                        <button type="submit"><i class="fa fa-search">Search</i></button>
                        </form>
                    </div>
                </div>

                {/* <div className={classes.header}>
                    <a href="#default" class="logo">Movie Site</a>
                    <div class="headerRight">
                        <a class="active" href="#home">Home</a>
                        <a href="#contact">Contact</a>
                        <a href="#about">About</a>
                        <div class="search-container">
                            <form action="poster.jpg">
                                <input type="text" placeholder="Search.." name="search"/>
                                <button type="submit"><i class="searching"></i></button>
                            </form>
                        </div>
                    </div>
                </div> */}
                <div class={classes.container-2}>
                    <div class="c-1">
                        &emsp;&emsp;&emsp;&emsp;<img src="poster.jpg" width="300" height="400" center /> &emsp;	
                    </div>
                    <div class="c-2">
                        <h3>About the movie<br/></h3>
                        <p>More about it</p><br/><br/>
                        <h3>Payment and viewing options</h3>
                        <p>Lorem Ipsum ...........</p>
                    </div>
                </div>
                <Footer />
            </React.Fragment >
        )
    }
}
export default Movie;