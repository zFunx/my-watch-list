import axios from 'axios';
import React, { Component } from 'react';
import classes from './Title.module.css';
class Title extends Component {
    featuredLists = [
        {
            "id": 1,
            "title": "All Time favourite",
            "enabled": true,
            "published_at": "2021-02-07T18:01:43.751Z",
            "created_at": "2021-02-07T18:01:41.658Z",
            "updated_at": "2021-02-07T18:01:43.774Z",
            "movies": [
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
                    "synopsis": "Peter Parker tries to stop the Vulture from selling weapons made with advanced Chitauri technology while trying to balance his life as an ordinary high school student."
                },
                {
                    "id": 3,
                    "name": "Inception",
                    "published_at": "2021-02-01T14:37:09.763Z",
                    "created_at": "2021-02-01T14:37:07.499Z",
                    "updated_at": "2021-02-04T07:13:27.161Z",
                    "code": "inception",
                    "releasedOn": "2010-11-11",
                    "imageUrl": null,
                    "rating": 88,
                    "synopsis": "Cobb steals information from his targets by entering their dreams. Saito offers to wipe clean Cobb's criminal history as payment for performing an inception on his sick competitor's son."
                }
            ]
        },
        {
            "id": 2,
            "title": "Bollywood",
            "enabled": true,
            "published_at": "2021-02-07T18:02:23.270Z",
            "created_at": "2021-02-07T18:02:21.554Z",
            "updated_at": "2021-02-07T18:02:23.304Z",
            "movies": [
                {
                    "id": 2,
                    "name": "Ludo",
                    "published_at": "2021-02-01T14:18:35.093Z",
                    "created_at": "2021-02-01T14:17:14.902Z",
                    "updated_at": "2021-02-04T07:00:57.051Z",
                    "code": "ludo",
                    "releasedOn": "2020-11-12",
                    "imageUrl": null,
                    "rating": 76,
                    "synopsis": "From a resurfaced sex tape to a rogue suitcase of money, four wildly different stories overlap at the whims of fate, chance and one eccentric criminal."
                }
            ]
        }
    ];

    platformTemp = [
        {
            "id": 1,
            "buying_option": {
                "id": 3,
                "option": "Subscription",
                "created_at": "2021-02-04T06:47:20.049Z",
                "updated_at": "2021-02-04T06:47:21.548Z"
            },
            "country": {
                "id": 1,
                "name": "India",
                "currency": null,
                "created_at": "2021-02-04T06:47:50.743Z",
                "updated_at": "2021-02-04T06:47:53.885Z"
            },
            "platform": {
                "id": 1,
                "platform": "Neflix",
                "country": "India",
                "platform_country": "netflix_india",
                "created_at": "2021-02-01T14:06:59.669Z",
                "updated_at": "2021-02-01T14:07:01.426Z"
            },
            "movie": 3,
            "price": null,
            "created_at": "2021-02-04T07:02:16.026Z",
            "updated_at": "2021-02-04T07:13:27.158Z"
        }
    ];

    state = {
        platform: null,
        loading: true
    }

    // componentDidMount() {
    //     // where-to-watches?country.name=India&movie.id={movie-id}
    //     console.log('movie id', this.props.movie.id)

    //     // learn template string in JS
    //     axios.get(`/where-to-watches?country.name=India&movie.id=${this.props.movie.id}`)
    //         // axios.get("/where-to-watches?country.name=India")
    //         .then(res => {
    //             this.setState({ loading: false, platforms: res.data });
    //             console.log('platforms', res.data);
    //         })
    // }

    render() {
        return (
            <React.Fragment>
                <div class={classes.container2}>
                    <div class="c1">
                        &emsp;&emsp;&emsp;&emsp;<img src="bg.jpg" width="330" height="430" center />&emsp;
                </div>
                    <div class={classes.container3}>
                        <div class={classes.c2}>
                            <table class={classes.table1}>
                                <tr>
                                    <th>
                                        <h1>{this.props.name}</h1>
                                    Genres: {this.props.genres.map(genre => genre.name + ' ')}
                                    </th>
                                    <th>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;<img src="https://img.icons8.com/android/40/000000/facebook-new.png" /></th>
                                    <th>&emsp;<img src="https://img.icons8.com/ios-filled/45/000000/instagram-new.png" /></th>
                                    <th>&emsp;<img src="https://img.icons8.com/ios-glyphs/45/000000/twitter.png" /></th>
                                </tr>
                            </table>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}
export default Title;