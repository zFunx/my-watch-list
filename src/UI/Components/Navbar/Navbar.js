import React, { Component } from 'react';
import Loading from '../../Components/Loading/Loading';
import classes from './Navbar.module.css';

class Navbar extends Component {
    state = {
        Search: "",
        loading: false
    };

    render() {
        if (this.state.loading) {
            return <Loading />
        }
        else {
            return (
                <div class={classes.topnav}>
                    <div className={classes.topnavLHS}>
                        <a href="#home"><i class="fas fa-home"></i>Home</a>
                        <a href="#trending"><i class="fas fa-poll"></i>Trending</a>
                        <a href="#New"><i class="fas fa-glass-cheers"></i>New</a>
                        <div class={classes.searchContainer}>
                            <form >
                                <input type="text" placeholder="Search" onChange={this.props.onSearch} />
                            </form>
                        </div>
                    </div>
                    <a href="login"><i class="fas fa-power-off"></i>Login</a>
                </div>
            )
        }
    }
}
export default Navbar;