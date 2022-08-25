import React from "react";

const VideoItem = ({ video }) => {
  return (
    <div className="c-video">
      <div className="c-video__img-container">
        <img
          className="c-video__thumbnail"
          src={video.snippet.thumbnails.default.url}
          alt={video.snippet.title}
          width={video.snippet.thumbnails.default.width}
          height={video.snippet.thumbnails.default.height}
        />
      </div>
      <div className="c-video__copy">
        <p>{video.snippet.description}</p>
      </div>
    </div>
  );
};

export default VideoItem;
