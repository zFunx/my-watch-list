import React, { Component } from 'react';
import axios from 'axios';

import Footer from '../../UI/Components/Footer/Footer.js'

import Loading from '../../UI/Components/Loading/Loading.js'

import classes from './Movie.module.css';

class Movie extends Component {
    movieTemplate = [
        {
            "id": 1,
            "name": "Spider-Man: Homecoming",
            "published_at": "2021-01-28T22:49:46.454Z",
            "created_at": "2021-01-28T22:48:36.227Z",
            "updated_at": "2021-02-04T07:01:21.037Z",
            "code": "spider-man-homecoming",
            "releasedOn": "2020-07-06",
            "imageUrl": null,
            "rating": 74,
            "synopsis": "Peter Parker tries to stop the Vulture from selling weapons made with advanced Chitauri technology while trying to balance his life as an ordinary high school student.",
            "genres": [
                {
                    "id": 3,
                    "movie": 1,
                    "name": "Science-Fiction",
                    "published_at": "2021-02-01T14:14:33.198Z",
                    "created_at": "2021-02-01T14:14:31.535Z",
                    "updated_at": "2021-02-04T07:01:21.030Z"
                }
            ],
            "where_to_watches": [
                {
                    "id": 3,
                    "buying_option": 2,
                    "country": 1,
                    "platform": 4,
                    "movie": 1,
                    "price": 80,
                    "published_at": "2021-02-04T07:08:19.343Z",
                    "created_at": "2021-02-04T07:08:07.925Z",
                    "updated_at": "2021-02-04T07:08:19.399Z"
                }
            ]
        }
    ];

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
                    <div class={classes.container2}>
                        <div class="c1">
                            &emsp;&emsp;&emsp;&emsp;<img src="poster.jpg" width="330" height="430" center /> &emsp;
                            </div>
                        <div class={classes.container3}>
                            <div class={classes.c2}>
                                <table class={classes.table1}>
                                    <tr>
                                        <th>
                                            <h1>{this.state.movie.name}</h1>
                                            Genres: {this.state.movie.genres.map(genre => genre.name + ' ')}
                                        </th>
                                        <th>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;<img src="https://img.icons8.com/android/40/000000/facebook-new.png" /></th>
                                        <th>&emsp;<img src="https://img.icons8.com/ios-filled/45/000000/instagram-new.png" /></th>
                                        <th>&emsp;<img src="https://img.icons8.com/ios-glyphs/45/000000/twitter.png" /></th>
                                    </tr>
                                </table>
                            </div>
                            <div class={classes.c3}>
                                <h2>&ensp;WATCH NOW</h2>
                                <table class={classes.table2}>
                                    <tr>
                                        <th>STREAM</th>
                                        <th><img src="https://img.icons8.com/fluent-systems-regular/75/000000/netflix-desktop-app.png" /></th>
                                        <th><img src="https://img.icons8.com/ios/75/000000/amazon-prime-video.png" /></th>
                                    </tr>
                                    <tr>
                                        <th>BUY</th>
                                        <th><img src="https://img.icons8.com/material-outlined/75/000000/youtube-play--v1.png" /></th>
                                        <th><img src="https://img.icons8.com/ios/75/000000/apple-tv.png" /></th>

                                    </tr>
                                    <tr>
                                        <th>RENT</th>
                                        <th><img src="https://img.icons8.com/ios/75/000000/apple-tv.png" /></th>
                                        <th><img src="https://img.icons8.com/material-outlined/75/000000/youtube-play--v1.png" /></th>
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