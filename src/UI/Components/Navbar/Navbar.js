import React, { Component } from 'react';

import Loading from '../../Components/Loading/Loading';

import classes from './Navbar.module.css';

class Navbar extends Component {
    SearchList=[
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
                    "created_at": "2021-02-01T14:14:31.535Z",
                    "updated_at": "2021-02-04T07:01:21.030Z"
                },
                {
                    "id": 7,
                    "movie": 1,
                    "name": "Comedy",
                    "created_at": "2021-02-04T15:43:37.568Z",
                    "updated_at": "2021-02-04T15:43:51.877Z"
                }
            ],
            "featured_in": [
                {
                    "id": 1,
                    "title": "All Time favourite",
                    "enabled": true,
                    "published_at": "2021-02-07T18:01:43.751Z",
                    "created_at": "2021-02-07T18:01:41.658Z",
                    "updated_at": "2021-02-07T18:01:43.774Z"
                }
            ]
        }
    ];
    state={
        Search: "",
        loading: false
    };

    render() {  
        if (this.state.loading){
            return <Loading />
        }
        else{
            return(
                <div class={classes.topnav}>
                    <b href="#home"><u>MOVIE PAGE</u></b>
                    <a href="#home">Home</a>
                    <a href="#trending">Trending</a>
                    <a href="#New In">New In</a>
                    <a href="#contact">About us</a>

                    <div class={classes.searchContainer}>
                        <form action="/action_page.php">
                            <input type="text" placeholder="Search Here." name="search" onChange={this.props.onSearch} />
                            {/* <button type="submit">Search</button> */}
                        </form>
                    </div>
                    <l href="login"><b>Login</b></l>
                </div>
            )
        }
    }
}
export default Navbar;