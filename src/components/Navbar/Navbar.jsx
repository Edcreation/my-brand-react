import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import './Navbar.css'
import { Navigate, useNavigate } from 'react-router-dom';
import Dark from '../Dark';
import defaultImage from '../../Assets/Images/default.png'
function Navbar() {

    const [active, setActive] = useState(false)
    const [nav, setNav] = useState('')
    const navigate = useNavigate();
    const [theme, setTheme] = useState(
      localStorage.getItem('theme') || 'light'
    );
    const toggleTheme = () => {
      document.body.classList.add(theme)
      if (theme === 'light') {
        setTheme('dark');
      } else {
        setTheme('light');
      }
      navigate(0)
    };
    const toggleNavBar = () => {
      if (nav == 'flex') {
        setNav('')
      }
      else {
        setNav('flex')
      }
    }
    useEffect(() => {
      localStorage.setItem('theme', theme);
    }, [theme]);
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
            <nav className={`App ${Dark()}`}>
              <div className="logo">
                J<i className="fa fa-code" aria-hidden="true"></i>D
              </div>
              <div className="links">
                  <div className={`nav-links nav-links-${Dark()}`} style={{display: `${nav}`}}>
                      <Link to="/" onClick={scrollToIntro}>Home</Link>
                      <Link to="/#aboutme" onClick={scrollToAbout}>About</Link>
                      <Link to="/blogs">Blogs</Link>
                      <Link to="/contact-me">Contacts</Link>
                      <div className="mode">
                        {theme === "dark" ? 
                        <img onClick={toggleTheme} src="https://cdn-icons-png.flaticon.com/512/869/869869.png" alt="" /> : 
                        <img onClick={toggleTheme} src="https://cdn-icons-png.flaticon.com/512/1812/1812660.png" alt="" />
                        }
                      </div>
                  </div>
                  <div className={`drop-down drop-down-${Dark()}`} style={{ display: (active ? 'flex' : 'none') }}>
                    {LoggedInAsAdmin ? "" : ''}
                    <Link to="/profile">Profile</Link>
                    
                    
                    <button onClick={logOut}>Log Out</button>
                  </div>
                  <div className="dp-box" onClick={toggleNav}>
                      <img src={userDp} alt="" />
                      <i className="fa fa-caret-down" aria-hidden="true"></i>
                  </div>
                  <div className="nav-down-btn" onClick={toggleNavBar}  id='nav-btn'>
                  {nav === '' ? 
                  <i className="fa fa-bars" aria-hidden="true"></i> :
                  
                  <i className="fa fa-times" aria-hidden="true"></i>
                  }
                  </div>
              </div>
            </nav>
        )
      }
      return (
        <nav className={`App ${Dark()}`}>
              <div className="logo">
                J<i className="fa fa-code" aria-hidden="true"></i>D
              </div>
          <div className="links">
              <div className={`nav-links nav-links-${Dark()}`} style={{display: `${nav}`}}>
                  <Link to="/" onClick={scrollToIntro}>Home</Link>
                  <Link to="/#aboutme" onClick={scrollToAbout}>About</Link>
                  <Link to="/blogs">Blogs</Link>
                  <Link to="/contact-me">Contacts</Link>
                  <div className="mode">
                    {theme === "dark" ? 
                    <img onClick={toggleTheme} src="https://cdn-icons-png.flaticon.com/512/869/869869.png" alt="" /> : 
                    <img onClick={toggleTheme} src="https://cdn-icons-png.flaticon.com/512/1812/1812660.png" alt="" />
                    }
                    
                  </div>
              </div>
              <div className="nav-btns">
                  <Link to="/signup">Sign Up</Link>
                  <Link to="/login" className="button">Login</Link>
              </div>
              <div className="nav-down-btn" onClick={toggleNavBar}  id='nav-btn'>
                  {nav === '' ? 
                  <i className="fa fa-bars" aria-hidden="true"></i> :
                  
                  <i className="fa fa-times" aria-hidden="true"></i>
                  }
              </div>
          </div>
        </nav>
    )
}

export default Navbar