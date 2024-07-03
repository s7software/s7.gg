<template>
    <div v-if="posts.length">
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-5">
            <RouterLink v-for="post in posts" :to="{ name: 'blog-post', params: { slug: post.slug }}" class="group">
                <div class="h-min overflow-hidden rounded-md">
                    <img :src="post.hero || '/default.png'" alt="Hero" class="w-full h-48 object-cover group-hover:scale-125 transition-all duration-500" />
                </div>
                <div class="py-2 font-semibold group-hover:text-blue-400 transition-all">{{ post.title }}</div>
            </RouterLink>
        </div>
        <div>
            <RouterLink :to="{name: 'blog'}" class="inline-flex my-5 text-zinc-400 hover:underline cursor-pointer" v-if="limit">Visit the blog</RouterLink>
        </div>
    </div>
    <div v-else class="text-zinc-400">There are no blog posts to display.</div>
</template>

<script>
import posts from '@/static/blog.json';

export default {
    props: ['limit'],
    mounted() {
        if (this.limit) {
            this.posts = posts.slice(0, this.limit);
        }
    },
    data() {
        return {
            posts: posts
        }
    }
}
</script>