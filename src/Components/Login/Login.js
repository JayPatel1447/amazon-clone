import React from 'react'
import "./Login.css"

import {Link} from 'react-router-dom'

function Login() {
    return (
        <div className="login">
            <Link to="/">
                <img className="login__logo" src="https://pngimg.com/uploads/amazon/amazon_PNG21.png"/>
            </Link>

            <div className="login__container">

                    <h1>Sign in</h1>

                    <form>
                        <h5>E-mail</h5>
                        <input type='text'/>

                        <h5>Password</h5>
                        <input type='password'/>

                        <button className="login__signInButton">Sign In</button>
                    </form>
                    <p>By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.</p>
                    <button className="login__registerButton">Create your amazon account</button>
            </div>
        </div>
    )
}

export default Login
