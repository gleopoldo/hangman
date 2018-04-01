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
@import '../styles/variables';

$color-wrong-btn: #4A0000;
$color-wrong-hover: #9E1919;
$color-wrong-title: #940000;

.game-over
  height: 100%;
  width: 100%;
  font-family: $main-font;

  .game-over-pane
    margin-top: 125px;

    @media #{$desktop-size}
      margin-top: 45px;

    .title
      color: $color-wrong-title;
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
      background-color: $color-wrong-btn;

    #restart-button:hover
      background-color: $color-wrong-hover;
</style>
