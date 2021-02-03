import React, { Component } from 'react';
import classes from './Loading.module.css';
class Loading extends Component {
    render() {
        return (
            <div class={classes.load}>
                <h1 class={classes.twirl} ></h1>
                <h2>LOADING...</h2>
            </div>

        )
    }
}
export default Loading;