import { createRouter, createWebHistory } from "vue-router";

//import all the pages components
import NationDetails from './pages/NationDetails.vue';
import NationsList from './pages/NationsList.vue';
import NotFound from './pages/NotFound.vue';

const router = createRouter({
    history: createWebHistory(),
    //passing an array full of routes
    routes: [
        {
            //if the user will enter only the slash he will be redirect to the home page
            path: '/',
            redirect: '/home'
        },
        {
            path: '/home',
            component: NationsList
        },
        {
            path: '/home/:name',
            component: NationDetails,
            //the id (name of the nation in this case) of the signle item will be sent as a prop
            props: true
        },
        {
            //this will show a not-found page if the user enter an invalid path
            path: '/:notFound(.*)',
            component: NotFound
        }
    ],
    scrollBehavior(to, from, savedPosition) {
        console.log(to, from, savedPosition)
        // always scroll to top
        return { top: 0 }
    },
});

export default router;