<template>
    <header class="bg-white border-2 border-black border-b-4 rounded-lg flex flex-col justify-end p-6">
        <h1 class="flex flex-col">
            <span class="font-black lowercase text-3xl md:text-5xl">Blog</span>
            <span class="font-semibold text-sm lowercase">Posts about new products, product updates and what's next.</span>
        </h1>
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