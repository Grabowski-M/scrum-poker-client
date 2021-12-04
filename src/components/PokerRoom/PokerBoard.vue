<template>
  <div class="cards">
    <div class="votes">
      <div v-if="cards">
        <div v-for="card in cards" :key="card">{{ card }}</div>
      </div>
    </div>
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
  </div>
  <div v-if="isLeader">
    <button @click="startVoting">Start voting</button>
  </div>
</template>

<script>
import VotingCard from './VotingCard.vue';

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
      connection.emit('START_VOTING');
    },
  },
  computed: {
    isLeader() {
      return this.$store.getters.isLeader;
    },
    cards() {
      return this.$store.getters.cards;
    },
  },
  components: {
    VotingCard,
  },
  props: ['room'],
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
}

.votingCards {
  display: flex;
  flex-wrap: nowrap;
  width: 100%;
  justify-content: center;
  align-self: flex-end;
}
</style>
