<template>
  <div class="themeToggle__wrapper">
    <div
        @click="toggleTheme"
        class="themeToggle"
        :class="{
          'light': theme === 'light',
          'dark': theme === 'dark'
        }">
      <div class="themeToggle__circle" />
    </div>
  </div>
  <slot></slot>
</template>

<script>
const THEMES = {
  LIGHT: 'light',
  DARK: 'dark',
};

export default {
  data() {
    return {
      theme: THEMES.LIGHT,
    };
  },
  methods: {
    toggleTheme() {
      const theme = this.theme === THEMES.LIGHT ? THEMES.DARK : THEMES.LIGHT;
      this.setTheme(theme);
    },
    setTheme(theme) {
      document.documentElement.className = theme;
      localStorage.setItem('theme', theme);
      this.theme = theme;
    },
  },
  beforeMount() {
    const userTheme = localStorage.getItem('theme') || THEMES.LIGHT;
    this.setTheme(userTheme);
  },
};
</script>

<style>
html.light {
  background: #F4F4F4;
  background: -webkit-linear-gradient(top left, #F4F4F4, #DBDBDB);
  background: -moz-linear-gradient(top left, #F4F4F4, #DBDBDB);
  background: linear-gradient(to bottom right, #F4F4F4, #DBDBDB);
  --background-color: #f3f3f3;
  --font-color: #696969;
  --box-shadow-color: #dbdbdb;
  --borders-color: grey;
  --accent-color: #5C80BC;

  --button-disabled-background: #d5d5d5;
  --button-disabled-color: grey;
  --button-background: var(--accent-color);
  --button-font-color: white;
  --button-secondary-background: white;
  --button-secondary-font-color: var(--font-color);

  --theme-toggle-background: #cbcbcb;
  --theme-toggle-circle-background: var(--background-color);

  --voting-card-font-color: var(--accent-color);
  --voting-card-hovered-font-color: white;
  --voting-card-background-color: white;
  --voting-card-hovered-background-color: var(--accent-color);
  --voting-card-disabled-background-color: #d5d5d5;
  --voting-card-disabled-font-color: white;
  --voting-card-boxshadow-color: var(--accent-color);

  --vote-font-color: var(--accent-color);
  --vote-background-color: white;

  --progress-bar-boxshadow-color: var(--accent-color);
}

html.dark {
  background: #313131;
  background: -webkit-linear-gradient(bottom right, #313131, #4A4A4A);
  background: -moz-linear-gradient(bottom right, #313131, #4A4A4A);
  background: linear-gradient(to top left, #313131, #4A4A4A);
  --background-color: #313131;
  --font-color: #cecece;
  --box-shadow-color: #282828;
  --borders-color: #393939;
  --accent-color: #5C80BC;

  --button-disabled-background: #242424;
  --button-disabled-color: grey;
  --button-background: var(--accent-color);
  --button-font-color: white;
  --button-secondary-background: #4e4e4e;
  --button-secondary-font-color: var(--font-color);

  --theme-toggle-background: white;
  --theme-toggle-circle-background: var(--background-color);

  --voting-card-font-color: var(--font-color);
  --voting-card-hovered-font-color: white;
  --voting-card-background-color: #4e4e4e;
  --voting-card-hovered-background-color: var(--accent-color);
  --voting-card-disabled-background-color: #3e3e3e;
  --voting-card-disabled-font-color: #5f5f5f;
  --voting-card-boxshadow-color: transparent;
  --progress-bar-boxshadow-color: #5f5f5f;
  --vote-font-color: var(--accent-color);
  --vote-background-color: #282828;
}
</style>

<style scoped>
.themeToggle__wrapper {
  position: fixed;
  top: 16px;
  right: 16px;
  opacity: 0.3;
  transition: 0.3s;
  z-index: 9;
}

.themeToggle__wrapper:hover {
  opacity: 1;
}

.themeToggle {
  width: 50px;
  height: 30px;
  background: var(--theme-toggle-background);
  border-radius: 20px;
  position: relative;
  cursor: pointer;
}

.themeToggle__circle {
  position: absolute;
  width: 26px;
  height: 26px;
  border-radius: 50%;
  top: 2px;
  left: 2px;
  transition: .3s;
  background: var(--theme-toggle-circle-background);
}

.themeToggle.dark .themeToggle__circle {
  left: 22px;
}
</style>
