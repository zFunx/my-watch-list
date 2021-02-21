import React, { Component } from 'react';

import {Link} from 'react-router-dom';

import axios from 'axios';

import classes from './Genres.module.css';

class Genres extends Component{
    state = {
        GList : []
    }
    
    componentDidMount() {
        axios.get('/genres')    
            .then(res => {
                console.log('genres', res.data);
                const GList = res.data;
                this.setState({GList});
            })
    }

    render(){
        return(
            <div class={classes.GList}>
                Genre List
                <ul>
                    { this.state.GList.map(genre => <li>{genre.name}</li>)}
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
export default Genres;