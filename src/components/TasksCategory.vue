<template>
    <div>
        <h3>Category {{nameCategory}}</h3>
        <div v-if="tasks.length">
          <div v-for="(item, id) in tasks" :key="item.id">
                <router-link 
                    class="task-link" 
                    :to="'/today/' + item.id"
                >
                    {{item.name}}
                </router-link>
                <input @click="editStatus(item.id, item.status)" type="checkbox" v-model="item.status">
          </div>
        </div>
        <div v-else>No tasks</div>
    </div>
</template>
<script>
export default {
    methods: {
        editStatus(id, status) {
            // console.log(id)
            // console.log(status)
            this.$store.dispatch('editStatus', {
                id: id,
                status: status
            })
        }
    },
    computed: {
        tasks() {
            return this.$store.getters.tasks.filter(item => item.category === this.nameCategory)
        }
    },
    props: {
        nameCategory: {
            type: String,
            required: true
        }
    }
}
</script>
<style>

</style>
