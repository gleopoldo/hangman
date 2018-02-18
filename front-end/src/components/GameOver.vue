<template>
  <div class="game-over">
    <h1 class="title">
      GAME-OVER
    </h1>

    <button
      class="restart-button"
      type="button"
      v-on:click="resetGame">
      Restart Game
    </button>
  </div>
</template>

<script>
export default {
  name: 'GameOver',
  data: () => {
    return {
      store: this.$store
    }
  },
  computed: {
    foo () {
      return this.$store.getters.wordWithAttempts
    }
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
  margin-top: 75px;

  .title
    font-family: 'Alfa Slab One', cursive;
    font-size: 3em;
    color: #940000
</style>
