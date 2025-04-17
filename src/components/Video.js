import React from "react";
import ReactPlayer from "react-player/youtube";

const App = () => {
  return (
    <div>
      <MyVideo />
    </div>
  );
};

const MyVideo = () => {
  return (
    <ReactPlayer
      playing={false}
      url="https://www.youtube.com/watch?v=cLTS4oYJvLY&ab_channel=TRTSPOR"
    />
  );
};

export default App;
