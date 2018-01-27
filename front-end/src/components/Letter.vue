<template>
  <span class="letter">{{ letter }}</span>
</template>

<script>

export default {
  props: {
    letter: {
      type: String,
      required: true
    }
  }
}
</script>


<style>
</style>
