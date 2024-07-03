import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createWebHistory, createRouter } from 'vue-router'
import Home from './components/page/Home.vue'
import NotFound from './components/page/NotFound.vue'
import Blog from './components/page/Blog.vue'
import BlogPost from './components/page/BlogPost.vue'

const routes = [
    { path: '/', component: Home, name: 'home', meta: {title: 'Home'}},
    { path: '/blog', component: Blog, name: 'blog', meta: {title: 'Blog'}},
    { path: '/blog/:slug', component: BlogPost, name: 'blog-post', meta: {title: 'View Post'}},
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
  })

createApp(App)
    .use(router)
    .mount('#app')
