<template>
  <div>
    <h1>{{ $t('main.title') }}</h1>
    <h2>{{ $t('main.counter.desc', count) }}</h2>
    <button @click="increment">{{  $t('main.button') }}</button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  name: 'App',
  components: {},
  data() {
    return {
      count: 0,
    }
  },
  methods: {
    increment() {
      this.count += 1
    },
  },
})
</script>
