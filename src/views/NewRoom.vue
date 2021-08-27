<template>
  <fade-in>
    <div class="newRoom">
      <div class="newRoom__form">
        <h1 class="newRoom__form__heading">Create new room</h1>
        <form>
          <custom-input
              class-name="newRoom__form__input"
              type="text"
              v-model="roomId"
              placeholder="room id"
              :focus-on-load="true"
          />
          <custom-input
            class="newRoom__form__input newRoom__form__input--secondary"
            type="text"
            v-model="username"
            placeholder="username"
          />
          <div class="newRoom__form__button__wrapper">
            <custom-button
              type="submit"
              :on-click="createNewRoom"
              :disabled="!roomId || !username"
            >
              create room
            </custom-button>
          </div>
        </form>
      </div>
    </div>
  </fade-in>
</template>

<script>
import CustomButton from '../components/CustomButton.vue';
import CustomInput from '../components/CustomInput.vue';
import FadeIn from '../components/Animations/FadeIn.vue';

export default {
  data() {
    return {
      roomId: '',
      username: '',
      password: '',
    };
  },
  methods: {
    createNewRoom(e) {
      e.preventDefault();
      this.setUsername(this.username);
    },
    setUsername(username) {
      localStorage.setItem('username', username);
      this.username = username;
    },
  },
  components: {
    FadeIn,
    CustomButton,
    CustomInput,
  },
  beforeMount() {
    const username = localStorage.getItem('username') || '';
    this.setUsername(username);
  },
};
</script>

<style>
.newRoom {
  width: 100%;
}

.newRoom__form__heading {
  margin-bottom: 24px;
}

.newRoom__form {
  margin: 0 auto;
  max-width: 500px;
}

.newRoom__form__input {
  width: 100%;
  padding: 24px;
  font-size: 2.4rem;
  font-weight: bold;
  margin-bottom: 32px;
}

.newRoom__form__input--secondary {
  font-size: 1rem;
  font-weight: normal;
}

.newRoom__form__button__wrapper {
  width: 100%;
  display: flex;
  justify-content: flex-end;
  z-index: 2;
}
</style>
