<template>
  <ul class="px-12 py-6 border-b-2 border-main-color flex justify-between">
    <li class="text-lg font-semibold">Investment Opportunities (3)</li>
    <ul class="flex justify-between items-center">
      <li
        style="background-color: #dfe9ec"
        class="flex items-center p-2 rounded-sm cursor-pointer"
      >
        <img
          class="mr-1"
          src="../assets/images/OvalMan copy.png"
          alt="ovelMan"
        />
        <p class="text-cyan-900 font-medium">Thomas Miller</p>
      </li>
      <li class="ml-7 cursor-pointer">
        <notification />
      </li>
      <li class="ml-7 cursor-pointer">
        <england />
      </li>
    </ul>
  </ul>
</template>
<script>
import { england, notification } from './svg/index.js'
export default {
  components: { england, notification },
}
</script>
