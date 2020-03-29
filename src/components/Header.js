import React from 'react';

class Header extends React.Component{
    render(){
        return (
            <div id="header">
                <img id="logo" src ={require("../assets/global/logo.png")} alt="logo" />
                <div id="navLeft">
                    <ul id="list">
                        <li className="navTxtBtn">ISSUES</li> 
                        <li className="navTxtBtn">TOPICS </li>
                        <li className="navTxtBtn" >BLOG </li>
                        <li className="navTxtBtn" >NEWSLETTER </li>
                        <img className="socialMedia" src={require("../assets/twiterIcon.png")} alt="twitter Icon" />
                        <img className="socialMedia" src={require("../assets/facebookIcon.png")} alt="facebook Icon" />
                        <li className="navTxtBtn">LOGIN</li>
                    </ul>
                    <button className="navTxtBtn" id="subscribeButton" type="button" onClick=" ">SUBSCRIBE</button>   
                </div>
            </div>
        )


    }
}
export default Header;