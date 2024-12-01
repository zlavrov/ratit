<template>
    <nav class="navbar navbar-expand-md navbar-dark bg-dark mb-4">
        <div class="container-fluid">
            <a class="navbar-brand" href="/">RatIt</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarCollapse">
                <ul class="navbar-nav me-auto mb-2 mb-md-0">
                    <li class="nav-item">
                        <RouterLink v-if="token" class="nav-link active" aria-current="page" :to="{name: 'home'}">{{ $t('home') }}</RouterLink>
                    </li>
                    <li class="nav-item">
                        <RouterLink v-if="token" class="nav-link" :to="{name: 'about'}">{{ $t('about') }}</RouterLink>
                    </li>
                </ul>

                <div class="d-flex btn-group">
                    <button class="btn btn-outline-success" v-if="token" @click="logout" type="botton">{{  $t('log.out') }}</button>
                    <RouterLink v-if="!token" class="btn btn-outline-success" :to="{name: 'signin'}">{{  $t('log.in') }}</RouterLink>
                    <RouterLink v-if="!token" class="btn btn-outline-success" :to="{name: 'signup'}">{{  $t('log.up') }}</RouterLink>
                </div>

            </div>
        </div>
    </nav>
</template>

<script>
    import { RouterLink } from 'vue-router';

    export default {
        components: {
            RouterLink
        },
        data() {
            return {
                token: '',
            }
        },
        mounted() {
            this.getToken();
        },
        updated() {
            this.getToken();
        },
        methods: {
            getToken() {
                this.token = localStorage.getItem('token');
            },
            logout() {
                // console.log(localStorage.token);
                // axios.post(`${import.meta.env.VITE_BACK_API_URL}/api/token/invalidate`, {refreshToken: localStorage.getItem('refreshToken')}).then( res => {

                // // {refreshToken: localStorage.getItem('refreshToken')}

                // }).catch( e => {
                //     console.log(e.config);
                // });
                localStorage.removeItem('token');
                localStorage.removeItem('refreshToken');
                this.$router.push({name: 'signin'});
            }
        }
    }
</script>

<style scoped>

</style>