import VueRouter from 'vue-router';
import SignIn from '../views/SignIn';

const routes = [
    {
        name: 'SignIn',
        path: '/sign-in',
        component: SignIn
    }
];

export default new VueRouter({
    mode: 'history',
    routes
})