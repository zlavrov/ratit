<template>
    <NavBar />
    <main class="container">
        <div class="bg-body-tertiary p-5 rounded">
            <h1>Navbar example</h1>
            <p class="lead">
                This example is a quick exercise to illustrate how the top-aligned navbar works. As you scroll, this navbar remains in its original position and moves with the rest of the page.
            </p>
        </div>
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