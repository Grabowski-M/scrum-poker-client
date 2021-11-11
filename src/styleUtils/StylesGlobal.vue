<template>
  <slot></slot>
</template>

<style>
#app {
  background: var(--background-color);
  font-size: 62.5%;
  transition: 0.3s background-color;
}

html * {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: var(--font-color);
}

body {
  font-size: 1.4rem;
}

h1 {
  font-size: 2.4rem;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  /* display: none; <- Crashes Chrome on hover */
  -webkit-appearance: none;
  margin: 0; /* <-- Apparently some margin are still there even though it's hidden */
}

input[type=number] {
  -moz-appearance:textfield; /* Firefox */
}
</style>
