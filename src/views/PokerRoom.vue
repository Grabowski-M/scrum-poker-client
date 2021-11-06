<template>
  <ul v-if="!!room">
    <li v-for="participant in (room.participants || [])" :key="participant.username">
      {{participant.username}}
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      roomId: '',
    };
  },
  computed: {
    room() {
      return this.$store.getters.roomState;
    },
  },
  beforeMount() {
    this.username = localStorage.getItem('username');
    const roomId = this.$route.params.id;

    if (!this.username) {
      this.$router.push(`/?roomId=${roomId}`);
    }
  },
  mounted() {
    const { connection } = this.$store.getters;
    const roomId = this.$route.params.id;

    connection.emit('ROOM_CONNECT', {
      roomId,
      username: this.username,
    });
  },
};
</script>

<style>
</style>
