import React, { Component } from 'react';
import classes from './Info.module.css';
class Info extends Component {
    render() {
        return (
        <div class={classes.container2}>
            <div class="c1">
                &emsp;&emsp;&emsp;&emsp;<img src="bg.jpg" width="330" height="430" center /> &emsp;
            </div>
            <div class={classes.container3}>
                <div class={classes.c2}>
                    <table class={classes.table1}>
                        <tr>
                            <th>
                                <h1>{this.props.movie.name}</h1>
                                Genres: {this.props.movie.genres.map(genre => genre.name + ' ')}
                            </th>
                            <th>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;<img src="https://img.icons8.com/android/40/000000/facebook-new.png" /></th>
                            <th>&emsp;<img src="https://img.icons8.com/ios-filled/45/000000/instagram-new.png" /></th>
                            <th>&emsp;<img src="https://img.icons8.com/ios-glyphs/45/000000/twitter.png" /></th>
                        </tr>
                    </table>
                </div>
                <div class={classes.c3}>
                    <h2>&ensp;WATCH NOW</h2>
                    <table class={classes.table2}>
                        <tr>
                            <th>STREAM</th>
                            <th><img src="https://img.icons8.com/fluent-systems-regular/75/000000/netflix-desktop-app.png" /></th>
                            <th><img src="https://img.icons8.com/ios/75/000000/amazon-prime-video.png" /></th>
                        </tr>
                        <tr>
                            &ensp;
                        </tr>
                        <tr>
                            <th>RENT/BUY</th>
                            <th><img src="https://img.icons8.com/material-outlined/75/000000/youtube-play--v1.png" /></th>
                            <th><img src="https://img.icons8.com/ios/75/000000/apple-tv.png" /></th>
                        </tr>
                        <tr>
                            &ensp;
                        </tr>
                        {/* <tr>
                            <th>RENT</th>
                            <th><img src="https://img.icons8.com/ios/75/000000/apple-tv.png" /></th>
                            <th><img src="https://img.icons8.com/material-outlined/75/000000/youtube-play--v1.png" /></th>
                        </tr> */}
                    </table>
                </div>
            </div>
        </div>
        )
    }
}
export default Info;