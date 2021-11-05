<template>
  <div class="w-xs bg-white flex-shrink-0 overflow-x-hidden">
    <figure class="pl-6 py-6">
      <img src="../assets/images/Logo.png" alt="" />
    </figure>
    <ul class="mt-1 list">
      <list-item text="Cockpit">
        <cockpit fill="hover:fill-white" />
      </list-item>
      <list-item text="Investment Opportunities">
        <star />
      </list-item>
      <list-item text="My Investments">
        <rocket />
      </list-item>
      <div class="border-b-1 boreder-bg-light-900 my-10"></div>
      <list-item text="Knowledge Center">
        <book />
      </list-item>
      <list-item text="Venture Pool">
        <crown />
      </list-item>
      <list-item text="Fee Model">
        <indexpaper />
      </list-item>
      <li class="flex justify-center my-5">
        <div
          class="list__recommended flex flex-col items-center overflow-hidden"
        >
          <like class="my-2" />
          <p class="mt-1 text-sm font-medium text-white mb-2">
            Recommend primeCROWD
          </p>
          <button
            class="
              mt-2
              py-2
              px-5
              rounded-md
              bg-white
              text-cyan-900
              overflow-hidden
            "
          >
            Invite Friends
          </button>
        </div>
      </li>
      <li class="flex justify-center my-5 overflow-hidden">
        <div
          class="my-4 list__help flex flex-col text-center rounded-md"
          style="background: #dfe9ec"
        >
          <h5 class="mb-2 mt-3 text-cyan-900 text-lg font-semibold">
            Need help?
          </h5>
          <p class="mb-1 text-cyan-sec text-sm text-medium">+436641909445</p>
          <p class="text-cyan-sec text-sm text-medium">
            support@prime-crowd.com
          </p>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
import ListItem from './List-item.component'
import {
  cockpit,
  star,
  rocket,
  book,
  crown,
  indexpaper,
  like,
} from './svg/index'
export default {
  components: {
    ListItem,
    cockpit,
    star,
    rocket,
    book,
    crown,
    indexpaper,
    like,
  },
}
</script>
