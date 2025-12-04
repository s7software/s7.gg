<template>
    <div v-if="posts.length">
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-5">
            <RouterLink v-for="post in posts" :to="{ name: 'blog-post', params: { slug: post.slug }}" class="group space-y-2 hover:-translate-y-1 transition duration-300">
                <div class="h-min overflow-hidden rounded-lg border-2 border-black border-b-4">
                    <img :src="post.hero || '/default.png'" alt="Hero" class="w-full h-60 object-cover" />
                </div>
                <div class="font-bold text-sm group-hover:text-primary duration-300 transition-all">{{ post.title }}</div>
            </RouterLink>
        </div>
    </div>
    <div v-else class="text-zinc-400">There are no blog posts to display.</div>
</template>

<script>
import posts from '@/static/blog.json';

export default {
    props: ['limit', 'ignore'],
    mounted() {
        let sortedPosts = [...posts].sort((a, b) => {
            return new Date(b.datePosted) - new Date(a.datePosted);
        });

        if (this.ignore) {
            sortedPosts = sortedPosts.filter(post => post.slug !== this.ignore);
        }

        if (this.limit) {
            this.postCount = sortedPosts.length;
            this.posts = sortedPosts.slice(0, this.limit);
        } else {
            this.posts = sortedPosts;
        }
    },
    data() {
        return {
            posts: [],
            postCount: 0
        }
    }
}
</script>