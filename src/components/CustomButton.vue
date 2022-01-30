<template>
  <button
    class="customButton"
    :class="{
      [className]: !!className,
      'customButton--disabled': disabled,
      'customButton--outlined': customType === 'outlined' && !disabled
    }"
    :disabled="!!disabled"
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
    customType: String,
  },
};
</script>

<style scoped>
.customButton {
  background: var(--accent-color);
  padding: 8px 32px;
  color: var(--button-font-color);
  border-radius: 4px;
  font-size: 1.6rem;
  cursor: pointer;
  transition: .3s;
  border: 1px solid transparent
}

.customButton--disabled {
  background: var(--button-disabled-background);
  cursor: not-allowed;
}

.customButton--outlined {
  background: transparent;
  border: 1px solid var(--accent-color);
  color: var(--accent-color);
}

.customButton--outlined:hover {
  background: var(--accent-color);
  color: var(--button-font-color);
}
</style>
