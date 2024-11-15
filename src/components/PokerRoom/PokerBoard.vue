<template>
  <div class="cards">
    <div class="votes">
        <user-card
          v-for="participant in participants"
          :participantIsLeader="participant.socketId === leaderId"
          :is-leader="isLeader"
          :key="participant.socketId"
          :card="participant.card"
          :username="participant.username"
          :voting-finished="!room.voting"
          :promote-to-leader="() => promoteToLeader(participant.socketId)"
          :remove-participant="() => removeParticipant(participant.socketId)"
        />
    </div>
    <div class="progressBarContainer">
      <progress-bar :progress="progress" :participantsNumber="participantsNumber" />
    </div>
    <div class="bottomSection">
      <div class="bottomSection__votingCards">
        <voting-card
          v-for="availableCard in room.availableCards"
          :changeActiveCard="changeActiveCard"
          :key="availableCard"
          :value="availableCard"
          :disabled="!room.voting"
          :active="availableCard === this.activeCard"
        />
      </div>
      <div class="bottomSection__timer">
        <timer/>
      </div>
    </div>
  </div>
</template>

<script>
import VotingCard from './VotingCard.vue';
import UserCard from './UserCard.vue';
import Timer from './Timer.vue';
import ProgressBar from './ProgressBar.vue';

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

        if (this.activeCard === card) {
          this.activeCard = null;
          return;
        }
        this.activeCard = card;
      }
    },
    promoteToLeader(participantId) {
      const { connection } = this.$store.getters;
      connection.emit('PROMOTE_TO_LEADER', { participantId });
    },
    removeParticipant(participantId) {
      const { connection } = this.$store.getters;
      connection.emit('REMOVE_PARTICIPANT', { participantId });
    },
  },
  computed: {
    isLeader() {
      return this.$store.getters.isLeader;
    },
    leaderId() {
      return this.$store.getters.leaderId;
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
    progress() {
      return this.room.progress;
    },
    participantsNumber() {
      return this.room.participants.length;
    },
  },
  components: {
    UserCard,
    VotingCard,
    Timer,
    ProgressBar,
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
  gap: 40px 12px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}

.bottomSection__timer {
  margin: 16px auto 0;
}

.progressBarContainer {
  flex: 1;
}

.bottomSection__votingCards {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: center;
  align-self: flex-end;
}

.bottomSection {
  display: flex;
  padding: 16px;
  flex-wrap: wrap;
}
</style>
