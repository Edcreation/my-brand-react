import React from 'react'
import './About.scss'
import tick from '../../Assets/Images/approval.png'
function About() {
  return (
    <div className='about' id='aboutme'>
        <div className="about-container">
            <div className="title">
                <p>About Me</p>
                <div className="line"></div>
            </div>
            <div className="text-card">
              <div className="p">
                <p>
                As a highly skilled programmer, 
                I have a passion for solving complex 
                problems with code. With 2 years of 
                experience in NodeJS as Backend,1 year of 
                experience in UI/UX and 3 years of 
                experience in React, I have developed 
                a strong foundation in software development 
                methodologies and a track record of delivering 
                high-quality, reliable, and efficient software 
                solutions. I am constantly seeking to expand 
                my skill set and stay current with the latest 
                technologies and industry trends.
                </p>
                <button>My Works</button>
              </div>
            </div>
            <div className="skills">
              <div className="skills-amt">
                <div className="skill">
                  <p>Javascript</p>
                  <div className="javascript"></div>
                </div>
                <div className="skill">
                  <p>NodeJS</p>
                  <div className="nodejs"></div>
                </div>
                <div className="skill">
                  <p>ReactJS</p>
                  <div className="reactjs"></div>
                </div>
                <div className="skill">
                  <p>Python</p>
                  <div className="python"></div>
                </div>
                <div className="skill">
                  <p>MongoDB</p>
                  <div className="mongodb"></div>
                </div>
                <div className="skill">
                  <p>UI/UX</p>
                  <div className="ui"></div>
                </div>
              </div>
              <div className="certified">
                <div className="title">
                  <p>Certified In</p>
                  <div className="line"></div>
                </div>
                <div className="cert">
                  <a href='' className="card">
                    <div className="img"><img src={tick} alt="tick" /></div>
                    <div className="txt">HTML5</div>
                  </a>
                  <a href='' className="card">
                    <div className="img"><img src={tick} alt="tick" /></div>
                    <div className="txt">CSS</div>
                  </a>
                  <a href='' className="card">
                    <div className="img"><img src={tick} alt="tick" /></div>
                    <div className="txt">JavaScript</div>
                  </a>
                  <a href='' className="card">
                    <div className="img"><img src={tick} alt="tick" /></div>
                    <div className="txt">Django</div>
                  </a>
                  <a href='' className="card">
                    <div className="img"><img src={tick} alt="tick" /></div>
                    <div className="txt">DSA</div>
                  </a>
                  <a href='' className="card">
                    <div className="img"><img src={tick} alt="tick" /></div>
                    <div className="txt">NodeJS</div>
                  </a>
                </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default About