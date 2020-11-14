<template>
<button :class="mode">
    <slot></slot>
</button>
<!-- to use the different modes on buttons -->
<!-- <base-button mode="flat"></base-button> -->
</template>

<script>
export default {
    props: ['mode']
}
</script>
<style scoped>
button {
  padding: 0.75rem 1.5rem;
  font-family: inherit;
  background-color: #3a0061;
  border: 1px solid #3a0061;
  color: white;
  cursor: pointer;
}

button:hover,
button:active {
  background-color: #270041;
  border-color: #270041;
}

.flat {
  /* background-color: transparent; */
  background-color:#dce0e4;
  color: #3a0061;
  border: none;
  /* padding: 2px */
}

.flat:hover,
.flat:active {
  background-color: #edd2ff;
}
</style>