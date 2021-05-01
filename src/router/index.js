import VueRouter from 'vue-router';
import SignIn from '../views/SignIn';
import Root from '@/views/app/Root';
import Personnel from '@/views/app/Personnel';
const routes = [
    {
        name: 'SignIn',
        path: '/sign-in',
        component: SignIn
    },
    {
        path: '/',
        component: Root,
        children: [
            {
                name: 'Personnel',
                path: 'personnel',
                component: Personnel,
            }
        ]
    }
];

export default new VueRouter({
    mode: 'history',
    routes
})