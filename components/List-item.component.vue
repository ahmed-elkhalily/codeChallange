<template>
  <li
    class="
      list__item
      pl-6
      flex
      py-4
      hover:bg-cyan-900 hover:cursor-pointer
      transition-colors
      hover:text-white
    "
  >
    <slot />
    <p
      class="
        pl-4
        text-base
        font-medium
        text-cyan-900
        transition-colors
        hover:text-white
      "
    >
      {{ text }}
    </p>
  </li>
</template>
<script>
export default {
  props: {
    text: {
      type: String,
      default: '',
    },
  },
}
</script>
