<template>
    <main>
        <h1>We chack {{ email }} access</h1>
    </main>
</template>

<script setup>
import { useRoute, useRouter } from 'vue-router';
import { ref, onMounted } from 'vue';
import axios from 'axios';
import {useToast} from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-sugar.css';

const route = useRoute();
const router = useRouter();

const $toast = useToast();

const token = route.query.token;
const email = route.query.email;

onMounted(() => {

  if (token && email) {

    axios.get(`/api/v1/signup_verify_email/${token}`).then( response => {

        $toast.success('You confirm you`r email!', {
            position: 'bottom-left',
            duration: 5000
        });
        router.push({name: 'signin'});
    }).catch( error => {
        console.log(error)
    });

  } else {
    
  }
});

console.log('Token:', token);
console.log('Email:', email);
</script>

<style scoped>

</style>
