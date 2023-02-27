import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import './Navbar.css'
import { Navigate, useNavigate } from 'react-router-dom';
import defaultImage from '../../Assets/Images/default.png'
function Navbar() {
    const [active, setActive] = useState(false)
    const navigate = useNavigate();
    const [theme, setTheme] = useState(
      localStorage.getItem('theme') || 'light'
    );
    const toggleTheme = () => {
      if (theme === 'light') {
        setTheme('dark');
      } else {
        setTheme('light');
      }
    };
    // useEffect(() => {
    //   localStorage.setItem('theme', theme);
    //   if (document.getElementsByClassName('singlepage')[0]) {
    //     document.getElementsByClassName('singlepage')[0].classList.toggle('singlepage-dark') 
    //   }
    //   if (document.getElementsByClassName('drop-down')[0]) {
    //     document.getElementsByClassName('drop-down')[0].classList.toggle('drop-down-dark') 
    //   }
      
    // }, [theme]);
    let LoggedInAsAdmin = false

    const toggleNav = () => {
      setActive(!active)
    }
    const logOut = () => {
      localStorage.removeItem("cooltoken")
      localStorage.removeItem("tempLog")
      navigate(0);
    }
    let checkLog = false
    if (localStorage.getItem("cooltoken")) {
      checkLog = true
    }
    let userDp
    if (localStorage.getItem("tempLog")) {
      userDp =  JSON.parse(localStorage.getItem("tempLog")).imageUrl
      if (userDp === "") {
        userDp = defaultImage
      }
    }
    let LoggedIn = false
    if (localStorage.getItem("cooltoken") && localStorage.getItem("tempLog") && JSON.parse(localStorage.getItem("tempLog")).admin === true) {
      LoggedInAsAdmin = true
    }
    const scrollToAbout = () => {
        const element = document.getElementById('aboutme');
        if (element) {
          // 👇 Will scroll smoothly to the top of the next section
          element.scrollIntoView({ behavior: 'smooth' });
        }
    };
    const scrollToIntro = () => {
        const element = document.getElementById('intro');
        if (element) {
          // 👇 Will scroll smoothly to the top of the next section
          element.scrollIntoView({ behavior: 'smooth' });
        }
    };
      if (checkLog) {
        return (
            <nav className={`App ${theme}`}>
              <div className="logo">
                J<i className="fa fa-code" aria-hidden="true"></i>D
              </div>
              <div className="links">
                  <div className="nav-links">
                      <Link to="/" onClick={scrollToIntro}>Home</Link>
                      <Link to="/#aboutme" onClick={scrollToAbout}>About</Link>
                      <Link to="/blogs">Blogs</Link>
                      <Link to="/contact-me">Contacts</Link>
                      <a onClick={toggleTheme}><i className="fa fa-circle" aria-hidden="true"></i></a>
                  </div>
                  <div className="drop-down" style={{ display: (active ? 'flex' : 'none') }}>
                    {LoggedInAsAdmin ? "" : ''}
                    <Link to="/profile">Profile</Link>
                    
                    
                    <button onClick={logOut}>Log Out</button>
                  </div>
                  <div className="dp-box" onClick={toggleNav}>
                      <img src={userDp} alt="" />
                      <i className="fa fa-caret-down" aria-hidden="true"></i>
                  </div>
              </div>
            </nav>
        )
      }
      return (
        <nav>
              <div className="logo">
                J<i className="fa fa-code" aria-hidden="true"></i>D
              </div>
          <div className="links">
              <div className="nav-links">
                  <Link to="/" onClick={scrollToIntro}>Home</Link>
                  <Link to="/#aboutme" onClick={scrollToAbout}>About</Link>
                  <Link to="/blogs">Blogs</Link>
                  <Link to="/contact-me">Contacts</Link>
                  <a onClick={toggleTheme}><i className="fa fa-circle" aria-hidden="true"></i></a>
              </div>
              <div className="nav-btns">
                  <Link to="/signup">Sign Up</Link>
                  <Link to="/login" className="button">Login</Link>
              </div>
          </div>
        </nav>
    )
}

export default Navbar