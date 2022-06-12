<template>
  <div>
    <span>{{ number }}</span>
    <button @click="increase">+</button>
    <button @click="decrease">-</button>
  </div>
</template>

<script>
export default {
  name: 'FactorialComponent',
  data() {
    return {
      number: 0,
    }
  },
  methods: {
    increase() {
      this.number++
    },
    decrease() {
      if (this.number > 0) {
        this.number--
      }
    },
  },
}
</script>

<style lang="scss" scoped></style>
