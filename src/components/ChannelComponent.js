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
                    <h3><span style={{color: "blue"}}>BIOLOGY</span> +BEYOND</h3>
                    <img className="channelImg" src={require("../assets/bio_and_beyond.jpeg")} alt="biology" />
                    <p>Making Sense of the Genome, at Last</p>
                    <p>by Adam Piare</p>
                </div>
                <div className="separateChDiv">
                    <h3>Women in Science & Engineering</h3>
                    <img className="channelImg" src ={require("../assets/wise_sci_and_engineering.png")} alt="woman" />
                    <p>Your Barain Is On the Brink of Chaos</p>
                    <p>by Kelly Clancy</p>
                </div>
                <div className="separateChDiv">
                    <h3>QUANTA ABSTRACTIONS</h3>
                    <img className="channelImg" src ={require("../assets/abstractions.jpeg")} alt="abstraction" />
                    <p>Mathematicians Calculate How Randomness Creeps In</p>
                    <p>by Marcus Woo</p>
                </div>
            </div>
            <div className="channelsRows">
                <div className="separateChDiv">
                    <h3>EARTH</h3>
                    <img className="channelImg" src={require("../assets/earth.jpeg")} alt="earth" />
                    <p>The Deep Time of Walden Pond</p>
                    <p>by Curt Stager</p>
                </div>
                <div className="separateChDiv">
                    <h3><span style={{color: "blue"}}>THINK</span> LIKE A SCIENTIST</h3>
                    <img className="channelImg" src ={require("../assets/tlas.jpeg")} alt="think like a scientist" />
                    <div id="play">
                        <img id="audioChan" src ={require("../assets/Audio_sprite.png")} alt="play" />
                        <p>The Best Burger Place Is a Lab</p>
                    </div>
                    <p>by Thomas King</p>
                </div>
                <div className="separateChDiv">
                    <h3>cosmos</h3>
                    <img className="channelImg" src ={require("../assets/cosmos.jpeg")} alt="cosmos" />
                    <p>How Much Should Expectation Drive Science?</p>
                    <p>by Claudia Geib</p>
                </div>
            </div>
            <div className="channelsRows">
                <div className="separateChDiv">
                    <h3>POETRY IN SCIENCE</h3>
                    <img className="channelImg" src={require("../assets/poetry.jpeg")} alt="poetry" />
                    <p>On Observation and Imagination</p>
                    <p>by Gillian Osborne</p>
                </div>
                <div className="separateChDiv">
                    <h3>Aging</h3>
                    <img className="channelImg" src ={require("../assets/aging.png")} alt="aging" />
                    <p>Yes, Life in the Fast Lane Kills You</p>
                    <p>by Philip Ball</p>
                </div>
                <div className="separateChDiv">
                    <h3><span style={{color: "red"}}>SCIENCE</span> PHILANTHROPY ALLIANCE</h3>
                    <img className="channelImg" src ={require("../assets/alliance.png")} alt="alliance" />
                    <p>Taking to the Stars</p>
                    <p>by Science Philanthropy Alliance</p>
                </div>
            </div>
            <div className="channelsRows">
                <div className="separateChDiv">
                    <h3>MP<span style={{fontWeight: 'bolder'}}>Neuro</span></h3>
                    <img className="channelImg" src ={require("../assets/maxplanck.jpeg")} alt="neuro" />
                    <p>Understanding the Brain with the Help of Artificial Intelligence</p>
                    <p>by Max Planck Institute of Neurobiology</p>
                </div>
            </div>
        </div>
    </div>

    )
}
}
export default ChannelComponents;