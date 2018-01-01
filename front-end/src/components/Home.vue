<template>
  <div id="home">
    <div class="row">
      <div id="logo" class="col-md-12">
        <h1>HANGMAN</h1>
        <img src="../assets/hangman.png">
      </div>
    </div>

    <div class="row">
      <div class="col-md-12">
        <a href="#" class="btn btn-primary">Play</a>
      </div>
    </div>
  </div>
</template>

<script>
</script>

<style scoped lang="sass">

#home
  background: url('../assets/background.jpg') no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  height: 100%

  .row:first-child
    padding-top: 150px;
    height: 300px;

  .row:last-child
    margin-top: 230px;

    a
      background-color: #65300a;
      color: white;
      padding: 20px;
      border-radius: 10px;
      font-family: 'Alfa Slab One', cursive;
      font-weight: 100;
      font-size: 2em;

    a:hover
      background-color: #ab5111

    a:active
      background-color: #371a05



#home::before
  content: '';
  background-color: white;
  opacity: 0.5;

#logo
  display: flex;
  position: relative;
  justify-content: center;

h1
  margin-top: 50px;
  font-size: 5em;
  font-family: 'Alfa Slab One', cursive;
  font-weight: 100;
  color: #65300a

img
  position: absolute;
  height: 300px;
  width: 500px;
  left: 500px;
  top: 0;
</style>
