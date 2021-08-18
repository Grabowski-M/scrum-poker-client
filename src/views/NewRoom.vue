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
              class="newRoom__form__input newRoom__form__input--password"
              type="text"
              v-model="password"
              placeholder="password (optional)"
              disabled
          />
          <div class="newRoom__form__button__wrapper">
            <custom-button :disabled="!roomId">
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
      password: '',
    };
  },
  methods: {
    createNewRoom() {

    },
  },
  components: {
    FadeIn,
    CustomButton,
    CustomInput,
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
  border: 3px solid var(--borders-color);
  font-weight: bold;
  margin-bottom: 32px;
}

.newRoom__form__input--password {
  font-size: 1.6rem;
  font-weight: normal;
}

.newRoom__form__input:focus {
  outline: none;
  box-shadow: 10px 10px 15px 10px var(--box-shadow-color);
  transform: scale(1.05);
}

.newRoom__form__button__wrapper {
  width: 100%;
  display: flex;
  justify-content: flex-end;
  z-index: 2;
}
</style>
