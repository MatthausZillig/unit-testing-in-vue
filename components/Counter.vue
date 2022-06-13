<template>
  <div>
    <span>{{ number }}</span>
    <button data-testid="increase" @click="increase">+</button>
    <button data-testid="decrease" @click="decrease">-</button>
  </div>
</template>

<script>
export default {
  name: 'CounterComponent',
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
