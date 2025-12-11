<template>
    <header class="bg-white border-2 border-black border-b-4 rounded-lg h-60 flex flex-col justify-end p-6">
        <h1 class="flex flex-col">
            <span class="font-bold lowercase text-2xl">we're building</span>
            <span class="font-black text-5xl lg:text-7xl lowercase -mt-2 lg:-mt-4 ">powerful apps.</span>
        </h1>
    </header>

    <div class="grid md:grid-cols-2 gap-6">
        <RouterLink 
            :to="{name: 'product', params: {id: app.id}}" v-for="(app, i) in apps" :key="app.name" 
            class="bg-white min-h-52 border-2 border-black border-b-4 rounded-lg flex flex-col justify-between p-6 hover:-translate-y-1 transition duration-300"
            :class="{'md:col-span-2': i == apps.length - 1 && i % 2 == 0}"
        >
            <div class="flex items-start justify-between">
                <img :src="app.icon" class="size-14 border-2 border-black border-b-4 rounded-lg">
                <div class="flex items-center gap-1">
                    <div v-for="platform in app.platforms" :key="platform" class="bg-orange-100 py-1 px-2 rounded-lg text-xs font-black tracking-widest border-2 border-b-4 border-black lowercase">{{ platform }}</div>
                    <div v-if="app.comingSoon" class="bg-red-200 py-1 px-2 rounded-lg text-xs font-black tracking-widest border-2 border-b-4 border-black lowercase">WIP</div>
                </div>
            </div>
            <div>
                <div class="font-bold lowercase text-lg">{{ app.name }}</div>
                <div class="font-black text-3xl lowercase -mt-1">{{ app.shortDesc }}.</div>
            </div>
        </RouterLink>
    </div>

    <div class="bg-white border-2 border-black border-b-4 rounded-lg p-6 space-y-6">
        <div class="flex items-center justify-between">
            <div>
                <div class="font-black text-4xl lowercase">From The Blog</div>
                <p class="text-sm font-semibold max-w-xl lowercase">Posts about new products, product updates and what's next.</p>
            </div>
            <RouterLink :to="{name: 'blog'}" class="lowercase bg-orange-200 font-bold px-3 py-1 border-2 border-black border-b-4 rounded-lg hover:bg-orange-100 active:translate-y-0.5 active:border-b-2 transition-all duration-300">Read More</RouterLink>
        </div>

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
            apps: APPS.filter(app => app.enabled)
        }
    }
}
</script>