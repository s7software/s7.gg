<template>
    <div v-if="post" class="space-y-6">
        <header class="space-y-6">
            <img v-if="post.hero" :src="post.hero" alt="Hero" class="w-full rounded-lg border-2 border-black border-b-4" />
            <h1 class="text-xl sm:text-3xl md:text-5xl font-black">{{ post.title }}</h1>
            <div class="flex items-center gap-2">
                <div class="bg-orange-100 py-2 px-3 rounded-lg text-sm font-bold border-2 border-b-4 border-black lowercase flex items-center gap-2">
                    <Calendar class="size-4" />
                    <span>{{ post.datePosted }}</span>
                </div>
                <div v-if="post.author" class="bg-blue-100 py-2 px-3 rounded-lg text-sm font-bold border-2 border-b-4 border-black flex items-center gap-2">
                    <User class="size-4" />
                    <span>{{ post.author }}</span>
                </div>
            </div>
        </header>
        <div class="bg-white border-2 border-black border-b-4 rounded-lg px-6">
            <div class="markdown" v-html="post.content"></div>
        </div>
        <div class="bg-white border-2 border-black border-b-4 rounded-lg p-6 space-y-6">
            <div>
                <div class="font-black text-3xl lowercase">More posts</div>
            </div>
            <BlogPostCollection :limit="4" :ignore="post.slug" />
        </div>
    </div>
</template>

<script>
import posts from '@/static/blog.json';
import BlogPostCollection from '@/components/BlogPostCollection.vue';
import { Calendar, User } from 'lucide-vue-next';

export default {
    components: {
        BlogPostCollection,
        Calendar,
        User
    },
    mounted() {
        posts.find(post => {
            if (post.slug === this.$route.params.slug) {
                this.post = post;
                document.title = document.title.replace('View Post', post.title);
            }
        });

        if (!this.post) {
            this.$router.push({ name: 'not-found' }, '');
        }
    },
    data() {
        return {
            post: null
        }
    },
}
</script>