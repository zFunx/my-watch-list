import axios from 'axios';
import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import Loading from '../../UI/Components/Loading/Loading';
import classes from './Home.module.css';

var button

class Home extends Component {
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
    state = {
        featuredLists: null,
        loading: true
    }

    componentDidMount() {
        axios.get('/featureds?enabled=1')
            .then(res => {
                this.setState({ featuredLists: res.data, loading: false });
                console.log('titles', res.data)
            })
    }

    render() {
        if (this.state.loading) {
            return <Loading />;
        }
        else {
            return (
                <React.Fragment>
                    {this.state.featuredLists.map(featuredList => (
                        <React.Fragment>
                            <h1>&ensp;{featuredList.title}</h1>
                            <div class={classes.sec1}>
                                {featuredList.movies.map(movie => (
                                    <Link to={() => '/movie/' + movie.code}>
                                        <img class={classes.imgg} src="bg.jpg" width="230" height="300" center />
                                    </Link>
                                ))}
                                <button className="LeftPaddle" style={button}>
                                    <img class={classes.img1} src="https://img.icons8.com/plasticine/50/000000/right.png" />
                                </button>
                            </div>
                        </React.Fragment>
                    ))}
                </React.Fragment>
            )
        }
    }
}
export default Home;