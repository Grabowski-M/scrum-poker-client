<template>
  <div class="timer">
    <div class="timer__counter" :class="statusClassName">
      {{ counter ? timeToDisplay : '00:00' }}
    </div>
    <div v-if="isLeader" class="timer__buttons">
      <div class="timer__buttons--row">
        <button class="button__time" @click="(e) => submitTime(e, 1)">1 min</button>
        <button class="button__time" @click="(e) => submitTime(e, 5)">5 min</button>
      </div>
      <div class="timer__buttons--row">
        <button class="button__time" @click="(e) => submitTime(e, 10)">10 min</button>
        <button class="button__time" @click="(e) => submitTime(e, 15)">15 min</button>
      </div>
      <div class="timer__buttons--row">
        <button class="button__time" @click="(e) => submitTime(e, 20)">20 min</button>
        <button class="button__time" @click="resetTime">Reset</button>
      </div>
    </div>
  </div>
</template>

<script>
import dayjs from 'dayjs';
import duration from 'dayjs/plugin/duration';

dayjs.extend(duration);

export default {
  data() {
    return {
      timeToDisplay: null,
      counter: null,
      statusClassName: '',
    };
  },
  methods: {
    submitTime(e, time) {
      e.preventDefault();
      const { connection } = this.$store.getters;
      this.statusClassName = '';

      if (!time) {
        connection.emit('TIMER_CHANGE', { time: this.time });
      } else {
        connection.emit('TIMER_CHANGE', { time });
      }
    },
    resetTime(e) {
      e.preventDefault();
      const { connection } = this.$store.getters;

      connection.emit('TIMER_CHANGE', { time: null });
      this.stopCounting();
    },
    changePageTitle(title) {
      document.title = title;
    },
    startCounting() {
      this.stopCounting();

      const tick = () => {
        const target = dayjs(this.targetTime);
        const now = dayjs(new Date());
        const diff = target.diff(now);
        const lowerThan3min = diff < 3 * 60 * 1000;
        const lowerThanMinute = diff < 60 * 1000;
        const countingFinished = Math.floor(diff) <= 0;

        if (lowerThan3min) {
          this.statusClassName = 'warning';
        }

        if (lowerThanMinute) {
          this.statusClassName = 'danger';
        }

        if (countingFinished) {
          this.stopCounting();
        } else {
          this.timeToDisplay = dayjs.duration(diff).format('mm:ss');
          this.changePageTitle(`${this.timeToDisplay} - Scrum poker`);
        }
      };

      tick();
      this.counter = setInterval(() => {
        tick();
      }, 1000);
    },
    stopCounting() {
      window.clearInterval(this.counter);
      this.changePageTitle('Scrum poker');
      this.counter = null;
      this.timeToDisplay = null;
      this.statusClassName = '';
    },
  },
  computed: {
    targetTime() {
      return this.$store.getters.roomState?.targetTime;
    },
    isLeader() {
      return this.$store.getters.isLeader;
    },
  },
  mounted() {
    const target = dayjs(this.targetTime);
    const now = dayjs(new Date());
    const diff = target.diff(now);
    const shouldBeCounting = this.targetTime && Math.floor(diff) > 0 && !this.counter;

    if (shouldBeCounting) {
      this.startCounting();
    }
  },
  watch: {
    targetTime: {
      handler() {
        if (this.targetTime && !this.counter) {
          this.startCounting();
        } else if (!this.targetTime) {
          this.stopCounting();
        }
      },
    },
  },
};
</script>

<style>
.timer {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}

.timer__buttons {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-top: 24px;
  color: var(--button-font-color);
}

.timer__buttons--row {
  width: 100%;
  align-self: center;
  text-align: center;
}

.button__time {
  border: none;
  cursor: pointer;
  font-size: 1.2rem;
  padding: 4px 8px;
  background-color: var(--button-secondary-background);
  box-shadow: 0 0 2px 1px var(--box-shadow-color);
  margin: 4px;
  border-radius: 4px;
  color: var(--button-secondary-font-color);
  transition: .3s;
  transform: scale(1);
  width: 80px;
}

.button__time:hover {
  box-shadow: 0 0 4px 2px var(--box-shadow-color);
}

.timer__counter {
  font-size: 5rem;
  transition: color 5s;
  font-weight: bold;
  color: var(--font-color);
}

.timer__counter.warning {
  color: #ffb65d;
}

.timer__counter.danger {
  color: #ff5858;
  animation: pulsate 2s infinite;
}

@keyframes pulsate {
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(1.1);
  }

  100% {
    transform: scale(1);
  }
}
</style>
