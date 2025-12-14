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

<script setup>
import { ref, onMounted, computed } from 'vue'
import { useHead } from '@unhead/vue'
import { useRoute, useRouter } from 'vue-router'
import posts from '@/static/blog.json';
import BlogPostCollection from '@/components/BlogPostCollection.vue';
import { Calendar, User } from 'lucide-vue-next';

const route = useRoute()
const router = useRouter()
const post = ref(null)

onMounted(() => {
    posts.find(p => {
        if (p.slug === route.params.slug) {
            post.value = p;
        }
    });

    if (!post.value) {
        router.push({ name: 'not-found' });
    }
})

const metaDescription = computed(() => {
    if (!post.value) return 'Read this blog post from S7';
    const contentPreview = post.value.content
        ? post.value.content.replace(/<[^>]*>/g, '').substring(0, 160)
        : post.value.title;
    return contentPreview.length > 160 ? contentPreview.substring(0, 157) + '...' : contentPreview;
})

const pageTitle = computed(() => post.value ? `${post.value.title} - Blog - S7` : 'Blog Post - S7')
const pageUrl = computed(() => `https://s7.gg/blog/${route.params.slug}`)

useHead(() => ({
    title: pageTitle.value,
    meta: [
        {
            name: 'description',
            content: metaDescription.value
        },
        {
            name: 'keywords',
            content: post.value ? `S7, blog, ${post.value.title}, ${post.value.author || ''}` : 'S7, blog'
        },
        {
            property: 'og:title',
            content: pageTitle.value
        },
        {
            property: 'og:description',
            content: metaDescription.value
        },
        {
            property: 'og:type',
            content: 'article'
        },
        {
            property: 'og:url',
            content: pageUrl.value
        },
        {
            property: 'og:image',
            content: post.value?.hero ? `https://s7.gg${post.value.hero}` : 'https://s7.gg/logo.png'
        },
        {
            property: 'article:published_time',
            content: post.value?.datePosted || ''
        },
        {
            property: 'article:author',
            content: post.value?.author || 'S7'
        },
        {
            name: 'twitter:card',
            content: 'summary_large_image'
        },
        {
            name: 'twitter:title',
            content: pageTitle.value
        },
        {
            name: 'twitter:description',
            content: metaDescription.value
        },
        {
            name: 'twitter:image',
            content: post.value?.hero ? `https://s7.gg${post.value.hero}` : 'https://s7.gg/logo.png'
        }
    ],
    link: [
        {
            rel: 'canonical',
            href: pageUrl.value
        }
    ]
}))
</script>