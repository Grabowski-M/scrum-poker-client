<template>
  <div v-if="!!room" class="pokerRoom">
    <div class="pokerRoom__layout">
      <div class="pokerRoom__pokerTable">
        <h1 class="pokerRoom__header">Room #{{ room.roomId }}</h1>
        <div class="pokerRoom__control" v-if="isLeader">
          <custom-button
            class-name="pokerRoom__control__button"
            :on-click="startVoting"
            custom-type="outlined"
            :disabled="room.voting"
          >
            start voting
          </custom-button>
          <custom-button
            :on-click="showCards"
            custom-type="outlined"
            class-name="pokerRoom__control__button"
            :disabled="!room.voting"
          >
            show cards
          </custom-button>
        </div>
        <poker-board :room="room"/>
      </div>
    </div>
  </div>
</template>

<script>
import PokerBoard from '../components/PokerRoom/PokerBoard.vue';
import CustomButton from '../components/CustomButton.vue';

export default {
  data() {
    return {
      username: '',
    };
  },
  methods: {
    startVoting() {
      const { connection } = this.$store.getters;
      this.$store.dispatch('handleResetCards');
      connection.emit('START_VOTING');
    },
    showCards() {
      const { connection } = this.$store.getters;
      connection.emit('STOP_VOTING');
    },
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
    CustomButton,
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
  watch: {
    room(newRoom, oldRoom) {
      if (oldRoom && oldRoom.voting && !newRoom.voting) {
        const muted = JSON.parse(localStorage.getItem('muted'));
        if (!muted) {
          const bell = new Audio('/notification.mp3');
          bell.volume = 0.2;
          bell.play();
        }
      }
    },
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
  margin: 16px 0;
  font-weight: normal;
}

.pokerRoom__layout {
  display: flex;
  width: 100%;
  height: 100%;
}

.pokerRoom__pokerTable {
  width: 100%;
  flex-direction: column;
  display: flex;
  flex-wrap: wrap;
}

.pokerRoom__control {
  text-align: center;
}

.pokerRoom__control__button {
  margin: 0 8px;
}
</style>
