<template>
  <div class="center">
    <form @submit.prevent="submit">
      <label for>Name</label>
      <input type="text" v-model="name" />
      <label for>Creater</label>
      <input type="text" v-model="creater" />
      <label for>Description</label>
      <input type="text" v-model="description" />
      <input @change="addImage" type="file" name="image" accept=".png,.jpg" />
      <img ref="preview" src alt />
      <input type="submit" value="Save" />
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
      const file = e.target.files[0];
      //20000000 = 20MB
      if(file.size >= 20000000) {
          alert("This image is too big!");
          e.target.value = "";
          return;
      }
      if(file.type !== "image/png" && file.type !== "image/jpeg"){
          alert("You can only upload png and jpg images!");
          e.target.value = "";
          return;
      }      
      this.$refs.preview.src = URL.createObjectURL(e.target.files[0]);
      this.file = e.target.files[0];
    },
    submit() {
      const formData = new FormData();
      formData.append("name", this.name);
      formData.append("creater", this.creater);
      formData.append("description", this.description);
      if (this.file) {
        formData.append("image", this.file);
      }
      axios
        .patch(`http://localhost:5000/memes/${this.$route.params.id}`, formData)
        .then(() => {
          this.$router.push("/");
        });
    },
    fetchMeme() {
      axios
        .get(`http://localhost:5000/memes/${this.$route.params.id}`)
        .then(response => {
          this.name = response.data.name;
          this.creater = response.data.creater;
          this.description = response.data.img.description;
          this.$refs.preview.src = `http://localhost:5000/images/${response.data.img.fileName}`;
        });
    }
  },
  mounted() {
    this.fetchMeme();
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