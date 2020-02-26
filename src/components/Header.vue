<template>
  <header>
    <nav>
      <ul>
        <li>
          <router-link to="/">Home</router-link>
        </li>
        <li>
          <router-link to="/memes/add">Add</router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
header {
  height: 40px;
  background-color: grey;
  nav {
    height: 100%;
    ul {
      list-style: none;
      display: flex;
      height: 100%;
      align-items: center;
      li {
        height: 100%;
        a {
            display: block;
            height: 100%;
            align-items: center;
            display: flex;
            padding: 0 10px;
            text-decoration: none;
            color: black;
            &:hover {
                background-color: rgb(173, 173, 173);
            }
        }
      }
    }
  }
}
</style>