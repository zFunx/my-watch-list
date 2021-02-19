import React, { Component } from 'react';

// import {Link} from 'react-router-dom';

// import axios from 'axios';

import classes from './Genres.module.css';

class Genres extends Component{
    render(){
        return(
            <div class={classes.GenresList}>
                <ul>
                    <li>Genre 1</li>
                    <li>Genre 2</li>
                    <li>Genre 2</li>
                    <li>Genre 2</li>
                    <li>Genre 2</li>
                    <li>Genre 2</li>
                    <li>Genre 2</li>
                    <li>Genre 2</li>
                </ul>
            </div>
        )
    }
}
export default Genres;