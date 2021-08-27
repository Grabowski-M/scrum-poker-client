<template>
  <div class="navigation__wrapper">
    <div class="navigation">
      <div>
        <h2 class="navigation__link">
          <router-link to="/poker/join">Join room</router-link>
        </h2>
      </div>
      <div>
        <p class="navigation__paragraph">or</p>
      </div>
      <div>
        <h2 class="navigation__link">
          <router-link to="/poker/new">Create a new one</router-link>
        </h2>
      </div>
    </div>
  </div>
</template>

<style>
.navigation__wrapper {
  height: 100vh;
  display: flex;
  align-items: center;
  padding: 16px;
}

.navigation {
  max-width: 600px;
  text-align: center;
  margin: 0 auto 100px;
}

.navigation__link {
  margin: 24px 0;
}

.navigation__link a {
  color: inherit;
  text-decoration: none;
  font-size: 4rem;
}

.navigation__link a:hover {
  text-decoration: underline;
}

.navigation__paragraph {
  font-size: 2rem;
  font-style: italic;
}

@media screen and (max-width: 480px) {
  .navigation__link a {
    font-size: 2rem;
    text-decoration: underline;
  }

  .navigation__paragraph {
    font-size: 1.6rem;
  }
}
</style>
