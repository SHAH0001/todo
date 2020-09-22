<template>
    <div>
        <form action="#" @submit.prevent="createTask">
            <div class="form-block">
                <div class="form-group">
                    <label for="name">Name task</label>
                    <input v-model="name" type="text" id="name">
                </div>
                <div class="form-group">
                    <label for="description">Description task</label>
                    <textarea v-model="description" class="form-group-textarea" id="description" cols="30" rows="10"></textarea>
                </div>
                <div class="form-group">
                    <label for="status">Status task</label>
                    <input v-model="status" type="checkbox" id="status">
                </div>
                <button class="create-button" type="submit">Create task</button>
            </div>
        </form>
    </div>
</template>
<script>
export default {
    data() {
        return {
            name: '',
            description: '',
            status: false,
        }
    },
    methods: {
        createTask() {
            // console.log(this.nameCategory)
            const task = {
                id: Date.now(),
                name: this.name,
                description: this.description,
                category: this.nameCategory,
                status: this.status
            }
            this.$store.dispatch('createTask', task)
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

    .form-block {
        margin-top: 20px;
        width: 20%;
    }

    .form-group {
        display: flex;
        flex-direction: column;
        margin-bottom: 20px;
    }

    .form-group input {
        outline: none;
    }

    .form-group-textarea {
        resize: none;    
        outline: none;
    }

    .create-button {
        display: block;
        width: 100%;
        padding: 10px;
        cursor: pointer;
    }

</style>
