<template>
  {{ countdown }}
  <form>
    <custom-input
      class-name="timer__input"
      type="number"
      v-model="time"
      placeholder="number of minutes"
    />
    <button class="button__submitter" type="submit" @click="submitTime"></button>
  </form>
</template>

<script>
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

import CustomInput from '../CustomInput.vue';

dayjs.extend(relativeTime);

export default {
  data() {
    return {
      time: null,
      countdown: dayjs(new Date()).to(dayjs(this.roomTimer)),
    };
  },
  methods: {
    submitTime(e) {
      e.preventDefault();
      const { connection } = this.$store.getters;

      connection.emit('TIMER_CHANGE', { time: this.time });
    },
  },
  props: {
    roomTimer: String,
  },
  components: {
    CustomInput,
  },
  watch: {
    countdown: {
      handler(value) {
        console.log({ value });
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
