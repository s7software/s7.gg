<template>
    <nav class="py-6 px-2">
        <div class="rounded-xl bg-gray-600 bg-opacity-20 px-2 -m-2 flex items-center justify-between">
            <div class="flex">
                <RouterLink :to="{name: 'home'}"><img src="https://i.ibb.co/MR5y8K0/S7-Sevens-light.png" class="h-10 my-2"></RouterLink>
                <div class="p-2 flex gap-2">
                    <div v-if="!isHome()" @click="goBack" to="/" class="flex items-center justify-center bg-gray-700 bg-opacity-50 hover:bg-opacity-100 cursor-pointer transition ease-in-out p-2.5 px-4 rounded-lg text-xs tracking-wide">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4"><path d="m12 19-7-7 7-7"/><path d="M19 12H5"/></svg>
                    </div>
                </div>
            </div>
            <div class="flex gap-2">
                <RouterLink :to="{name: 'blog'}" class="flex items-center justify-center gap-2 bg-gray-700 bg-opacity-50 hover:bg-opacity-100 cursor-pointer transition ease-in-out p-2.5 px-4 rounded-lg text-xs tracking-wide">
                    <Rss size="16" />
                    Blog
                </RouterLink>
                <a href="https://github.com/s7software" target="_blank" class="flex items-center justify-center gap-2 bg-gray-700 bg-opacity-50 hover:bg-opacity-100 cursor-pointer transition ease-in-out p-2.5 px-4 rounded-lg text-xs tracking-wide">
                    <Github :size="16" />
                </a>
                <a href="https://x.com/joshbarkeruk" target="_blank" class="flex items-center justify-center gap-2 bg-gray-700 bg-opacity-50 hover:bg-opacity-100 cursor-pointer transition ease-in-out p-2.5 px-4 rounded-lg text-xs tracking-wide">
                    <Twitter :size="16" />
                </a>
                <a href="mailto:contact@joshbarker.co.uk" class="flex items-center justify-center gap-2 bg-gray-700 bg-opacity-50 hover:bg-opacity-100 cursor-pointer transition ease-in-out p-2.5 px-4 rounded-lg text-xs tracking-wide">
                    <Mail :size="16" />
                </a>
            </div>
        </div>
    </nav>
</template>

<script>
import { Github, Twitter, Mail, Rss } from 'lucide-vue-next';
export default {
    components: {
        Github,
        Twitter,
        Mail,
        Rss
    },
    methods: {
        isHome() {
            return this.$route.name === 'home';
        },
        goBack() {
            this.$router.go(-1);
        }
    }
}
</script>