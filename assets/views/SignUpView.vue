<template>
    <main class="form-signin w-100 m-auto">
        <form>
            <!-- <img class="mb-4" src="/docs/5.3/assets/brand/bootstrap-logo.svg" alt="" width="72" height="57"> -->
            <h1 class="h3 mb-3 fw-normal">Please sign up</h1>

            <div class="form-floating">
                <input type="email" v-model="profile.email" name="email" class="form-control" id="email" placeholder="name@example.com">
                <label for="email">Email address</label>
            </div>
            <div class="form-floating">
                <input type="password" v-model="profile.password" name="password" class="form-control" id="yourPassword" placeholder="apple36">
                <label for="yourPassword">Password</label>
            </div>

            <div class="form-floating">
                <input type="text" v-model="profile.firstName" name="firstName" class="form-control" id="firstName" placeholder="Apple">
                <label for="firstName">First Name</label>
            </div>
            <div class="form-floating">
                <input type="text" v-model="profile.lastName" name="lastName" class="form-control" id="lastName" placeholder="Pear">
                <label for="lastName">LastName</label>
            </div>

            <button @click="signup" class="btn btn-primary w-100 py-2" type="button">Sign up</button>
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
            profile: {
                firstName: '',
                lastName: '',
                email: '',
                password: ''
            }
        }
    },
    methods: {
        signup() {
            axios.post('/api/v1/signup', this.profile).then( response => {

                if (response.status === 201) {
                        this.$router.push({name: 'signin'});
                        this.$toast.success('Please Sign In', {
                            position: 'bottom-left',
                            duration: 3000
                        });
                    }

                    this.profile.email = '';
                    this.profile.password = '';
                    this.profile.firstName = '';
                    this.profile.lastName = '';

            }).catch( error => {

            });
        }
    }
}
</script>

<style scoped>

</style>