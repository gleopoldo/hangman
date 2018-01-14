<template>
  <div id="game">
      <header class="nav">
        <h1>Hangman</h1>
    </header>
    <div class="row">
      <div class="col-md-4"></div>
      <div class="alphabet-board col-md-8">
        <div v-for="letter in alphabet" class="letter-board">
          {{ letter }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Game',
  data: function () {
    return {
      word: ''
    }
  },
  methods: {
    loadNewWord: function () {
      this.word = this.$http.get('api:4000')
    }
  },
  computed: {
    alphabet: function () {
      let firstLetter = 'A'.charCodeAt(0)
      let lastLetter = 'Z'.charCodeAt(0)

      return Array.from(
        new Array(lastLetter - firstLetter + 1),
        (_, index) => String.fromCharCode(firstLetter + index)
      )
    }
  },
  created: function () {
    console.log('created')
    this.loadNewWord()
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

.letter-board
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
