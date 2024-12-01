<template>
    <NavBar />
    <main>
        <h1>This is Component name About</h1>
    </main>
</template>

<script>
    import NavBar from '../components/NavBar.vue';

    export default {
        components: {
            NavBar
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
