import React, { Component } from 'react';

// import {Link} from 'react-router-dom';

import axios from 'axios';

import classes from './Platforms.module.css';

class Platforms extends Component{
    PList = [
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
        PList : []
    }
    
    componentDidMount() {
        axios.get('/platforms')    
            .then(res => {
                console.log( 'platform' , res.data );
                const PList = res.data;
                this.setState({PList});
            })
    }

    render(){
        return(
            <div class={classes.PList}>
                Platform List
                <ul>
                    { this.state.PList.map(platform => <li>{platform.platform}</li>)}
                </ul>
            </div>

            // <React.Fragment>
            //         <div class={classes.main}>
            //             name={this.state.movie.name} genres={this.state.movie.genres}
            //         </div>
            //     </React.Fragment >
        )
    }
}
export default Platforms;