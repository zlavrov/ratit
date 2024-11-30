<template>
    <div class="d-flex align-items-center py-4 bg-body-tertiary">
        <RouterLink :to="{name: 'home'}">Home</RouterLink>
        <RouterLink :to="{name: 'about'}">About</RouterLink>
        <RouterLink :to="{name: 'signin'}">SignIn</RouterLink>
        <RouterLink :to="{name: 'signup'}">SignUp</RouterLink>
    </div>
    <RouterView />
</template>

<script>
    import { RouterView, RouterLink } from 'vue-router';

    export default {
        components: {
            RouterView, RouterLink
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
