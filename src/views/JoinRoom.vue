<template>
  <fade-in>
    <div class="joinRoom">
      <div class="joinRoom__form">
        <form @submit="joinRoom()">
          <input
              class="joinRoom__form__input"
              type="text"
              v-model="roomId"
              placeholder="Room id"
              ref="roomId"
          >
          <input
              class="joinRoom__form__input joinRoom__form__input--password"
              type="text"
              v-model="password"
              placeholder="*Password"
              disabled
          >
          <div class="joinRoom__form__button__wrapper">
            <custom-button :disabled="!roomId">
              Join
            </custom-button>
          </div>
        </form>
      </div>
    </div>
  </fade-in>
</template>

<script>
import CustomButton from '../components/CustomButton.vue';
import FadeIn from '../components/Animations/FadeIn.vue';

export default {
  data() {
    return {
      roomId: '',
      password: '',
    };
  },
  mounted() {
    this.$refs.roomId.focus();
  },
  methods: {
    joinRoom() {
      this.$router.push(`/room/${this.roomId}`);
    },
  },
  components: {
    FadeIn,
    CustomButton,
  },
};
</script>

<style>
.joinRoom {
  width: 100%;
}

.joinRoom__heading {
  margin-bottom: 24px;
  font-weight: normal;
  font-style: italic;
}

.joinRoom__form {
  margin: 0 auto;
  max-width: 500px;
}

.joinRoom__form__input {
  width: 100%;
  box-sizing: border-box;
  padding: 24px;
  font-size: 2.4rem;
  border: 3px solid var(--borders-color);
  border-radius: 8px;
  font-weight: bold;
  box-shadow: 0 0 20px 5px var(--box-shadow-color);
  transform: scale(1);
  transition: .3s;
  margin-bottom: 32px;
}

.joinRoom__form__input--password {
  font-size: 1.6rem;
  font-weight: normal;
}

.joinRoom__form__input:focus {
  outline: none;
  box-shadow: 10px 10px 15px 10px var(--box-shadow-color);
  transform: scale(1.05);
}

.joinRoom__form__button__wrapper {
  width: 100%;
  display: flex;
  justify-content: flex-end;
  z-index: 2;
}
</style>
