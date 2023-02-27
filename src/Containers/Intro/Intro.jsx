import React from 'react'
import './Intro.scss'
import Dp from '../../Assets/Images/dp.jpg'
import instagram from '../../Assets/Images/instagram.png'
import linkedin from '../../Assets/Images/linkedin.png'
import twitter from '../../Assets/Images/twitter.png'
import gmail from '../../Assets/Images/gmail.png'
import facebook from '../../Assets/Images/facebook.png'

function Intro() {
  return (
    <div className='intro' id='intro'>
        <div className="intro-back">
        </div>
        <div className="intro-container">
            <div className="intro-image">
                <div className="dp-image">
                    <img src={Dp} alt="Image of Me" />
                </div>
                <div className="social-icons">
                    <a href=''><img src={instagram} alt="instagram" /></a>
                    <a href=''><img src={facebook} alt="facebook" /></a>
                    <a href=''><img src={twitter} alt="twitter" /></a>
                    <a href=''><img src={linkedin} alt="linkedin" /></a>
                    <a href=''><img src={gmail} alt="gmail" /></a>
                </div>
            </div>
            <div className="intro-text">
                <p>Hello, My name is Mugisha Eddy 
                    Jedidiah and I am a web developer 
                    who does both Front End and Back End.
                </p>
                <div className="intro-btns">
                    <button>Hire Me</button>
                    <a href="https://edcreation.github.io/CV-html-css-javascript">Download CV</a>
                </div>
            </div>
            <div className="sub">
                <div className="title">Subscribe to my News Letter </div>
                <form action="">
                    <input type="email" name="email" id="email" placeholder='Enter Email' />
                    <button>SUBSCRIBE</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Intro