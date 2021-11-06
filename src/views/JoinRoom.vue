<template>
  <fade-in>
    <div class="joinRoom">
      <div class="joinRoom__form">
        <h1 class="joinRoom__form__heading">Create or join room</h1>
        <form>
          <custom-input
              class-name="joinRoom__form__input"
              type="text"
              v-model="roomId"
              placeholder="room id"
              :focus-on-load="true"
          />
          <custom-input
            class="joinRoom__form__input joinRoom__form__input--secondary"
            type="text"
            v-model="username"
            placeholder="username"
          />
<!--          <custom-input-->
<!--              class-name="joinRoom__form__input joinRoom__form__input&#45;&#45;secondary"-->
<!--              type="text"-->
<!--              v-model="password"-->
<!--              placeholder="password (optional)"-->
<!--              disabled-->
<!--          />-->
          <div class="joinRoom__form__button__wrapper">
            <custom-button :disabled="!roomId || !username" type="submit" :on-click="joinRoom">
              join
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
import CustomInput from '../components/CustomInput.vue';

export default {
  data() {
    return {
      roomId: '',
      password: '',
      username: '',
    };
  },
  methods: {
    joinRoom(e) {
      e.preventDefault();
      this.$router.push(`/room/${this.roomId}`);

      this.setUsername(this.username);
    },
    setUsername(username) {
      localStorage.setItem('username', username);
      this.username = username;
    },
  },
  components: {
    CustomInput,
    FadeIn,
    CustomButton,
  },
  beforeMount() {
    const localStorageUsername = localStorage.getItem('username');
    if (localStorageUsername) {
      this.username = localStorageUsername;
    }

    this.roomId = this.$route.query.roomId;
  },
};
</script>

<style>
.joinRoom {
  width: 100%;
  padding: 16px;
  margin-top: 200px;
}

.joinRoom__form__heading {
  margin-bottom: 24px;
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
  border-radius: 8px;
  font-weight: bold;
  transform: scale(1);
  transition: .3s;
  margin-bottom: 32px;
}

.joinRoom__form__input--secondary {
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

@media screen and (max-width: 480px) {
  .joinRoom {
    margin-top: 40px;
  }

  .joinRoom__form__input {
    padding: 16px;
    font-size: 1.6rem;
    margin-bottom: 24px;
  }
}
</style>
