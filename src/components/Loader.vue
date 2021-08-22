<template>
  <div class="loader">
    <p>Connecting</p>
    <div class="dot"/>
    <div class="dot"/>
    <div class="dot"/>
  </div>
</template>

<style scoped>
.loader {
  display: flex;
  align-items: flex-end;
}

p {
  font-size: 2rem;
  font-weight: bold;
  margin-right: 4px;
  line-height: 26px;
}

.dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  margin: 3px;
  background: var(--font-color) ;
  animation: fade infinite;
  animation-duration: 1500ms;
}

.dot:nth-child(2) {
  animation-delay: 500ms;
}

.dot:nth-child(3) {
  animation-delay: 1000ms;
}

@keyframes fade {
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}
</style>
