import {createRouter, createWebHistory} from 'vue-router';
import TheCarousel from "@/pages/TheCarousel";
import NotFound from "@/pages/NotFound";
import BookList from "@/pages/BookList";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', redirect: '/books'},
        {path: '/books', component:  BookList },
        {path: '/books/:index', component: TheCarousel},
        {path: '/register', component: null },
        {path: '/:notFound(.*)', component: NotFound }
    ],
});

export default router;