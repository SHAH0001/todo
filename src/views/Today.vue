<template>
    <div class="container">
        <h3>Create new task in category today</h3>
        <CreateTask
            :nameCategory="'today'"
        ></CreateTask>
        <hr>
        <TasksCategory
            :nameCategory="'today'"
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

  .task-link {
    text-decoration: none;
    color: #000;
    font-size: 30px;
    margin-right: 40px;
  }

</style>
