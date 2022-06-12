<template>
  <div>
    <span>{{ result }}</span>
    <button @click="getFactorial">Get Factorial</button>
  </div>
</template>

<script>
export default {
  name: 'FactorialComponent',
  props: {
    number: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      result: 1,
    }
  },
  methods: {
    getFactorial() {
      // eslint-disable-next-line vue/no-mutating-props
      while (this.number > 0) this.result *= this.number--
      return this.result
    },
  },
}
</script>

<style lang="scss" scoped></style>
