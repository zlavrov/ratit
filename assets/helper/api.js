import axios from "axios";
import router from "../router";
import {useToast} from 'vue-toast-notification';
import 'vue-toast-notification/dist/theme-sugar.css';
import { useI18n } from 'vue-i18n';

const api = axios.create();
const $toast = useToast();

api.interceptors.request.use(

    config => {

        console.log('request');

        if (localStorage.getItem('token')) {
            config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`,
            config.headers.Accept = 'application/json'
        }

        config.headers['Accept-Language'] = localStorage.getItem('lang');

        return config;
    },
    error => {

        console.log('Front error requrest');
        console.log(error);
        console.log('Front error requrest');
    }
)

// config => {

//     console.log('response');
//     // if (localStorage.getItem('token')) {

//     //     config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`,
//     //     config.headers.Accept = 'application/json'
//     // }

//     // return config;
// }
api.interceptors.response.use(
    {},
    error => {

        if (error.status === 401) {

            if (error.response.data.code === 401) {
                localStorage.removeItem('token');
                localStorage.removeItem('refreshToken');
                router.push({name: 'login'});
            }
        }

        if (error.status === 422) {

            if (error.response.status === 422) {

                const det = error.response.data.details;
                const mes = error.response.data.message;

                $toast.error(mes, {
                    position: 'bottom-left',
                    duration: 10000
                });

                for(let row in det) {
                    $toast.error(det[row].field + ' - ' + det[row].message, {
                        position: 'bottom-left',
                        duration: 10000
                    });
                }

                // localStorage.removeItem('token');
                // localStorage.removeItem('refreshToken');
                // router.push({name: 'login'});
            }
        }

        if (error.status === 400) {

            if (error.response.data.code === 400) {

                const mes = error.response.data.message;

                $toast.error(mes, {
                    position: 'bottom-left',
                    duration: 10000
                });


                // $toast.error(mes, {
                //     position: 'bottom-left',
                //     duration: 10000
                // });

                // for(let row in det) {
                //     $toast.error(det[row].field + ' - ' + det[row].message, {
                //         position: 'bottom-left',
                //         duration: 10000
                //     });
                // }

                // localStorage.removeItem('token');
                // localStorage.removeItem('refreshToken');
                // router.push({name: 'login'});
            }
        }

        // if (error.response.data.message == 'Expired JWT Token') {
        //     return axios.post(`${import.meta.env.VITE_BACK_API_URL}/api/token/refresh`, {
        //         refreshToken: localStorage.getItem('refreshToken')
        //     }).then(
        //         res => {

        //             localStorage.setItem('token', res.data.token);
        //             localStorage.setItem('refreshToken', res.data.refreshToken);

        //             error.config.headers.Authorization = `Bearer ${res.data.token}`;
        //             error.config.headers.Accept = 'application/json';

        //             return api.request(error.config);
        //         }
        //     )
        // }
        // console.log(error.response.data.message);
        // if (error.response.status == 401) {

        //     router.push({name: 'login'});
        // }
    }
);

export default api;