<template>
  <div class="w-sm mt-7 mr-8 bg-white rounded-md">
    <figure class="w-full">
      <img :src="round.banner" alt="" />
    </figure>
    <div class="mx-4">
      <button
        class="
          text-xs
          font-semibold
          bg-cyan-900
          text-white
          px-2
          py-2
          rounded-md
          mt-2
        "
      >
        {{ getLeftDate(round.round_end) }} days left
      </button>
      <h3 class="mt-3 text-xl font-bold text-cyan-900">
        {{ round.title }}
      </h3>
      <div class="flex">
        <h4 class="text-xl font-bold text-green">
          {{ getPercent(round.current_investment, round.investment_goal) }} %
        </h4>
        <p class="text-cyan-900 ml-2 font-bold">
          {{ round.investment_goal - round.current_investment }} &euro; Left to
          found
        </p>
      </div>
      <progress-bar
        :width="getPercent(round.current_investment, round.investment_goal)"
      ></progress-bar>
      <p class="text-cyan-900 mt-4 text-base font-medium">{{ round.teaser }}</p>
      <div class="mt-4 flex">
        <button
          class="
            text-cyan-900
            bg-btn-status
            mr-1
            rounded-3xl
            py-2
            px-2
            text-xs
            font-bold
          "
        >
          {{ round.status }}
        </button>
        <button
          class="
            text-cyan-900
            bg-btn-status bg-btn-status
            rounded-3xl
            py-2
            px-2
            text-xs
            font-semibold
          "
        >
          >
          {{ round.type }}
        </button>
      </div>
      <div class="border-b-2 border-main-color my-3"></div>
      <div class="flex justify-between mb-5">
        <div
          class="
            flex flex-col
            justify-between
            text-center
            border-r-2 border-cayan-900
            flex-1
          "
        >
          <h5 class="text-lg font-bold text-cyan-900">
            {{ round.investor_count }}
          </h5>
          <p class="text-xs font-medium text-cyan-sec">Want to invest</p>
        </div>
        <div class="flex flex-col justify-between text-center flex-1">
          <h5 class="text-lg font-bold text-cyan-900">
            {{ round.current_investment }}
          </h5>
          <p class="text-xs font-medium text-cyan-sec">Funding Round</p>
        </div>
      </div>
      <button
        class="
          text-base
          font-bold
          text-white
          bg-cyan-900
          w-full
          py-4
          mb-4
          rounded-md
        "
      >
        Learn more
      </button>
    </div>
  </div>
</template>
<script>
import { getPercent, getLeftDate } from '../helpers/index.js'
import ProgressBar from './Progressbar.component.vue'
export default {
  components: { ProgressBar },
  props: {
    round: {
      type: Object,
      default: () => {},
    },
  },
  methods: {
    getPercent,
    getLeftDate,
  },
}
</script>
