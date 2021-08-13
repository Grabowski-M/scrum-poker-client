<template>
  <div class="navigation">
    <div>
      <h2 class="navigation__link">
        <router-link to="/join">Join room</router-link>
      </h2>
    </div>
    <div>
      <p class="navigation__paragraph">or</p>
    </div>
    <div>
      <h2 class="navigation__link">
        <router-link to="/new">Create a new one</router-link>
      </h2>
    </div>
  </div>
</template>

<style>
.navigation {
  width: 100%;
  max-width: 600px;
  margin: 200px auto 0;
  text-align: center;
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
</style>
