<template>
  <div class="word">
    <span v-for="letter in word" class="single-letter">{{ letter }}</span>
  </div>
</template>

<script>
export default {
  computed: {
    word () {
      return this.$store.getters.wordWithAttempts
    }
  }
}
</script>

<style lang="sass">
@import '../styles/variables'

.word
  .single-letter
    display: inline
    font-family: $main-font
    margin-left: 5px
    font-size: 2.5em

    @media #{$desktop-size}
      font-size: 3em
</style>
