<template>
  <div class="letter-box">
    <span class="letter" :class="clickedClass" @click="guess">{{ letter }}</span>
  </div>
</template>

<script>

export default {
  props: {
    letter: {
      type: String,
      required: true
    }
  },
  methods: {
    guess () {
      this.submitGuess()
    },

    submitGuess () {
      let letterPayload = { letter: this.letter.toUpperCase() }

      this.$store.commit('registerGuess', letterPayload)
    }
  },
  computed: {
    clickedClass () {
      return this.$store.getters.attemptedLetter(this.letter.toUpperCase()) ? 'clicked' : ''
    }
  }
}
</script>

<style lang="sass">
@import '../styles/variables'

.letter-box
  position: relative
  height: 60px
  width: 55px

  @media #{$desktop-size}
    height: 80px
    width: 80px

  .letter
    background-image: url('../assets/square_wood0001.png');
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    cursor: pointer;
    color: black;
    position: absolute
    bottom: 0
    left: 0
    font-family: $main-font;
    font-size: 2.15em;
    width: 50px;
    height: 55px;
    float: left;

    @media #{$desktop-size}
      padding: 10%;
      font-size: 2.5em;
      margin: 5px;
      width: 80px;
      height: 75px;

  .clicked
    cursor: not-allowed;
    background-image: url('../assets/darkness_square.png');
    color: white;

.letter-box:hover .letter:not(.clicked)
    background-image: url('../assets/darkness_square.png');
    animation-name: moveup;
    animation-duration: 0.15s;
    color: white
    bottom: 5px

@keyframes moveup
  0%
    color: black
    bottom: 0
  100%
    color: white
    bottom: 5px

</style>
