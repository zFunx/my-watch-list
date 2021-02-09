import axios from 'axios';

import React, { Component } from 'react';

import classes from './Watch.module.css';

class Watch extends Component {
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

    componentDidMount() {
        // where-to-watches?country.name=India&movie.id={movie-id}
        console.log('movie id', this.props.movie.id)

        // learn template string in JS
        axios.get(`/where-to-watches?country.name=India&movie.id=${this.props.movie.id}`)
            // axios.get("/where-to-watches?country.name=India")
            .then(res => {
                this.setState({ loading: false, platforms: res.data });
                console.log('platforms', res.data);
            })
    }

    render() {
        if (!this.state.loading) {
            // for(let i = 0; i < this.state.platforms.length; i++){
            //     if(platform[i].buying_option.option === "Subscription"){
            //         // create subscrition list
            //     }
            //     else{
            //         // create rent/buy list
            //     }
            // }
        }

        return (
                <div class={classes.c3}>
                    <h2>&ensp;WATCH NOW</h2>
                    <table class={classes.table2}>
                        <tr>
                            <th>STREAM</th>
                            <th><img src="https://img.icons8.com/fluent-systems-regular/75/000000/netflix-desktop-app.png" /></th>
                            <th><img src="https://img.icons8.com/ios/75/000000/amazon-prime-video.png" /></th>
                        </tr>
                        <tr>
                            &ensp;
                    </tr>
                        <tr>
                            <th>RENT/BUY</th>
                            <th><img src="https://img.icons8.com/material-outlined/75/000000/youtube-play--v1.png" /></th>
                            <th><img src="https://img.icons8.com/ios/75/000000/apple-tv.png" /></th>
                        </tr>
                        <tr>
                            &ensp;
                    </tr>
                        {/* <tr>
                        <th>RENT</th>
                        <th><img src="https://img.icons8.com/ios/75/000000/apple-tv.png" /></th>
                        <th><img src="https://img.icons8.com/material-outlined/75/000000/youtube-play--v1.png" /></th>
                    </tr> */}
                    </table>
                </div>
        )
    }
}
export default Watch;