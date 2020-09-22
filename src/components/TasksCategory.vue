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
                <input @click="editStatus(item.id)" type="checkbox" v-model="item.status">
          </div>
        </div>
        <div v-else>No tasks</div>
    </div>
</template>
<script>
export default {
    methods: {
        editStatus(id) {
            this.$store.dispatch('editStatus', {id})
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
    .task-link {
        text-decoration: none;
        color: #000;
        font-size: 30px;
        margin-right: 40px;
    }
</style>
