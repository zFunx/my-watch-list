import React, { Component } from 'react';

import Footer from '../../UI/Components/Footer/Footer.js'

import classes from './Movie.module.css';

class Movie extends Component {
    render() {
        
        return (
            <div className={classes.header}>
                <a href="#default" class="logo">MOVIE DESCRIPTION PAGE</a>
                <div className="header-right">
                    <a class="active" href="#home">Home</a>
                    <a href="#contact">Contact</a>
                    <a href="#about">About</a>
                    <div class="search-container">
                        <form action="/action_page.php">
                                <input type="text" placeholder="Search.." name="search" />
                                <button type="submit"><i class="fa fa-search">GO</i></button>
                        </form>
                    </div>
                </div>
            </div>

            // <React.Fragment>
            //     <div className={[classes.container, classes.grey].join(' ')}>

            //         <nav class="nav-list">
            //             <a href="#" class="nav-link center">Home</a>
            //             <a href="#" class="nav-link center" >Trending</a>
            //             <a href="#" class="nav-link center">New</a>
            //             <a href="#" class="nav-link center">
            //                 <form action="/action_page.php">
            //                     <input type="text" placeholder="Search.." name="search" />
            //                     <button type="submit"><i class="fa fa-search"></i></button>
			// 	            </form>
			//             </a>
            //         </nav>
            //     </div>
            //     div
            //     <Footer/>
            // </React.Fragment >
        )
    }
}

export default Movie;