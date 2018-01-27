<template>
  <span class="letter">{{ letter }}</span>
</template>

<script>

export default {
  props: {
    letter: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="sass">
.letter
  font-family: 'Alfa Slab One', cursive;
  font-size: 3em;
  color: black
  padding: 1%;
  margin: 5px;
  background: url('../assets/square_wood0001.png');
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  float: left;
  width: 100px;
  height: 100px;
</style>
