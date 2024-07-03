<template>
    <div v-if="post">
        <header class="space-y-3 my-3">
            <img v-if="post.hero" :src="post.hero" alt="Hero" class="w-full rounded-lg" />
            <div class="space-y-3 pt-6">
                <h1 class="text-xl sm:text-3xl md:text-4xl font-semibold">{{ post.title }}</h1>
                <p class="text-zinc-400">
                    Posted {{ post.datePosted }}<span v-if="post.author"> by {{ post.author }}</span>
                </p>
            </div>
        </header>
        <div class="markdown" v-html="post.content"></div>
    </div>
</template>

<script>
import posts from '@/static/blog.json';

export default {
    mounted() {
        posts.find(post => {
            if (post.slug === this.$route.params.slug) {
                this.post = post;
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