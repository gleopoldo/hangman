<template>
  <div id="home">
    <h1 id="logo">Hangman</h1>
    <img id="logo-img" src="../assets/hangman.png">

    <router-link id="play-btn" to="/game" class="btn btn-primary">Play</router-link>
  </div>
</template>

<script>
</script>

<style scoped lang="sass">
@import '../styles/variables';

#home
  background: url('../assets/background.jpg') no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  height: 100%

#play-btn
  background-color: $btn-background;
  border-radius: 10px;
  color: white;
  font-family: $main-font;
  font-size: 2em;
  font-weight: 100;
  padding: 5px 20px;
  position: relative;
  margin-top: 500px;

#play-btn:hover
    background-color: $btn-background-hover

#play-btn:active
    background-color: $btn-background-active

#logo
  color: $btn-background;
  font-family: $main-font;
  justify-content: center;
  position: absolute;
  top: 30px;
  left: 0;
  right: 0;
  font-size: 3em;

  @media #{$desktop-size}
    margin-top: 50px;
    font-size: 5em;
    font-weight: 100;

#logo-img
  display: none;

  @media #{$desktop-size}
    display: block
    position: absolute;
    height: 200px;
    width: 380px;
    top: 280px;
    left: 150px;

</style>
