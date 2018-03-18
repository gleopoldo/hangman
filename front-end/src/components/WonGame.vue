<template>
  <div class="won-game">
    <div class="row">
      <div class="col-sm-12 word-board">
        <word></word>
      </div>
    </div>

    <hr>

    <div class="row">
      <div class="col-sm-12 game-over-pane">
        <h1 class="title">
          WELL DONE!
        </h1>

        <button
          id="restart-button"
          type="button"
          v-on:click="resetGame">
          Play again!
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import Word from '@/components/Word'

export default {
  name: 'WonGame',
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
.won-game
  height: 100%;
  width: 100%;
  font-family: 'Alfa Slab One', cursive;

  .game-over-pane
    margin-top: 125px;

    .title
      font-size: 4em;
      color: #223e0c;

    #restart-button
      padding: 10px;
      cursor: pointer;
      border-radius: 10px;
      border: 0;
      color: white;
      transition: background-color 0.15s ease;
      background-color: #335d12;

    #restart-button:hover
      background-color: #569C1F;
</style>
