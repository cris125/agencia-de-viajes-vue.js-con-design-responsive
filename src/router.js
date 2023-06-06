import { createRouter, createWebHistory } from "vue-router";

import App from './App.vue';
import LogIn from './components/LogIn.vue'
import SignUp from './components/SignUp.vue'
import home from './components/home.vue'
import casa from './components/casa.vue'
import Account from './components/Account.vue'
import reserva from './components/reserva.vue'

import Aerolinea from './components/Aerolineas.vue'

const routes = [{
path: '/',
name: 'root',
component: App
},
{
    path: '/home',
    name: "home",
    component: home
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
},
{
    path: '/user/casa',
    name: "casa",
    component: casa
},
{
    path: '/user/account',
    name: "account",
    component: Account
},
{
    path: '/user/reserva',
    name: "reserva",
    component: reserva
},
{
    path: '/home/aerolinea',
    name: "aerolinea",
    component: Aerolinea
    },

];
const router = createRouter({
history: createWebHistory(),
routes,
});
export default router;