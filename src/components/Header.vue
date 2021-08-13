<template>
  <div class="header">
    <p class="header__button">
      <router-link to="/">Home</router-link>
    </p>
  </div>
</template>

<style>
.header {
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
}

.header__button {
  font-style: italic;
  font-size: 1.6rem;
}

.header__button a {
  text-decoration: none;
  color: inherit;
}
</style>
