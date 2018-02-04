<template>
  <div class="letter-box">
    <span class="letter" :class="clickedClass" @click="makeGuess">{{ letter }}</span>
  </div>
</template>

<script>

export default {
  data: () => {
    return {
      clicked: false
    }
  },
  props: {
    letter: {
      type: String,
      required: true
    }
  },
  methods: {
    makeGuess () {
      if(!this.clicked){
        this.$store.commit('makeGuess', {letter: this.letter.toUpperCase()})
      }

      this.clicked = true
    },
  },
  computed: {
    clickedClass () {
      return this.clicked ? 'clicked' : ''
    }
  }
}
</script>

<style lang="sass">
.letter-box
  height: 120px
  width: 100px
  margin-left: 6px
  position: relative

  .letter
    position: absolute
    bottom: 0
    left: 0
    font-family: 'Alfa Slab One', cursive;
    font-size: 3em;
    padding: 1%;
    margin: 5px;
    float: left;
    width: 100px;
    height: 100px;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-image: url('../assets/square_wood0001.png');
    cursor: pointer;
    color: black;

  .clicked
    cursor: not-allowed;
    background-image: url('../assets/darkness_square.png');
    color: white;

  .letter:not(.clicked):hover
    background-image: url('../assets/darkness_square.png');
    animation-name: moveup;
    animation-duration: 0.15s;
    color: white

@keyframes moveup
  0%
    color: black
  100%
    color: white

    
</style>
