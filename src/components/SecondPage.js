import React from "react";
import "./components.css";

class SecondPage extends React.Component{
    render(){
        return(
            <div id="secondPage" >
            <div id="space"></div>
                <div id="topSecondPage">
                    <h3>THE NAUTILUS SPOTLIGHT</h3>
                    <h1>WHY THE LAWS OF PHYSICS ARE INEVITABLE</h1>
                    <button>READ NOW</button>
                </div>
                <div>
                  <div>
                    <p>ISSUE  079</p>
                    <h1>CATALYSTS</h1>
                    <p>"What generates a new theory in science?..."</p>
                        <div>
                            <p>CHAPTER ONE</p>
                            <p>Art</p>
                        </div>
                        <div>
                            <p>CHAPTER TWO</p>
                            <p>Mind</p>
                            <p>Coming December 12</p>
                        </div>
                        <div>
                            <p>CHAPTER THREE</p>
                            <p>Energy</p>
                            <p>Coming December 19</p>
                        </div>
                        <div>
                            <p>CHAPTER FOUR</p>
                            <p>Start</p>
                            <p>Coming December 26</p>
                        </div>
                  </div>  
                  <div>
                    <div>
                       <div>
                       <p>ARTIFICIAL INTELLIGENCE</p>
                       <p>Best Screenplay Goes to the Algorithms</p>
                       <p> By Arthur I. Miller</p> 
                       </div>
                    </div>
                    <div>
                       <div>
                        <p>MUSIC</p>
                        <p>How I Taught My Computer to Write Its Own Music</p>
                        <p>By John Supko</p>
                       </div>
                       <div>
                       <p>ART</p>
                        <p> Picasso's Got Nothing on Al Artists</p>
                        <p>By Kevin Berger</p>
                       </div>
                    </div>
                  </div>
                </div>
            </div>
        )
    }
}

export default SecondPage;