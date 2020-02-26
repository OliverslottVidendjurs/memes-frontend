<template>
  <ul>
    <Meme v-for="meme of memes" :key="meme._id" :meme="meme" @update="fetchMemes"/>
  </ul>
</template>

<script>
import axios from "axios";
import Meme from "./Meme";
export default {
  data() {
    return {
      memes: []
    };
  },
  components: {
      Meme
  },
  mounted() {
      this.fetchMemes();
  },
  methods: {
    fetchMemes() {
      axios.get("http://localhost:5000/memes/").then(response => {
        this.memes = response.data;
      });
    }
  }
};
</script>

<style lang="scss" scoped>
ul {
    list-style: none;
}
</style>