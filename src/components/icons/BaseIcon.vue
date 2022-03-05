<template>
  <component
    :is="iconComponent"
    :style="styleProp"
    role="img"
    class="inline-block fill-current"
  />
</template>

<script>
import StarIcon from './assets/StarIcon.vue';
import HomeIcon from './assets/HomeIcon.vue';
import ArrowLeftIcon from './assets/ArrowLeft.vue';
import CrownIcon from './assets/CrownIcon.vue';
import DoubleChevronUpIcon from './assets/DoubleChevronUpIcon.vue';

const icons = {
  star: StarIcon,
  home: HomeIcon,
  arrowLeft: ArrowLeftIcon,
  crown: CrownIcon,
  doubleChevronUp: DoubleChevronUpIcon,
};

export default {
  props: {
    name: {
      type: String,
      required: true,
      validator(value) {
        return Object.prototype.hasOwnProperty.call(icons, value);
      },
    },
    styleProp: String,
  },

  computed: {
    iconComponent() {
      return icons[this.name];
    },
  },
};
</script>
