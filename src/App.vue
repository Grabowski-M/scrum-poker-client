<template>
  <room-service>
    <themer>
      <styles-reset>
        <styles-global>
          <div v-if="connecting" class="loader-wrapper">
            <loader/>
          </div>
          <router-view v-if="!connecting"/>
          <settings-bar />
        </styles-global>
      </styles-reset>
    </themer>
  </room-service>
</template>

<script>
import Themer from './styleUtils/Themer.vue';
import StylesReset from './styleUtils/StylesReset.vue';
import StylesGlobal from './styleUtils/StylesGlobal.vue';
import RoomService from './services/RoomService.vue';
import Loader from './components/Loader.vue';
import SettingsBar from './components/SettingsBar.vue';

export default {
  components: {
    Loader,
    RoomService,
    StylesGlobal,
    StylesReset,
    Themer,
    SettingsBar,
  },
  computed: {
    connecting() {
      return this.$store.getters.connecting;
    },
  },
};
</script>

<style>
.loader-wrapper {
  position: fixed;
  width: 100%;
  height: 100vh;
  left: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--background-color);
}
</style>
