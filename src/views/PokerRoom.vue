<template>
  <div v-if="!!room" class="pokerRoom">
    <h1 class="pokerRoom__header">Room {{ room.roomId }}</h1>
    <div class="pokerRoom__layout">
      <div class="pokerRoom__participants">
        <h3>Participants</h3>
        <ul v-if="!!room">
          <li v-for="participant in (room.participants || [])" :key="participant.username">
            {{ participant.username }}
          </li>
        </ul>
      </div>
      <div class="pokerRoom__pokerTable">

      </div>
      <div class="pokerRoom__timer">
        <timer/>
      </div>
    </div>
  </div>
</template>

<script>
import Timer from '../components/PokerRoom/Timer.vue';

export default {
  data() {
    return {
      username: '',
    };
  },
  computed: {
    room() {
      return this.$store.getters.roomState;
    },
    isLeader() {
      return this.$store.getters.isLeader;
    },
  },
  components: {
    Timer,
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
  beforeUnmount() {
    this.$store.dispatch('handleRoomStateReset');
  },
};
</script>

<style>
.pokerRoom {
  display: flex;
  flex-wrap: wrap;
  height: calc(100vh - 60px);
}

.pokerRoom__header {
  text-align: center;
  width: 100%;
  margin: 16px 0 40px;
  font-weight: normal;
}

.pokerRoom__layout {
  display: flex;
  width: 100%;
  height: 100%;
}

.pokerRoom__participants {
  flex: 0 0 250px;
}

.pokerRoom__pokerTable {
  height: 400px;
  width: 100%;
}

.pokerRoom__timer {
  flex: 0 0 250px;
}
</style>
