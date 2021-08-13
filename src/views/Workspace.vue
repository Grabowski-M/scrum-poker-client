<template>
  <Header />
  <div class="workspace">
    <router-view />
  </div>
</template>

<script>
import Header from '../components/Header.vue';

export default {
  components: { Header },
};
</script>

<style>
  .workspace {
    width: 100%;
    margin-top: 200px;
  }
</style>
