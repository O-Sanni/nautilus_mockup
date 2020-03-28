import React from "react";



class ChannelComponents extends  React.Component{
render()
{
    return(
        <div>
        <h1>Channels</h1>
        <h4>TUNE IN TO NAUTILUS' DEEP DIVE PORTALS</h4>
        <div>
            <div>
                <h3>BIOLOGY+BEYOND</h3>
                <img src={require("../assets/bio_and_beyond.jpeg")} alt="biology" />
                <p>Making Sense of the Genome, at Last</p>
                <p>by Adam Piare</p>
            </div>
            <div>
                <h3>Women in Science & Engineering</h3>
                <img src ={require("../assets/wise_sci_and_engineering.png")} alt="woman" />
                <p>Your Barain Is On the Brink of Chaos</p>
                <p>by Kelly Clancy</p>
            </div>
            <div>
                <h3>QUANTA ABSTRACTIONS</h3>
                <img src ={require("../assets/abstractions.jpeg")} alt="woman" />
                <p>Mathematicians Calculate How Randomness Creeps In</p>
                <p>by Marcus Woo</p>
            </div>
        </div>
        <div>
            <div>
                <h3>EARTH</h3>
                <img src={require("../assets/bio_and_beyond.jpeg")} alt="biology" />
                <p>The Deep Time of Walden Pond</p>
                <p>by Curt Stager</p>
            </div>
            <div>
                <h3>THINK LIKE A SCIENTIST</h3>
                <img src ={require("../assets/wise_sci_and_engineering.png")} alt="woman" />
                <img src ={require("../assets/Audio_sprite.png")} alt="play" />
                <p>The Best Burger Place Is a Lab</p>
                <p>by Thomas King</p>
            </div>
            <div>
                <h3>cosmos</h3>
                <img src ={require("../assets/abstractions.jpeg")} alt="woman" />
                <p>How Much Should Expectation Drive Science?</p>
                <p>by Claudia Geib</p>
            </div>
        </div>
        <div>
        <div>
                <h3>POETRY IN SCIENCE</h3>
                <img src={require("../assets/bio_and_beyond.jpeg")} alt="biology" />
                <p>Making Sense of the Genome, at Last</p>
                <p>by Adam Piare</p>
            </div>
            <div>
                <h3>Women in Science & Engineering</h3>
                <img src ={require("../assets/wise_sci_and_engineering.png")} alt="woman" />
                <p>Your Barain Is On the Brink of Chaos</p>
                <p>by Kelly Clancy</p>
            </div>
            <div>
                <h3>QUANTA ABSTRACTIONS</h3>
                <img src ={require("../assets/abstractions.jpeg")} alt="woman" />
                <p>Mathematicians Calculate How Randomness Creeps In</p>
                <p>by Marcus Woo</p>
            </div>
        </div>
    </div>

    )
}
}
export default ChannelComponents;