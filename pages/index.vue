<template>
  <counter-component :number="13" />
</template>

<script lang="ts">
import CounterComponent from '~/components/Counter.vue'

export default {
  name: 'IndexPage',
  components: {
    CounterComponent,
  },
}
</script>
