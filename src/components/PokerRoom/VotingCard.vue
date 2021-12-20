<template>
  <div
    class="votingCard"
    :class="{ disabled, active }"
    :onclick="() => this.changeActiveCard(value)"
  >
    {{ value }}
  </div>
</template>

<script>
export default {
  props: {
    value: Number,
    disabled: Boolean,
    active: Boolean,
    changeActiveCard: Function,
  },
};
</script>

<style>
.votingCard {
  width: 100%;
  max-width: 40px;
  margin: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  height: 60px;
  cursor: pointer;
  background: var(--voting-card-background-color);
  font-size: 2rem;
  transition: .3s;
  color: var(--voting-card-font-color);
  box-shadow: 0 0 4px -1px var(--voting-card-boxshadow-color);
  transform: scale(1);
}

.votingCard.disabled {
  background: var(--voting-card-disabled-background-color);
  color: var(--voting-card-disabled-font-color);
  cursor: not-allowed;
  box-shadow: none;
}

.votingCard.disabled:hover {
  background: var(--voting-card-disabled-background-color);
  color: var(--voting-card-disabled-font-color);
  transform: scale(1);
  box-shadow: none;
}

.votingCard:hover,
.votingCard.active,
.votingCard.active.disabled,
.votingCard.active.disabled:hover {
  background: var(--voting-card-hovered-background-color);
  color: var(--voting-card-hovered-font-color);
  box-shadow: 2px 2px 5px 1px var(--voting-card-boxshadow-color);
  transform: scale(1.05);
}
</style>
