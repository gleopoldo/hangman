<template>
  <div class="game-over">
    <div class="row">
      <div class="col-sm-12 word-board">
        <word></word>
      </div>
    </div>

    <hr>

    <div class="row">
      <div class="col-sm-12 game-over-pane">
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
  </div>
</template>

<script>
import Word from '@/components/Word'

export default {
  name: 'GameOver',
  components: {
    Word
  },
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
  font-family: 'Alfa Slab One', cursive;

  .game-over-pane
    margin-top: 125px;

    .title
      font-size: 4em;
      color: #940000;

    #restart-button
      padding: 10px;
      cursor: pointer;
      border-radius: 10px;
      border: 0;
      color: white;
      transition: background-color 0.15s ease;
      background-color: #4A0000

    #restart-button:hover
      background-color: #9E1919
</style>
