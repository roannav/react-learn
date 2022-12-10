import React from "react";
import ReactPlayer from "react-player/youtube";
import BirdSounds from "./BirdSounds";

const MyLemonVideo = () => {
    return (
        <ReactPlayer url='https://www.youtube.com/watch?v=igJoONdopog' />
    );
}

function AboutLittleLemon() {
    return (
      <>
        <h1>About Little Lemon</h1>
        <p>Here are sound birds I heard this morning:</p>
        <BirdSounds />
        <p>My fav music:</p>
        <MyLemonVideo />
      </>
    )
}

export default AboutLittleLemon
