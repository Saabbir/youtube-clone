import React from "react";
import youtube from "../apis/youtube";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import VideoPlayer from "./VideoPlayer";

class App extends React.Component {
  state = {
    videos: [],
    currentVideo: null,
  };

  componentDidMount() {
    this.onTermSubmit();
  }

  onTermSubmit = async (searchTerm = "node") => {
    const response = await youtube.get("/search", {
      params: {
        q: searchTerm,
      },
    });

    this.setState({
      videos: response.data.items,
      currentVideo: response.data.items[0],
    });
  };

  setCurrentVideo = (video) => {
    this.setState({
      currentVideo: video,
    });
  };

  render() {
    return (
      <div>
        <SearchBar onTermSubmit={this.onTermSubmit} />
        <section className="c-section-videos">
          <div className="l-container">
            <div className="l-videos-grid">
              <div className="l-videos-grid__child l-videos-grid__child-left">
                <VideoPlayer video={this.state.currentVideo} />
              </div>
              <div className="l-videos-grid__child l-videos-grid__child-right">
                <VideoList
                  videos={this.state.videos}
                  setCurrentVideo={this.setCurrentVideo}
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default App;
