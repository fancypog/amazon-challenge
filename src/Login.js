import React, { useState } from 'react';
import "./Login.css";
import { auth } from './firebase';
import { useNavigate } from "react-router-dom";


function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signIn = e => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .then(auth => {
        navigate('/')
    })
      .catch(error => alert(error.message))

    // Firebase login
    
  }

  const register = e => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {

        console.log(auth);
        if (auth) {
          navigate('/')
        }
 
      })
      .catch(error => alert(error.message))

    // Firebase register
  }

  return (
    <div className='login'>
      <a href='/'>
        <img 
          className='login__logo' 
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" alt="" 
        />
      </a>

      <div className="login__container">
        <h1>Sign-in</h1>

        <form>
          <h5>E-mail</h5>
          <input type="text" value={email} onChange={e => setEmail(e.target.value)} />
          
          <h5>password</h5>
          <input type="password" value={password} onChange={e => setPassword(e.target.value)}/>
        
          <button type="submit" onClick={signIn} 
            className='login__signInButton'>Sign In</button>
        </form>

        <p>
          By signing-in, you agree to AMAZON FAKE CLONE  Conditions of Use & Sale. Please see out Privacy Notice, our Cookies Notice and out Internet-Based Ads
        </p>

        <button onClick={register} 
          className='login__registerButton'>Create your Amazon Account</button>

      </div>
    </div>
  )
}

export default Login;
