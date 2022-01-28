<template>
  <div class="cards">
    <div class="votes">
        <user-card
          v-for="participant in participants"
          :key="participant.socketId"
          :card-value="participant.card ? participant.card : '?'"
          :username="participant.username"
          :voting-finished="!room.voting"
        />
    </div>
    <div class="bottomSection">
      <div class="votingCards">
        <voting-card
          v-for="availableCard in room.availableCards"
          :changeActiveCard="changeActiveCard"
          :key="availableCard"
          :value="availableCard"
          :disabled="!room.voting"
          :active="availableCard === this.activeCard"
        />
      </div>
      <div class="" v-if="isLeader">
        <button @click="startVoting">Start voting</button>
        <button @click="showCards">Show cards</button>
      </div>
    </div>
  </div>
</template>

<script>
import VotingCard from './VotingCard.vue';
import UserCard from './UserCard.vue';

export default {
  data() {
    return {
      activeCard: null,
    };
  },
  methods: {
    changeActiveCard(card) {
      if (this.room.voting) {
        const { connection } = this.$store.getters;
        connection.emit('CARD_CHANGE', { card });
        this.activeCard = card;
      }
    },
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
    isLeader() {
      return this.$store.getters.isLeader;
    },
    cards() {
      return this.$store.getters.cards;
    },
    participants() {
      const { participants = [] } = this.room;

      return participants.map((participant) => ({
        ...participant,
        card: (this.$store.getters.cards || [])[participant.socketId],
      }));
    },
  },
  components: {
    UserCard,
    VotingCard,
  },
  mounted() {
    const { connection } = this.$store.getters;
    connection.on('RESET_CARDS', () => {
      this.activeCard = null;
      this.$store.dispatch('handleResetCards');
    });
  },
  props: ['room'],
  watch: {
    cards: {
      handler() {
        if (this.cards === null) {
          this.activeCard = null;
        }
      },
    },
  },
};
</script>

<style>
.cards {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.votes {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

.votingCards {
  display: flex;
  flex-wrap: nowrap;
  width: 100%;
  justify-content: center;
  align-self: flex-end;
}

.bottomSection {
}

.votingCards {
  width: 100%;
  margin-bottom: 40px;
}
</style>
