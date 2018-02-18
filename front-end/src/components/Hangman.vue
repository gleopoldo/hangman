<template>
  <article>
  <div class="row">
    <div class="col-sm-12 word-board">
      <word></word>
    </div>
  </div>

  <div class="row">
    <div class="col-sm-11 col-md-6 alphabet-board">
      <letter v-for="letter in alphabet" :letter="letter" :key="letter"></letter>
    </div>
  </div>
  </article>
</template>

<script>
import Letter from '@/components/Letter'
import Word from '@/components/Word'

export default {
  name: 'Hangman',
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
  },
  created: function () {
    this.$store.dispatch('restartGame')
  }
}
</script>

<style lang="sass">
.alphabet-board
  margin: 60px auto 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

.word-board
  margin-top: 10px

</style>
