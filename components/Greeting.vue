<template>
  <div>
    <span>Hello, {{ name }}</span>
  </div>
</template>

<script>
export default {
  name: 'GreetingComponent',
  props: {
    name: {
      type: String,
      default: 'World',
    },
  },
}
</script>
