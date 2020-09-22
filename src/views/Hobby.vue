<template>
    <div class="container">
        <h3>Category hobby</h3>
        <CreateTask
            :nameCategory="'hobby'"
        ></CreateTask>
    </div>
</template>
<script>
import CreateTask from '../components/CreateTask'
export default {
    components: {
        CreateTask
    }
}
</script>
<style>
  
  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 15px;
  }

</style>