<template>
    <div>
        <label class="label-name">Category name</label>
        <h3>{{task.name}}</h3>
        <label class="label-name">Category description</label>
        <p>{{task.description}}</p>
        <label class="label-name">Category status</label>
        <input @click="editStatus(task.id)" type="checkbox" v-model="task.status">
        <hr>
        <button @click="deleteTask(task.id)">Delete</button>
    </div>
</template>
<script>
export default {
    computed: {
        task() {
            return this.$store.getters.taskById(+this.$route.params.id)
        }
    },
    methods: {
        editStatus(id) {
            this.$store.dispatch('editStatus', {id})
        },
        async deleteTask(id) {
            const index = this.$store.state.tasks.findIndex(i => i.id === id)

            if (index !== -1) {
                this.$store.state.tasks.splice(index, 1)
            }

            await localStorage.setItem('tasks', JSON.stringify(this.$store.state.tasks))
            this.$router.go(-1)
        }
    },
}
</script>
<style>
    .label-name {
        font-size: 18px;
        font-weight: bold;
        color: green;
    }
</style>
