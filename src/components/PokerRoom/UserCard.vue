<template>
  <div class="userCard">
    <BaseIcon
      v-if="participantIsLeader"
      name="crown"
      class="userCard__icon userCard__icon--leader"
    />
    <i @click="() => promoteToLeader()">
      <BaseIcon
        v-if="!participantIsLeader && isLeader"
        name="doubleChevronUp"
        class="userCard__icon userCard__icon--promote"
      />
    </i>
    <div class="userCard__vote" :class="{ 'finished': votingFinished }">
      {{ cardValue === undefined ? "?" : cardValue }}
    </div>
    <div class="userCard__username">
      {{ username }}
    </div>
  </div>
</template>

<script>
import BaseIcon from '../icons/BaseIcon.vue';

export default {
  components: { BaseIcon },
  props: {
    cardValue: [Number, String],
    username: String,
    votingFinished: Boolean,
    participantIsLeader: Boolean,
    isLeader: Boolean,
    promoteToLeader: Function,
  },
};
</script>

<style>
.userCard {
  position: relative;
  width: 100%;
  max-width: 120px;
  height: 170px;
  margin: 12px;
}

.userCard__icon {
  width: 24px;
  height: 24px;
  position: absolute;
  top: -12px;
  left: -12px;
  stroke: var(--accent-color);
  padding: 4px;
}

.userCard__icon--leader {
  fill: var(--accent-color);
  width: 20px;
  height: 20px;
}

.userCard__icon--promote {
  cursor: pointer;
  transform: scale(1);
  transition: transform 0.3s, opacity 0.3s;
  opacity: 0.1;
}

.userCard:hover .userCard__icon--promote {
  opacity: 1;
}

.userCard__icon--promote:hover {
  transform: scale(1.15);
}

.userCard__vote {
  height: 100%;
  font-size: 3rem;
  background: var(--vote-background-color);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--vote-font-color);
  border-radius: 12px;
  text-shadow: 0 0 2px var(--accent-color);
  box-shadow: 0 0 10px -5px var(--accent-color);
}

.userCard__vote.finished {

}

.userCard__username {
  text-align: center;
  margin-top: 16px;
  font-size: 1.6rem;
  font-weight: bold;
}
</style>
