<template>
  <div class="progressBarWrapper">
    <div class="progressBar">
      <div
          class="progress"
          :style="{'width': `${(progressPercentage > 100 ? 100 : progressPercentage)}%`}"
      />
    </div>
    <div class="progressText">
      {{ progress }} / {{ participantsNumber }}
    </div>
  </div>
</template>

<script>

export default {
  props: {
    progress: Number,
    participantsNumber: Number,
  },
  computed: {
    progressPercentage() {
      return (this.progress / this.participantsNumber) * 100;
    },
  },
};
</script>

<style>
.progressBarWrapper {
  width: 100%;
  height: 40px;
  text-align: center;
  margin: 20px auto 0;

  @media screen and (max-width: 720px) {
    height: 20px;
    width: 60%;
  }
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
  min-width: 12px;
  height: 100%;
  background: var(--accent-color);
  transition: 0.3s;
  opacity: 0.5;
}
</style>
