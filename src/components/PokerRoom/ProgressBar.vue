<template>
  <div class="progressBarWrapper">
    <div class="progressBar">
      <div
          class="progress"
          :style="{'width': `${(progress / participantsNumber) * 100}%`}"
      />
    </div>
    <div class="progressText">
      {{progress}} / {{participantsNumber}}
    </div>
  </div>
</template>

<script>

export default {
  props: {
    progress: Number,
    participantsNumber: Number,
  },
};
</script>

<style>
.progressBarWrapper {
  width: 100%;
  height: 40px;
  text-align: center;
}

.progressBar {
  max-width: 400px;
  width: 100%;
  margin: 0 auto;
  background: transparent;
  border-radius: 6px;
  height: 100%;
  box-shadow: 0 0 5px 1px var(--progress-bar-boxshadow-color);
}

.progressText {
  margin-top: 16px;
  font-size: 2.4rem;
}

.progress {
  border-radius: 6px;
  min-width: 5px;
  height: 100%;
  background: var(--accent-color);
  transition: 0.3s;
  opacity: 0.5;
}
</style>
