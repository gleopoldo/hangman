<template>
  <div class="word">
    <span v-for="letter in word"> {{ letter }} </span>
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

  span
    display: inline
    font-size: 3em
    font-family: 'Alfa Slab One', cursive;
</style>
