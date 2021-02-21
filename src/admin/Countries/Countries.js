import React, {Component} from 'react';

import axios from 'axios';

import classes from './Countries.module.css';

class Countries extends Component{
    render(){
        return(
            <div class={classes.CountryList}>
                <h1>Country</h1>
            </div>
        )
    }
}
export default Countries;
