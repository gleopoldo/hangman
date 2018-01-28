<template>
  <div id="game">
      <header class="nav">
        <h1>Hangman</h1>
    </header>
    <div class="row">
      <div class="col-md-4"></div>
      <div class="col-md-4">
        <h1>{{ word }}</h1>
      </div>
      <div class="alphabet-board col-md-8">
        <div v-for="letter in alphabet">
          <letter :letter="letter"></letter>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import requestWord from './adapters/WordRequester'
import Letter from '@/components/Letter'

export default {
  name: 'Game',
  components: {
    Letter
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
    setTimeout(10000)
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
  margin-top: 50px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

</style>
