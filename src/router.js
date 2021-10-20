import { createRouter, createWebHistory } from "vue-router";
import App from './App.vue';

import LogIn from './components/Login'
import SignUp from './components/SingUp'

const routes = [{
    path: '/',
    name: 'root',
    component: App
},
{
    path: '/user/logIn',
    name: "logIn",
    component: LogIn
},
{
    path: '/user/signUp',
    name: "signUp",
    component: SignUp
}
];
    const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
