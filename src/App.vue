<template>
  <div id="app">
    <div class="container">
      <nav class="nav">
        <router-link class="logo" to="/">Main page</router-link>
        <ul class="nav-items">
          <li>
            <router-link to="/today" href="#">Today</router-link>
          </li>
          <li>
            <router-link to="/work">Work</router-link>
          </li>
          <li>
            <router-link to="/hobby">Hobby</router-link>
          </li>
        </ul>
      </nav>
      <router-view />
    </div>
  </div>
</template>

<style>
  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 15px;
  }

  .nav {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
  }

  .logo {
    font-size: 30px;
    font-weight: bold;
    text-transform: uppercase;
    text-decoration: none;
    color: black;
  }

  .nav-items {
    display: flex;
    justify-content: space-between;
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .nav-items a {
    text-decoration: none;
    color: black;
    margin: 0 0 0 40px;
    padding: 20px;
  }

</style>