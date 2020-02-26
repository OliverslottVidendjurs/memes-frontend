<template>
  <li>
    <img :src="'http://localhost:5000/images/' + meme.img.fileName" alt />
    <h2>{{meme.name}}</h2>
    <p>{{meme.img.description}}</p>
    <p>- {{meme.creater}}</p>
    <button type="button" @click="redirectToEditPage(meme._id)">Edit</button>
    <button type="button" @click="deleteMeme(meme._id)">Delete</button>
  </li>
</template>

<script>
import axios from "axios";
export default {
  props: {
    meme: {
      type: Object,
      required: true
    }
  },
  methods: {
    deleteMeme(id) {
      axios.delete(`http://localhost:5000/memes/${id}`).then(() => this.$emit("update"));
    },
    redirectToEditPage(id) {
      this.$router.push(`/memes/edit/${id}`);
    }
  }
};
</script>

<style lang="scss" scoped>
li {
  margin-bottom: 30px;
}
img {
  width: 300px;
}
button {
    margin-right: 10px;
    margin-top: 10px;
}
</style>