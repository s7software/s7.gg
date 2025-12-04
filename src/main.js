import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createWebHistory, createRouter } from 'vue-router'
import Home from './page/Home.vue'
import NotFound from './page/NotFound.vue'
import Blog from './page/Blog.vue'
import BlogPost from './page/BlogPost.vue'
import BudgetBearPP from './page/app/budgetbear/PrivacyPolicy.vue'
import Product from './page/Product.vue'

const routes = [
    { path: '/', component: Home, name: 'home', meta: {title: 'Home'}},
    { path: '/blog', component: Blog, name: 'blog', meta: {title: 'Blog'}},
    { path: '/blog/:slug', component: BlogPost, name: 'blog-post', meta: {title: 'View Post'}},
    { path: '/app/:id', component: Product, name: 'product', meta: {title: 'View Product'}},
    { path: '/app/budgetbear/privacy-policy', component: BudgetBearPP, name: 'app.budgetbear.privacy-policy', meta: {title: 'BudgetBear - Privacy Policy'}},
    { path: "/:catchAll(.*)*", component: NotFound, name: 'not-found'}
]
const router = createRouter({
    history: createWebHistory(),
    routes,
});
router.beforeEach((to) => {
    const { title } = to.meta;
    const defaultTitle = 'S7';
  
    document.title = `${title} - S7` || defaultTitle

    window.scrollTo({ top: 0, behavior: 'smooth' });
});

createApp(App)
    .use(router)
    .mount('#app')
