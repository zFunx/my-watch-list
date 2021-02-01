import React, { Component } from 'react';
import classes from './Footer.module.css';
class Footer extends Component {
    render() {
        return (
            <footer class="footer">
                <div class={classes.foot}>
                    <a href="#contact">Home</a>
                    <a href="#about">Trending</a>
                    <a href="#contact">New In</a>
                    <a href="#contact">Home</a>
                </div>        
          </footer>
        )
    }
}
export default Footer;