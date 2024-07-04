<template>
    <div v-if="posts.length">
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-5">
            <RouterLink v-for="post in posts" :to="{ name: 'blog-post', params: { slug: post.slug }}" class="group space-y-2">
                <div class="h-min overflow-hidden rounded-md">
                    <img :src="post.hero || '/default.png'" alt="Hero" class="w-full h-48 object-cover group-hover:opacity-60 group-hover:scale-125 transition-all duration-500" />
                </div>
                <div class="font-semibold text-sm group-hover:text-primary duration-500 transition-all">{{ post.title }}</div>
            </RouterLink>
        </div>
        <div>
            <RouterLink :to="{name: 'blog'}" class="inline-flex my-5 text-zinc-400 hover:underline cursor-pointer text-sm" v-if="limit && postCount > limit">See all blog posts</RouterLink>
        </div>
    </div>
    <div v-else class="text-zinc-400">There are no blog posts to display.</div>
</template>

<script>
import posts from '@/static/blog.json';

export default {
    props: ['limit', 'ignore'],
    mounted() {
        if (this.limit) {
            this.postCount = posts.length;
            this.posts = posts.slice(0, this.limit);
        }

        if (this.ignore) {
            this.posts = posts.filter(post => post.slug !== this.ignore);
        }
    },
    data() {
        return {
            posts: posts,
            postCount: 0
        }
    }
}
</script>