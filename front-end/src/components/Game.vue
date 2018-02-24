<template>
  <div id="game">
    <header class="nav">
      <h1>Hangman</h1>
    </header>

    <game-over v-show="gameOver"></game-over>
    <hangman v-show="!gameOver"></hangman>
  </div>
</template>

<script>
import Hangman from '@/components/Hangman'
import GameOver from '@/components/GameOver'

export default {
  name: 'Game',
  components: {
    Hangman,
    GameOver
  },
  computed: {
    gameOver: function () {
      return this.$store.getters.lostGame
    }
  },
  created: function () {
    this.$store.dispatch('restartGame')
  }
}
</script>

<style lang="sass">
header
  height: 100px;
  background: url('../assets/background.jpg') no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;

h1
  padding: 15px;
  font-size: 4em;
  font-family: 'Alfa Slab One', cursive;
  font-weight: 100;
  color: #65300a;
</style>
