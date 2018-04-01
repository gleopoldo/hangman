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
@import '../styles/variables';

$color-won-btn: #335d12;
$color-won-hover: #569C1F;
$color-won-title: #223e0c;

.won-game
  height: 100%;
  width: 100%;
  font-family: $main-font;

  .game-over-pane
    margin-top: 125px;

    @media #{$desktop-size}
      margin-top: 45px;

    .title
      color: $color-won-title;
      font-size: 2.25em;
      padding: 0;

      @media #{$desktop-size}
        font-size: 3.5em;

    #restart-button
      font-size: 1.5em;
      padding: 10px;
      cursor: pointer;
      border-radius: 10px;
      border: 0;
      color: white;
      transition: background-color 0.15s ease;
      background-color: $color-won-btn;

    #restart-button:hover
      background-color: $color-won-hover;
</style>
