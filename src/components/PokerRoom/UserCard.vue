<template>
  <div class="userCard" :class="{ 'high': card?.high, low: card?.low }">
    <div class="userCard__vote">
      {{ card === undefined ? "?" : card.value }}
      <i class="userCard__icon userCard__icon--promote" @click="() => promoteToLeader()">
        <BaseIcon
          v-if="!participantIsLeader && isLeader"
          name="crown"
        />
      </i>
      <i class="userCard__icon userCard__icon--remove" v-on:dblclick="() => removeParticipant()">
        <BaseIcon
          v-if="!participantIsLeader && isLeader"
          name="cross"
        />
      </i>
      <i class="userCard__icon userCard__icon--leader">
        <BaseIcon
        v-if="participantIsLeader"
        name="crown"
      />
      </i>
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
    card: Object,
    username: String,
    votingFinished: Boolean,
    participantIsLeader: Boolean,
    isLeader: Boolean,
    promoteToLeader: Function,
    removeParticipant: Function,
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
  background: var(--vote-background-color);
  border-radius: 12px;
  box-shadow: 0 0 10px -5px var(--accent-color);
  transition: background-color 0.3s;
}

.userCard.high {
  background: rgba(143, 0, 0, 0.1);
}

.userCard.low {
  background: rgba(0, 128, 0, 0.1);
}

.userCard__icon {
  position: absolute;
  top: 0;
  left: 0;
  cursor: pointer;
  transform: scale(1);
  transition: transform 0.3s, opacity 0.3s;
  fill: var(--font-color);
  opacity: 0.2;
}

.userCard__icon svg {
  width: 22px;
  height: 22px;
  padding: 4px;
}

.userCard__icon--leader {
  fill: var(--accent-color);
}

.userCard__icon--promote:hover,
.userCard__icon--remove:hover {
  transform: scale(1.15);
}

.userCard__icon--remove {
  right: 0;
  top: 0;
  left: auto;
}

.userCard__vote {
  height: 100%;
  font-size: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--vote-font-color);
  text-shadow: 0 0 2px var(--accent-color);
}

.userCard__username {
  color: var(--font-color);
  text-align: center;
  margin-top: 16px;
  font-size: 1.6rem;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
