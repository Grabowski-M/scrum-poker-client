<template>
  <div class="header">
    <p class="header__button">
      <router-link v-if="routePath !== '/'" to="/">Back</router-link>
    </p>
  </div>
</template>

<script>
export default {
  computed: {
    routePath() {
      return this.$route.fullPath;
    },
  },
};
</script>

<style>
.header {
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
}

.header__button {
  font-size: 2.4rem;
  margin-left: 16px;
}

.header__button a {
  text-decoration: none;
  color: var(--font-color);
}
</style>
