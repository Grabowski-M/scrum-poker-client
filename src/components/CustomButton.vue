<template>
  <button
      class="customButton"
      :class="{[className]: !!className, 'customButton--disabled': disabled }"
      :disabled="disabled"
      :type="type"
      @click="onClick"
  >
    <slot/>
  </button>
</template>

<script>
export default {
  props: {
    className: String,
    disabled: Boolean,
    type: String,
    onClick: Function,
  },
};
</script>

<style scoped>
.customButton {
  background: var(--accent-color);
  padding: 8px 32px;
  border: none;
  color: white;
  border-radius: 4px;
  font-size: 1.6rem;
  cursor: pointer;
  transition: .3s;
}

.customButton--disabled {
  background: var(--button-disabled-background);
  cursor: not-allowed;
}

</style>
