import React, { Component } from 'react';

import axios from 'axios';

import Watch from '../../UI/Components/Watch/Watch.js'

import Title from '../../UI/Components/Title/Title.js'

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
        console.log('code', this.props.match.params.code);
        axios.get('/movies', {
            params: {
                code: this.props.match.params.code
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
                    <Title />
                    <Watch />
                    <div class={classes.container4}>
                        <h2>SYNOPSIS</h2>
                        <p>{this.state.movie.synopsis}</p>
                        {/* <h2>CAST</h2><br />
                        <p>Cast of the movie</p> */}
                    </div>
                    {/* <div class={classes.container5}>
                        <h2>PEOPLE WHO LIKED AVENGERS:ENDGAME ALSO LIKED<br /></h2>
                        <p>Other movie posters/options</p>
                    </div> */}
                    <Footer />
                </React.Fragment >
            )
        }
    }
}
export default Movie;