import React from 'react'
import './Login.scss'
import { useState } from "react";
import Dark from '../../components/Dark';
import { BrowserRouter as Router,Routes, Route, Link, useNavigate, Navigate } from 'react-router-dom';
function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const [pop, setPop] = useState('')
    const [password, setPassword] = useState(false);
    const [icon, setIcon] = useState(false);
    const [btn, setBtn] = useState('Log IN');
    let LoggedIn = false
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
            email: email,
            password: pass
        }
        disableBtn("Loading...", true)
        const rawResponse = await fetch('https://my-brand-production.up.railway.app/users/login', {
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
            popContact(content.message, "red")
          }
          if (content.token) {
              const userId = content.userId
              const userAlpha = await fetch(`https://my-brand-production.up.railway.app/users/u/${userId}`)
              const user = await userAlpha.json()
              localStorage.setItem("tempLog", JSON.stringify(user.data))
              localStorage.setItem("cooltoken", content.token)
              navigate(0)
          }
          disableBtn("Log In", false)
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
                <div className="title">LOGIN<div className="line"></div></div>
                <div className="input">
                    <p>Email</p>
                    <div className="email">
                        <input type="email" name="email" id="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
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
                    <button id='btn'>{btn}</button>
                    <a href=''>Forgot Password?</a>
                </div>
                <p>Don't have an account? <Link to="/signup">Sign Up</Link> </p>
            </form>
        </div>
    </div>
  )
}

export default Login