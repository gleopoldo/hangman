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
  }
}
</script>

<style lang="sass">
@import '../styles/variables'

.word-board
  margin-top: 60px;

  @media #{$desktop-size}
    margin-top: 70px

.alphabet-board
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 80px;

  @media #{$desktop-size}
    margin: 60px auto 0;
</style>
