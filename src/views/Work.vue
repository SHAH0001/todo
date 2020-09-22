<template>
    <div class="container">
        <h3>Category work</h3>
        <CreateTask
            :nameCategory="'work'"
        ></CreateTask>
        <TasksCategory
            :nameCategory="'work'"
        >
        </TasksCategory>
    </div>
</template>
<script>
import CreateTask from '../components/CreateTask'
import TasksCategory from '../components/TasksCategory'

export default {
    components: {
        CreateTask,
        TasksCategory
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
