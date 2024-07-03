<template>
    <header class="space-y-3 my-3">
        <h1 class="text-xl sm:text-3xl md:text-4xl font-semibold">Blog</h1>
        <p class="text-zinc-400">Posts about new products, product updates and what's next.</p>
    </header>
    <BlogPostCollection class="mt-6" />
</template>

<script>
import BlogPostCollection from '@/components/BlogPostCollection.vue';

export default {
    components: {
        BlogPostCollection
    }
}
</script>