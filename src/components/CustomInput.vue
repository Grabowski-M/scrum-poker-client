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

<style scoped>
.customInput {
  box-sizing: border-box;
  padding: 24px;
  font-size: 1.6rem;
  font-weight: normal;
  border: 3px solid var(--borders-color);
  border-radius: 8px;
  box-shadow: 0 0 20px 5px var(--box-shadow-color);
  transform: scale(1);
  transition: .3s;
}

.customInput--disabled {
  cursor: not-allowed;
}

</style>
