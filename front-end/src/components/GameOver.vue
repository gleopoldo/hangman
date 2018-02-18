<template>
  <div class="game-over">
    <div class="row">
      <div class="col-sm-12 word-board">
        <word></word>
      </div>
    </div>

    <hr>

    <div class="row">
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

.word-board
  margin-top: 10px

</style>
