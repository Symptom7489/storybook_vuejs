import {createRouter, createWebHistory} from 'vue-router';
import TheCarousel from "@/pages/TheCarousel";
import NotFound from "@/pages/NotFound";
import BookList from "@/pages/BookList";
import RegistrationPage from "@/pages/RegistrationPage";
import LoginPage from "@/pages/LoginPage";


const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', redirect: '/books'},
        {path: '/books', component:  BookList },
        {path: '/books/:id', component: TheCarousel},
        {path: '/login', component: LoginPage},
        {path: '/register', component: RegistrationPage },
        {path: '/:notFound(.*)', component: NotFound }
    ],
});

export default router;