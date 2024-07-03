import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createWebHistory, createRouter } from 'vue-router'
import Home from './components/page/Home.vue'
import NotFound from './components/page/NotFound.vue'
import Blog from './components/page/Blog.vue'
import BlogPost from './components/page/BlogPost.vue'

const routes = [
    { path: '/', component: Home, name: 'home'},
    { path: '/blog', component: Blog, name: 'blog' },
    { path: '/blog/:slug', component: BlogPost, name: 'blog-post' },
    { path: "/:catchAll(.*)*", component: NotFound, name: 'not-found'}
]
const router = createRouter({
  history: createWebHistory(),
  routes,
})

createApp(App)
    .use(router)
    .mount('#app')
