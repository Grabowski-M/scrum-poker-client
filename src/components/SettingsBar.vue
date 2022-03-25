<template>
  <div class="settingsBar">
    <div class="settingsBar__setting">
      <BaseIcon
        class="settingsBar__volume__icon"
        :name="muted ? 'volumeUp' : 'volumeOff'"
        @click="toggleMute"
      />
    </div>
  </div>
</template>

<style>
.settingsBar {
  position: fixed;
  top: 16px;
  right: 80px;
}

.settingsBar__setting {
  opacity: 0.3;
  transition: opacity 0.3s;
  cursor: pointer;
}

.settingsBar__setting:hover {
  opacity: 1;
}

.settingsBar__volume__icon {
  width: 38px;
  margin-top: -4px;
  stroke: var(--theme-toggle-background)
}
</style>
<script>
import BaseIcon from './icons/BaseIcon.vue';

export default {
  components: { BaseIcon },
  data() {
    return {
      muted: JSON.parse(localStorage.getItem('muted')),
    };
  },
  methods: {
    toggleMute() {
      const toggledMuted = !this.muted;
      localStorage.setItem('muted', JSON.stringify(toggledMuted));
      this.muted = toggledMuted;
    },
  },
};
</script>
