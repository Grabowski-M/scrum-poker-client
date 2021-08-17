<template>
  <fade-in>
    <navigation />
  </fade-in>
  <router-view/>
</template>

<script>
import Navigation from '../components/Navigation.vue';
import FadeIn from '../components/Animations/FadeIn.vue';

export default {
  name: 'Home',
  components: {
    FadeIn,
    Navigation,
  },
};
</script>

<style>

</style>
