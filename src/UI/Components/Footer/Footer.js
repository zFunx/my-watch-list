import React, { Component } from 'react';
import classes from './Footer.module.css';
class Footer extends Component {
    render() {
        return (

            <footer class="footer">
                <div class={classes.footerList}>
                    <a href="#" class="footerLink">Home</a>
                    <a href="#" class="footerLink" >Trending</a>
                    <a href="#" class="footerLink">New</a>
                    <a href="#" class="footerLink">Contact us</a>
                </div>                
          </footer>
        )
    }
}
export default Footer;