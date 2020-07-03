<template>
  <div class="container">
    <SearchBar @termChange="onTermChange" />
    <div class="row">
      <VideoDetail :video="video" />
      <VideoList :videos="videos" @videoSelect="onVideoSelect" />
    </div>
  </div>
</template>

<script>
import axios from "axios";
import SearchBar from "./components/SearchBar";
import VideoList from "./components/VideoList";
import VideoDetail from "./components/VideoDetail";

const API_KEY = "Youtube API Here";

export default {
  name: "App",
  components: {
    SearchBar,
    VideoDetail,
    VideoList
  },
  data() {
    return {
      videos: [],
      video: null
    };
  },
  methods: {
    async onTermChange(searchTerm) {
      const resp = await axios.get(
        "https://www.googleapis.com/youtube/v3/search",
        {
          params: {
            key: API_KEY,
            type: "video",
            part: "snippet",
            q: searchTerm
          }
        }
      );

      this.videos = resp.data.items;
    },
    onVideoSelect(video) {
      this.video = video;
    }
  }
};
</script>