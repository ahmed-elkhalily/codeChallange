<template>
  <div class="progress-wrapper">
    <div
      class="progress-bar progress-bar-width"
      :style="{
        width: width + '%',
      }"
      data-progress-bar-percent="100"
    >
      <div class="progress-bar-anim"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    width: {
      type: Number,
      default: 0,
    },
  },
}
</script>
