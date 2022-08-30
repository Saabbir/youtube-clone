import React from "react";

const VideoPlayer = ({ video }) => {
  if (!video) {
    return <div>Loading...</div>;
  }

  const iframeSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
  return (
    <div className="c-video-player">
      <div className="c-video-player__iframe-container">
        <iframe
          src={iframeSrc}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen="allowfullscreen"
        ></iframe>
      </div>
      <div className="c-video-player__copy">
        <h4>{video.snippet.title}</h4>
        <p>{video.snippet.description}</p>
      </div>
    </div>
  );
};

export default VideoPlayer;
