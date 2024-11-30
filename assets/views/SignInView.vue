<template>
    <main class="form-signin w-100 m-auto">
        <form>
            <!-- <img class="mb-4" src="/docs/5.3/assets/brand/bootstrap-logo.svg" alt="" width="72" height="57"> -->
            <h1 class="h3 mb-3 fw-normal">Please sign in</h1>

            <div class="form-floating">
                <input type="email" v-model="credentials.email" name="email" class="form-control" id="email" placeholder="name@example.com">
                <label for="email">Email address</label>
            </div>
            <div class="form-floating">
                <input type="password" v-model="credentials.password" name="password" class="form-control" id="yourPassword" placeholder="Password">
                <label for="yourPassword">Password</label>
            </div>

            <button @click="signin" class="btn btn-primary w-100 py-2" type="button">Sign in</button>
            <p class="mt-5 mb-3 text-body-secondary">© 2017–2024</p>
        </form>
    </main>
</template>

<script>
import axios from 'axios';
import api from '../helper/api';
export default {
    data() {
        return {
            credentials: {
                email: '',
                password: ''
            }
        }
    },
    methods: {
        signin() {
            api.post(
                '/api/v1/signin',
                this.credentials
            ).then( response => {
                if (response.status === 200) {
                        localStorage.setItem('token', response.data.token);
                        localStorage.setItem('refreshToken', response.data.refreshToken);
                        this.$router.push({name: 'home'});
                        this.$toast.success('Welcome to home', {
                            position: 'bottom-left',
                            duration: 10000
                        });
                    }

                    this.credentials.email = '';
                    this.credentials.password = '';
            }).catch( error => {
                // console.log(error);
            });
            // console.log(this.profile.sex);
        }
    }
}
</script>

<style scoped>

</style>