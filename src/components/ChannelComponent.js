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
                    <img id="titleBiology" src={require("../assets/channels/biology.jpg")} alt="biology and beyond"/>
                    <img className="channelImg" src={require("../assets/bio_and_beyond.jpeg")} alt="biology" />
                    <p className="underImgTop">Making Sense of the Genome, at Last</p>
                    <p className="underImgBtn">by Adam Piare</p>
                </div>
                <div className="separateChDiv">
                <img id="titleWomen" src={require("../assets/channels/woman.jpg")} alt="Women in Science & Engineering"/>
                    <img className="channelImg" src ={require("../assets/wise_sci_and_engineering.png")} alt="woman" />
                    <p className="underImgTop">Your Barain Is On the Brink of Chaos</p>
                    <p className="underImgBtn">by Kelly Clancy</p>
                </div>
                <div className="separateChDiv">
                <img id="titleQuanta" src={require("../assets/channels/quanta.svg")} alt="quanta abstraction"/>
                    <img className="channelImg" src ={require("../assets/abstractions.jpeg")} alt="abstraction" />
                    <p className="underImgTop">Mathematicians Calculate How Randomness Creeps In</p>
                    <p className="underImgBtn">by Marcus Woo</p>
                </div>
            </div>
            <div className="channelsRows">
                <div className="separateChDiv">
                <img id="titleEarth" src={require("../assets/channels/earth.jpg")} alt="earth" />
                    <img className="channelImg" src={require("../assets/earth.jpeg")} alt="earth" />
                    <p className="underImgTop">The Deep Time of Walden Pond</p>
                    <p className="underImgBtn">by Curt Stager</p>
                </div>
                <div className="separateChDiv">
                <img id="titleThink" src={require("../assets/channels/think.svg")} alt="think like a scientist" />
                    <img className="channelImg" src ={require("../assets/tlas.jpeg")} alt="think like a scientist" />
                    <div id="play">
                        <img id="audioChan" src ={require("../assets/Audio_sprite.png")} alt="play" />
                        <p className="underImgTop">The Best Burger Place Is a Lab</p>
                    </div>
                    <p className="underImgBtn">by Thomas King</p>
                </div>
                <div id="cosmosDiv" className="separateChDiv">
                <img id="titleCosmos" src={require("../assets/channels/cosmos.svg")} alt="cosmos" />
                    <img className="channelImg" src ={require("../assets/cosmos.jpeg")} alt="cosmos" />
                    <p className="underImgTop">How Much Should Expectation Drive Science?</p>
                    <p className="underImgBtn">by Claudia Geib</p>
                </div>
            </div>
            <div className="channelsRows">
                <div className="separateChDiv">
                <img id="titleEarth" src={require("../assets/channels/poetry.jpg")} alt="poetry in science" />
                    <img className="channelImg" src={require("../assets/poetry.jpeg")} alt="poetry" />
                    <p className="underImgTop">On Observation and Imagination</p>
                    <p className="underImgBtn">by Gillian Osborne</p>
                </div>
                <div className="separateChDiv">
                <img id="titleEarth" src={require("../assets/channels/aging.svg")} alt="aging" />
                    <img className="channelImg" src ={require("../assets/aging.png")} alt="aging" />
                    <p className="underImgTop">Yes, Life in the Fast Lane Kills You</p>
                    <p className="underImgBtn">by Philip Ball</p>
                </div>
                <div className="separateChDiv">
                <img id="titleEarth" src={require("../assets/channels/earth.jpg")} alt= "science philantropy alliance" /> 
                    <img className="channelImg" src ={require("../assets/alliance.png")} alt="alliance" />
                    <p className="underImgTop">Taking to the Stars</p>
                    <p className="underImgBtn">by Science Philanthropy Alliance</p>
                </div>
            </div>
            <div className="channelsRows">
                <div className="separateChDiv">
                    <img id="titlempNeuro" src={require("../assets/channels/MP.jpg")} alt="mpNeuro" />
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