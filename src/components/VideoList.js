import React from "react";
import VideoItem from "./VideoItem";

const VideoList = ({ videos }) => {
  return (
    <div className="c-videos">
      {videos.map((video) => (
        <VideoItem video={video} />
      ))}
    </div>
  );
};

export default VideoList;
