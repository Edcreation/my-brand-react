import React from 'react'
import './Intro.scss'
import Dp from '../../Assets/Images/dp.jpg'
import instagram from '../../Assets/Images/instagram.png'
import linkedin from '../../Assets/Images/linkedin.png'
import twitter from '../../Assets/Images/twitter.png'
import gmail from '../../Assets/Images/gmail.png'
import facebook from '../../Assets/Images/facebook.png'
import Dark from '../../components/Dark'
function Intro() {
  return (
    <div className={`intro intro-${Dark()}`} id='intro'>
        <div className="intro-back">
        </div>
        <div className="intro-container">
            <div className="intro-image">
                <div className="dp-image">
                    <img src={Dp} alt="dp of Me" />
                </div>
                <div className="social-icons">
                    <a href='https://www.instagram.com/eddy_jedidiah_101/'><img src={instagram} alt="instagram" /></a>
                    <a href='https://www.facebook.com/real.mae.31392410/'><img src={facebook} alt="facebook" /></a>
                    <a href='https://twitter.com/mugishae250'><img src={twitter} alt="twitter" /></a>
                    <a href='https://www.linkedin.com/in/eddy-mugisha/'><img src={linkedin} alt="linkedin" /></a>
                    <a href='mailto:eddymugisha65@gmail.com'><img src={gmail} alt="gmail" /></a>
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
            
        </div>
    </div>
  )
}

export default Intro