<template>
  <Header/>
  <div class="workspace__wrapper">
    <div class="workspace">
      <router-view/>
    </div>
  </div>
</template>

<script>
import Header from './Header.vue';

export default {
  components: { Header },
};
</script>

<style>
.workspace__wrapper {
  height: 100vh;
  align-items: center;
  padding: 60px 0 0;
  margin-top: -60px;
}

.workspace {
  width: 100%;
  margin-bottom: 200px;
  height: 100%;
}
</style>
