<script>
export default {
  name: 'App',
  components: {
  }
}
</script>

<template>
  <div id="app">
      <div class='' id='img'/> 
      <div id="container">
        <router-view></router-view>
      </div>
  
  </div>
</template>

<style>

* {
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
  font-family: 'Roboto', sans-serif;
}

#container {
  background-color: rgba(148, 74, 40, 0.336);
  position: relative;
  width: 100vw;
  height: 100vh;
  display: flex;
} 

#img {
  background: url(https://i.postimg.cc/2jFZg6cz/Restaurant-table-window-1920x1080.jpg);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  }
</style>
