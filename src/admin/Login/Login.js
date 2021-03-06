
import axios from 'axios';
import React, { Component } from 'react';
import {Redirect} from 'react-router-dom';

import classes from './Login.module.css';
class Login extends Component {
    state = {
        error: false
    }

    componentDidMount() {
        this.handleLogin();
    }

    handleLogin = ()   => {
        const username = 'admin';
        const password = '123456';

        axios.post('/auth/local', {
            "identifier": username,
            "password": password
        })
            .then(res => {
                localStorage.authToken = res.data.jwt;
                <Redirect to ="/admin" />
                console.log('login response', res.data)
            })
            .catch(errRes => {
                console.log('Invalid Username or Password')
                    alert("Invalid")
            })

        // credential
        // "identifier": "admin",
        //     "password": "123456"

        // invalid user or password response
        // { "statusCode": 400, "error": "Bad Request", "message": [{ "messages": [{ "id": "Auth.form.error.invalid", "message": "Identifier or password invalid." }] }], "data": [{ "messages": [{ "id": "Auth.form.error.invalid", "message": "Identifier or password invalid." }] }] }
    }

    // alt + shift + f to align the code
    render() {
        return (
            <React.Fragment>
                {this.state.error ? <div>Show error</div> : <>
                    <h1 class={classes.heaDing}>Login Page</h1>
                    <form class={classes.LoginForm} onSubmit={this.handleLogin}>
                        <label><br />
                            <p>Username</p>
                            <input type="text" placeholder="Username"/>
                        </label>
                        <label>
                            <p>Password</p>
                            <input type="password" placeholder="Password"/>
                        </label>
                        <div>
                            <button type="submit">Log In</button>
                        </div>
                    </form>
                </>}

                {/* 
                    1. Check if already logged in
                    2. if not,Show username and password input with login button.
                    3. Store the login token
                    4. Redirect to a dashboard page after logged in
                    */}
            </React.Fragment>
        )
    }
}
export default Login;