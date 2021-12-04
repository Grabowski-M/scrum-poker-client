<template>
  <div v-if="!!room" class="pokerRoom">
    <div class="pokerRoom__layout">
      <div class="pokerRoom__sidebar">
        <div class="pokerRoom__participants">
          <h3>Participants</h3>
          <ul class="pokerRoom__participants__list" v-if="!!room">
            <li
              class="pokerRoom__participants__item"
              :class="participant.socketId === room.leader ? 'leader' : ''"
              v-for="participant in (room.participants || [])" :key="participant.username"
            >
              {{ participant.username }}
            </li>
          </ul>
        </div>
        <div class="pokerRoom__timer">
          <timer/>
        </div>
      </div>
      <div class="pokerRoom__pokerTable">
        <h1 class="pokerRoom__header">Room #{{ room.roomId }}</h1>
        <poker-board :room="room" />
      </div>
    </div>
  </div>
</template>

<script>
import Timer from '../components/PokerRoom/Timer.vue';
import PokerBoard from '../components/PokerRoom/PokerBoard.vue';

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
    PokerBoard,
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
  height: 100%;
  position: relative;
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

.pokerRoom__sidebar {
  display: flex;
  flex-wrap: wrap;
  flex: 0 0 250px;
  padding: 16px 16px 0 16px;
}

.pokerRoom__participants {
  margin-bottom: 24px;
  justify-content: flex-end;
}

.pokerRoom__participants__list {
  margin-top: 8px;
}

.pokerRoom__participants__item {
  padding: 4px 0;
}

.pokerRoom__participants__item.leader {
  font-weight: bold;
  color: var(--accent-color);
}

.pokerRoom__pokerTable {
  width: 100%;
  flex-direction: column;
  display: flex;
  flex-wrap: wrap;
}

.pokerRoom__timer {
  align-self: flex-end;
}
</style>
