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
.word
  margin-top: 70px

  .single-letter
    display: inline
    font-size: 3em
    font-family: 'Alfa Slab One', cursive
    margin-left: 5px
</style>
