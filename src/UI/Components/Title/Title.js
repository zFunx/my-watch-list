import axios from 'axios';
import React, { Component } from 'react';
import classes from './Title.module.css';
class Title extends Component {
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
            <React.Fragment>
                <div class={classes.container2}>
                    <div class="c1">
                        &emsp;&emsp;&emsp;&emsp;<img src="bg.jpg" width="330" height="430" center /> &emsp;
                </div>
                    <div class={classes.container3}>
                        <div class={classes.c2}>
                            <table class={classes.table1}>
                                <tr>
                                    <th>
                                        <h1>{this.props.movie.name}</h1>
                                    Genres: {this.props.movie.genres.map(genre => genre.name + ' ')}
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