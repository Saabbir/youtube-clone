import axios from "axios";
const KEY = "AIzaSyBwCkZH3Q9tP_kMWo1gO0Dyh-xyScBMiO4";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});
