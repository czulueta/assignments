import React from "react"
import Navbar from "./Navbar"
import Header from "./Header"

const App = () => {
    
        return(
                <div className="containerImg"  >
                  <div className="topHalf" style={{backgroundImage:`url("http://www.vodiacapital.com/wp-content/uploads/2019/04/Screen-Shot-2019-04-24-at-4.13.48-PM.png")`}}>
                    <Navbar />
                    <Header />
                  </div>
                    <div className="backImgContainer">
                      <div className="backImg" >
                        <div className="div1" >1</div>
                        <div className="div2">2</div>
                        <div className="div3">3</div>
                      </div>
                    </div>
                </div>
        )
    
}
export default App