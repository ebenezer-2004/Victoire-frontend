import { createRouter, createWebHistory } from 'vue-router';

import Acceuil from "@/pages/Acceuil.vue";
import About from "@/pages/About.vue";
import Blog from "@/pages/Blog.vue";
import BlogDetail from "@/pages/BlogDetail.vue";
import Contact from "@/pages/Contact.vue";
import Departement from "@/pages/Departement.vue";


const routes = [
    {
        path: '/',
        name: 'Home',
        component: Acceuil,

    },
     {
        path: '/a-propos',
        name: 'a-propos',
        component: About,

    },
     {
        path: '/blog',
        name: 'blog',
        component: Blog,

    },
     {
        path: '/blog/:id',
        name: 'blog-detail',
        component: BlogDetail,
        props: true, 

    },
     {
        path: '/contact',
        name: 'contact',
        component: Contact,
    
    },
     {
        path: '/departement',
        name: 'departement',
        component: Departement,
    
    },


]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router