<template>
  <factorial-component :number="13" />
</template>

<script lang="ts">
import FactorialComponent from '~/components/Factorial.vue'

export default {
  name: 'IndexPage',
  components: {
    FactorialComponent,
  },
}
</script>
