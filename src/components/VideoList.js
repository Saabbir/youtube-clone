import React from "react";
import VideoItem from "./VideoItem";

const VideoList = ({ videos, setCurrentVideo }) => {
  return (
    <div className="c-videos">
      {videos.map((video) => (
        <VideoItem video={video} setCurrentVideo={setCurrentVideo} />
      ))}
    </div>
  );
};

export default VideoList;
