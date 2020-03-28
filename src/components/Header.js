import React from 'react';

class Header extends React.Component{
    render(){
        return (
            <div id="header">
                <img className="logo" src ={require("../assets/global/nautilus-logo-sprite.png")} alt="logo" />
                <p className="navTxtImgBtn">ISSUES </p>
                <p className="navTxtImgBtn">TOPICS </p>
                <p>BLOG </p>
                <p>NEWSLETTER </p>
                <img className="socialMedia" src={require("../assets/twiterIcon.png")} alt="twitter Icon" />
                <img className="socialMedia" src={require("../assets/facebookIcon.png")} alt="facebook Icon" />
                <p>LOGIN</p>
                <button id="subscribeButton" type="button" onClick=" ">SUBSCRIBE</button>
            </div>
        )


    }
}
export default Header;