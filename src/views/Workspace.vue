<template>
  <Header />
  <div class="workspace__wrapper">
    <div class="workspace">
      <router-view />
    </div>
  </div>
</template>

<script>
import Header from '../components/Header.vue';

export default {
  components: { Header },
};
</script>

<style>
.workspace__wrapper {
  display: flex;
  height: 100vh;
  align-items: center;
}

  .workspace {
    width: 100%;
    margin-bottom: 200px;
  }
</style>
