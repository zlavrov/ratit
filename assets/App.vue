<template>


    <RouterView />
</template>

<script>
    import { RouterView } from 'vue-router';

    export default {
        components: {
            RouterView
        },
        data() {
            return {
                status: 'App component is ready',
            }
        },
    }
</script>

<style>

</style>
