<template>
  <div class="userCard">
    <div class="userCard__vote" :class="{ 'finished': votingFinished }">
      {{ cardValue ? cardValue : "?" }}
    </div>
    <div class="userCard__username">
      {{ username }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    cardValue: [Number, String],
    username: String,
    votingFinished: Boolean,
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
