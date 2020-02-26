<template>
  <div class="center">
    <form @submit.prevent="submit">
      <label for="name">Name</label>
      <input required id="name" type="text" v-model="name" />
      <label for="creater">Creater</label>
      <input required id="creater" type="text" v-model="creater" />
      <label for="description">Description</label>
      <input required id="description" type="text" v-model="description" />
      <input required @change="addImage" type="file" name="image" />
      <img ref="preview" src alt />
      <input type="submit" value="Add" />
    </form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      name: "",
      creater: "",
      description: "",
      file: null
    };
  },
  methods: {
    addImage(e) {
      this.$refs.preview.src = URL.createObjectURL(e.target.files[0]);
      this.file = e.target.files[0];
    },
    submit() {
      const formData = new FormData();
      formData.append("name", this.name);
      formData.append("creater", this.creater);
      if (this.file) {
        formData.append("image", this.file);
        formData.append("description", this.description);
      }
      axios.post("http://localhost:5000/memes", formData).then(() => {
        this.$router.push("/");
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.center {
  display: flex;
  justify-content: center;
}
label,
input {
  display: block;
  width: 100%;
}
input {
  margin-bottom: 20px;
}
img {
  width: 100%;
}
input[type="submit"] {
  padding: 8px 0;
}
</style>