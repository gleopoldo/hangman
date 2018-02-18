<template>
  <div id="game">
      <header class="nav">
        <h1>Hangman</h1>
    </header>
    <div v-show="gameOver">
      <div class="game-over">
        GAME-OVER
      </div>
    </div>
    <div v-show="!gameOver">
      <div class="row">
        <div class="col-sm-12 word-board">
          <word></word>
        </div>
      </div>
      <hr>
      <div class="row">
        <div class="col-sm-11 col-md-6 alphabet-board">
          <letter v-for="letter in alphabet" :letter="letter" :key="letter"></letter>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Letter from '@/components/Letter'
import Word from '@/components/Word'

export default {
  name: 'Game',
  components: {
    Letter,
    Word
  },
  computed: {
    alphabet: function () {
      let firstLetter = 'A'.charCodeAt(0)
      let lastLetter = 'Z'.charCodeAt(0)

      return Array.from(
        new Array(lastLetter - firstLetter + 1),
        (_, index) => String.fromCharCode(firstLetter + index)
      )
    },

    word: function () {
      return this.$store.getters.getWord
    },

    gameOver: function () {
      return this.$store.getters.isGameOver
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

.alphabet-board
  margin: 60px auto 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

.word-board
  margin-top: 10px

.game-over
  height: 100%;
  width: 100%;
  margin-top: 250px;
  font-family: 'Alfa Slab One', cursive;
  font-size: 3em;
  color: #940000

</style>
