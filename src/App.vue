<template>
  <themer>
    <styles-reset>
      <styles-global>
        <router-view/>
      </styles-global>
    </styles-reset>
  </themer>
</template>

<script>
import Themer from './utils/Themer.vue';
import StylesReset from './utils/StylesReset.vue';
import StylesGlobal from './utils/StylesGlobal.vue';

export default {
  components: {
    StylesGlobal,
    StylesReset,
    Themer,
  },
};
</script>
