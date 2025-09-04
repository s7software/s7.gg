<template>
    <header class="py-10 space-y-3 text-center">
        <h1 class="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold">We're building powerful apps.</h1>
        <p class="text-primary text-sm sm:text-xl">Developing innovative solutions for modern needs.</p>
    </header>
    <div class="py-4 space-y-3">
        <h2 class="text-primary text-sm tracking-widest">Products</h2>

        <div v-for="app in apps" class="rounded-lg bg-zinc-700 p-4 bg-opacity-20 flex flex-col md:flex-row gap-4 items-start hover:bg-opacity-50 transition ease-in-out duration-500">
            <img :src="app.icon" class="h-16 md:h-20 rounded-lg flex-shrink-0">
            <div class="space-y-2">
                <h3 class="text-lg font-semibold">{{ app.name }}</h3>
                <p class="text-sm text-zinc-400 pb-2">{{ app.description }}</p>
                <div class="flex items-center gap-2">
                    <a v-if="app.web" :href="app.web" target="_blank" class="bg-blue-400 bg-opacity-15 hover:bg-opacity-50 transition ease-in-out cursor-pointer text-xs p-2 px-4 rounded-full tracking-wide text-zinc-300 flex items-center gap-2">
                        <Globe :size="16" /> Visit the Website
                    </a>
                    <a v-if="app.ios" :href="app.ios" target="_blank" class="bg-blue-400 bg-opacity-15 hover:bg-opacity-50 transition ease-in-out cursor-pointer text-xs p-2 px-4 rounded-full tracking-wide text-zinc-300 flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 -mt-0.5" viewBox="0 0 24 24"><path fill="currentColor" d="M14.94 5.19A4.38 4.38 0 0 0 16 2a4.44 4.44 0 0 0-3 1.52a4.17 4.17 0 0 0-1 3.09a3.69 3.69 0 0 0 2.94-1.42m2.52 7.44a4.51 4.51 0 0 1 2.16-3.81a4.66 4.66 0 0 0-3.66-2c-1.56-.16-3 .91-3.83.91s-2-.89-3.3-.87a4.92 4.92 0 0 0-4.14 2.53C2.93 12.45 4.24 17 6 19.47c.8 1.21 1.8 2.58 3.12 2.53s1.75-.82 3.28-.82s2 .82 3.3.79s2.22-1.24 3.06-2.45a11 11 0 0 0 1.38-2.85a4.41 4.41 0 0 1-2.68-4.04"/></svg>
                        Download for iOS
                    </a>
                    <a v-if="app.android" :href="app.android" target="_blank" class="bg-blue-400 bg-opacity-15 hover:bg-opacity-50 transition ease-in-out cursor-pointer text-xs p-2 px-4 rounded-full tracking-wide text-zinc-300 flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 -mt-0.5" viewBox="0 0 24 24"><path fill="currentColor" d="m14.975 3.019l.96-1.732a.193.193 0 0 0-.338-.187l-.97 1.75a6.541 6.541 0 0 0-5.253 0l-.97-1.75a.193.193 0 0 0-.34.187l.96 1.732a5.546 5.546 0 0 0-3.092 4.876h12.137a5.546 5.546 0 0 0-3.094-4.876M9.2 5.674a.507.507 0 1 1 .507-.506a.507.507 0 0 1-.507.506m5.602 0a.507.507 0 1 1 .507-.506a.507.507 0 0 1-.507.506M5.93 17.171A1.467 1.467 0 0 0 7.4 18.64h.973v3a1.36 1.36 0 1 0 2.721 0v-3h1.814v3a1.36 1.36 0 1 0 2.72 0v-3h.974a1.467 1.467 0 0 0 1.468-1.468V8.375H5.93Zm-1.867-9.03a1.362 1.362 0 0 0-1.36 1.361v5.669a1.36 1.36 0 1 0 2.72 0V9.502a1.362 1.362 0 0 0-1.36-1.36m15.872 0a1.362 1.362 0 0 0-1.36 1.361v5.669a1.36 1.36 0 1 0 2.72 0v-5.67a1.362 1.362 0 0 0-1.36-1.36"/></svg>
                        Download for Android
                    </a>
                    <span v-if="app.comingSoon" class="bg-zinc-600 bg-opacity-15 text-xs p-2 px-4 rounded-full tracking-wide text-zinc-300 flex items-center gap-2">Coming Soon</span>
                </div>
            </div>
        </div>
    </div>
    <div class="py-4 space-y-3">
        <h2 class="text-primary text-sm  tracking-widest">Latest from the blog</h2>
        <BlogPostCollection :limit="2" />
    </div>
</template>

<script>
import APPS from '@/static/apps.json';
import { Globe } from 'lucide-vue-next';
import BlogPostCollection from '@/components/BlogPostCollection.vue';

export default {
    components: {
        Globe,
        BlogPostCollection
    },
    data() {
        return {
            apps: APPS
        }
    }
}
</script>