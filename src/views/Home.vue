<template>
    <div>
        <div class="container">
            <h3>Select a category</h3>
            <ul class="categories">
                <li><router-link to="/today">Today</router-link></li>
                <li><router-link to="/work">Work</router-link></li>
                <li><router-link to="/hobby">Hobby</router-link></li>
            </ul>           
        </div>
    </div>
</template>

<style>
  
  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 15px;
  }

  .categories {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  .categories a {
    display: inline-block;
    text-decoration: none;
    font-size: 20px;
    color: black;
    margin-bottom: 20px;
  }

</style>
