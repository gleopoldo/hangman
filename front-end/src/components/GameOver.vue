<template>
  <div class="game-over">
    <h1 class="title">
      GAME-OVER
    </h1>

    <button
      id="restart-button"
      type="button"
      v-on:click="resetGame">
      Restart Game
    </button>
  </div>
</template>

<script>
export default {
  name: 'GameOver',
  methods: {
    resetGame: function () {
      this.$store.dispatch('restartGame')
    }
  }
}
</script>

<style lang="sass">
.game-over
  height: 100%;
  width: 100%;
  margin-top: 75px;
  font-family: 'Alfa Slab One', cursive;

  .title
    font-size: 3em;
    color: #940000

  #restart-button
    padding: 10px
    cursor: pointer
</style>
