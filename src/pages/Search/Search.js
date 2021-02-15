import React from 'react';

import { Component } from 'react';

import classes from './Search.module.css';
class Search extends Component { 
        render() {
            return(
                <React.Fragment>
                    <h1 class={classes.hOne}><br />Search Results...</h1>
                                 {/* <img class={classes.imgg} src="bg.jpg" width="230" height="300" center />
                                // {this.props.results} */}
                    <img class={classes.result} src="bg.jpg" width="230" height="300" center />    
                </React.Fragment>          
            )
        }
}
export default Search;