import React from 'react';

class Header extends React.Component{
    render(){
        return (
            <div id="header">
                <img className="logo" src ={require("../assets/global/nautilus-logo-sprite.png")} alt="logo" />
                <div id="navLeft">
                <p className="navTxtBtn">ISSUES </p>
                <p className="navTxtBtn">TOPICS </p>
                <p className="navTxtBtn" >BLOG </p>
                <p className="navTxtBtn" >NEWSLETTER </p>
                <img className="socialMedia" src={require("../assets/twiterIcon.png")} alt="twitter Icon" />
                <img className="socialMedia" src={require("../assets/facebookIcon.png")} alt="facebook Icon" />
                <p className="navTxtBtn">LOGIN</p>
                <button className="navTxtBtn" id="subscribeButton" type="button" onClick=" ">SUBSCRIBE</button>
            </div>
            </div>
        )


    }
}
export default Header;