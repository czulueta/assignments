import React from "react"
import './styles.css'

const App = () => {
    return (
        <div className="bigContainer">
            <div className="mainContainer">
                <div className="div1" style={{backgroundImage:`url("http://www.vodiacapital.com/wp-content/uploads/2019/04/Screen-Shot-2019-04-24-at-4.13.48-PM.png")`}}>
                    <h1  className="myName">Cesar N. Zulueta II
                        <div className="jobTitle"> 
                            <h3 id="job" className="myTitle"><span>Full Stack Developer</span></h3>
                        </div>
                    </h1> 
                </div>
                <div className="div2">
                    <div className="aboutTitle">About
                        <div className="about">
                            <p className="aboutIntro">I'm an obstacle hurdler and I'm not talking about running track. I am the type to stick it out through the thick and thin, learn from my mistakes, adapt to all changes, pick up the man down, build up or add to the team for the best results. I'm a Full Stack Developer.</p>
                        </div>
                    </div> 
                </div>
                <div className="div3">
                    <div className="res">Resume</div>
                </div>
                <div className="div4">
                    <div className="projects">Projects</div>
                </div>

            </div>

        </div>
    )
}
export default App