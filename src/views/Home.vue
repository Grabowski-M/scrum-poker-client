<template>

  <navigation />
  <router-view />
</template>

<script>
import Navigation from '../components/Navigation';

export default {
  name: 'Home',
  components: {
    Navigation
  }
}
</script>
