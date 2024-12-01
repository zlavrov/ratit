import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import AboutView from '../views/AboutView.vue';
import SignInView from '../views/SignInView.vue'
import SignUpView from '../views/SignUpView.vue'
import SignupVerifyEmail from '../views/SignupVerifyEmail.vue';

const router = createRouter({
    // history: createWebHistory(import.meta.env.BASE_URL),
    history: createWebHistory('/'),
    routes: [
        { path: '/', name: 'home', component: HomeView },
        { path: '/about', name: 'about', component: AboutView },
        { path: '/signin', name: 'signin', component: SignInView },
        {path: '/signup', name: 'signup', component: SignUpView },

        { path: '/signup_verify_email', name: 'signup-verify-email', component: SignupVerifyEmail },

        { path: '/:pathMatch(.*)*', name: 'not-found', component: HomeView },
        { path: '/:pathMatch(.*)', name: 'bad-not-found', component: HomeView },
    ]
});

router.beforeEach(function (to, from, next) { // to: route, from: route, next: NavigationGuardNext

    const token = localStorage.getItem('token');


    if (!token) {
        // if (to.name === 'signup_verify_email') {
        //     return next();
        // }
        if (to.name === 'signin' || to.name === 'signup' || to.name === 'signup-verify-email') {
            return next();
        } else {
            return next({name: 'signin'});
        }
    }



//     // if (to.name !== 'login' || to.name !== 'registration') {
//     //     if (!token) {
//     //         return next({name: 'login'});
//     //     }
//     // }



    if (to.name === 'signin' || to.name === 'signup' || to.name === 'signup_verify_email' && token) {
        // if (!token) {
            return next({name: 'home'});
        // }
    }

    next();
});

export default router;
