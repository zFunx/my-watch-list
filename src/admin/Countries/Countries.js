import React, {Component} from 'react';

import axios from 'axios';

import classes from './Countries.module.css';
import { Redirect } from 'react-router-dom';

class Countries extends Component{
    CList = [
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
        CList : []
    }
    
    componentDidMount() {
        axios.get('/countries')    
            .then(res => {
                console.log('countries', res.data);
                const CList = res.data;
                this.setState({CList});
            })
    }

    render(){
        return(
            <div class={classes.CList}>
               {!localStorage.authToken ? <Redirect to="/admin/login" /> : null} 
               Country List
                <ul>
                    { this.state.CList.map(countries => <li>{countries.name}</li>)}
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
export default Countries;
