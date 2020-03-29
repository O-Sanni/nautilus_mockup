import React from "react";
import './components.css'


class ChannelComponents extends  React.Component{
render()
{
    return(
        <div id="channelMainDiv">
        <h1 id="cha">Channels</h1>
        <h3 id="tune">TUNE IN TO NAUTILUS' DEEP DIVE PORTALS</h3>
        <div id="channels">
            <div className="channelsRows">
                <div className="separateChDiv">
                    <p><span style={{color: "blue"}}>BIOLOGY</span> +BEYOND</p>
                    <img className="channelImg" src={require("../assets/bio_and_beyond.jpeg")} alt="biology" />
                    <p className="underImgTop">Making Sense of the Genome, at Last</p>
                    <p className="underImgBtn">by Adam Piare</p>
                </div>
                <div className="separateChDiv">
                    <h3>Women in Science & Engineering</h3>
                    <img className="channelImg" src ={require("../assets/wise_sci_and_engineering.png")} alt="woman" />
                    <p className="underImgTop">Your Barain Is On the Brink of Chaos</p>
                    <p className="underImgBtn">by Kelly Clancy</p>
                </div>
                <div className="separateChDiv">
                    <h3>QUANTA ABSTRACTIONS</h3>
                    <img className="channelImg" src ={require("../assets/abstractions.jpeg")} alt="abstraction" />
                    <p className="underImgTop">Mathematicians Calculate How Randomness Creeps In</p>
                    <p className="underImgBtn">by Marcus Woo</p>
                </div>
            </div>
            <div className="channelsRows">
                <div className="separateChDiv">
                    <h3>EARTH</h3>
                    <img className="channelImg" src={require("../assets/earth.jpeg")} alt="earth" />
                    <p className="underImgTop">The Deep Time of Walden Pond</p>
                    <p className="underImgBtn">by Curt Stager</p>
                </div>
                <div className="separateChDiv">
                    <h3><span style={{color: "blue"}}>THINK</span> LIKE A SCIENTIST</h3>
                    <img className="channelImg" src ={require("../assets/tlas.jpeg")} alt="think like a scientist" />
                    <div id="play">
                        <img id="audioChan" src ={require("../assets/Audio_sprite.png")} alt="play" />
                        <p className="underImgTop">The Best Burger Place Is a Lab</p>
                    </div>
                    <p className="underImgBtn">by Thomas King</p>
                </div>
                <div className="separateChDiv">
                    <h3>cosmos</h3>
                    <img className="channelImg" src ={require("../assets/cosmos.jpeg")} alt="cosmos" />
                    <p className="underImgTop">How Much Should Expectation Drive Science?</p>
                    <p className="underImgBtn">by Claudia Geib</p>
                </div>
            </div>
            <div className="channelsRows">
                <div className="separateChDiv">
                    <h3>POETRY IN SCIENCE</h3>
                    <img className="channelImg" src={require("../assets/poetry.jpeg")} alt="poetry" />
                    <p className="underImgTop">On Observation and Imagination</p>
                    <p className="underImgBtn">by Gillian Osborne</p>
                </div>
                <div className="separateChDiv">
                    <h3>Aging</h3>
                    <img className="channelImg" src ={require("../assets/aging.png")} alt="aging" />
                    <p className="underImgTop">Yes, Life in the Fast Lane Kills You</p>
                    <p className="underImgBtn">by Philip Ball</p>
                </div>
                <div className="separateChDiv">
                    <h3><span style={{color: "red"}}>SCIENCE</span> PHILANTHROPY ALLIANCE</h3>
                    <img className="channelImg" src ={require("../assets/alliance.png")} alt="alliance" />
                    <p className="underImgTop">Taking to the Stars</p>
                    <p className="underImgBtn">by Science Philanthropy Alliance</p>
                </div>
            </div>
            <div className="channelsRows">
                <div className="separateChDiv">
                    <h3>MP<span style={{fontWeight: 'bolder'}}>Neuro</span></h3>
                    <img className="channelImg" src ={require("../assets/maxplanck.jpeg")} alt="neuro" />
                    <p className="underImgTop">Understanding the Brain with the Help of Artificial Intelligence</p>
                    <p className="underImgBtn">by Max Planck Institute of Neurobiology</p>
                </div>
            </div>
        </div>
    </div>

    )
}
}
export default ChannelComponents;