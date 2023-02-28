import React from 'react'
import './Footer.css'
import Dark from '../Dark'
function Footer() {
  return (
    <div className={`footer footer-${Dark()}`}>
      <div className="footer-left">
        <div className="location">
          Kigali, Rwanda
        </div>
        <div className="phone-number">
          (+250) 781 732 598
        </div>
      </div>
      <div className="footer-center">
        <p> EDCREATION </p>
        <div className="text">
        Want to learn more about me or discuss a potential project? 
        Contact me at <a>eddymugisha65@gmail.com</a>. 
        Mugisha Eddy | Front-end && Back-end Developer.
        </div>
        <br />
        <div className="text">
        Thanks for visiting my portfolio! 
        Let's work together to bring your 
        vision to life. Mugisha Eddy
        </div>
        <div className={`sub sub-${Dark()}`}>
            <div className="title">Subscribe to my News Letter </div>
              <form action="">
                <input type="email" name="email" id="email" placeholder='Enter Email' />
                <button>SUBSCRIBE</button>
              </form>
        </div>
      </div>
      <div className="footer-right">
        <p>&#169;2023 Copyright: M.J.Eddy </p>
      </div>
    </div>
  )
}

export default Footer