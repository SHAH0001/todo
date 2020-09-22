<template>
    <div>
        <h3>{{task.name}}</h3>
    </div>
</template>
<script>
export default {
    computed: {
        task() {
            // console.log(this.$route.params.id)
            return this.$store.getters.taskById(+this.$route.params.id)
        }
    }
}
</script>
<style>

</style>
