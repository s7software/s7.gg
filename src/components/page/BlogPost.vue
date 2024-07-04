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
        <div class="py-6 space-y-3 border-t border-gray-700">
            <h2 class="text-primary text-sm tracking-widest">Other blog posts that might interest you</h2>
            <div class="rounded-xl bg-gray-600 bg-opacity-20 p-4">
                <BlogPostCollection :limit="4" :ignore="post.slug" />
            </div>
        </div>
    </div>
</template>

<script>
import posts from '@/static/blog.json';
import BlogPostCollection from '@/components/BlogPostCollection.vue';

export default {
    components: {
        BlogPostCollection
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