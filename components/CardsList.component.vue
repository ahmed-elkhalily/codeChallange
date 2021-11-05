<template>
  <div class="flex ml-12">
    <card v-for="round in rounds" :key="round.title" :round="round" />
  </div>
</template>
<script>
import Card from './Card.component.vue'
export default {
  components: { Card },
  data() {
    return {
      rounds: [],
    }
  },
  async fetch() {
    this.rounds = await fetch('https://prime-crowd.com/api/mock/rounds').then(
      (res) => res.json()
    )
  },
}
</script>
