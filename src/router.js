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
            path: '/frontend-mentor-flags-project/',
            redirect: '/frontend-mentor-flags-project/home'
        },
        {
            path: '/frontend-mentor-flags-project/home',
            component: NationsList
        },
        {
            path: '/frontend-mentor-flags-project/home/:name',
            component: NationDetails,
            //the id (name of the nation in this case) of the signle item will be sent as a prop
            props: true
        },
        {
            //this will show a not-found page if the user enter an invalid path
            path: '/:notFound(.*)',
            component: NotFound
        }
    ]
});

export default router;