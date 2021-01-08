import React, {useState} from 'react'
import "./Login.css"

import {Link, useHistory} from 'react-router-dom'
import { auth  } from "../../firebase";

function Login() {

    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const signIn = (e) => {

        e.preventDefault();
        
        auth.signInWithEmailAndPassword(email, password)
            .then((auth) => {
                history.push("/")

            })
            .catch((e) => {
                alert(e.message)
            })
    }

    const register = (e) => {
        e.preventDefault();
        
        auth.createUserWithEmailAndPassword(email, password)
            .then((auth) => {
            //Successful
            console.log(auth)
            if (auth){
                history.push('/');
            }
        })
            .catch((e) => {
                alert(e.message)})
            
            
    }
    return (
        <div className="login">
            <Link to="/">
                <img className="login__logo" src="https://pngimg.com/uploads/amazon/amazon_PNG21.png"/>
            </Link>

            <div className="login__container">

                    <h1>Sign in</h1>

                    <form>
                        
                       
                        <h5>E-mail</h5>
                        <input type='text' value={email} onChange={e => setEmail(e.target.value)}/>

                        <h5>Password</h5>
                        <input type='password' value={password} onChange={e => setPassword(e.target.value)}/>

                        {/* Button to SignIN*/}
                        <button onClick={signIn} type='submit' className="login__signInButton">Sign In</button>
                    </form>
                    <p>By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.</p>

                    <button onClick={register} className="login__registerButton">Create your amazon account</button>
            </div>
        </div>
    )
}

export default Login
