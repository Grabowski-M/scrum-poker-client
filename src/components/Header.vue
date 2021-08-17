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
  font-size: 2rem;
  margin-left: 16px;
}

.header__button a {
  text-decoration: none;
  color: var(--font-color);
}
</style>
