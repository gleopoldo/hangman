<template>
  <div id="game">
    <header class="nav">
      <h1>Hangman</h1>
    </header>

    <game-over v-show="gameOver"></game-over>
    <won-game v-show="wonGame"></won-game>
    <hangman v-show="!wonGame && !gameOver"></hangman>
  </div>
</template>

<script>
import Hangman from '@/components/Hangman'
import GameOver from '@/components/GameOver'
import WonGame from '@/components/WonGame'

export default {
  name: 'Game',
  components: {
    Hangman,
    GameOver,
    WonGame
  },
  computed: {
    wonGame: function () {
      return this.$store.getters.wonGame
    },

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
