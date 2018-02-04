<template>
  <div id="game">
      <header class="nav">
        <h1>Hangman</h1>
    </header>
    <div class="row">
      <div class="col-sm-12">
        <word></word>
      </div>
    </div>
    <hr>
    <div class="row">
        <div class="col-sm-11 col-md-11 alphabet-board">
          <letter v-for="letter in alphabet" :letter="letter"></letter>
        </div>
    </div>
  </div>
</template>

<script>
import requestWord from './adapters/WordRequester'
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
    }
  },
  created: function () {
    this.$store.dispatch('renewWord')
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
  margin: 20px auto 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

</style>
