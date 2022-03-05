<template>
  <div class="header">
    <p class="header__button">
      <router-link v-if="routePath !== '/'" to="/">
        <BaseIcon name="arrowLeft" style-prop="height: 1em; width: 1em; margin: -4px 8px 0 0;" />
        Back
      </router-link>
    </p>
  </div>
</template>

<script>
import BaseIcon from './icons/BaseIcon.vue';

export default {
  components: { BaseIcon },
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
  display: flex;
  align-items: center;
}

.header__button a:hover {
  border-bottom: 1px solid var(--font-color);
}

.header__button a {
  color: var(--font-color);
}
</style>
