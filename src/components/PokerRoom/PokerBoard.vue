<template>
  <div class="votingCards">
    <voting-card
      v-for="availableCard in room.availableCards"
      :changeActiveCard="changeActiveCard"
      :key="availableCard"
      :value="availableCard"
      :disabled="false"
      :active="availableCard === this.activeCard"
    />
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
      this.activeCard = card;
    },
  },
  computed: {},
  components: {
    VotingCard,
  },
  props: ['room'],
};
</script>

<style>
.votingCards {
  display: flex;
  flex-wrap: nowrap;
  width: 100%;
  justify-content: center;
}
</style>
