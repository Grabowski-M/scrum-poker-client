<template>
  <input
    class="customInput"
    :class="{[className]: !!className, 'customInput--disabled': disabled }"
    :disabled="disabled"
    :type="type"
    :placeholder="placeholder"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
    ref="input"
  >
</template>

<script>
export default {
  mounted() {
    if (this.focusOnLoad) {
      this.$refs.input.focus();
    }
  },
  props: {
    className: String,
    disabled: Boolean,
    type: String,
    value: String || Number,
    placeholder: String || Number,
    ref: String,
    focusOnLoad: { type: Boolean, default: false },
    modelValue: String,
  },
  emits: ['update:modelValue'],
};
</script>

<style>
.customInput {
  box-sizing: border-box;
  padding: 24px;
  font-size: 1.6rem;
  font-weight: normal;
  border: none;
  border-radius: 6px;
  box-shadow: 0 0 10px 5px var(--box-shadow-color);
  transition: .3s;
}

.customInput:focus {
  box-shadow: 6px 6px 12px 8px var(--box-shadow-color);
  transform: scale(1.02);
  outline: none;
}

.customInput--disabled {
  cursor: not-allowed;
}

</style>
