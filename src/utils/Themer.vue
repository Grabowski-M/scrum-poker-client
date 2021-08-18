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
  --background-color: #f3f3f3;
  --font-color: #404040;
  --box-shadow-color: #e3e3e3;
  --borders-color: grey;
  --accent-color: #4d9dea;

  --button-disabled-background: #d5d5d5;
  --button-background: var(--accent-color);

  --theme-toggle-background: #cbcbcb;
  --theme-toggle-circle-background: var(--background-color);
}

html.dark {
  --background-color: #2d2d2d;
  --font-color: #cecece;
  --box-shadow-color: #282828;
  --borders-color: #232323;
  --accent-color: #ff6600;

  --button-disabled-background: #242424;
  --button-background: var(--accent-color);

  --theme-toggle-background: white;
  --theme-toggle-circle-background: var(--background-color);
}
</style>

<style scoped>
.themeToggle__wrapper {
  position: absolute;
  bottom: 16px;
  right: 16px;
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
