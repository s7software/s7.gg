import { ViteSSG } from 'vite-ssg'
import './style.css'
import App from './App.vue'
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

export const createApp = ViteSSG(
    App,
    { routes },
    ({ app, router, head, isClient }) => {
        router.beforeEach((to) => {
            if (isClient) {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        });
    }
)
