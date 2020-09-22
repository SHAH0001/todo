<template>
  <div id="app">
    <div class="container">
      <nav class="nav">
        <router-link class="logo" to="/">Main page</router-link>
        <ul class="nav-items">
          <router-link tag="li" exact to="/today" active-class="active">
            <a class="nav-items-link">Today</a>
          </router-link>
          <router-link tag="li" to="/work" active-class="active">
            <a class="nav-items-link">Work</a>
          </router-link>
          <router-link tag="li" to="/hobby" active-class="active">
            <a class="nav-items-link">Hobby</a>
          </router-link>
        </ul>
      </nav>
      <router-view />
    </div>
    <footer style="height: 250px;"></footer>
  </div>
</template>

<style>
  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 15px;
  }

  .active {
    border-bottom: 1px solid #ccc;
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

  .nav-items-link {
    text-decoration: none;
    color: black;
    margin: 0 20px;
    padding: 20px;
  }

</style>