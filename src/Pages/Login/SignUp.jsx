import React from 'react'
import './Login.scss'
import { useState } from "react";
import Dark from '../../components/Dark';
import { BrowserRouter as Router,Routes, Route, Link, Navigate } from 'react-router-dom';
function SignUp() {
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const [username, setUsername] = useState('')
    const [pop, setPop] = useState('')
    const [password, setPassword] = useState(false);
    const [icon, setIcon] = useState(false);
    const [btn, setBtn] = useState('Sign Up')
    if (localStorage.getItem("cooltoken") && localStorage.getItem("tempLog")) {
        return <Navigate to="/"/>
    }
    function popContact(text, color) {
        setPop(text)
        document.getElementById('pop').style.background = color
        document.getElementById('pop').style.padding = '10px'

        setTimeout(() => {
            setPop('')
            document.getElementById('pop').style.padding = '0px'
        }, 5000);
    }
    function disableBtn(text, bt) {
        setBtn(text)
        document.getElementById('btn').disabled = bt
    }
    const handleSubmit = async e => {
        e.preventDefault()
        const detail = {
            username: username,
            email: email,
            password: pass
        }
        disableBtn("Loading...", true)
        const rawResponse = await fetch('https://my-brand-production.up.railway.app/users/signup', {
            method: 'POST',
            headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(detail)
          });
          const content = await rawResponse.json();
          if (content.Error) {
            popContact(content.Error, "red")
          }
          if (content.message) {
            popContact(content.message, "green")
          }
          disableBtn("Sign Up", false)
        }
    const togglePassword = () => {
        // When the handler is invoked
        // inverse the boolean state of passwordShown
        setPassword(!password);
        setIcon(!icon)
      };
  return (
    <div className={`login login-${Dark()}`}>
        <div className="container">
            <div className="pop-up" id='pop'>{pop}</div>
            <form action="" onSubmit={handleSubmit}>
                <div className="title">SIGN UP<div className="line"></div></div>
                <div className="input">
                    <p>Email</p>
                    <div className="email">
                        <input type="email" name="email"
                            value={email}
                            onChange={e => setEmail(e.target.value)} />
                    </div>
                </div>
                <div className="input">
                    <p>UserName</p>
                    <div className="email">
                        <input type="text" name="username" 

                         value={username}
                         onChange={e => setUsername(e.target.value)}
                         />
                    </div>
                </div>
                <div className="input">
                    <p>Password</p>
                    <div className="password">
                        <input type={password ? "text" : "password"} name="password" id="pass" 
                            value={pass}
                            onChange={e => setPass(e.target.value)}
                        />
                        <i className={password ? "fa fa-eye-slash" : "far fa-eye"} onClick={togglePassword}></i>
                    </div>
                </div>
                <div className="input">
                    <button id='btn' >{btn}</button>
                    
                </div>
                <p>Already have an account? <Link to="/login">Log In</Link> </p>
            </form>
        </div>
    </div>
  )
}

export default SignUp