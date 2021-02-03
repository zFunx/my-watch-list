import React, { Component } from 'react';
import axios from 'axios';

import Footer from '../../UI/Components/Footer/Footer.js'

import Loading from '../../UI/Components/Loading/Loading.js'

import classes from './Movie.module.css';

class Movie extends Component {
    state = {
        movie: {
            name: ''
        },
        error: false,
        loading: true
    }

    componentDidMount() {
        axios.get('https://afternoon-basin-38506.herokuapp.com/movies', {
            params: {
                code: 'spider-man-homecoming'
            }
        })
            .then(res => {
                if (res.data.length === 1) {
                    this.setState({ movie: res.data[0], loading: false });
                }
                console.log('movies', res.data);
            })
    }

    render() {
        if (this.state.loading) {
            return <Loading />
        }
        else {
            return (

                <React.Fragment>    
                    {/* <div style={{backgroundImage: "url(/bg.jpg)" }}/> */}
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
                    <div class={classes.container2}>
                        <div class="c1">
                            &emsp;&emsp;&emsp;&emsp;<img src="poster.jpg" width="330" height="430" center /> &emsp;
                        </div>
                        <div class={classes.container3}>
                            <div class={classes.c2}>
                                <table class={classes.table1}>
                                    <tr>
                                        <th><h1>{this.state.movie.name}</h1></th>
                                        <th>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;<img src="https://img.icons8.com/android/40/000000/facebook-new.png"/></th>
                                        <th>&emsp;<img src="https://img.icons8.com/ios-filled/45/000000/instagram-new.png"/></th>
                                        <th>&emsp;<img src="https://img.icons8.com/ios-glyphs/45/000000/twitter.png"/></th>
                                    </tr>
                                </table>
                            </div>
                            <div class={classes.c3}>
                                <h3>&ensp;WATCH NOW</h3>
                                <table class={classes.table2}>
                                <tr>
                                        <th>STREAM</th>
                                        <th><img src="https://img.icons8.com/fluent-systems-regular/75/000000/netflix-desktop-app.png"/></th>
                                        <th><img src="https://img.icons8.com/ios/75/000000/amazon-prime-video.png"/></th>
                                    </tr>
                                    <tr>
                                        <th>BUY</th>
                                        <th><img src="https://img.icons8.com/material-outlined/75/000000/youtube-play--v1.png"/></th>
                                        <th><img src="https://img.icons8.com/ios/75/000000/apple-tv.png"/></th>
                                        
                                    </tr>
                                    <tr>
                                        <th>RENT</th>
                                        <th><img src="https://img.icons8.com/ios/75/000000/apple-tv.png"/></th>
                                        <th><img src="https://img.icons8.com/material-outlined/75/000000/youtube-play--v1.png"/></th>
                                    </tr>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div class={classes.container4}>
                        <h2>SYNOPSIS</h2>
                        <p>After the devastating events of Avengers: Infinity War, the universe is in ruins due to the efforts of the Mad Titan, Thanos. With the help of remaining allies, the Avengers must assemble once more in order to undo Thanos' actions and restore order to the universe once and for all, no matter what consequences may be in store.</p>
                        <h2>CAST</h2><br />
                        <p>Cast of the movie</p>
                    </div>
                    <div class={classes.container5}>
                        <h2>PEOPLE WHO LIKED AVENGERS:ENDGAME ALSO LIKED<br /></h2>
                        <p>Other movie posters/options</p>
                    </div>
                    <Footer />
                </React.Fragment >
            )
        }
    }
}
export default Movie;