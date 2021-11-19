<template>
  <div v-if="!!counter">
    {{ timeToDisplay }}
  </div>
  <form>
    <custom-input
      class-name="timer__input"
      type="number"
      v-model="time"
      placeholder="number of minutes"
    />
    <button class="button__submitter" type="submit" @click="submitTime"></button>
    <button @click="resetTime">Reset</button>
  </form>
</template>

<script>
import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';

import CustomInput from '../CustomInput.vue';

dayjs.extend(duration);

export default {
  data() {
    return {
      time: null,
      timeToDisplay: null,
      counter: null,
    };
  },
  methods: {
    submitTime(e) {
      e.preventDefault();
      const { connection } = this.$store.getters;

      this.timerLoading = true;

      connection.emit('TIMER_CHANGE', { time: this.time });
    },
    resetTime(e) {
      e.preventDefault();
      const { connection } = this.$store.getters;

      connection.emit('TIMER_CHANGE', { time: null });
      this.stopCounting();
    },
    startCounting() {
      const tick = () => {
        const target = dayjs(this.targetTime);
        const now = dayjs(new Date());
        const diff = target.diff(now);

        if (Math.floor(diff) <= 0) {
          this.stopCounting();
        } else {
          this.timeToDisplay = dayjs.duration(diff).format('mm:ss');
        }
      };

      tick();
      this.counter = setInterval(() => {
        tick();
      }, 1000);
    },
    stopCounting() {
      window.clearInterval(this.counter);
      this.counter = null;
      this.timeToDisplay = null;
    },
  },
  components: {
    CustomInput,
  },
  computed: {
    targetTime() {
      return this.$store.getters.roomState?.targetTime;
    },
  },
  watch: {
    targetTime: {
      handler() {
        if (this.targetTime && !this.counter) {
          this.startCounting();
        }
      },
    },
  },
};
</script>

<style>
.button__submitter {
  display: none;
}
</style>
